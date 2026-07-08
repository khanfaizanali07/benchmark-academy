export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`eyebrow inline-block text-xs font-bold uppercase ${
            light ? "text-forest-300" : "text-forest-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-navy-100/80" : "text-ink/65"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
