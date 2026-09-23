"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Rail from "./Rail";

export interface RailTour {
  id: string;
  title: string;
  days: number;
  cat: string;
  route: string;
  places: string[];
  photo: { src: string; alt: string };
}

export interface RailGroup {
  key: string;
  label: string;
  tours: RailTour[];
}

// Category chips over a scrolling row of itinerary cards.
export default function JourneyRail({ groups }: { groups: RailGroup[] }) {
  const [active, setActive] = useState(groups[0].key);
  const group = groups.find((g) => g.key === active) ?? groups[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Kinds of journey"
        className="mt-10 flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none]"
      >
        {groups.map((g) => (
          <button
            key={g.key}
            type="button"
            role="tab"
            aria-selected={g.key === active}
            onClick={() => setActive(g.key)}
            className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-[0.9rem] transition-colors duration-300 ${
              g.key === active ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink hover:border-ink"
            }`}
          >
            {g.label}
            <span className={`ml-2 text-[0.8rem] ${g.key === active ? "text-sun" : "text-muted"}`}>
              {g.tours.length}
            </span>
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-8">
        <Rail label={`${group.label} journeys`} resetKey={group.key}>
          {group.tours.map((t) => (
            <li key={t.id} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-3.75rem)/4)]">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-card transition-shadow duration-500 hover:shadow-[0_24px_48px_-30px_rgba(43,23,12,.45)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-dune">
                  <Image
                    src={t.photo.src}
                    alt={t.photo.alt}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 24vw"
                    className="zoom object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-paper/95 px-3 py-1 text-[0.72rem] font-medium text-ink">
                    {t.cat}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[1.2rem] leading-snug">
                    <Link href={`/tours/${t.id}`} className="after:absolute after:inset-0 group-hover:text-terra">
                      {t.title}
                    </Link>
                  </h3>
                  {t.places.length > 0 && (
                    <p className="mt-2 line-clamp-2 text-[0.84rem] leading-snug text-terra">{t.places.join(", ")}</p>
                  )}
                  <p className="mt-3 text-[0.86rem] text-muted">{t.route}</p>
                  <div className="mt-auto pt-5">
                    <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
                      <span className="text-[0.95rem] text-ink">
                        <span className="font-serif text-[1.3rem]">{t.days}</span> days · private
                      </span>
                      <span className="rounded-[3px] border border-ink/25 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink transition-colors group-hover:border-terra group-hover:bg-terra group-hover:text-paper">
                        View itinerary
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </Rail>
      </div>
    </div>
  );
}
