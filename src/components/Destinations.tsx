import Image from "next/image";
import { DEST } from "@/lib/data";

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
};

export default function Destinations() {
  return (
    <section id="destinations">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(56px,8vw,104px)]">
        <div className="text-center">
          <p className="mb-2.5 text-sm font-bold tracking-wide text-amber-d">Where you&apos;ll go</p>
          <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">Places worth the drive</h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-[1.06rem] text-muted">
            The sights that thread through our tours — mix and match them into the trip that&apos;s
            yours.
          </p>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3">
          {DEST.map((d) => {
            const photo = PHOTOS[d.n];
            return (
              <a
                key={d.n}
                href="#tours"
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(63,33,9,.45)]"
              >
                {photo && (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <b className="font-serif text-lg">{d.n}</b>
                  <small className="block text-sm text-white/85">{d.d}</small>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
