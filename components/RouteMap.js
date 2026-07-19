"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { geoOrthographic, geoPath, geoDistance, geoInterpolate } from "d3-geo";
import { LAND_RINGS, HUB, DESTINATIONS } from "./globeData";

// A round, rotating globe — like the logo's circular globe badge — instead
// of a flat map. Real geography (see globeData.js) is re-projected live
// every frame as the globe spins, so every destination's pin and its red
// route arrow only appear once that part of the world has rotated into view.

const SIZE = 480;
const CENTER = SIZE / 2;
const GLOBE_RADIUS = SIZE / 2 - 54; // leaves room for labels near the horizon
const TILT = -21; // fixed pitch — a pleasant "looking slightly down" angle
const DEGREES_PER_SECOND = 5;

const LAND_GEOMETRY = { type: "MultiPolygon", coordinates: LAND_RINGS };

function isVisible(coord, rotation) {
  const center = [-rotation[0], -rotation[1]];
  return geoDistance(coord, center) < Math.PI / 2 - 0.04;
}

// Builds an SVG path for the visible portion(s) of the great-circle arc
// between two points, so an arc naturally fades over the horizon instead of
// being drawn straight through the globe.
function greatCircleArcPath(projection, rotation, from, to) {
  const interpolate = geoInterpolate(from, to);
  const steps = 48;
  let d = "";
  let drawing = false;
  for (let i = 0; i <= steps; i++) {
    const point = interpolate(i / steps);
    if (!isVisible(point, rotation)) {
      drawing = false;
      continue;
    }
    const [x, y] = projection(point);
    d += drawing ? ` L ${x.toFixed(1)} ${y.toFixed(1)}` : `M ${x.toFixed(1)} ${y.toFixed(1)}`;
    drawing = true;
  }
  return d;
}

export default function RouteMap({ className = "" }) {
  const [rotationLambda, setRotationLambda] = useState(-HUB.coord[0]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const accRef = useRef(0);

  // Respect the person's reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // Pause the animation while the globe is scrolled off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting), {
      threshold: 0.1,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Rotation loop — throttled to ~24fps so re-projecting the whole map each
  // tick stays cheap, while requestAnimationFrame keeps the timing smooth.
  useEffect(() => {
    if (reducedMotion || paused) return;
    function tick(ts) {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;
      accRef.current += dt;
      if (accRef.current >= 40) {
        const deg = (DEGREES_PER_SECOND * accRef.current) / 1000;
        accRef.current = 0;
        setRotationLambda((prev) => {
          let next = prev - deg;
          if (next < -360) next += 360;
          return next;
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [reducedMotion, paused]);

  const rotation = [rotationLambda, TILT, 0];

  const projection = useMemo(
    () =>
      geoOrthographic()
        .rotate(rotation)
        .translate([CENTER, CENTER])
        .scale(GLOBE_RADIUS)
        .clipAngle(90),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rotationLambda]
  );

  const path = useMemo(() => geoPath(projection), [projection]);
  const landPath = useMemo(() => path(LAND_GEOMETRY) || "", [path]);
  const spherePath = useMemo(() => path({ type: "Sphere" }) || "", [path]);

  const hubVisible = isVisible(HUB.coord, rotation);
  const hubXY = projection(HUB.coord);

  return (
    <div ref={containerRef}>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className={className}
        role="img"
        aria-label="Rotating globe showing Benchmark Global Healthcare Academy candidates training in India and moving on to licensed roles in the UK, USA, Canada, the Gulf region and Australia"
      >
        <defs>
          <radialGradient id="globeShade" cx="34%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#eaf4fc" />
            <stop offset="100%" stopColor="#cfe3f3" />
          </radialGradient>
          <linearGradient id="hubBadge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2e76b0" />
            <stop offset="100%" stopColor="#153658" />
          </linearGradient>
          <marker
            id="arrowHead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#c81e1e" />
          </marker>
        </defs>

        {/* decorative outer ring, echoing the logo's ringed badge */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={GLOBE_RADIUS + 10}
          fill="none"
          stroke="#82be4c"
          strokeWidth="2"
          strokeDasharray="3 7"
          opacity="0.7"
        />

        {/* the globe */}
        <path d={spherePath} fill="url(#globeShade)" stroke="#21558a" strokeOpacity="0.3" strokeWidth="1.5" />
        <path d={landPath} fill="#a8db8f" stroke="#5f9f36" strokeWidth="0.6" />

        {/* red route arrows from India to each destination, only where visible */}
        {DESTINATIONS.map((d) => {
          const arcD = greatCircleArcPath(projection, rotation, HUB.coord, d.coord);
          if (!arcD) return null;
          return (
            <path
              key={`arc-${d.key}`}
              d={arcD}
              fill="none"
              stroke="#c81e1e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="1 5"
              markerEnd="url(#arrowHead)"
              opacity="0.9"
            />
          );
        })}

        {/* destination pins — fade in as the globe rotates them into view */}
        {DESTINATIONS.map((d) => {
          if (!isVisible(d.coord, rotation)) return null;
          const [x, y] = projection(d.coord);
          return (
            <g key={d.key}>
              <circle cx={x} cy={y} r="5" fill="#f7fafc" stroke="#164a09" strokeWidth="2" />
              <text
                x={x}
                y={y - 11}
                textAnchor="middle"
                className="font-sans"
                fontSize="13"
                fontWeight="700"
                fill="#0f1c28"
                style={{ paintOrder: "stroke", stroke: "#f7fafc", strokeWidth: 3 }}
              >
                {d.label}
              </text>
              <text
                x={x}
                y={y + 17}
                textAnchor="middle"
                className="font-mono"
                fontSize="9"
                fill="#21558a"
                style={{ paintOrder: "stroke", stroke: "#f7fafc", strokeWidth: 3 }}
              >
                {d.sub}
              </text>
            </g>
          );
        })}

        {/* India hub */}
        {hubVisible && (
          <g>
            <circle cx={hubXY[0]} cy={hubXY[1]} r="12" fill="url(#hubBadge)" stroke="#f7fafc" strokeWidth="2.5" />
            <circle cx={hubXY[0]} cy={hubXY[1]} r="3.2" fill="#f7fafc" />
            <text
              x={hubXY[0]}
              y={hubXY[1] - 17}
              textAnchor="middle"
              className="font-display"
              fontSize="13"
              fontWeight="700"
              fill="#0f1c28"
              style={{ paintOrder: "stroke", stroke: "#f7fafc", strokeWidth: 3 }}
            >
              India
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}