const NODES = [
  { label: "UK", sub: "PLAB", x: 300, y: 75 },
  { label: "USA", sub: "USMLE · NCLEX", x: 459.1, y: 140.9 },
  { label: "Canada", sub: "NCLEX · PCE", x: 525, y: 300 },
  { label: "UAE", sub: "DHA · HAAD · MOH", x: 459.1, y: 459.1 },
  { label: "Saudi Arabia", sub: "SCFHS", x: 300, y: 525 },
  { label: "Qatar", sub: "QCHP", x: 140.9, y: 459.1 },
  { label: "Oman", sub: "OMSB", x: 75, y: 300 },
  { label: "Australia", sub: "ADC", x: 140.9, y: 140.9 },
];

export default function RouteMap({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label="Map of destination countries Benchmark Global Healthcare Academy trains candidates for: UK, USA, Canada, UAE, Saudi Arabia, Qatar, Oman and Australia"
    >
      <defs>
        <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a7d8f6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#a7d8f6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="centerBadge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2e76b0" />
          <stop offset="100%" stopColor="#1a4471" />
        </linearGradient>
      </defs>

      <circle cx="300" cy="300" r="290" fill="url(#orbitGlow)" />

      {/* orbit rings */}
      <circle cx="300" cy="300" r="225" fill="none" stroke="#21558a" strokeOpacity="0.14" strokeWidth="1.5" />
      <circle cx="300" cy="300" r="150" fill="none" stroke="#21558a" strokeOpacity="0.1" strokeWidth="1.5" />

      {/* route lines */}
      {NODES.map((n) => (
        <line
          key={`line-${n.label}`}
          x1="300"
          y1="300"
          x2={n.x}
          y2={n.y}
          stroke="#3f7d21"
          strokeWidth="1.75"
          strokeLinecap="round"
          className="route-path"
          opacity="0.55"
        />
      ))}

      {/* destination nodes */}
      {NODES.map((n) => {
        const labelAbove = n.y < 300;
        const dx = n.x === 300 ? 0 : n.x < 300 ? -1 : 1;
        return (
          <g key={n.label} className="animate-float-slow">
            <circle cx={n.x} cy={n.y} r="9" fill="#f7fafc" stroke="#164a09" strokeWidth="2.5" />
            <circle cx={n.x} cy={n.y} r="3" fill="#164a09" />
            <text
              x={n.x + dx * 4}
              y={labelAbove ? n.y - 18 : n.y + 26}
              textAnchor={dx === 0 ? "middle" : dx > 0 ? "start" : "end"}
              className="font-sans"
              fontSize="15"
              fontWeight="700"
              fill="#0f1c28"
            >
              {n.label}
            </text>
            <text
              x={n.x + dx * 4}
              y={labelAbove ? n.y - 4 : n.y + 41}
              textAnchor={dx === 0 ? "middle" : dx > 0 ? "start" : "end"}
              className="font-mono"
              fontSize="10.5"
              fill="#21558a"
            >
              {n.sub}
            </text>
          </g>
        );
      })}

      {/* center badge */}
      <circle cx="300" cy="300" r="58" fill="url(#centerBadge)" />
      <circle cx="300" cy="300" r="58" fill="none" stroke="#f7fafc" strokeWidth="4" />
      <circle cx="300" cy="300" r="66" fill="none" stroke="#82be4c" strokeWidth="2" strokeDasharray="3 6" />
      <text x="300" y="294" textAnchor="middle" className="font-display" fontSize="15" fontWeight="700" fill="#f7fafc">
        YOU
      </text>
      <text x="300" y="313" textAnchor="middle" className="font-mono" fontSize="9" fill="#a7d8f6" letterSpacing="1">
        START HERE
      </text>
    </svg>
  );
}
