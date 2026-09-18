import { TINT, type Tour } from "@/lib/data";
import { waLink } from "@/lib/wa";
import SceneSvg from "./SceneSvg";

export default function TourCard({ tour, onOpen }: { tour: Tour; onOpen: (id: string) => void }) {
  const tint = TINT[tour.origin] ?? TINT.Marrakech;

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_18px_40px_-24px_rgba(63,33,9,.45)]">
      <div className="relative aspect-[16/10]">
        <SceneSvg scene={tour.scene} tint={tint} uid={tour.id} />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-espresso">
            {tour.days} days
          </span>
          <span className="rounded-full bg-espresso/85 px-2.5 py-1 text-xs font-bold text-white">
            {tour.cat}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-muted">
          {tour.from}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          {tour.to}
        </div>
        <h3 className="mb-2 font-serif text-lg font-semibold">{tour.title}</h3>
        <p className="mb-4 text-sm text-muted">{tour.blurb}</p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onOpen(tour.id)}
            className="rounded-full border border-line px-4 py-2 text-sm font-bold text-espresso hover:border-terracotta hover:text-terracotta"
          >
            View itinerary
          </button>
          <a
            href={waLink(`Hi Kasbah Trails, I'd like details on the ${tour.title}.`)}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-[#1f7a4d] px-4 py-2 text-sm font-bold text-white hover:bg-[#186139]"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
