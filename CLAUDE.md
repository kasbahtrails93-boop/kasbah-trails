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

- Imports use the `@/*` path alias (`tsconfig.json`) mapped to `./src/*`, e.g. `import { TOURS } from "@/lib/data"` — used throughout instead of relative `../../` paths.
- `src/lib/data.ts` — **the single source of truth for tour content**: `TOURS` (33 tour objects — routing, `days`, `cat`, `blurb`, `highlights`, and a full day-by-day `itin` array), `CONTACT`, `INCLUDED`/`EXCLUDED`, `DEST` (destinations grid), `REVS` (testimonials), `TINT` (per-origin-city color pairs, now only used for the `Why` section's remaining decorative art — see below).
- `src/lib/blog.ts` — the 20-post blog: each post has `scene`/`origin` (for photo picking), `intro`, and a `blocks` array (`h2`/`p`/`ul`) rendered by `BlogBlocks`. Body text supports inline `[label](url)` markdown-style links (parsed by `RichText`/`renderRich`) — internal paths render as `next/link`, external ones as new-tab anchors. `related: string[]` on each post drives the "Related reading" block.
- `src/lib/photoPool.ts` — **the real-photo system**. `pickPhoto(scene, seed)` deterministically (hash of `seed`, e.g. a tour id or post slug) picks a photo from a themed pool (`dunes`/`medina`/`coast`) so every tour card, the itinerary modal, and every blog card/post consistently show the same real photo across renders — not a unique photo per item (there aren't 33+20 unique curated shots), a themed pool reused sensibly. `SceneSvg` (the original procedural-illustration system) was removed once cards moved to real photos; only `Why.tsx` still uses a single static real photo rather than the old SVG art.
- `src/components/HeroSlider.tsx` — client component: auto-advancing full-bleed image crossfade slider (4 curated photos in `public/images/hero/`), pauses on hover, respects `prefers-reduced-motion`.
- `src/components/TrustStrip.tsx` — the persistent stat bar (33 itineraries / 100% private / 4 cities / 3–15 days) directly under the hero on the homepage — deliberately *not* only inside the hero copy, so it survives scrolling past it.
- `src/components/ToursSection.tsx` — the full filterable tour grid (city + length chips, live "Showing X of Y" count) used on `/tours`; accepts `initialCity`/`initialLen` props so `/tours?city=Marrakech&len=1-3` deep-links pre-filter it (the page reads Next 16's async `searchParams`). `src/components/FeaturedTours.tsx` is the trimmed 6-tour teaser used on the homepage, linking to `/tours` for the rest. Both reuse `TourCard`, which links each tour to its own `/tours/[id]` page — there is no modal (removed; see below).
- `src/app/tours/[id]/page.tsx` — **every tour's real, indexable page** (`generateStaticParams` over all 33), sharing its content-rendering with `TourItinerary.tsx` (highlights, day-by-day, included/excluded — a server component, no client state). Has its own title/description/canonical metadata and `TouristTrip` + `BreadcrumbList` JSON-LD, plus a "more routes from this city" block for internal linking. This replaced a client-side `TourModal` that held the same content but rendered it only on click — none of it was ever in server-rendered HTML, so it was invisible to search engines despite being the site's most unique, long-tail-keyword-rich content. Confirm this hasn't regressed with `curl <url> | grep "Day by day"` on a `/tours/<id>` page if touching this area again.
- `src/components/BlogCard.tsx` / `BlogBlocks.tsx` / `TableOfContents.tsx` — blog rendering. `TableOfContents` auto-generates from a post's `h2` blocks (via `slugify` in `src/lib/slugify.ts`) and only renders when a post has 2+ headings; `BlogBlocks` gives each `h2` a matching `id` + `scroll-mt-24` so the anchors land below the sticky header.
- The brand mark is a real logo (`public/images/brand/kasbah-trails-mark.webp`, cropped from a supplied source image), used via plain `next/image` in `Header`/`Footer`/the blog post byline — not a component, since it's one static asset. `src/app/icon.png` is a separate square crop of the same source, used as the favicon/app icon.
- `src/components/Breadcrumbs.tsx` — used on `/tours`, `/tours/[id]`, `/blog`, and every blog post (also emitted as `BreadcrumbList` JSON-LD on tour and blog post pages).
- `src/lib/wa.ts` — `waLink(text)` builds `https://wa.me/...` deep links; every CTA site-wide funnels through this. The contact form (`src/components/Contact.tsx`) has no backend — on submit it builds a message and opens a WhatsApp link client-side.
- `src/app/layout.tsx` — root layout: fonts (Fraunces/Mulish via `next/font/google`), metadata (with `alternates.canonical: "/"`), `TravelAgency` + `FAQPage` JSON-LD, and renders the persistent `Header`/`Footer`/`WhatsAppFloat` around `{children}` — so `Header`/`Footer` are global chrome on every route, not homepage-only. Internal nav links must therefore be root-relative with a leading `/` (e.g. `/#destinations`, not `#destinations`) and use `next/link`, or they silently 404-scroll on non-home routes. The top nav is deliberately short (Tours, Destinations, About, Blog, Contact + WhatsApp/CTA) — mirrors what a competitor's nav ships; "How it works" and "FAQ" are homepage sections reachable from the footer instead, not top-nav items.
- Every listing/detail page (`/tours`, `/blog`, every `/blog/[slug]`, every `/tours/[id]`) sets its own `alternates.canonical` — needed because `/tours` gets linked with `?city=`/`?len=` query strings all over the site (footer, blog posts) and those must all canonicalize to the plain `/tours`, not fragment as separate indexable URLs.
- Routes: `/` (`src/app/page.tsx`), `/tours` (dynamic due to `searchParams`), `/tours/[id]` (33 static params), `/blog` (listing, with `ItemList` JSON-LD), `/blog/[slug]` (20 static params, each with `Article` + `BreadcrumbList` JSON-LD), `/destinations` (standalone page over the same `DEST` data as the homepage's `Destinations` teaser section), `/about` (standalone page over the same content as the homepage's `Why` teaser section). Plus `src/app/sitemap.ts` (lists all of the above) and `robots.ts`.
- Brand tokens (colors, fonts) are defined as CSS custom properties in `src/app/globals.css` and exposed to Tailwind via `@theme inline`. **Custom base styles (e.g. the `h1`–`h4` color/font rule) must stay inside `@layer base`** — Tailwind v4 utility classes live in a cascade layer, and an unlayered rule in `globals.css` will always beat a `text-*` utility regardless of specificity, silently breaking any heading given an override color (this bit us once: white headings on dark hero/modal backgrounds rendered as invisible dark-on-dark text until the base styles were moved into `@layer base`).
- `public/images/` — only the curated, renamed photos actually used by the site (`hero/`, `destinations/`, `pool/` — the latter feeds `photoPool.ts` — and `brand/` for the logo mark). The original 400+ file raw image dump lives in `images/` at the repo root and is git-ignored — it's a source pool to pick further real photos from if the existing pool ever needs more variety, never referenced directly by the app.

## Editing conventions to preserve

- Add/edit tours by editing `TOURS` in `src/lib/data.ts`; add/edit posts by editing `BLOG` in `src/lib/blog.ts`. Both are JSX-rendered, not `innerHTML` — no HTML entities in strings.
- Every card/modal/post that needs an image should go through `pickPhoto(scene, seed)`, not a new one-off `<Image>` — this keeps art consistent and avoids re-curating photos per item. Only add a new photo to `photoPool.ts`'s pools if the existing 12 genuinely don't fit a new scene.
- `CONTACT.phoneDisplay`, `CONTACT.phoneTel`, and `CONTACT.wa` in `src/lib/data.ts` are placeholders that must be replaced with the real business phone/WhatsApp number before launch.
- `REVS` entries are explicitly placeholder reviews — flagged as such in the rendered page — until replaced with real, sourced ones.
- Blog post bylines are an honest organizational credit ("Written by the Kasbah Trails team"), deliberately not a fabricated named author with a headshot — keep it that way unless a real, named writer exists.
- Any new local image goes in `public/images/...` with a descriptive, kebab-case, SEO-friendly filename (not a stock-photo ID) and a specific `alt` string — never reference the raw `images/` dump directly.
- Blog post `title` should read naturally as the on-page H1 even if long; if it's north of ~60 characters, add a shorter `metaTitle` (used only for the `<title>`/`og:title` tag) rather than shortening the H1 itself — Google truncates the rendered `<title>` (post title + " | Kasbah Trails") around that length, but a longer, fuller H1 has no such penalty.
- When a blog post names one specific tour by its exact spec (e.g. "our 7-day Sahara desert tour from Marrakech"), link it straight to that tour's `/tours/[id]` page, not a `/tours?city=&len=` filtered listing — check the `len=` bucket actually contains that tour's day count before ever linking a filtered listing for a specific-sounding claim (a past bug: "10 and 12-day grand tours" linked to `len=8-11`, which excludes every 12-day tour).
- Avoid repeating the same rhetorical device (an exact H2 wording, a stock opening line like "Worth it, with a caveat") across more than one post — it reads as templated when posts are read back to back. Keep intensifiers ("genuinely", "honestly", "actually") sparing; they're fine used once or twice across the whole file, not once or twice per post.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
