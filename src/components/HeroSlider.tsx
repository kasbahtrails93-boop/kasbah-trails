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
      className="relative isolate flex h-[86vh] min-h-[560px] w-full items-end overflow-hidden text-white sm:h-[88vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
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

      {/* legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-[clamp(40px,7vw,80px)]">
        <p className="mb-2.5 text-sm font-bold tracking-wide text-amber">
          A boutique private tour operator · guided by locals
        </p>
        <h1 className="max-w-[18ch] text-[clamp(2.3rem,5.5vw,3.8rem)] font-semibold leading-[1.05] tracking-tight text-white">
          Morocco, from the Atlas passes to the Sahara dunes.
        </h1>
        <p className="mt-4 max-w-[58ch] text-[1.08rem] text-white/85">
          Small, high-touch journeys through the imperial cities, the High Atlas and the Erg
          Chebbi Sahara — no fixed groups, no rushing, no itinerary sold off a shelf.
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

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-sm text-white/80">
          <span className="font-serif text-lg font-semibold text-white">33</span>
          <span className="-ml-5">private itineraries, 3 to 15 days</span>
          <span className="font-serif text-lg font-semibold text-white">100%</span>
          <span className="-ml-5">private departures, no strangers added</span>
          <span className="font-serif text-lg font-semibold text-white">4</span>
          <span className="-ml-5">start cities — Marrakech, Fes, Casablanca, Tangier</span>
        </div>
      </div>

      {/* slide indicators */}
      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 sm:flex">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Show slide: ${s.tag}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-7 bg-amber" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-[clamp(18px,4vw,40px)] z-10 hidden text-xs font-semibold uppercase tracking-wide text-white/70 sm:block">
        {SLIDES[active].tag}
      </div>
    </section>
  );
}
