import { Users2, BookOpenCheck, HandHeart, CalendarClock, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    icon: Users2,
    title: "Experienced faculty",
    copy: "Expert mentors with 10+ years of training experience across every major exam track.",
  },
  {
    icon: BookOpenCheck,
    title: "Structured curriculum",
    copy: "Well-defined study plans and exam-focused coaching, not generic content dumps.",
  },
  {
    icon: HandHeart,
    title: "Personalised mentorship",
    copy: "One-on-one guidance for exam preparation, documentation and career planning.",
  },
  {
    icon: CalendarClock,
    title: "Flexible learning",
    copy: "Live classes, recorded sessions and interactive discussions that fit around your job.",
  },
  {
    icon: TrendingUp,
    title: "Proven success rate",
    copy: "Exceptional pass percentages and successful career transitions, globally.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        align="center"
        eyebrow="Why Benchmark Global"
        title="A mentorship-first approach to a global career"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {PILLARS.map(({ icon: Icon, title, copy }, i) => (
          <div
            key={title}
            className={`rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
              i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-forest-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
