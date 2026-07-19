import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const COLUMNS = [
  {
    title: "Programs",
    links: [
      { label: "Programs", href: "#programs" },
      { label: "Licensure Journey", href: "#journey" },
      // { label: "Why Us", href: "#why-us" },
      // { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Healthcare Licensing Services", href: "#services" },
      { label: "Training Programs", href: "#trainingPrograms" },
      // { label: "Finishing School", href: "#fees" },
      // { label: "Course fees", href: "#fees" },
    ],
  },
  {
    title: "Academy",
    links: [
      { label: "Licensure journey", href: "#journey" },
      { label: "Why choose us", href: "#why-us" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-circle.png"
                alt="Benchmark Global Healthcare Academy"
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <span className="font-display leading-tight">
                <span className="block text-[13px] font-semibold tracking-wide text-forest-300">
                  BENCHMARK GLOBAL
                </span>
                <span className="block text-[10px] font-medium tracking-[0.2em] text-navy-200">
                  HEALTHCARE ACADEMY
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-100/60">
              Structured training and mentorship for healthcare professionals
              pursuing licensure and careers across the globe.
            </p>
            <div className="mt-6 flex gap-3">
              {[{icon:Facebook, link: "https://www.facebook.com/people/Benchmark-Global-Healthcare-Academy/61592089469111"}, {icon:Instagram, link: "https://www.instagram.com/benchmarkglobal.academy"}, {icon:Linkedin, link: "https://www.linkedin.com/in/benchmark-global-heathcare-academy-577920422/"}].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-200 transition-colors hover:border-forest-500 hover:text-forest-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-xs font-bold uppercase text-navy-300">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-navy-100/70 transition-colors hover:text-forest-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 sm:flex-row">
          <p className="text-xs text-navy-300/70">
            &copy; {new Date().getFullYear()} Benchmark Global Healthcare Academy. All rights reserved.
          </p>
          <p className="text-xs text-navy-300/70">
            Sharpening skills, one licensure at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
