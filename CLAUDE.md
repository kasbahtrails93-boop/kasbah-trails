# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Kasbah Trails is the marketing site for a boutique private Morocco tours business, built as a Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript project. It started life as a single self-contained static HTML file (`kasbah-trails.html`, still present in the repo root for reference/history — not part of the live site) and was rebuilt into this app.

## Commands

- `npm run dev` — start the dev server (Turbopack, default port 3000)
- `npm run build` — production build (also type-checks; fails the build on TS errors)
- `npm run lint` — ESLint (flat config)
- `npm start` — serve the production build

There is no test suite.

## Architecture

- `src/lib/data.ts` — **the single source of truth for all content**: `TOURS` (33 tour objects — routing, `days`, `cat`, `blurb`, `highlights`, and a full day-by-day `itin` array), `CONTACT`, `INCLUDED`/`EXCLUDED`, `DEST` (destinations grid), `REVS` (testimonials), `TINT` (per-origin-city color pairs for the procedural tour art). This file was generated from the original static site's JS data arrays — edit tours here, not by hand-transcribing.
- `src/components/SceneSvg.tsx` — procedural inline SVG illustrations (`dunes`/`medina`/`coast` scenes, tinted via `TINT`) used on tour cards and the itinerary modal. No raster images for tour art by design.
- `src/components/HeroSlider.tsx` — client component: auto-advancing full-bleed image crossfade slider (4 curated photos in `public/images/hero/`), pauses on hover, respects `prefers-reduced-motion`.
- `src/components/ToursSection.tsx` — the full filterable tour grid (city + length chips) used on `/tours`. `src/components/FeaturedTours.tsx` is the trimmed 6-tour teaser used on the homepage, linking to `/tours` for the rest. Both reuse `TourCard` and `TourModal`.
- `src/components/TourModal.tsx` — itinerary detail modal (day-by-day timeline, highlights, included/excluded), opened by id from either tours component.
- `src/lib/wa.ts` — `waLink(text)` builds `https://wa.me/...` deep links; every CTA site-wide (nav, hero, cards, modal, footer, contact form) funnels through this. The contact form (`src/components/Contact.tsx`) has no backend — on submit it builds a message and opens a WhatsApp link client-side.
- `src/app/layout.tsx` — root layout: fonts (Fraunces/Mulish via `next/font/google`), metadata, `TravelAgency` + `FAQPage` JSON-LD, and renders the persistent `Header`/`Footer`/`WhatsAppFloat` around `{children}`.
- Routes: `/` (`src/app/page.tsx`) and `/tours` (`src/app/tours/page.tsx`), which share the layout chrome.
- Brand tokens (colors, fonts) are defined as CSS custom properties in `src/app/globals.css` and exposed to Tailwind via `@theme inline`. **Custom base styles (e.g. the `h1`–`h4` color/font rule) must stay inside `@layer base`** — Tailwind v4 utility classes live in a cascade layer, and an unlayered rule in `globals.css` will always beat a `text-*` utility regardless of specificity, silently breaking any heading given an override color (this bit us once: white headings on dark hero/modal backgrounds rendered as invisible dark-on-dark text until the base styles were moved into `@layer base`).
- `public/images/` — only the curated, renamed photos actually used by the site (hero slides, `destinations/`). The original 400+ file raw image dump lives in `images/` at the repo root and is git-ignored — it's a source pool to pick from, never referenced directly by the app.

## Editing conventions to preserve

- Add/edit tours by editing `TOURS` in `src/lib/data.ts` only — the grid, filters, modal, and contact form's tour dropdown all derive from it automatically. Text is plain (no HTML entities — this is JSX, not `innerHTML`).
- Keep tour-card/modal art within the `SceneSvg` procedural system rather than adding per-tour raster images.
- Real photography is intentionally scoped to the hero slider and the destinations grid only — not every tour card — per an explicit decision when the site was rebuilt.
- `CONTACT.phoneDisplay`, `CONTACT.phoneTel`, and `CONTACT.wa` in `src/lib/data.ts` are placeholders that must be replaced with the real business phone/WhatsApp number before launch.
- `REVS` entries are explicitly placeholder reviews — flagged as such in the rendered page — until replaced with real, sourced ones.
- Any new local image goes in `public/images/...` with a descriptive, kebab-case, SEO-friendly filename (not a stock-photo ID) and a specific `alt` string — never reference the raw `images/` dump directly.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
