"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/wa";

const SLIDES = [
  {
    src: "/images/hero/sahara-camel-caravan-sunset.webp",
    alt: "Camel caravan silhouetted against a Sahara desert sunset near Erg Chebbi, Morocco",
    tag: "Erg Chebbi, the Sahara",
  },
  {
    src: "/images/hero/ait-ben-haddou-kasbah.webp",
    alt: "The fortified earthen ksar of Aït Ben Haddou, a UNESCO World Heritage site in Morocco",
    tag: "Aït Ben Haddou, on the kasbah road",
  },
  {
    src: "/images/hero/chefchaouen-viewpoint-couple.webp",
    alt: "A couple overlooking the blue-washed hillside town of Chefchaouen at dusk",
    tag: "Chefchaouen, the blue city",
  },
  {
    src: "/images/hero/tangier-strait-of-gibraltar-view.webp",
    alt: "A kasbah terrace overlooking the Strait of Gibraltar in Tangier, Morocco",
    tag: "Tangier, where two seas meet",
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

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
        </div>
      ))}

      {/* brand-tinted legibility wash, replacing a flat black overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-2/90 via-espresso-2/25 to-terracotta/10 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />

      {/* story-style progress bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex gap-1.5 p-3 sm:p-4">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Show slide: ${s.tag}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25"
          >
            <span
              className={`block h-full origin-left rounded-full bg-amber ${
                i === active
                  ? `animate-[hero-progress_var(--dur)_linear_forwards] ${paused ? "[animation-play-state:paused]" : ""}`
                  : i < active
                    ? "w-full scale-x-100"
                    : "scale-x-0"
              }`}
              style={{ "--dur": `${AUTOPLAY_MS}ms` } as React.CSSProperties}
            />
          </button>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-[clamp(40px,7vw,80px)]">
        <div className="max-w-[640px] rounded-3xl border border-white/15 bg-black/20 p-7 backdrop-blur-md sm:p-9">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            A boutique private tour operator
          </span>
          <h1 className="text-[clamp(2.1rem,5vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-white">
            Morocco, from the Atlas passes to the Sahara dunes.
          </h1>
          <p className="mt-4 text-[1.05rem] text-white/85">
            Small, high-touch journeys through the imperial cities, the High Atlas and the Erg
            Chebbi Sahara — no fixed groups, no rushing, no itinerary sold off a shelf.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
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

        <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {SLIDES[active].tag}
        </div>
      </div>
    </section>
  );
}
