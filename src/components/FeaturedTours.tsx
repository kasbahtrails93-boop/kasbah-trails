import Link from "next/link";
import { TOURS } from "@/lib/data";
import TourCard from "./TourCard";

const FEATURED_IDS = ["3-mar", "5-mar", "7-mar", "8-best-mar", "10-totally-mar", "12-mar"];
const CITIES = ["Marrakech", "Fes", "Casablanca", "Tangier"];

export default function FeaturedTours() {
  const featured = FEATURED_IDS.map((id) => TOURS.find((t) => t.id === id)!).filter(Boolean);

  return (
    <section id="tours" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(44px,7vw,80px)]">
        <div className="text-center">
          <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">A few favourite routes</h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-[1.06rem] text-muted">
            A taste of what&apos;s possible — from a three-day dash to the dunes to a twelve-day
            grand loop. All 33 itineraries are ready to tailor.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted">Start from:</span>
            {CITIES.map((c) => (
              <Link
                key={c}
                href={`/tours?city=${c}`}
                className="rounded-lg border border-line px-4 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-terracotta hover:text-terracotta"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3.5 text-[.98rem] font-bold text-espresso hover:border-terracotta hover:text-terracotta"
          >
            View all 33 tours
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
