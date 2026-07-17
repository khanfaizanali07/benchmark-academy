import { WORLD_VIEWBOX, LAND_PATH } from "./worldMapData";

// Destination pins — positions are real, projected geographic coordinates
// (Natural Earth projection, generated from public-domain world-atlas data),
// not evenly spaced placeholders. UAE/Saudi/Qatar/Oman sit close together on
// a true map, so they're grouped into one "Gulf" pin the way the academy's
// own course list groups them (Prometric — Saudi, Qatar, Oman, Bahrain, Kuwait).
const HUB = { x: 581, y: 218 };

const DESTINATIONS = [
  { key: "uk", label: "UK", sub: "PLAB", x: 410, y: 144, labelPos: "top" },
  { key: "canada", label: "Canada", sub: "NCLEX · PCE", x: 232, y: 127, labelPos: "top" },
  { key: "usa", label: "USA", sub: "USMLE · NCLEX", x: 208, y: 176, labelPos: "bottom" },
  { key: "gulf", label: "Gulf Region", sub: "DHA · HAAD · MOH · SCFHS", x: 520, y: 217, labelPos: "left" },
  { key: "australia", label: "Australia", sub: "ADC", x: 698, y: 342, labelPos: "bottom" },
];

// Quadratic bezier control point offset perpendicular to the hub->dest line,
// bulged "upward" so the routes read like flight paths on an airline map.
function arcPath(x1, y1, x2, y2) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const lift = Math.min(dist * 0.28, 90);
  return `M ${x1} ${y1} Q ${mx} ${my - lift} ${x2} ${y2}`;
}

function labelAnchor(pos) {
  switch (pos) {
    case "top":
      return { dx: 0, dy: -14, anchor: "middle", subDy: -1 };
    case "bottom":
      return { dx: 0, dy: 24, anchor: "middle", subDy: 15 };
    case "left":
      return { dx: -12, dy: 4, anchor: "end", subDy: 15 };
    default:
      return { dx: 12, dy: 4, anchor: "start", subDy: 15 };
  }
}

export default function WorldMap({ className = "" }) {
  return (
    <svg
      viewBox={WORLD_VIEWBOX}
      className={className}
      role="img"
      aria-label="Map showing Benchmark Global Healthcare Academy candidates training in India and moving on to licensed roles in the UK, USA, Canada, the Gulf region and Australia"
    >
      <defs>
        <radialGradient id="oceanGlow" cx="34%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#dcecf8" />
          <stop offset="100%" stopColor="#eaf4fc" />
        </radialGradient>
        <linearGradient id="hubBadge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2e76b0" />
          <stop offset="100%" stopColor="#153658" />
        </linearGradient>
        <clipPath id="mapClip">
          <rect x="0" y="0" width="820" height="480" rx="24" />
        </clipPath>
      </defs>

      <g clipPath="url(#mapClip)">
        <rect x="0" y="0" width="820" height="480" fill="url(#oceanGlow)" />

        {/* faint graticule for a "globe" texture */}
        {[80, 160, 240, 320, 400].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="820" y2={y} stroke="#21558a" strokeOpacity="0.05" />
        ))}
        {[120, 260, 400, 540, 680].map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="480" stroke="#21558a" strokeOpacity="0.05" />
        ))}

        <path d={LAND_PATH} fill="#a8db8f" stroke="#5f9f36" strokeWidth="0.6" />

        {/* flight paths from the India hub to each destination */}
        {DESTINATIONS.map((d) => (
          <path
            key={`arc-${d.key}`}
            d={arcPath(HUB.x, HUB.y, d.x, d.y)}
            fill="none"
            stroke="#164a09"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="route-path"
            opacity="0.6"
          />
        ))}

        {/* destination pins */}
        {DESTINATIONS.map((d) => {
          const { dx, dy, anchor, subDy } = labelAnchor(d.labelPos);
          return (
            <g key={d.key} className="animate-float-slow">
              <circle cx={d.x} cy={d.y} r="7.5" fill="#f7fafc" stroke="#164a09" strokeWidth="2.5" />
              <circle cx={d.x} cy={d.y} r="2.5" fill="#164a09" />
              <text
                x={d.x + dx}
                y={d.y + dy}
                textAnchor={anchor}
                className="font-sans"
                fontSize="18"
                fontWeight="700"
                fill="#0f1c28"
              >
                {d.label}
              </text>
              <text
                x={d.x + dx}
                y={d.y + dy + subDy}
                textAnchor={anchor}
                className="font-mono"
                fontSize="14"
                fill="#21558a"
              >
                {d.sub}
              </text>
            </g>
          );
        })}

        <defs>
  <clipPath id="hubClip">
    <circle cx={HUB.x} cy={HUB.y} r="43" />
  </clipPath>
</defs>

<image
  href="/nurse2.jpg"
  x={HUB.x - 43}
  y={HUB.y - 43}
  width={86}
  height={86}
  clipPath="url(#hubClip)"
  preserveAspectRatio="xMidYMid slice"
/>

<circle
  cx={HUB.x}
  cy={HUB.y}
  r={43}
  fill="none"
  stroke="#f7fafc"
  strokeWidth="4"
/>

        <text
          x={HUB.x}
          y={HUB.y + 68}
          textAnchor="middle"
          className="font-display"
          fontSize="18"
          fontWeight="700"
          fill="#0f1c28"
        >
          India
        </text>
        <text
          x={HUB.x}
          y={HUB.y + 84}
          textAnchor="middle"
          className="font-mono"
          fontSize="12"
          fill="#21558a"
          letterSpacing="0.5"
        >
          YOUR JOURNEY STARTS HERE
        </text>
      </g>
    </svg>
  );
}
