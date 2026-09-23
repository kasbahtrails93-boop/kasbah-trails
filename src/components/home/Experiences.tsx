import Image from "next/image";
import Link from "next/link";
import { TOURS } from "@/lib/data";

// Signature experiences as tall photo cards, each a real highlight from a real
// itinerary and linked to that tour.
const MOMENTS = [
  {
    highlight: "Camel trek & night in a Sahara camp",
    tour: "3-mar",
    photo: {
      src: "/images/hero/sahara-caravan-guide-golden-hour.webp",
      alt: "A guide leading a loaded camel caravan across the Sahara dunes at golden hour, Morocco",
    },
  },
  {
    highlight: "Tizi n'Tichka & Aït Ben Haddou",
    tour: "4-mar-fes",
    photo: {
      src: "/images/destinations/ait-ben-haddou-kasbah-unesco-site.webp",
      alt: "The fortified earthen ksar of Aït Ben Haddou, a UNESCO World Heritage site in Morocco",
    },
  },
  {
    highlight: "Chefchaouen & Volubilis",
    tour: "8-tan-mar",
    photo: {
      src: "/images/destinations/chefchaouen-blue-city-stairway.webp",
      alt: "A blue-painted stairway lined with plant pots in Chefchaouen, Morocco",
    },
  },
  {
    highlight: "Gorges & Essaouira coast",
    tour: "9-tan-mar",
    photo: {
      src: "/images/destinations/essaouira-skala-fishing-port.webp",
      alt: "The Skala fortress and blue fishing boats in the harbour of Essaouira, Morocco",
    },
  },
];

export default function Experiences() {
  const moments = MOMENTS.map((m) => ({ ...m, t: TOURS.find((t) => t.id === m.tour) })).filter(
    (m): m is typeof m & { t: NonNullable<typeof m.t> } => !!m.t && m.t.highlights.includes(m.highlight)
  );
  return (
    <section id="experiences" className="scroll-mt-24 pb-[var(--sy)]">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[40rem]">
            <p className="eyebrow text-terra">Signature experiences</p>
            <h2 className="mt-4 text-h2">Moments the routes are built around</h2>
          </div>
          <p className="max-w-[40ch] text-[0.98rem] leading-relaxed text-muted">
            Taken straight from our itineraries. Each opens the journey that includes it.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {moments.map((m, i) => (
            <li key={m.highlight} className={i % 2 ? "lg:mt-14" : ""}>
              <Link href={`/tours/${m.t.id}`} className="group relative block aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] bg-dune">
                <Image src={m.photo.src} alt={m.photo.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="zoom object-cover" />
                <div aria-hidden className="absolute inset-0 bg-[linear-gradient(0deg,rgba(41,20,10,.7)_0%,rgba(41,20,10,0)_45%)]" />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-full bg-kasbah-2/75 py-2.5 pl-4 pr-3 text-paper backdrop-blur-sm transition-colors duration-300 group-hover:bg-terra sm:inset-x-4 sm:bottom-4">
                  <span className="text-[0.82rem] leading-tight sm:text-[0.9rem]">{m.highlight}</span>
                  <span aria-hidden className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
              <p className="mt-3 line-clamp-1 text-[0.82rem] text-muted">Part of the {m.t.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
