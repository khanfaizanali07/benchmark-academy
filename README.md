# Benchmark Global Healthcare Academy — Website

A Next.js 14 (App Router, JavaScript — no TypeScript) homepage built with
Tailwind CSS and Material Tailwind, themed off your logo (navy/royal blue,
forest green, medical red accent) and the course/process content from your
portfolio PDF and GCC licensure document.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## What's inside

- `app/layout.js` – fonts (Fraunces / Plus Jakarta Sans / IBM Plex Mono via `next/font/google`) + metadata
- `app/page.js` – assembles the homepage from the sections below
- `app/providers.js` – Material Tailwind `ThemeProvider` (client component)
- `components/Navbar.js` – sticky nav with mobile drawer
- `components/Hero.js` + `components/RouteMap.js` – headline + the custom
  "orbit" SVG graphic (destinations radiating from a center "YOU" badge —
  echoes the circular globe badge in your logo)
- `components/TrustStrip.js` – scrolling strip of licensing authorities
- `components/Programs.js` – PLAB / USMLE / ADC / DHA·HAAD·MOH / Prometric / NCLEX-RN cards
- `components/LicensureJourney.js` – the 5-step process (Eligibility → DataFlow → Exam → License → Job/Visa)
- `components/DataflowSupport.js` – DataFlow & registration services + required-documents checklist
- `components/CourseFees.js` – Nurse (Regular/Crash) & Pharmacist course pricing cards, from your document
- `components/WhyChooseUs.js` – the 5 pillars
- `components/ImpactStats.js` – global reach stat band
- `components/CTAContact.js` – enquiry form (Material Tailwind inputs) + contact details
- `components/Footer.js`

## Before you launch — please update

A few fields were **left as placeholders** on purpose, since I only had your
logo, portfolio PDF and licensure document to work from (the phone/email/
address in the reference PDF belonged to a different company, so I didn't
carry those over):

- Phone numbers in `components/Navbar.js` and `components/CTAContact.js`
- Email address in `components/CTAContact.js`
- Office address in `components/CTAContact.js`
- Social links in `components/Footer.js` (currently `#`)
- The enquiry form in `CTAContact.js` currently just shows a success state
  on submit — wire it up to your email/CRM/API of choice (e.g. an API route
  under `app/api/`) before going live.

## Design notes

- **Palette** pulled directly from your logo: navy/royal blue (`navy-*`),
  the forest/leaf green from "BENCHMARK GLOBAL HEALTHCARE ACADEMY" and the
  globe (`forest-*`), and the medical cross red used sparingly (`cross-*`).
- **Type**: Fraunces (serif, display) for headline gravitas + Plus Jakarta
  Sans for body/UI + IBM Plex Mono for stats, numbers and data — a nod to
  "verification" and credentialing.
- **Signature element**: the hero's orbit/route graphic, standing in for a
  world map without needing a licensed map asset — it mirrors your logo's
  circular badge and visualises "career excellence across the globe."
