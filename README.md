<div align="center">

# ✦ HRpreneurs

### Building strong organizations through people.

An Awwwards-level, multi-theme Next.js 16 experience for a full-service HR solutions firm.

[![Next.js](https://img.shields.io/badge/Next.js-16-000?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0080?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com)

</div>

---

## ✦ What this is

A production-ready marketing site for **HRpreneurs** — built like an agency-level editorial experience. Every page tells a story through typography, motion, and color. The entire interface is powered by a **six-theme design system** the user can cycle through at any moment; the whole site re-tints in a single frame, from background to foreground, pills, accents, shadows, and text.

## ✦ Highlights

| | |
|:-|:-|
| **Six fully-themed palettes** | Sand (default), Dark, Purple, Mint, Sun, Coral — cycle from the nav at any time, persisted in `localStorage`. |
| **Awwwards-inspired motion** | 23+ custom Framer Motion primitives: magnetic buttons, tilted cards, letter drops, mask reveals, sticky stacks, parallax layers, scroll-drawn lines, animated counters, text carousels, custom cursor. |
| **Dynamic detail pages** | Every Service, Sector, and Insight article generates its own themed landing page with hero parallax, processes, FAQs, related content. |
| **Fully mobile-first** | Every grid, hero, and CTA gracefully collapses to tablet / phone. Hamburger menu, safe-area padding, tap-friendly targets. |
| **Zero external UI deps** | All icons are hand-drawn SVGs. No icon libs, no component kits — everything is bespoke. |
| **Static-first** | All 35 routes pre-render at build time for instant loads. |
| **Accessible** | WCAG-minded contrast, visible focus rings, `prefers-reduced-motion` respected. |

## ✦ Tech Stack

```
Next.js 16 (App Router · Turbopack)
React 19
TypeScript 5
Tailwind CSS 4
Framer Motion 12
```

## ✦ Project structure

```
hrpreneurs-website/
├── app/
│   ├── about/               · About / Founders / Culture
│   ├── careers/             · Benefits · Positions · Internship
│   ├── contact/             · Contact form · Office details
│   ├── insights/
│   │   └── [slug]/          · Dynamic article pages
│   ├── sectors/
│   │   └── [slug]/          · Dynamic sector pages (12 sectors)
│   ├── services/
│   │   └── [slug]/          · Dynamic service pages (6 services)
│   ├── layout.tsx           · ThemeProvider · Navigation · Footer
│   ├── page.tsx             · Home — hero, pillars, offerings
│   └── globals.css          · Six-theme design system
│
├── components/
│   ├── ThemeProvider.tsx    · 6-theme cycler with curtain transition
│   ├── Navigation.tsx       · Magnetic, compact-on-scroll, mobile menu
│   ├── Footer.tsx           · Huge CTA, wordmark
│   ├── motion.tsx           · 23 Framer Motion primitives
│   └── decor.tsx            · Hand-drawn SVG decorations
│
├── lib/
│   ├── data.ts              · Services & Sectors content
│   └── insights.ts          · Articles content
│
├── public/                  · favicon.svg
├── next.config.ts
├── vercel.json
└── package.json
```

## ✦ Getting started

```bash
# 1. Install
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm run start
```

Requires **Node 18.18+**.

## ✦ Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — hit **Deploy**.

No environment variables are required. `vercel.json` pins the India region (`bom1`) for the fastest first byte for the target audience; change if needed.

## ✦ The theme system

Six palettes live in [`app/globals.css`](app/globals.css). Each defines the same semantic tokens:

| Token | Meaning |
|:-|:-|
| `--bg`, `--bg-alt`, `--bg-card` | Page & surface backgrounds |
| `--fg`, `--fg-2`, `--fg-3` | Primary, secondary, muted text |
| `--accent`, `--accent-2` | Brand accents for that theme |
| `--surface-1 … --surface-4` | The four "brand band" colors |
| `--on-surface` | Text color on those bands |
| `--ink-surface` / `--on-ink` | The high-contrast CTA strip |
| `--border`, `--border-strong` | Dividers |
| `--shadow-sm / md / lg` | Elevation |

Switching theme simply swaps `<html data-theme="…">` — every token cascades instantly across the entire site, including the footer wordmark, buttons, pills, shadows, and decorative SVGs.

Cycle order: **Sand → Dark → Purple → Mint → Sun → Coral → Sand…**

## ✦ Motion library (`components/motion.tsx`)

A single file exports 23 primitives you can drop anywhere:

```
ScrollProgress · FadeUp · Stagger · StaggerItem · RevealText · LetterDrop
ScaleIn · Floaty · Magnetic · Tilt · Counter · CustomCursor · PageTransition
TextCarousel · ParallaxY · ScrollRotate · RippleButton · MouseParallax
MaskReveal · DrawLine · StickyStack · StickySide · Breath · Elastic
```

All respect `prefers-reduced-motion`.

## ✦ Pages & routes

| Route | Kind |
|:-|:-|
| `/` | Static |
| `/about`, `/careers`, `/contact`, `/insights`, `/sectors`, `/services` | Static |
| `/services/[slug]` | SSG · 6 pages |
| `/sectors/[slug]` | SSG · 12 pages |
| `/insights/[slug]` | SSG · 7 pages |
| `/not-found` | 404 |

**Total: 35 pre-rendered routes.**

## ✦ Scripts

```
npm run dev       · local dev server (Turbopack)
npm run build     · production build (static + SSG)
npm run start     · serve built output
npm run lint      · ESLint
```

## ✦ License

All rights reserved © HRpreneurs. Code provided for the HRpreneurs project; please do not redistribute.

---

<div align="center">

**Made with care — from talent, to compliance, to tech.**

</div>
