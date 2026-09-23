import type { Metadata } from "next";
import ToursSection from "@/components/ToursSection";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import { pickPhoto } from "@/lib/photoPool";

const heroPhoto = pickPhoto("dunes", "tours-index");

export const metadata: Metadata = {
  title: "All Private Morocco Tours",
  description:
    "Browse all 33 private, tailor-made Morocco tours — 3 to 15 days, from Marrakech, Fes, Casablanca or Tangier. Filter by start city and length, then customize any route.",
  alternates: { canonical: "/tours" },
};

export default async function ToursPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; len?: string; cat?: string }>;
}) {
  const { city, len, cat } = await searchParams;
  return (
    <>
      <PageHero
        image={heroPhoto}
        eyebrow="Private journeys"
        title="Every Kasbah Trails route, ready to tailor"
        intro="33 private itineraries from 3 to 15 days. Filter by style, where you start and how long you have, then tell us what you'd change."
        crumbs={[{ label: "Home", href: "/" }, { label: "Journeys" }]}
      />
      <ToursSection initialCity={city} initialLen={len} initialCat={cat} />
      <Contact />
    </>
  );
}
