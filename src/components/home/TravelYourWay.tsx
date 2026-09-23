import Image from "next/image";
import Link from "next/link";
import { TOURS } from "@/lib/data";

// "Travel your way": the three kinds of trip as tall photo tiles with the
// title set over the image, then the four arrival cities as quick filters.
// Counts come straight from TOURS.
const STYLES = [
  {
    cat: "Desert",
    name: "Sahara & desert",
    line: "Kasbahs, gorges and nights in the Erg Chebbi dunes",
    photo: {
      src: "/images/pool/mhamid-desert-dunes-sunset.webp",
      alt: "Sunset over the rolling dunes of the Sahara desert near Mhamid, Morocco",
    },
  },
  {
    cat: "Imperial & Culture",
    name: "Imperial cities",
    line: "Fes, Meknes and Chefchaouen with local guides",
    photo: {
      src: "/images/destinations/fes-medina-chouara-tannery.webp",
      alt: "The Chouara tannery pits in the Fes medina, Morocco",
    },
  },
  {
    cat: "Grand Tour",
    name: "Grand tours",
    line: "The whole country, from the Atlas to the Atlantic",
    photo: {
      src: "/images/pool/casablanca-corniche-lighthouse.webp",
      alt: "The lighthouse and Atlantic coastline along Casablanca's corniche, Morocco",
    },
  },
];

const CITIES = ["Marrakech", "Fes", "Casablanca", "Tangier"];

export default function TravelYourWay() {
  return (
    <section className="section-y">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-terra">Travel your way</p>
            <h2 className="mt-4 text-h2">Three ways to see Morocco</h2>
          </div>
          <p className="max-w-[46ch] text-[1.04rem] leading-relaxed lg:justify-self-end">
            Every journey is private and can be reshaped, but most begin as one of these.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {STYLES.map((s) => {
            const count = TOURS.filter((t) => t.cat === s.cat).length;
            return (
              <li key={s.cat}>
                <Link
                  href={`/tours?cat=${encodeURIComponent(s.cat)}`}
                  className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] bg-kasbah-2 p-7 md:aspect-[3/4]"
                >
                  <Image src={s.photo.src} alt={s.photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="zoom object-cover" />
                  <div aria-hidden className="absolute inset-0 bg-[linear-gradient(0deg,rgba(41,20,10,.85)_0%,rgba(41,20,10,.1)_55%,rgba(41,20,10,.05)_100%)] transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="relative">
                    <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-sun">{count} journeys</p>
                    <h3 className="mt-2 text-[2rem] uppercase leading-[1.05] tracking-[0.04em] text-paper">{s.name}</h3>
                    <p className="mt-3 max-w-[30ch] text-[0.95rem] leading-snug text-paper/80">{s.line}</p>
                    <span className="mt-5 inline-flex items-center gap-2 border-b border-paper/40 pb-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-paper transition-colors group-hover:border-sun group-hover:text-sun">
                      Explore
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="mr-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-muted">Or start from</span>
          {CITIES.map((c) => (
            <Link
              key={c}
              href={`/tours?city=${c}`}
              className="rounded-full border border-line bg-card px-4 py-2 text-[0.92rem] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              {c}
              <span className="ml-2 text-[0.8rem] text-muted">{TOURS.filter((t) => t.from === c).length}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
