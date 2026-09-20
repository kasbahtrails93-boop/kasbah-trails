import type { Metadata } from "next";
import Image from "next/image";
import ToursSection from "@/components/ToursSection";
import Contact from "@/components/Contact";
import Breadcrumbs from "@/components/Breadcrumbs";
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
  searchParams: Promise<{ city?: string; len?: string }>;
}) {
  const { city, len } = await searchParams;
  return (
    <>
      <div className="bg-sand-2">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tours" }]} />
        </div>
      </div>
      <div className="relative h-[40vh] min-h-[300px] max-h-[440px] w-full overflow-hidden">
        <Image src={heroPhoto.src} alt={heroPhoto.alt} fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/5" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-[clamp(24px,4vw,40px)]">
            <h1 className="max-w-[20ch] font-serif text-[clamp(1.9rem,4vw,3.1rem)] font-semibold tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,.4)]">
              Every Kasbah Trails route, ready to tailor
            </h1>
            <p className="mt-4 max-w-[60ch] text-[1.02rem] text-white/85">
              33 private itineraries from 3 to 15 days. Filter by where you start and how long you
              have, then message us to adjust anything you see.
            </p>
          </div>
        </div>
      </div>
      <ToursSection initialCity={city} initialLen={len} />
      <Contact />
    </>
  );
}
