import { TOURS, type Destination } from "./data";
import { placeByName, tourPlaces } from "./places";

// Longer, first-hand descriptions for each destination in DEST, shared by the
// homepage destination cards and the /destinations page.
export const DEST_DETAIL: Record<string, string> = {
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

// URL-safe id for a destination ("Aït Ben Haddou" -> "ait-ben-haddou").
export function destSlug(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/^the /, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function destPhoto(d: Destination) {
  return placeByName(d.n)?.photo;
}

// How many itineraries actually pass through a destination.
export function toursVisiting(name: string): number {
  return TOURS.filter((t) => tourPlaces(t).some((p) => p.name === name)).length;
}

// Up to three itineraries per destination: one short, one mid-length and one
// long, preferring tours not already shown for an earlier destination so the
// page doesn't repeat the same three (every route visits Marrakech and the
// Sahara). Walks DEST in page order.
export function toursByDestination(names: string[]) {
  const used = new Set<string>();
  const out: Record<string, typeof TOURS> = {};
  for (const name of names) {
    const list = TOURS.filter((t) => tourPlaces(t).some((p) => p.name === name)).sort((a, b) => a.days - b.days);
    const third = Math.ceil(list.length / 3);
    const buckets = [list.slice(0, third), list.slice(third, third * 2), list.slice(third * 2)];
    const picks = buckets
      .map((b) => b.find((t) => !used.has(t.id)) ?? b[0])
      .filter((t, i, arr): t is (typeof TOURS)[number] => !!t && arr.indexOf(t) === i);
    picks.forEach((t) => used.add(t.id));
    out[name] = picks;
  }
  return out;
}
