'use client';
import { Globe2, Users, Award, MapPinned } from "lucide-react";
import CountUp from "react-countup";

const STATS = [
  { icon: Users, value: "1000s", label: "Candidates successfully placed in global healthcare roles" },
  { icon: Globe2, value: "6", label: "Regions with active placements — UK, USA, Canada, UAE, Australia, Europe" },
  { icon: Award, value: "10+", label: "Years of excellence in medical training and career guidance" },
  { icon: MapPinned, value: "8", label: "Licensure authorities we actively train candidates for" },
];

export default function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-forest-800 py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-forest-700/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-navy-800/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center lg:text-left">
              <Icon className="mx-auto h-6 w-6 text-forest-300 lg:mx-0" />
              <p className="mt-3 font-mono text-4xl font-semibold text-paper"><CountUp end={parseInt(value)} duration={5} enableScrollSpy={true} scrollSpyOnce={true} /></p>
              <p className="mt-2 text-sm leading-snug text-forest-100/80">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
