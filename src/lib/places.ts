import type { Tour } from "./data";
import type { Photo } from "./photoPool";

// One real photo per named place, reused by the destinations teaser, the
// /destinations page and every tour page's route gallery. `match` lists the
// spellings that appear in itinerary day titles and highlights, so a tour's
// gallery only ever shows places that tour actually visits.
export interface Place {
  name: string;
  match: RegExp;
  photo: Photo;
}

export const PLACES: Place[] = [
  {
    name: "The Sahara",
    match: /\b(Merzouga|Erg Chebbi|Sahara)\b/i,
    photo: {
      src: "/images/destinations/erg-chebbi-merzouga-camel-trek.webp",
      alt: "Camel trek crossing the Erg Chebbi dunes near Merzouga in the Sahara desert",
    },
  },
  {
    name: "Aït Ben Haddou",
    match: /\bA[iï]t Ben Haddou\b/i,
    photo: {
      src: "/images/destinations/ait-ben-haddou-kasbah-unesco-site.webp",
      alt: "The fortified earthen ksar of Aït Ben Haddou, a UNESCO World Heritage site in Morocco",
    },
  },
  {
    name: "Ouarzazate",
    match: /\bOuarzazate\b/i,
    photo: {
      src: "/images/hero/kasbah-road-ouarzazate.webp",
      alt: "The Taourirt Kasbah's red earthen towers against a clear sky in Ouarzazate, Morocco",
    },
  },
  {
    name: "Marrakech",
    match: /\bMarrakech\b/i,
    photo: {
      src: "/images/destinations/marrakech-jemaa-el-fnaa-sunset.webp",
      alt: "Jemaa el-Fnaa square and the Koutoubia minaret at sunset, Marrakech, Morocco",
    },
  },
  {
    name: "Fes",
    match: /\bFe[sz]\b/i,
    photo: {
      src: "/images/destinations/fes-medina-chouara-tannery.webp",
      alt: "The Chouara tannery pits in the Fes medina, Morocco",
    },
  },
  {
    name: "Chefchaouen",
    match: /\bChefchaouen\b/i,
    photo: {
      src: "/images/destinations/chefchaouen-blue-city-stairway.webp",
      alt: "A blue-painted stairway lined with plant pots in Chefchaouen, Morocco",
    },
  },
  {
    name: "Essaouira",
    match: /\bEssaouira\b/i,
    photo: {
      src: "/images/destinations/essaouira-skala-fishing-port.webp",
      alt: "The Skala fortress and blue fishing boats in the harbour of Essaouira, Morocco",
    },
  },
  {
    name: "Casablanca",
    match: /\bCasablanca\b/i,
    photo: {
      src: "/images/pool/casablanca-corniche-lighthouse.webp",
      alt: "The lighthouse and Atlantic coastline along Casablanca's corniche, Morocco",
    },
  },
  {
    name: "Rabat",
    match: /\bRabat\b/i,
    photo: {
      src: "/images/pool/rabat-hassan-tower-archway.webp",
      alt: "A minaret framed by a stone archway in Rabat, Morocco's capital",
    },
  },
  {
    name: "Tangier",
    match: /\bTangier\b/i,
    photo: {
      src: "/images/hero/tangier-corniche-coast.webp",
      alt: "An aerial view of Tangier's coastal corniche road curving along the Mediterranean, Morocco",
    },
  },
];

export function placeByName(name: string): Place | undefined {
  return PLACES.find((p) => p.name === name);
}

// The places a tour visits, in the order its itinerary reaches them.
// `exclude` drops a photo already shown elsewhere on the page (the hero).
export function tourPlaces(tour: Tour, exclude?: string): Place[] {
  const text = [...tour.itin.map((d) => d.t), ...tour.highlights];
  const found: { place: Place; at: number }[] = [];
  for (const place of PLACES) {
    const at = text.findIndex((t) => place.match.test(t));
    if (at !== -1 && place.photo.src !== exclude) found.push({ place, at });
  }
  return found.sort((a, b) => a.at - b.at).map((f) => f.place);
}

// The place a single itinerary day ends up at: of the places its title
// mentions, the one named furthest along ("Marrakech → Aït Ben Haddou" → Aït
// Ben Haddou). Undefined when the title names no place we have a photo for.
export function dayPlace(title: string): Place | undefined {
  let best: { place: Place; at: number } | undefined;
  for (const place of PLACES) {
    const m = place.match.exec(title);
    if (m && (!best || m.index > best.at)) best = { place, at: m.index };
  }
  return best?.place;
}

// The place a highlight refers to, if any ("Camel trek & night in a Sahara
// camp" → The Sahara).
export function highlightPlace(text: string): Place | undefined {
  return PLACES.find((p) => p.match.test(text));
}
