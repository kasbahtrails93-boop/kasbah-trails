# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This repository contains a single self-contained static webpage, `kasbah-trails.html` — the marketing site for Kasbah Trails, a private Morocco tours business. There is no build system, package manager, framework, or backend: all HTML, CSS (in a `<style>` block) and JavaScript (in a `<script>` block) live in that one file.

## Commands

There is no build/lint/test tooling. To preview changes, just open `kasbah-trails.html` directly in a browser (or serve the directory with any static file server, e.g. `python -m http.server`).

## Architecture

The file is organized top to bottom as:

1. `<head>` — meta tags, Google Fonts (`Fraunces` for headings, `Mulish` for body), and a `TravelAgency` JSON-LD schema block.
2. `<style>` — all CSS, using custom properties defined on `:root` (colors: `--sand`, `--terracotta`, `--espresso`, etc.) for the brand palette. Layout is mobile-first with a `@media(max-width:940px)` breakpoint that turns the nav into a slide-down mobile menu.
3. `<body>` — static markup for the header/nav, hero, tour-filter section (`#tours`), process section (`#how`), why-us section (`#why`), destinations (`#destinations`), reviews (`#reviews`), and contact/inquiry form (`#contact`). Most of these sections have an empty container element (e.g. `#tourGrid`, `#destGrid`, `#revGrid`) that JS populates at runtime — the content lives in JS data arrays, not in the HTML.
4. `<script>` — all app logic and data:
   - **`CONTACT`**: placeholder phone/WhatsApp/email values — these are meant to be replaced with real business details.
   - **`TOURS`**: the core data array. Each tour has routing info (`from`/`to`/`origin`), `days`, `cat` (category), and either a full `itin` (day-by-day itinerary) array or just a `highlights` list. This array drives the tour grid, the filter chips, the itinerary modal, and the inquiry form's tour dropdown — it's the single source of truth for all tour content.
   - **`sceneSVG()`**: generates original inline SVG illustrations (dunes/medina/coast scenes) procedurally, tinted per origin city via the `TINT` map — there are no raster images for tour art.
   - **Filtering**: `fCity`/`fLen` module-level state + `cityMatch()`/`lenMatch()` filter `TOURS`, re-rendered via `renderTours()` into `#tourGrid` on chip clicks.
   - **Modal**: `openModal(id)`/`closeModal()` render a tour's full detail (itinerary or highlights + included/excluded lists) into `#modalBack`/`#modal`, triggered by any element with a `data-open="<tour id>"` attribute.
   - **WhatsApp-first contact flow**: `waLink(text)` builds `https://wa.me/...` deep links with a prefilled message. All CTAs (nav, hero, floating button, modal, footer) funnel through this. The inquiry form (`#inquiryForm`) has no backend — on submit it builds a formatted message from the field values and opens a WhatsApp link (`window.open`) instead of POSTing anywhere.
   - **`DEST`** and **`REVS`**: smaller static data arrays for the destinations grid and testimonials (reviews are explicitly labeled placeholders pending real ones).

## Editing conventions to preserve

- Add/edit tours by editing the `TOURS` array only — the grid, filters, modal, and form dropdown all derive from it automatically.
- Tour text uses HTML entities (e.g. `&amp;`) directly in JS string literals since it's injected via `innerHTML`.
- Keep new tour art within the existing `sceneSVG(scene, tint, opts)` procedural system (`scene` ∈ `dunes`/`medina`/`coast`) rather than adding raster images, to stay consistent with the rest of the site.
- `CONTACT.phoneDisplay`, `CONTACT.phoneTel`, and `CONTACT.wa` are placeholders (`+212 6XX-XX XX XX` / `2126XXXXXXXX`) that must be replaced with the real business phone/WhatsApp number before launch.
- `REVS` entries are explicitly placeholder reviews (`s: "Replace with a verified review"`) — flag this if asked to treat them as real content.
