import { Check, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const COURSES = [
  {
    track: "Nurse",
    name: "Regular Course",
    classes: "30 classes",
    mode: "Online (Live & Recorded)",
    fee: "18,000",
    featured: false,
  },
  {
    track: "Nurse",
    name: "Crash Course",
    classes: "15 classes",
    mode: "Online (Live & Recorded)",
    fee: "10,000",
    featured: false,
  },
  {
    track: "Pharmacist",
    name: "Regular Course",
    classes: "30 classes",
    mode: "Online (Live)",
    fee: "17,700",
    featured: true,
  },
];

const OTHER_SERVICES = [
  "English language training",
  "Professional resume making",
  "Medical council registration",
  "BLS & ACLS training",
];

export default function CourseFees() {
  return (
    <section id="fees" className="bg-navy-50/50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="GCC Exam Training"
          title="Course batches & fees"
          description="Every batch includes online exams and full study materials. Fees shown in INR (₹)."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <div
              key={`${c.track}-${c.name}`}
              className={`relative flex flex-col rounded-2xl border p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                c.featured
                  ? "border-forest-700 bg-forest-800 text-paper"
                  : "border-navy-100 bg-white"
              }`}
            >
              {c.featured && (
                <span className="absolute -top-3 right-6 flex items-center gap-1 rounded-full bg-forest-500 px-3 py-1 text-[11px] font-bold uppercase text-white">
                  <Sparkles className="h-3 w-3" /> Popular
                </span>
              )}
              <span
                className={`eyebrow text-xs font-bold uppercase ${
                  c.featured ? "text-forest-300" : "text-navy-600"
                }`}
              >
                {c.track}
              </span>
              <h3
                className={`mt-2 font-display text-2xl font-semibold ${
                  c.featured ? "text-paper" : "text-ink"
                }`}
              >
                {c.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-mono text-3xl font-semibold">₹{c.fee}</span>
                <span
                  className={`text-sm ${c.featured ? "text-navy-100/70" : "text-ink/50"}`}
                >
                  / course
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-2.5">
                  <Check
                    className={`h-4 w-4 shrink-0 ${
                      c.featured ? "text-forest-300" : "text-forest-600"
                    }`}
                  />
                  {c.classes}
                </li>
                <li className="flex items-center gap-2.5">
                  <Check
                    className={`h-4 w-4 shrink-0 ${
                      c.featured ? "text-forest-300" : "text-forest-600"
                    }`}
                  />
                  {c.mode}
                </li>
                <li className="flex items-center gap-2.5">
                  <Check
                    className={`h-4 w-4 shrink-0 ${
                      c.featured ? "text-forest-300" : "text-forest-600"
                    }`}
                  />
                  Online exams &amp; study materials included
                </li>
              </ul>

              <a href="#contact" className="mt-8">
                <button
                  className={`w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                    c.featured
                      ? "bg-paper text-forest-800 hover:bg-navy-50"
                      : "bg-navy-800 text-paper hover:bg-navy-700"
                  }`}
                >
                  Enquire about this batch
                </button>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 rounded-3xl border border-navy-100 bg-white p-8 shadow-card lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Also offering: Finishing School &amp; career-readiness services
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/65">
              A 3-week intensive Finishing School programme (age group 13–22)
              covering clinical communication, interview preparation and
              workplace readiness — alongside {OTHER_SERVICES.join(", ").toLowerCase()}.
            </p>
          </div>
          <a href="#contact" className="justify-self-start lg:justify-self-end">
            <button className="whitespace-nowrap rounded-lg border-2 border-forest-700 px-6 py-2.5 text-sm font-semibold text-forest-800 transition-colors hover:bg-forest-700 hover:text-white">
              Ask about Finishing School
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
