"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "../Ornament";

// Four sides of Morocco, each with its own copy (drawn from the site's own
// destination and about text) and a focal point so the crop holds on both
// wide and portrait screens.
const SLIDES = [
  {
    key: "kasbah",
    label: "Kasbah",
    eyebrow: "Private Morocco tours",
    title: ["Morocco,", "beyond the ordinary."],
    body: "Privately guided journeys through the imperial cities, over the High Atlas and into the Erg Chebbi dunes — unhurried, and shaped entirely around you.",
    cta: { href: "/contact", label: "Plan your journey" },
    link: { href: "/tours", label: "Explore Morocco" },
    place: "Taourirt Kasbah, Ouarzazate",
    focus: "50% 45%",
    photo: {
      src: "/images/hero/kasbah-road-ouarzazate.webp",
      alt: "The Taourirt Kasbah's red earthen towers against a clear sky in Ouarzazate, Morocco",
    },
  },
  {
    key: "sahara",
    label: "Sahara",
    eyebrow: "The Sahara",
    title: ["Where the", "desert whispers."],
    body: "Camel treks into the Erg Chebbi dunes and nights at a desert camp. Every one of our desert routes builds in at least one night here.",
    cta: { href: "/tours?cat=Desert", label: "Discover the Sahara" },
    link: { href: "/destinations#sahara", label: "About the desert" },
    place: "Erg Chebbi, near Merzouga",
    focus: "42% 55%",
    photo: {
      src: "/images/hero/sahara-caravan-guide-golden-hour.webp",
      alt: "A guide leading a loaded camel caravan across the Sahara dunes at golden hour, Morocco",
    },
  },
  {
    key: "marrakech",
    label: "Marrakech",
    eyebrow: "The imperial cities",
    title: ["The red city,", "at dusk."],
    body: "Maze-like souks, palace courtyards and Jemaa el-Fnaa as the lamps come on — the starting point for most of our routes, and worth two full days on its own.",
    cta: { href: "/tours?city=Marrakech", label: "Journeys from Marrakech" },
    link: { href: "/destinations#marrakech", label: "About Marrakech" },
    place: "Jemaa el-Fnaa, Marrakech",
    focus: "45% 68%",
    photo: {
      src: "/images/destinations/marrakech-jemaa-el-fnaa-sunset.webp",
      alt: "Jemaa el-Fnaa square and the Koutoubia minaret at sunset, Marrakech, Morocco",
    },
  },
  {
    key: "escape",
    label: "Escape",
    eyebrow: "Private journeys",
    title: ["Your Morocco.", "Your rhythm."],
    body: "No strangers added to your group and no fixed departure dates — just you, your travel companions and a dedicated driver-guide for the whole trip.",
    cta: { href: "/contact", label: "Plan your journey" },
    link: { href: "/about", label: "How we travel" },
    place: "A courtyard in Chefchaouen",
    focus: "50% 62%",
    photo: {
      src: "/images/hero/chefchaouen-blue-courtyard.webp",
      alt: "A tea set on a low table in a cobalt-blue courtyard in Chefchaouen, Morocco",
    },
  },
];

const N = SLIDES.length;
const SLIDE_MS = 7000;
const pad = (n: number) => String(n).padStart(2, "0");

