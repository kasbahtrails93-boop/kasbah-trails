import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DestinationCard from "@/components/DestinationCard";
import DestinationNav from "@/components/DestinationNav";
import { Star } from "@/components/Ornament";
import { DEST, TOURS } from "@/lib/data";
import { destPhoto, destSlug, toursByDestination } from "@/lib/destinations";
import { waLink } from "@/lib/wa";

// Four places for the hero mosaic.
const MOSAIC = ["The Sahara", "Chefchaouen", "Fes", "Essaouira"];

export const metadata: Metadata = {
  title: "Morocco Destinations",
  description:
    "The places that thread through every Kasbah Trails route — Marrakech, the Sahara, Fes, Chefchaouen, Aït Ben Haddou, Essaouira, Casablanca, Tangier and Rabat. See what each is like and which tours visit it.",
  alternates: { canonical: "/destinations" },
};

const destJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: DEST.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: d.n,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kasbahtrails.com/" },
    { "@type": "ListItem", position: 2, name: "Destinations", item: "https://kasbahtrails.com/destinations" },
  ],
};

export default function DestinationsPage() {
  const [lead, ...rest] = DEST;
  const mosaic = MOSAIC.map((n) => DEST.find((d) => d.n === n)!).filter(Boolean);
  const nav = DEST.map((d) => ({ id: destSlug(d.n), name: d.n }));
  const tours = toursByDestination(DEST.map((d) => d.n));

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* hero: story on the left, a mosaic of four places on the right */}
      <section className="relative isolate overflow-hidden bg-kasbah text-paper">
        <div aria-hidden className="zellige absolute inset-0 -z-10 opacity-[0.05]" />
        <div className="container-site grid items-center gap-12 py-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-20">
          <div>
            <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Destinations" }]} />
            <p className="mt-10 flex items-center gap-2.5 text-[0.74rem] font-medium uppercase tracking-[0.28em] text-sun">
              <Star size={9} />
              Destinations
            </p>
            <h1 className="mt-4 text-h1 text-paper">Places worth the drive</h1>
            <p className="mt-5 max-w-[50ch] text-[1.05rem] leading-relaxed text-paper/75">
              No single itinerary visits all nine — that&apos;s the point. A short desert escape covers the Sahara and
              the kasbah road; a grand tour threads together the imperial cities, the Rif and the Atlantic coast too.
            </p>
            <dl className="mt-9 grid max-w-[30rem] grid-cols-3 border-t border-line-dark pt-6">
              {[
                [String(DEST.length), "destinations"],
                [String(TOURS.length), "private routes"],
                ["4", "start cities"],
              ].map(([n, l], k) => (
                <div key={l} className={k ? "border-l border-line-dark pl-5" : ""}>
                  <dd className="font-serif text-[2rem] leading-none text-sun">{n}</dd>
                  <dt className="mt-1.5 text-[0.82rem] text-paper/65">{l}</dt>
                </div>
              ))}
            </dl>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {mosaic.map((d, k) => {
              const photo = destPhoto(d);
              return (
                <li key={d.n} className={k % 2 ? "translate-y-5 sm:translate-y-8" : ""}>
                  <a href={`#${destSlug(d.n)}`} className="group relative block aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-kasbah-2">
                    {photo && (
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        preload={k < 2}
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="zoom object-cover"
                      />
                    )}
                    <div aria-hidden className="absolute inset-0 bg-[linear-gradient(0deg,rgba(41,20,10,.75)_0%,rgba(41,20,10,0)_50%)]" />
                    <span className="absolute bottom-4 left-4 font-serif text-[1.2rem] text-paper sm:text-[1.4rem]">{d.n}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <DestinationNav items={nav} />

      <section className="section-y bg-sand">
        <div className="container-site space-y-6 lg:space-y-8">
          <DestinationCard dest={lead} tours={tours[lead.n]} wide />
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {rest.map((d) => (
              <DestinationCard key={d.n} dest={d} tours={tours[d.n]} />
            ))}
          </div>
        </div>
      </section>

      {/* closing: build a route from these */}
      <section className="section-y">
        <div className="container-site">
          <div className="relative isolate overflow-hidden rounded-[12px] bg-kasbah px-7 py-12 text-center text-paper sm:px-12 sm:py-16">
            <div aria-hidden className="zellige absolute inset-0 -z-10 opacity-[0.06]" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-sun">Build your route</p>
            <h2 className="mx-auto mt-4 max-w-[22ch] text-h2 text-paper">Not sure which places to combine?</h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-[1.02rem] leading-relaxed text-paper/75">
              Tell us what you want to see and how long you have, and we&apos;ll suggest a route around it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Plan my route
              </Link>
              <a
                href={waLink("Hi Kasbah Trails, I'd like help choosing which destinations to combine.")}
                target="_blank"
                rel="noopener"
                className="btn btn-outline-light"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
