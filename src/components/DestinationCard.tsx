import Image from "next/image";
import Link from "next/link";
import type { Destination, Tour } from "@/lib/data";
import { DEST_DETAIL, destPhoto, destSlug, toursVisiting } from "@/lib/destinations";

// A destination on /destinations: a photograph with the name set over it,
// then the story, a small fact row and a few real itineraries that go there.
// `wide` lays photo and text side by side for the lead entry.
export default function DestinationCard({ dest, tours, wide = false }: { dest: Destination; tours: Tour[]; wide?: boolean }) {
  const photo = destPhoto(dest);
  const count = toursVisiting(dest.n);

  return (
    <article
      id={destSlug(dest.n)}
      className={`group scroll-mt-40 overflow-hidden rounded-[var(--radius-card)] border border-line bg-card ${
        wide ? "lg:grid lg:grid-cols-[1.25fr_1fr]" : "flex flex-col"
      }`}
    >
      <div className={`relative overflow-hidden bg-dune ${wide ? "aspect-[16/10] lg:aspect-auto lg:min-h-[520px]" : "aspect-[16/10]"}`}>
        {photo && (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={wide ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 50vw"}
            className="zoom object-cover"
          />
        )}
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(0deg,rgba(41,20,10,.8)_0%,rgba(41,20,10,0)_55%)]" />
        <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-7">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sun">On {count} of our routes</p>
          <h2 className="mt-1.5 text-[clamp(2rem,1.6rem+1.6vw,2.9rem)] leading-tight text-paper">{dest.n}</h2>
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-8 ${wide ? "lg:justify-center lg:p-10" : ""}`}>
        <p className="font-serif text-[1.25rem] leading-snug text-terra">{dest.d}</p>
        <p className="mt-4 text-[0.98rem] leading-[1.8]">{DEST_DETAIL[dest.n] ?? dest.d}</p>

        {tours.length > 0 && (
          <div className="mt-7">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted">Journeys that go here</p>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {tours.map((t) => (
                <li key={t.id}>
                  <Link href={`/tours/${t.id}`} className="group/t flex items-center justify-between gap-4 py-3">
                    <span className="text-[0.95rem] text-ink transition-colors group-hover/t:text-terra">{t.title}</span>
                    <span className="flex shrink-0 items-center gap-3 text-[0.82rem] text-muted">
                      {t.days} days
                      <span aria-hidden className="text-terra transition-transform duration-300 group-hover/t:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
          <Link href={`/tours?city=${dest.city}`} className="link-arrow">
            Journeys from {dest.city}
          </Link>
          <span className="rounded-full bg-sand px-3 py-1 text-[0.78rem] text-ink">Start from {dest.city}</span>
        </div>
      </div>
    </article>
  );
}
