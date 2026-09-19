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

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Only the current slide + the next one are ever mounted (and therefore
  // downloaded), instead of all 4 hero images competing for bandwidth on
  // first paint. Each slide gets a full AUTOPLAY_MS dwell time on the
  // previous slide to load in the background before it's due. Only ever
  // updated from callbacks (the timer below, the dot onClick), never
  // synchronously in an effect body or read/written via a ref in render.
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
      className="relative isolate flex h-[86vh] min-h-[560px] w-full items-end overflow-hidden bg-espresso-2 text-white sm:h-[88vh]"
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

      {/* cinematic vignette: darkest where the text sits, clear toward the far corner */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_0%_100%,rgba(20,10,4,.88)_0%,rgba(20,10,4,.45)_38%,rgba(20,10,4,.08)_68%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent" />

      {/* inset gallery frame */}
      <div className="pointer-events-none absolute inset-3 rounded-2xl border border-white/25 sm:inset-4" />

      <div className="relative z-10 w-full px-[clamp(24px,5vw,64px)] pb-[clamp(48px,8vw,88px)]">
        <div className="mb-5 flex items-start gap-3">
          <span className="mt-[7px] h-px w-6 shrink-0 bg-amber sm:mt-[9px] sm:w-10" />
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-amber sm:text-xs sm:tracking-[0.16em]">
            Bespoke, private Morocco journeys
          </span>
        </div>

        <h1 className="max-w-[16ch] font-serif text-[clamp(2.3rem,5.6vw,4.2rem)] font-semibold leading-[1.03] tracking-tight text-white">
          Morocco, from the Atlas passes to the Sahara dunes.
        </h1>
        <p className="mt-5 max-w-[54ch] text-[1.06rem] text-white/80">
          Privately guided journeys through the imperial cities, over the High Atlas and into the
          Erg Chebbi dunes — unhurried, and shaped entirely around you.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#tours"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-[.98rem] font-bold text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)] hover:bg-terracotta-d"
          >
            Explore tours
          </a>
          <a
            href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[#1f7a4d] px-6 py-3.5 text-[.98rem] font-bold text-white hover:bg-[#186139]"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>

      {/* numbered slide index, bottom-right */}
      <div className="absolute bottom-[clamp(20px,4vw,32px)] right-[clamp(20px,4vw,32px)] z-10 hidden text-right sm:block">
        <div className="mb-2 font-serif text-sm text-white/70">
          <span className="text-base font-semibold text-white">{String(active + 1).padStart(2, "0")}</span>
          {" / "}
          {String(SLIDES.length).padStart(2, "0")}
        </div>
        <div className="mb-2 flex justify-end gap-1.5">
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
        <div className="text-xs font-semibold uppercase tracking-wide text-white/70">
          {SLIDES[active].tag}
        </div>
      </div>
    </section>
  );
}
