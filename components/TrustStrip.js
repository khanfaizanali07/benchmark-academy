const ITEMS = [
  "DHA — Dubai",
  "DOH / HAAD — Abu Dhabi",
  "MOH — UAE",
  "SCFHS — Saudi Arabia",
  "DHP / QCHP — Qatar",
  "OMSB — Oman",
  "MOH — Kuwait",
  "PLAB — UK",
  "USMLE — USA",
  "NCLEX-RN — USA & Canada",
  "ADC — Australia",
];

export default function TrustStrip() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <section className="border-y border-navy-100 bg-navy-800 py-4">
      <div className="mb-1 text-center">
        <span className="eyebrow text-[11px] font-bold uppercase text-navy-200">
          Licensing authorities we train candidates for
        </span>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-10 py-2">
          {track.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap font-mono text-sm font-medium text-navy-100/90"
            >
              {item}
              <span className="ml-10 text-forest-400">&#9670;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
