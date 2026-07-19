"use client";

import { Button } from "@material-tailwind/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import RouteMap from "./RouteMap";

const STATS = [
  { value: "10+", label: "Years training healthcare professionals" },
  { value: "1000s", label: "Candidates placed worldwide" },
  { value: "8", label: "Countries of active licensure routes" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-navy-50 via-paper to-paper"
    >
      <div className="bg-route-grid absolute inset-0 opacity-40 [background-size:22px_22px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-forest-200 bg-forest-50 px-4 py-1.5 text-xs font-bold uppercase text-forest-700">
            Overseas Licensure &amp; Career Training
          </span>

          <h1 className="text-balance mt-6 font-display text-[2.5rem] font-semibold leading-[1.08] text-ink sm:text-6xl">
            Your license to practice,{" "}
            <span className="italic text-navy-600">anywhere in the world.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Benchmark Global Healthcare Academy prepares nurses, pharmacists,
            doctors and allied health professionals for DHA, HAAD, MOH,
            Prometric, NCLEX&#8209;RN, PLAB and USMLE — with structured
            coaching and hands-on DataFlow &amp; registration support at
            every step of the journey.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#contact">
              <Button className="flex items-center gap-2 bg-forest-800 shadow-none normal-case font-sans text-base font-semibold hover:bg-forest-700 hover:shadow-lg">
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="#programs"
              className="flex items-center gap-2 text-base font-semibold text-navy-700 hover:text-navy-800"
            >
              <PlayCircle className="h-5 w-5" />
              Explore exam programs
            </a>
          </div>

          {/* <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-navy-100 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-semibold text-forest-800 sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-ink/60 sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl> */}
        </div>

        <div className="relative mx-auto w-full max-w-[480px]">
          <RouteMap className="w-full drop-shadow-sm" />
          <p className="mt-2 text-center font-mono text-xs uppercase tracking-wide text-navy-500">
            A candidate's route from India, as the globe turns
          </p>
        </div>
      </div>
    </section>
  );
}