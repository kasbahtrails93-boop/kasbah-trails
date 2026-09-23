import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/lib/data";

// Everything a card needs; lets client components pass tours without the
// (large) day-by-day itinerary.
export type TourSummary = Omit<Tour, "itin">;
import { pickPhoto } from "@/lib/photoPool";

function Meta({ d, children }: { d: string; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-sun-d">
        <path d={d} />
      </svg>
      {children}
    </span>
  );
}

// Journey card: photo with style tag, a meta line (days, route), serif
// title, summary and one clear link. The whole card is clickable.
export default function TourCard({
  tour,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  tour: TourSummary;
  sizes?: string;
}) {
  const photo = pickPhoto(tour.scene, tour.id);
  const route = tour.from === tour.to ? `Round trip · ${tour.from}` : `${tour.from} to ${tour.to}`;
  return (
    <article className="card card-hover group relative flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-dune">
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="zoom object-cover" />
        <span className="tag absolute left-4 top-4">{tour.cat}</span>
        <span className="absolute right-4 top-4 rounded-[2px] bg-palm px-2 py-1 text-[0.66rem] font-medium uppercase tracking-[0.14em] text-paper">
          {tour.days} days
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.82rem] text-muted">
          <Meta d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z">{route}</Meta>
        </div>
        <h3 className="mt-3 text-[1.4rem] leading-snug">
          <Link href={`/tours/${tour.id}`} className="after:absolute after:inset-0 group-hover:text-terra">
            {tour.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-[0.93rem] leading-relaxed text-muted">{tour.blurb}</p>
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between border-t border-line pt-5">
            <span className="link-arrow">View journey</span>
            <span className="text-[0.8rem] text-muted">Private · tailor-made</span>
          </div>
        </div>
      </div>
    </article>
  );
}
