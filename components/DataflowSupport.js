import { FileCheck2, ListChecks, FolderCheck, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    icon: FileCheck2,
    title: "DataFlow verification",
    copy: "For DHA, DOH/HAAD, MOH, SCFHS, DHP/QCHP, OMSB and Kuwait MOH — end to end.",
  },
  {
    icon: ListChecks,
    title: "Exam registration guidance",
    copy: "Step-by-step support booking your Prometric or Pearson VUE exam slot.",
  },
  {
    icon: FolderCheck,
    title: "Credentialing & document processing",
    copy: "We prepare and cross-check every certificate before it's submitted.",
  },
  {
    icon: ShieldCheck,
    title: "HCPC (UK) & CORU (Ireland)",
    copy: "Registration support for allied health professionals moving to the UK or Ireland.",
  },
];

const DOCUMENTS = [
  "Passport",
  "Degree / Diploma certificate",
  "Marklists / transcript",
  "Registration certificate",
  "Experience certificate",
  "Updated CV",
  "Good standing certificate",
];

export default function DataflowSupport() {
  return (
    <section id="dataflow" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="DataFlow & Registration"
            title="Documentation is where journeys stall — we make sure yours doesn't"
            description="Understanding the complexities of documentation and licensing processes can be overwhelming. We assist candidates through every stage of DataFlow and registration."
          />

          <div className="mt-10 space-y-6">
            {SERVICES.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="flex gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-navy-100 bg-navy-50/60 p-8 lg:p-10">
          <h3 className="font-display text-xl font-semibold text-ink">
            Documents you'll typically need
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {DOCUMENTS.map((doc) => (
              <li key={doc} className="flex items-start gap-2.5 text-sm text-ink/75">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" />
                {doc}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-white p-5 shadow-card">
            <p className="text-sm text-ink/70">
              <span className="font-mono font-semibold text-navy-700">Good to know —</span>{" "}
              an existing positive DataFlow report can often be transferred between
              GCC countries at reduced cost, and the UAE now supports easier
              transfer between DHA, DOH and MOH through unified licensing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
