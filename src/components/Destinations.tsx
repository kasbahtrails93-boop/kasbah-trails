import Link from "next/link";
import { DEST } from "@/lib/data";
import { destPhoto, destSlug, toursVisiting } from "@/lib/destinations";
import SectionHeading from "./SectionHeading";
import DestinationPanels, { type Panel } from "./DestinationPanels";

// Homepage destinations: six places, each opening its /destinations entry.
const ORDER = ["Marrakech", "Aït Ben Haddou", "The Sahara", "Fes", "Chefchaouen", "Essaouira"];

export default function Destinations() {
  const panels: Panel[] = ORDER.flatMap((name) => {
    const d = DEST.find((x) => x.n === name);
    const photo = d && destPhoto(d);
    if (!d || !photo) return [];
    return [
      {
        name: d.n,
        line: d.d,
        href: `/destinations#${destSlug(d.n)}`,
        hrefLabel: `Discover ${d.n.replace(/^The /, "the ")}`,
        count: toursVisiting(d.n),
        photo,
      },
    ];
  });

  return (
    <section id="destinations" className="scroll-mt-24 pb-[var(--sy)]">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Discover"
            title="Places worth the drive"
            intro="Most journeys combine three or four of these. Each is worth the days it takes to see properly."
          />
          <Link href="/destinations" className="link-arrow">
            All {DEST.length} destinations
          </Link>
        </div>
        <DestinationPanels panels={panels} />
      </div>
    </section>
  );
}
