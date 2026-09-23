import Link from "next/link";
import { TOURS, type Tour } from "@/lib/data";
import { pickPhoto } from "@/lib/photoPool";
import { tourPlaces } from "@/lib/places";
import JourneyRail, { type RailGroup, type RailTour } from "./JourneyRail";

const FAVOURITES = ["8-best-mar", "5-mar", "7-mar", "3-mar", "15-grand-mar", "8-tan-mar", "11-casa", "12-mar"];

function toRail(t: Tour): RailTour {
  return {
    id: t.id,
    title: t.title,
    days: t.days,
    cat: t.cat,
    route: t.from === t.to ? `Round trip from ${t.from}` : `${t.from} to ${t.to}`,
    places: tourPlaces(t)
      .map((p) => p.name)
      .filter((n) => n !== t.from && n !== t.to)
      .slice(0, 4),
    photo: pickPhoto(t.scene, t.id),
  };
}

const byDays = (a: Tour, b: Tour) => a.days - b.days;

// Server side: builds each chip's tour list (itinerary text stays on the
// server), then the client rail handles chips and scrolling.
export default function Journeys() {
  const groups: RailGroup[] = [
    { key: "fav", label: "Our favourites", tours: FAVOURITES.map((id) => TOURS.find((t) => t.id === id)!).filter(Boolean).map(toRail) },
    { key: "desert", label: "Sahara & desert", tours: TOURS.filter((t) => t.cat === "Desert").sort(byDays).map(toRail) },
    { key: "imperial", label: "Imperial cities", tours: TOURS.filter((t) => t.cat === "Imperial & Culture").sort(byDays).map(toRail) },
    { key: "grand", label: "Grand tours", tours: TOURS.filter((t) => t.cat === "Grand Tour").sort(byDays).map(toRail) },
    { key: "short", label: "Under a week", tours: TOURS.filter((t) => t.days < 7).sort(byDays).map(toRail) },
  ];

  return (
    <section id="tours" className="section-y scroll-mt-24 bg-sand">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[40rem]">
            <p className="eyebrow text-terra">Private journeys</p>
            <h2 className="mt-4 text-h2">Itineraries ready to make your own</h2>
            <p className="mt-4 text-[1.04rem] leading-relaxed">
              From a three-day dash to the dunes to a fifteen-day grand loop. Pick a starting point; we&apos;ll reshape
              it around your dates and pace.
            </p>
          </div>
          <Link href="/tours" className="btn btn-dark">
            All {TOURS.length} journeys
          </Link>
        </div>
        <JourneyRail groups={groups} />
      </div>
    </section>
  );
}
