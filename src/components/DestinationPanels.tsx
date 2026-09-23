"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface Panel {
  name: string;
  line: string;
  href: string;
  hrefLabel: string;
  count: number;
  photo: { src: string; alt: string };
}

// Destinations as a horizontal story. Desktop: tall panels side by side; the
// one being explored (hover, focus or tap) opens to show its story, the rest
// fold into slim labelled strips. Phones: a swipeable row of photo cards.
export default function DestinationPanels({ panels }: { panels: Panel[] }) {
  const [active, setActive] = useState(0);

  return (
    <>
      <ul className="mt-12 hidden h-[580px] gap-3 lg:flex">
        {panels.map((p, i) => {
          const on = i === active;
          return (
            <li
              key={p.name}
              onMouseEnter={() => setActive(i)}
              className={`relative min-w-0 overflow-hidden rounded-[var(--radius-card)] bg-kasbah-2 transition-[flex-grow] duration-700 ease-[var(--ease)] ${
                on ? "flex-[5]" : "flex-[1]"
              }`}
            >
              <Image
                src={p.photo.src}
                alt={p.photo.alt}
                fill
                sizes="55vw"
                className={`object-cover transition-transform duration-[1200ms] ${on ? "scale-100" : "scale-110"}`}
              />
              <div
                aria-hidden
                className={`absolute inset-0 transition-colors duration-700 ${
                  on ? "bg-[linear-gradient(0deg,rgba(41,20,10,.85)_0%,rgba(41,20,10,.1)_55%)]" : "bg-kasbah-2/55"
                }`}
              />

              {/* folded strip */}
              <button
                type="button"
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-label={`Show ${p.name}`}
                aria-expanded={on}
                className={`absolute inset-0 flex flex-col items-center justify-end pb-8 transition-opacity duration-500 ${
                  on ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
              >
                <span className="font-serif text-[1.5rem] whitespace-nowrap text-paper [writing-mode:vertical-rl] rotate-180">
                  {p.name}
                </span>
              </button>

              {/* open panel */}
              <div
                className={`absolute inset-x-0 bottom-0 p-9 transition-[opacity,transform] duration-700 ${
                  on ? "translate-y-0 opacity-100 delay-200" : "pointer-events-none translate-y-4 opacity-0"
                }`}
              >
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sun">On {p.count} of our routes</p>
                <h3 className="mt-2 text-[2.4rem] leading-tight text-paper">{p.name}</h3>
                <p className="mt-2 max-w-[46ch] text-[1rem] leading-relaxed text-paper/80">{p.line}</p>
                <Link href={p.href} tabIndex={on ? 0 : -1} className="btn btn-light btn-sm mt-6">
                  {p.hrefLabel}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <ul className="-mx-[clamp(20px,5vw,48px)] mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(20px,5vw,48px)] pb-2 [scrollbar-width:none] lg:hidden">
        {panels.map((p) => (
          <li key={p.name} className="w-[78%] shrink-0 snap-start sm:w-[44%]">
            <Link href={p.href} className="group relative block aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] bg-dune">
              <Image src={p.photo.src} alt={p.photo.alt} fill sizes="(max-width: 640px) 80vw, 45vw" className="zoom object-cover" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(0deg,rgba(41,20,10,.85)_0%,rgba(41,20,10,0)_55%)]" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-[0.64rem] font-medium uppercase tracking-[0.2em] text-sun">On {p.count} routes</p>
                <h3 className="mt-1 text-[1.6rem] text-paper">{p.name}</h3>
                <p className="mt-1 line-clamp-2 text-[0.88rem] leading-snug text-paper/80">{p.line}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
