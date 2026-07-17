import { Stethoscope, Pill, Syringe, HeartPulse, Activity, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROGRAMS = [
  {
    icon: Stethoscope,
    code: "PLAB",
    country: "United Kingdom",
    name: "Professional and Linguistic Assessments Board",
  },
  {
    icon: Activity,
    code: "USMLE",
    country: "United States",
    name: "United States Medical Licensing Examination",
  },
  {
    icon: HeartPulse,
    code: "ADC",
    country: "Australia",
    name: "Australian Dental Council Exam",
  },
  {
    icon: Syringe,
    code: "DHA · HAAD · MOH",
    country: "United Arab Emirates",
    name: "Medical licensing exams for the UAE",
  },
  {
    icon: Pill,
    code: "Prometric",
    country: "Saudi, Qatar, Oman, Bahrain, Kuwait",
    name: "Prometric licensure exams across the GCC",
  },
  {
    icon: GraduationCap,
    code: "NCLEX-RN",
    country: "USA & Canada",
    name: "National Council Licensure Examination for Nurses",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Exam Training"
          title="Overseas medical licensure exam training"
          description="We specialise in preparing candidates for internationally recognised licensure exams, ensuring they meet global standards of competency and expertise."
        />
        {/* <a
          href="#fees"
          className="whitespace-nowrap text-sm font-semibold text-navy-700 underline decoration-navy-300 decoration-2 underline-offset-4 hover:text-navy-800"
        >
          View course fees &amp; batches
        </a> */}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.map(({ icon: Icon, code, country, name }) => (
          <div
            key={code}
            className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-forest-700 group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">{code}</h3>
            <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-forest-700">
              {country}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{name}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-forest-200 bg-forest-50 px-6 py-4 text-sm text-forest-800">
        Also training candidates for <strong>NPTE (USA)</strong> and{" "}
        <strong>PCE (Canada)</strong> physiotherapist licensure exams, plus{" "}
        <strong>HCPC (UK)</strong> and <strong>CORU (Ireland)</strong> registration.
      </div>
    </section>
  );
}
