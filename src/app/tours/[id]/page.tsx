import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOURS, type Tour } from "@/lib/data";
import { pickPhoto } from "@/lib/photoPool";
import { waLink } from "@/lib/wa";
import Breadcrumbs from "@/components/Breadcrumbs";
import TourItinerary from "@/components/TourItinerary";
import TourCard from "@/components/TourCard";

export async function generateStaticParams() {
  return TOURS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const tour = TOURS.find((t) => t.id === id);
  if (!tour) return {};
  return {
    title: tour.title,
    description: tour.blurb,
    alternates: { canonical: `/tours/${tour.id}` },
    openGraph: {
      title: tour.title,
      description: tour.blurb,
      type: "website",
    },
  };
}

function relatedTours(tour: Tour): Tour[] {
  const sameOrigin = TOURS.filter((t) => t.id !== tour.id && t.from === tour.from);
  const sameCat = TOURS.filter(
    (t) => t.id !== tour.id && t.cat === tour.cat && !sameOrigin.includes(t)
  );
  return [...sameOrigin, ...sameCat].slice(0, 3);
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour = TOURS.find((t) => t.id === id);
  if (!tour) notFound();

  const photo = pickPhoto(tour.scene, tour.id);
  const related = relatedTours(tour);

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.blurb,
    touristType: "Private tour",
    provider: { "@type": "TravelAgency", name: "Kasbah Trails" },
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itin.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: d.t,
        description: d.d,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kasbahtrails.com/" },
      { "@type": "ListItem", position: 2, name: "Tours", item: "https://kasbahtrails.com/tours" },
      { "@type": "ListItem", position: 3, name: tour.title, item: `https://kasbahtrails.com/tours/${tour.id}` },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-sand-2">
        <div className="mx-auto max-w-[820px] px-[clamp(18px,4vw,40px)] pb-6 pt-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Tours", href: "/tours" }, { label: tour.title }]}
          />
        </div>
        <div className="mx-auto max-w-[820px] px-[clamp(18px,4vw,40px)] pb-10">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-muted">
            {tour.from} <span aria-hidden>→</span> {tour.to}
          </div>
          <h1 className="text-[clamp(1.9rem,4vw,2.9rem)] tracking-tight">{tour.title}</h1>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
            <span>◷ {tour.days} days</span>
            <span>◈ {tour.cat}</span>
            <span>✦ 100% private</span>
          </div>
        </div>
      </div>

      <div className="relative aspect-[21/9] w-full">
        <Image src={photo.src} alt={photo.alt} fill sizes="100vw" priority className="object-cover" />
      </div>

      <div className="mx-auto max-w-[820px] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,64px)]">
        <p className="mb-8 text-[1.15rem] leading-relaxed text-ink">{tour.blurb}</p>
        <TourItinerary tour={tour} />

        <div className="mt-10 rounded-lg border border-dashed border-line p-6 text-center text-sm text-muted">
          Want this route adjusted? Message us on{" "}
          <a
            href={waLink(`Hi Kasbah Trails, I'd like to tweak the ${tour.title}.`)}
            target="_blank"
            rel="noopener"
            className="font-semibold text-terracotta underline"
          >
            WhatsApp
          </a>{" "}
          with what you&apos;d change, or browse{" "}
          <Link href="/tours" className="font-semibold text-terracotta underline">
            all 33 tours
          </Link>
          .
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-5 font-serif text-2xl font-semibold text-espresso">
              Other routes from {tour.from}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
