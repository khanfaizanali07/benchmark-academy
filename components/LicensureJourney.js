import { ClipboardCheck, FileSearch, PencilLine, BadgeCheck, PlaneTakeoff } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Eligibility Check",
    copy: "We verify your qualification and experience against each authority's Professional Qualification Requirements.",
  },
  {
    icon: FileSearch,
    title: "DataFlow Verification",
    copy: "Primary Source Verification of your degree, licence, experience and good-standing certificates — usually 25–45 days.",
  },
  {
    icon: PencilLine,
    title: "Prometric / Pearson VUE Exam",
    copy: "Structured coaching for the computer-based licensing exam, booked through Prometric or Pearson VUE / OMSB.",
  },
  {
    icon: BadgeCheck,
    title: "License Registration",
    copy: "Your eligibility letter is issued, ready to be submitted with a confirmed job offer.",
  },
  {
    icon: PlaneTakeoff,
    title: "Job Search & Visa",
    copy: "We support your job search and the employer activates your professional license before you fly out.",
  },
];

export default function LicensureJourney() {
  return (
    <section id="journey" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="How It Works"
          title="The licensure journey, step by step"
          description="Every route to a Gulf, UK, US, Canadian or Australian license follows the same backbone. We manage each stage with you, from first document to first day on the job."
        />

        <div className="timeline-scroll mt-16 -mx-6 overflow-x-auto px-6 pb-4 lg:mx-0 lg:overflow-visible lg:px-0">
          <ol className="relative flex min-w-[880px] gap-4 lg:min-w-0 lg:gap-6">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-navy-700 lg:block" />
            {STEPS.map(({ icon: Icon, title, copy }, i) => (
              <li key={title} className="relative flex-1">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-forest-400 bg-navy-800 text-forest-300">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="absolute -top-1 left-11 font-mono text-[11px] text-navy-400">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-paper">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-100/70">{copy}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy-700 bg-navy-800/60 p-5">
            <p className="font-mono text-2xl font-semibold text-forest-300">25–45 days</p>
            <p className="mt-1 text-sm text-navy-100/70">Typical DataFlow processing time</p>
          </div>
          <div className="rounded-2xl border border-navy-700 bg-navy-800/60 p-5">
            <p className="font-mono text-2xl font-semibold text-forest-300">1–3 weeks</p>
            <p className="mt-1 text-sm text-navy-100/70">Eligibility approval after DataFlow</p>
          </div>
          <div className="rounded-2xl border border-navy-700 bg-navy-800/60 p-5">
            <p className="font-mono text-2xl font-semibold text-forest-300">1–4 weeks</p>
            <p className="mt-1 text-sm text-navy-100/70">Exam booking window</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