const RM = "(prefers-reduced-motion: reduce)";
const subscribeRM = (cb: () => void) => {
  const m = window.matchMedia(RM);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d={dir === "prev" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

// Full-screen cinematic hero. The incoming photograph crossfades over the
// outgoing one while easing from a slight zoom; the copy re-enters in a
// stagger (label, rule, headline, text, actions). Autoplay is driven by the
// progress line's CSS animation, so pausing it (hover, focus, touch) pauses
// the slideshow too. Only the current and next photographs are mounted up
// front; the rest load as they're reached.
export default function LuxuryHero() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0, 1]));
  const reduced = useSyncExternalStore(subscribeRM, () => window.matchMedia(RM).matches, () => false);
  const root = useRef<HTMLElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (i: number) => {
      const n = (i + N) % N;
      if (n === active) return;
      setPrev(active);
      setActive(n);
      setSeen((s) => new Set([...s, n, (n + 1) % N]));
    },
    [active]
  );

  // Arrow keys work while the hero is on screen and focus isn't in a field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const t = e.target as HTMLElement;
      if (t.closest("input, select, textarea, [role=tablist]")) return;
      const r = root.current?.getBoundingClientRect();
      if (!r || r.bottom < window.innerHeight * 0.4) return;
      go(active + (e.key === "ArrowRight" ? 1 : -1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);

  const s = SLIDES[active];
  const running = !reduced && !paused;

  return (
    <section
      ref={root}
      aria-roledescription="carousel"
      aria-label="Morocco in four photographs"
      className="relative isolate h-[100svh] min-h-[640px] overflow-hidden bg-kasbah-2 text-paper md:min-h-[720px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
      }}
    >
      {/* photographs */}
      {SLIDES.map((sl, i) => {
        const on = i === active;
        const was = i === prev;
        return (
          <div
            key={sl.key}
            aria-hidden={!on}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-[var(--ease)] motion-reduce:duration-300 ${
              on ? "z-[2] opacity-100" : was ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            {seen.has(i) && (
              <Image
                src={sl.photo.src}
                alt={sl.photo.alt}
                fill
                preload={i === 0}
                sizes="100vw"
                style={{ objectPosition: sl.focus }}
                className={`object-cover ease-out motion-reduce:scale-100 motion-reduce:transition-none ${
                  on ? "scale-100 transition-transform duration-[9000ms]" : was ? "scale-100" : "scale-[1.05]"
                }`}
              />
            )}
          </div>
        );
      })}
      <div
        aria-hidden
        className="absolute inset-0 z-[3] bg-[linear-gradient(180deg,rgba(41,20,10,.55)_0%,rgba(41,20,10,0)_22%),linear-gradient(0deg,rgba(41,20,10,.82)_0%,rgba(41,20,10,.25)_38%,rgba(41,20,10,0)_60%),linear-gradient(90deg,rgba(41,20,10,.5)_0%,rgba(41,20,10,0)_55%)]"
      />

      {/* copy */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-[208px] sm:px-[max(7vw,calc((100vw-1240px)/2))] md:pb-[clamp(150px,21vh,240px)]">
        <div key={s.key} aria-live={paused ? "polite" : "off"}>
          <p className="hero-in flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.3em] text-sun">
            <Star size={9} />
            {s.eyebrow}
          </p>
          <span aria-hidden className="hero-in mt-5 block h-px w-14 bg-sun/70" style={{ "--d": "80ms" } as React.CSSProperties} />
          <h1
            className="hero-in mt-6 max-w-[16ch] text-[min(clamp(2.6rem,1.1rem+5.2vw,6.4rem),10.5svh)] leading-[1.02] tracking-[-0.015em] text-paper md:max-w-none"
            style={{ "--d": "160ms" } as React.CSSProperties}
          >
            {s.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p
            className="hero-in mt-6 max-w-[46ch] text-[1rem] leading-relaxed text-paper/82 sm:text-[1.1rem]"
            style={{ "--d": "300ms" } as React.CSSProperties}
          >
            {s.body}
          </p>
          <div className="hero-in mt-8 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ "--d": "440ms" } as React.CSSProperties}>
            <Link href={s.cta.href} className="group btn btn-primary">
              {s.cta.label}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
            <Link
              href={s.link.href}
              className="relative text-[0.76rem] font-medium uppercase tracking-[0.18em] text-paper after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-[0.35] after:bg-sun after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              {s.link.label}
            </Link>
          </div>
        </div>
      </div>

      {/* side controls */}
      <div className="absolute right-[3vw] top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Previous slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/35 text-paper transition-colors duration-300 hover:border-paper hover:bg-paper/10"
        >
          <Chevron dir="prev" />
        </button>
        <span aria-hidden className="h-10 w-px bg-paper/30" />
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Next slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/35 text-paper transition-colors duration-300 hover:border-paper hover:bg-paper/10"
        >
          <Chevron dir="next" />
        </button>
      </div>

      {/* bottom bar: counter, progress, place, thumbnails */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-paper/15">
        <div className="flex flex-col gap-4 px-5 py-5 sm:px-[max(7vw,calc((100vw-1240px)/2))] md:flex-row md:items-center md:justify-between md:gap-10 md:py-6">
          <div className="flex items-center gap-5">
            <p className="whitespace-nowrap font-serif text-[1.05rem] tabular-nums text-paper/70">
              <span className="text-[1.5rem] text-paper">{pad(active + 1)}</span> / {pad(N)}
            </p>
            <span className="relative h-px w-24 shrink-0 overflow-hidden bg-paper/25 sm:w-36">
              <span
                key={`${active}-${reduced}`}
                className="absolute inset-0 origin-left bg-sun"
                style={
                  reduced
                    ? { transform: `scaleX(${(active + 1) / N})` }
                    : {
                        animation: `hero-progress ${SLIDE_MS}ms linear forwards`,
                        animationPlayState: running ? "running" : "paused",
                      }
                }
                onAnimationEnd={() => go(active + 1)}
              />
            </span>
            <p className="hidden whitespace-nowrap text-[0.85rem] text-paper/70 xl:block">{s.place}</p>
            <div className="ml-auto flex gap-2 md:hidden">
              <button type="button" onClick={() => go(active - 1)} aria-label="Previous slide" className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/35">
                <Chevron dir="prev" />
              </button>
              <button type="button" onClick={() => go(active + 1)} aria-label="Next slide" className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/35">
                <Chevron dir="next" />
              </button>
            </div>
          </div>

          <ul className="flex gap-2 overflow-x-auto pr-16 [scrollbar-width:none] md:gap-3 md:pr-0 lg:mr-14">
            {SLIDES.map((sl, i) => {
              const on = i === active;
              return (
                <li key={sl.key} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Show slide ${i + 1}: ${sl.label}`}
                    aria-current={on}
                    className={`group flex items-center gap-3 rounded-[4px] border p-1.5 pr-4 transition-[opacity,border-color,background-color] duration-500 ${
                      on ? "border-sun/70 bg-paper/10 opacity-100" : "border-paper/15 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <span className="relative block h-10 w-14 overflow-hidden rounded-[2px] md:h-11 md:w-16">
                      <Image src={sl.photo.src} alt="" fill sizes="64px" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{ objectPosition: sl.focus }} />
                    </span>
                    <span className="text-left leading-tight">
                      <span className="block font-serif text-[0.8rem] text-sun">{pad(i + 1)}</span>
                      <span className="block text-[0.66rem] font-medium uppercase tracking-[0.16em] text-paper">{sl.label}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
