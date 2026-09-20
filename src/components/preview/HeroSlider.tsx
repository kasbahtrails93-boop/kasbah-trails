"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/wa";

const SLIDES = [
  {
    src: "/images/hero/sahara-caravan-guide-golden-hour.webp",
    alt: "A guide leading a loaded camel caravan across the Sahara dunes at golden hour, Morocco",
    tag: "Erg Chebbi, the Sahara",
  },
  {
    src: "/images/hero/kasbah-road-ouarzazate.webp",
    alt: "The Taourirt Kasbah's red earthen towers against a clear sky in Ouarzazate, Morocco",
    tag: "Ouarzazate, the kasbah road",
  },
  {
    src: "/images/hero/chefchaouen-blue-courtyard.webp",
    alt: "A tea set on a low table in a cobalt-blue courtyard in Chefchaouen, Morocco",
    tag: "Chefchaouen, the blue city",
  },
  {
    src: "/images/hero/tangier-corniche-coast.webp",
    alt: "An aerial view of Tangier's coastal corniche road curving along the Mediterranean, Morocco",
    tag: "Tangier, where two seas meet",
  },
];

const AUTOPLAY_MS = 6000;

function withPreload(prev: Set<number>, index: number): Set<number> {
  if (prev.has(index)) return prev;
  const copy = new Set(prev);
  copy.add(index);
  return copy;
}

export default function PreviewHeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0, 1 % SLIDES.length]));
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const id = setTimeout(() => {
      const next = (active + 1) % SLIDES.length;
      setActive(next);
      setSeen((prev) => withPreload(prev, (next + 1) % SLIDES.length));
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, paused]);

  return (
    <section
      className="relative isolate h-[64vh] min-h-[460px] w-full overflow-hidden bg-neutral-900 text-white sm:h-[70vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          {seen.has(i) && (
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${
                i === active ? "scale-105" : "scale-100"
              } transition-transform duration-[7000ms] ease-out motion-reduce:scale-100 motion-reduce:transition-none`}
            />
          )}
        </div>
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(60%_75%_at_50%_50%,rgba(0,0,0,.42)_0%,rgba(0,0,0,.12)_60%,rgba(0,0,0,0)_85%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-[clamp(20px,5vw,64px)] text-center">
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-px w-6 bg-amber" />
          <span className="text-[13px] font-semibold text-white/75 sm:text-sm">
            Bespoke, private Morocco journeys
          </span>
          <span className="h-px w-6 bg-amber" />
        </div>

        <h1 className="max-w-[18ch] font-serif text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,.5)]">
          Morocco, from the Atlas passes to the Sahara dunes.
        </h1>
        <p className="mt-4 max-w-[52ch] text-[.98rem] text-white/85 sm:text-base">
          Privately guided journeys through the imperial cities, over the High Atlas and into the
          Erg Chebbi dunes — unhurried, and shaped entirely around you.
        </p>

        {/* refined: rounded-lg instead of rounded-full, no heavy drop-shadow on the CTA */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#tours"
            className="inline-flex items-center gap-2 rounded-lg bg-terracotta px-6 py-3.5 text-[.98rem] font-bold text-white transition-colors duration-200 hover:bg-terracotta-d"
          >
            Explore tours
          </a>
          <a
            href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-white/50 bg-white/5 px-6 py-3.5 text-[.98rem] font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/15"
          >
            Message us on WhatsApp
          </a>
        </div>

        <div className="mt-9 flex items-center gap-3">
          <span className="font-serif text-sm tabular-nums text-white/60">
            <span className="text-base font-semibold text-white">
              {String(active + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(SLIDES.length).padStart(2, "0")}
          </span>
          <div className="flex gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                aria-label={`Show slide: ${s.tag}`}
                aria-current={i === active}
                onClick={() => {
                  setActive(i);
                  setSeen((prev) => withPreload(prev, i));
                }}
                className={`h-1 rounded-full transition-all ${
                  i === active ? "w-8 bg-amber" : "w-3 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <span className="text-[13px] text-white/60">{SLIDES[active].tag}</span>
        </div>
      </div>
    </section>
  );
}
