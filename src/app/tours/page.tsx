import type { Metadata } from "next";
import ToursSection from "@/components/ToursSection";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "All Private Morocco Tours",
  description:
    "Browse all 33 private, tailor-made Morocco tours — 3 to 15 days, from Marrakech, Fes, Casablanca or Tangier. Filter by start city and length, then customize any route.",
};

export default async function ToursPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; len?: string }>;
}) {
  const { city, len } = await searchParams;
  return (
    <>
      <div className="border-b border-line bg-sand-2">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-8 pt-14">
          <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">All itineraries</p>
          <h1 className="text-[clamp(1.9rem,4vw,3.1rem)] tracking-tight">
            Every Kasbah Trails route, ready to tailor
          </h1>
          <p className="mt-4 max-w-[60ch] text-[1.06rem] text-muted">
            33 private itineraries from 3 to 15 days. Filter by where you start and how long you
            have, then message us to adjust anything you see.
          </p>
        </div>
      </div>
      <ToursSection initialCity={city} initialLen={len} />
      <Contact />
    </>
  );
}
