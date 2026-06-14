# ☀️ SolarTutor — An Engineer's Guide to Photovoltaics

A deep, **engineer-grade interactive guide to solar panels** — from the quantum
physics of a single cell to gigawatt-scale farms and the research frontier.

> Live site: deployed on Vercel · Built with Next.js 14 (App Router), TypeScript & Tailwind CSS.

---

## What's inside

Six self-contained, in-depth chapters that follow a solar panel's entire life:

| # | Chapter | What it covers |
|---|---------|----------------|
| 1 | **History & The Physics of Light** | Becquerel (1839) → Bell Labs (1954) → Swanson's Law; band gaps, p-n junctions, the photovoltaic effect, I-V curves, the Shockley-Queisser limit |
| 2 | **Manufacturing — Sand to Module** | Quartz → MG-silicon → polysilicon (Siemens & FBR) → Czochralski ingots → wafering → cell fab (PERC/TOPCon/HJT) → lamination & QC |
| 3 | **From Panel to Power** | Series/parallel arrays, inverters & MLPE, MPPT, grid codes (IEEE 1547), batteries, the duck curve, performance metrics |
| 4 | **Installation, Step by Step** | Site & shading survey, string sizing with cold-Voc correction, racking & flashing, electrical tie-in, commissioning & PTO |
| 5 | **Degradation & Lifecycle** | LID/PID/LeTID, hot spots & microcracks, ~0.5%/yr degradation, IEC 61215 testing, recycling & end of life |
| 6 | **The Future of Solar** | TOPCon/HJT/IBC, perovskite-silicon tandems >33%, bifacial + trackers, agrivoltaics, floating PV, the 2030 outlook |

Content is authored as Markdown in [`/content`](./content) and rendered with
`react-markdown` + `remark-gfm`, so it's easy to extend or correct.

## Features

- ⚡️ **Next.js 14 App Router** with static generation for every chapter
- 🎨 Polished, responsive UI with a solar-themed design system
- 🌗 Light / dark mode (`next-themes`)
- 📖 Reading-progress bar + scroll-spy table of contents
- ✨ Subtle, accessible motion (`framer-motion`, respects `prefers-reduced-motion`)
- 🧱 GFM tables, callouts, and code styling tuned for technical reading

## Tech stack

- [Next.js 14](https://nextjs.org/) · [React 18](https://react.dev/) · [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + `@tailwindcss/typography`
- [framer-motion](https://www.framer.com/motion/) · [lucide-react](https://lucide.dev/)
- [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm)

## Project structure

```
solar-tutor/
├── app/                     # App Router: layout, home, chapter routes
│   ├── layout.tsx
│   ├── page.tsx             # Landing page
│   ├── learn/[slug]/page.tsx# Dynamic chapter page
│   └── globals.css
├── components/              # UI components (Navbar, Hero, TOC, renderer…)
├── content/                 # Chapter source (Markdown)
├── lib/                     # Chapter metadata + content helpers
├── public/
└── … config (tailwind, tsconfig, next, vercel)
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## Deploy

Optimised for [Vercel](https://vercel.com/) — import the repo (or run
`vercel`) and it builds with zero extra configuration.

## A note on accuracy

This is **educational** material written to be rigorous and well-sourced, but
efficiency records and market figures evolve quickly. Always verify specific
numbers against primary sources (NREL, IEC, IRENA, manufacturer datasheets)
before relying on them for engineering decisions.
