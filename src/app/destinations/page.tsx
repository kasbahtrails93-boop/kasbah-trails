import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DEST } from "@/lib/data";
import { pickPhoto } from "@/lib/photoPool";
import { waLink } from "@/lib/wa";

const PHOTOS: Record<string, { src: string; alt: string }> = {
  Marrakech: {
    src: "/images/destinations/marrakech-jemaa-el-fnaa-sunset.webp",
    alt: "Jemaa el-Fnaa square and the Koutoubia minaret at sunset, Marrakech, Morocco",
  },
  "The Sahara": {
    src: "/images/destinations/erg-chebbi-merzouga-camel-trek.webp",
    alt: "Camel trek crossing the Erg Chebbi dunes near Merzouga in the Sahara desert",
  },
  Fes: {
    src: "/images/destinations/fes-medina-chouara-tannery.webp",
    alt: "The Chouara tannery pits in the Fes medina, Morocco",
  },
  Chefchaouen: {
    src: "/images/destinations/chefchaouen-blue-city-stairway.webp",
    alt: "A blue-painted stairway lined with plant pots in Chefchaouen, Morocco",
  },
  "Aït Ben Haddou": {
    src: "/images/destinations/ait-ben-haddou-kasbah-unesco-site.webp",
    alt: "The fortified earthen ksar of Aït Ben Haddou, a UNESCO World Heritage site in Morocco",
  },
  Essaouira: {
    src: "/images/destinations/essaouira-skala-fishing-port.webp",
    alt: "The Skala fortress and blue fishing boats in the harbour of Essaouira, Morocco",
  },
  Casablanca: {
    src: "/images/pool/casablanca-corniche-lighthouse.webp",
    alt: "The lighthouse and Atlantic coastline along Casablanca's corniche, Morocco",
  },
  Tangier: {
    src: "/images/hero/tangier-corniche-coast.webp",
    alt: "An aerial view of Tangier's coastal corniche road curving along the Mediterranean, Morocco",
  },
  Rabat: {
    src: "/images/pool/rabat-hassan-tower-archway.webp",
    alt: "A minaret framed by a stone archway in Rabat, Morocco's capital",
  },
};

const DETAIL: Record<string, string> = {
  Marrakech:
    "The red city's medina is a genuine maze — horse carts, spice stalls and hidden riads behind unmarked doors, opening onto the chaos of Jemaa el-Fnaa at dusk: snake charmers, orange-juice carts and food stalls lit by gas lamps. It's the starting point for most of our routes, and worth two full days on its own before you head anywhere else.",
  "The Sahara":
    "Erg Chebbi's dunes rise close to 150 metres above the plain near Merzouga. You reach them by camel at golden hour, then spend the night at a Berber-run desert camp — dinner under a genuinely black sky, drums around the fire, and a wake-up call for sunrise back over the dunes. Every one of our desert routes builds in at least one night here.",
  Fes:
    "Fes el-Bali is the world's largest car-free urban area and still a working medina — thousands of narrow lanes, leather tanneries dyeing in the open air, and artisans doing the same trades their grandfathers did. It rewards a local guide more than almost anywhere else in the country; getting lost here isn't charming, it's just lost.",
  Chefchaouen:
    "Every wall, stairway and doorframe in the old town is painted some shade of blue, climbing the Rif Mountains above the valley below. It's a smaller stop than the imperial cities — half a day is enough to wander the lanes and find the viewpoint above town — but it's the single most photographed place on most itineraries.",
  "Aït Ben Haddou":
    "A fortified ksar of red mudbrick towers on the old caravan road to the Sahara, and still partly inhabited. It's appeared in enough films and TV that the walk up feels familiar before you arrive, but crossing the river on foot at sunrise or sunset — when the light turns the earth walls copper — is what actually earns it the stop.",
  Essaouira:
    "A walled Atlantic port town with a working fishing harbour, old Portuguese-built ramparts, and sea air that's a genuine break from the desert heat inland. Blue fishing boats unload the day's catch right at the port gate, and the medina's arts scene gives it a different rhythm from anywhere else on the route.",
  Casablanca:
    "Morocco's largest city and its economic capital — a modern skyline along the Atlantic, anchored by the Hassan II Mosque, one of the largest in the world, built out over the water itself. Less about lingering in the medina than the other stops, but the natural landing point for a flight in and the start of many of our routes.",
  Tangier:
    "Perched where the Atlantic meets the Mediterranean at the Strait of Gibraltar, close enough that Spain is visible across the water on a clear day. A former international city with a genuinely mixed history, its whitewashed medina and kasbah overlook the strait — the natural starting point for routes that head south through Chefchaouen and the Rif.",
  Rabat:
    "Morocco's capital, and a quieter, more orderly counterpoint to Marrakech or Fes — wide boulevards, the unfinished Hassan Tower and its 200-plus sandstone columns, and the Kasbah of the Udayas overlooking the river mouth. Routes from Casablanca or Tangier usually pass through on the way to Chefchaouen or Fes, and it's an easy, worthwhile half-day stop rather than a destination on its own.",
};

const heroPhoto = pickPhoto("coast", "destinations-index");

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
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-sand-2">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Destinations" }]} />
        </div>
      </div>

      <div className="relative h-[40vh] min-h-[300px] max-h-[440px] w-full overflow-hidden">
        <Image src={heroPhoto.src} alt={heroPhoto.alt} fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/5" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-[clamp(24px,4vw,40px)]">
            <h1 className="max-w-[20ch] font-serif text-[clamp(1.9rem,4vw,3.1rem)] font-semibold tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,.4)]">
              Places worth the drive
            </h1>
            <p className="mt-4 max-w-[60ch] text-[1.02rem] text-white/85">
              The sights that thread through our tours — mix and match them into the trip
              that&apos;s yours.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,64px)]">
        <p className="mx-auto max-w-[70ch] text-center text-[1.06rem] leading-relaxed text-muted">
          No single itinerary visits all nine — that&apos;s the point. A short desert escape covers
          the Sahara and the kasbah road; a full grand tour threads together the imperial cities,
          the Rif and the Atlantic coast too. Each stop below links to the tours that actually go
          there, filtered by the city you&apos;d start from.
        </p>

        <div className="mt-16 space-y-16 sm:space-y-20">
          {DEST.map((d, i) => {
            const photo = PHOTOS[d.n];
            const reversed = i % 2 === 1;
            return (
              <div key={d.n} className="grid items-center gap-8 sm:grid-cols-2 sm:gap-14">
                <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-line ${reversed ? "sm:order-2" : ""}`}>
                  {photo && (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className={reversed ? "sm:order-1" : ""}>
                  <h2 className="font-serif text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-espresso">
                    {d.n}
                  </h2>
                  <p className="mt-3 text-[1.02rem] leading-relaxed text-muted">
                    {DETAIL[d.n] ?? d.d}
                  </p>
                  <Link
                    href={`/tours?city=${d.city}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:text-terracotta-d"
                  >
                    Tours from {d.city} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-[760px] rounded-lg border border-dashed border-line p-6 text-center">
          <p className="text-ink">
            Not sure which combination fits your trip? Browse{" "}
            <Link href="/tours" className="font-semibold text-terracotta underline">
              all 33 private itineraries
            </Link>{" "}
            or message us on{" "}
            <a
              href={waLink("Hi Kasbah Trails, I'd like help choosing which destinations to combine.")}
              target="_blank"
              rel="noopener"
              className="font-semibold text-terracotta underline"
            >
              WhatsApp
            </a>{" "}
            and we&apos;ll suggest a route around what you want to see.
          </p>
        </div>
      </div>
    </div>
  );
}
