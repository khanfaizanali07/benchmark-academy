"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, IconButton, Collapse } from "@material-tailwind/react";
import { Menu, X, PhoneCall } from "lucide-react";

const NAV_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Licensure Journey", href: "#journey" },
  { label: "DataFlow", href: "#dataflow" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 shadow-card backdrop-blur-md"
          : "bg-paper/70 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Benchmark Global Healthcare Academy"
            // width={60}
            // height={60}
            className="h-11 w-11 lg:h-24 lg:w-24"
            // priority
          />
          <span className="font-display leading-tight">
            <span className="block text-[13px] font-semibold tracking-wide text-forest-800 lg:text-sm">
              BENCHMARK GLOBAL
            </span>
            <span className="block text-[10px] font-medium tracking-[0.2em] text-navy-600 lg:text-[11px]">
              HEALTHCARE ACADEMY
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-4 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-ink/70 transition-colors hover:text-forest-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+918830577926"
            className="flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-800"
          >
            <PhoneCall className="h-4 w-4" />
            +91&nbsp;88305&nbsp;77926 
          </a>
          <a href="#contact">
            <Button className="bg-forest-800 shadow-none normal-case font-sans font-semibold tracking-normal hover:bg-forest-700 hover:shadow-md">
              Book Free Consultation
            </Button>
          </a>
        </div>

        <IconButton
          variant="text"
          className="text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </IconButton>
      </nav>

      <Collapse open={open} className="lg:hidden">
        <div className="space-y-1 border-t border-navy-100 bg-paper px-6 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink/80 hover:bg-navy-50 hover:text-forest-700"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block pt-2">
            <Button fullWidth className="bg-forest-800 shadow-none normal-case font-sans font-semibold">
              Book Free Consultation
            </Button>
          </a>
        </div>
      </Collapse>
    </header>
  );
}
