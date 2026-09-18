// A curated, real-photo pool used to give tour/blog cards actual photography
// instead of only procedural SVG art. Picks are deterministic per-id so a
// given tour or post always shows the same photo across renders.

export interface Photo {
  src: string;
  alt: string;
}

const DUNES: Photo[] = [
  {
    src: "/images/hero/sahara-camel-caravan-sunset.webp",
    alt: "Camel caravan silhouetted against a Sahara desert sunset near Erg Chebbi, Morocco",
  },
  {
    src: "/images/destinations/erg-chebbi-merzouga-camel-trek.webp",
    alt: "Camel trek crossing the Erg Chebbi dunes near Merzouga in the Sahara desert",
  },
  {
    src: "/images/pool/mhamid-desert-dunes-sunset.webp",
    alt: "Sunset over the rolling dunes of the Sahara desert near Mhamid, Morocco",
  },
];

const MEDINA: Photo[] = [
  {
    src: "/images/hero/ait-ben-haddou-kasbah.webp",
    alt: "The fortified earthen ksar of Aït Ben Haddou, a UNESCO World Heritage site in Morocco",
  },
  {
    src: "/images/destinations/fes-medina-chouara-tannery.webp",
    alt: "The Chouara tannery pits in the Fes medina, Morocco",
  },
  {
    src: "/images/destinations/marrakech-jemaa-el-fnaa-sunset.webp",
    alt: "Jemaa el-Fnaa square and the Koutoubia minaret at sunset, Marrakech, Morocco",
  },
  {
    src: "/images/destinations/chefchaouen-blue-city-stairway.webp",
    alt: "A blue-painted stairway lined with plant pots in Chefchaouen, Morocco",
  },
  {
    src: "/images/pool/rabat-hassan-tower-archway.webp",
    alt: "A minaret framed by a stone archway in Rabat, Morocco's capital",
  },
  {
    src: "/images/pool/ait-ben-haddou-guide-kasbah-road.webp",
    alt: "A local guide overlooking the kasbah of Aït Ben Haddou on Morocco's kasbah road",
  },
];

const COAST: Photo[] = [
  {
    src: "/images/destinations/essaouira-skala-fishing-port.webp",
    alt: "The Skala fortress and blue fishing boats in the harbour of Essaouira, Morocco",
  },
  {
    src: "/images/hero/tangier-strait-of-gibraltar-view.webp",
    alt: "A kasbah terrace overlooking the Strait of Gibraltar in Tangier, Morocco",
  },
  {
    src: "/images/pool/casablanca-corniche-lighthouse.webp",
    alt: "The lighthouse and Atlantic coastline along Casablanca's corniche, Morocco",
  },
];

const POOLS: Record<"dunes" | "medina" | "coast", Photo[]> = {
  dunes: DUNES,
  medina: MEDINA,
  coast: COAST,
};

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function pickPhoto(scene: "dunes" | "medina" | "coast", seed: string): Photo {
  const pool = POOLS[scene];
  return pool[hashStr(seed) % pool.length];
}
