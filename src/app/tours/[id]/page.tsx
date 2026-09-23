import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INCLUDED, EXCLUDED, TOURS, type Tour } from "@/lib/data";
import { pickPhoto } from "@/lib/photoPool";
import { dayPlace, placeByName, tourPlaces } from "@/lib/places";
import { waLink } from "@/lib/wa";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import TourCard from "@/components/TourCard";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { Star } from "@/components/Ornament";
import { FAQS, FaqList } from "@/components/Faq";

export async function generateStaticParams() {
  return TOURS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const tour = TOURS.find((t) => t.id === id);
  if (!tour) return {};
  return {
    title: tour.title,
    description: tour.blurb,
    alternates: { canonical: `/tours/${tour.id}` },
    openGraph: { title: tour.title, description: tour.blurb, type: "website" },
  };
}

function relatedTours(tour: Tour): Tour[] {
  const sameOrigin = TOURS.filter((t) => t.id !== tour.id && t.from === tour.from);
  const sameCat = TOURS.filter((t) => t.id !== tour.id && t.cat === tour.cat && !sameOrigin.includes(t));
  return [...sameOrigin, ...sameCat].slice(0, 3);
}

// The site-wide questions that apply to any single route.
const ROUTE_FAQS = FAQS.filter((f) => /customize|included in the price|best time|start and end/i.test(f.q));

const ICON = {
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  cal: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
};

function Icon({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={`shrink-0 ${className}`}>
      <path d={d} />
    </svg>
  );
}

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "included", label: "What's included" },
  { id: "questions", label: "Questions" },
];

export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tour = TOURS.find((t) => t.id === id);
  if (!tour) notFound();

  const photo = pickPhoto(tour.scene, tour.id);
  const related = relatedTours(tour);
  const places = tourPlaces(tour);
  const roundTrip = tour.from === tour.to;
  const route = roundTrip ? `Round trip from ${tour.from}` : `${tour.from} to ${tour.to}`;

  // The route as stops: start, the photographed places on the way, end.
  const between = places.map((p) => p.name).filter((n) => n !== tour.from && n !== tour.to);
  const stops = [tour.from, ...between.slice(0, 5), tour.to];

  // Days, each paired with a photo only when it reaches a place first.
  const shown = new Set<string>();
  const days = tour.itin.map((d) => {
    const place = dayPlace(d.t);
    const fresh = place && !shown.has(place.name) ? place : undefined;
    if (place) shown.add(place.name);
    return { ...d, place: fresh };
  });

  const facts = [
    { icon: ICON.clock, k: "Duration", v: `${tour.days} days · ${tour.days - 1} nights` },
    { icon: ICON.pin, k: "Route", v: route },
    { icon: ICON.user, k: "Style", v: "Private, just your group" },
    { icon: ICON.cal, k: "Dates", v: "You choose the start date" },
  ];

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.blurb,
    touristType: "Private tour",
    provider: { "@type": "TravelAgency", name: "Kasbah Trails" },
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itin.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: d.t, description: d.d })),
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
    <article className="tour-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* cinematic header */}
      <header className="relative isolate flex min-h-[max(520px,72svh)] flex-col justify-end overflow-hidden bg-kasbah-2">
        <Image src={photo.src} alt={photo.alt} fill preload sizes="100vw" className="-z-10 object-cover" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(41,20,10,.9)_0%,rgba(41,20,10,.35)_50%,rgba(41,20,10,.15)_100%),linear-gradient(90deg,rgba(41,20,10,.5)_0%,rgba(41,20,10,0)_60%)]"
        />
        <div className="container-site pb-12 pt-10">
          <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Journeys", href: "/tours" }, { label: tour.title }]} />
          <p className="mt-10 flex items-center gap-2.5 text-[0.74rem] font-medium uppercase tracking-[0.26em] text-sun">
            <Star size={9} />
            {tour.cat} · Private journey
          </p>
          <h1 className="mt-4 max-w-[22ch] text-display text-paper">{tour.title}</h1>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {facts.slice(0, 3).map((f) => (
              <li key={f.k} className="flex items-center gap-2 rounded-[2px] border border-paper/25 bg-paper/10 px-3.5 py-2 text-[0.88rem] text-paper backdrop-blur-sm">
                <Icon d={f.icon} className="text-sun" />
                {f.v}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* in-page section bar */}
      <nav aria-label="On this page" className="sticky top-[var(--header-h)] z-40 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="container-site flex items-center gap-8">
          <ul className="flex min-w-0 flex-1 gap-7 overflow-x-auto [scrollbar-width:none]">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="block whitespace-nowrap py-4 text-[0.76rem] font-medium uppercase tracking-[0.16em] text-muted hover:text-terra">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#plan" className="btn btn-primary btn-sm hidden lg:inline-flex">
            Enquire about this journey
          </a>
        </div>
      </nav>

      <div className="container-site grid grid-cols-[minmax(0,1fr)] gap-14 py-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 lg:py-20">
        <div className="min-w-0">
          {/* overview */}
          <section id="overview" aria-labelledby="ov" className="scroll-mt-40">
            <h2 id="ov" className="sr-only">
              Overview
            </h2>
            <p className="font-serif text-[clamp(1.35rem,1.1rem+0.8vw,1.75rem)] leading-[1.5] text-ink">{tour.blurb}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {tour.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3.5 rounded-[var(--radius-card)] bg-sand p-5">
                  <Star size={14} className="mt-1 text-terra" />
                  <span className="text-[0.98rem] leading-snug text-ink">{h}</span>
                </div>
              ))}
            </div>
          </section>

          {/* the route as a line of stops */}
          <section aria-labelledby="rt" className="mt-16">
            <h2 id="rt" className="text-[0.74rem] font-medium uppercase tracking-[0.22em] text-terra">
              The route
            </h2>
            <ol className="mt-6 flex overflow-x-auto pb-2 [scrollbar-width:thin]">
              {stops.map((s, i) => {
                const p = placeByName(s);
                const last = i === stops.length - 1;
                return (
                  <li key={`${s}-${i}`} className="relative flex min-w-[118px] flex-1 flex-col items-center text-center">
                    {!last && <span aria-hidden className="absolute left-1/2 top-8 h-px w-full border-t border-dashed border-sun-d" />}
                    <span className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-paper bg-dune ring-1 ring-sun-d/50">
                      {p ? (
                        <Image src={p.photo.src} alt="" fill sizes="64px" className="object-cover" />
                      ) : (
                        <Star size={16} className="text-terra" />
                      )}
                    </span>
                    <span className="mt-3 px-2 text-[0.88rem] leading-tight text-ink">{s}</span>
                    {(i === 0 || last) && (
                      <span className="mt-1 text-[0.66rem] uppercase tracking-[0.16em] text-muted">{i === 0 ? "Start" : "End"}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>

          {/* itinerary timeline */}
          <section id="itinerary" aria-labelledby="dbd" className="mt-16 scroll-mt-40">
            <SectionHeading align="left" eyebrow="Itinerary" title="Day by day" id="dbd" />
            <p className="mt-3 max-w-[60ch] text-[0.97rem] text-muted">
              A working draft: every day can be lengthened, shortened or swapped once we know what matters most to you.
            </p>
            <ol className="relative mt-10">
              <span aria-hidden className="absolute bottom-6 left-[27px] top-2 w-px bg-line" />
              {days.map((day, i) => (
                <li key={i} className="relative grid grid-cols-[56px_1fr] gap-x-5 pb-10 last:pb-0">
                  <span className="relative z-10 flex h-14 w-14 flex-col items-center justify-center rounded-full border border-sun-d/40 bg-paper leading-none">
                    <span className="text-[0.55rem] font-medium uppercase tracking-[0.18em] text-muted">Day</span>
                    <span className="mt-0.5 font-serif text-[1.3rem] text-terra">{i + 1}</span>
                  </span>
                  <div className={`pt-2 ${day.place ? "md:grid md:grid-cols-[1fr_150px] md:gap-6" : ""}`}>
                    <div>
                      <h3 className="text-[1.35rem] leading-snug">{day.t}</h3>
                      <p className="mt-3 text-[1rem] leading-[1.8]">{day.d}</p>
                    </div>
                    {day.place && (
                      <figure className="mt-5 md:mt-1">
                        <div className="arch relative aspect-[3/4] w-[130px] overflow-hidden bg-dune md:w-full">
                          <Image src={day.place.photo.src} alt={day.place.photo.alt} fill sizes="150px" className="object-cover" />
                        </div>
                        <figcaption className="mt-2 text-[0.78rem] text-muted">{day.place.name}</figcaption>
                      </figure>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* included */}
          <section id="included" aria-labelledby="inc" className="mt-16 scroll-mt-40">
            <SectionHeading align="left" eyebrow="The details" title="What's included" id="inc" />
            <div className="mt-8 grid overflow-hidden rounded-[var(--radius-card)] border border-line sm:grid-cols-2">
              <div className="bg-card p-7">
                <h3 className="text-[1.25rem]">Included</h3>
                <ul className="mt-5 space-y-3.5">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem] text-ink">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="mt-0.5 shrink-0 text-palm">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-line bg-sand p-7 sm:border-l sm:border-t-0">
                <h3 className="text-[1.25rem]">Not included</h3>
                <ul className="mt-5 space-y-3.5">
                  {EXCLUDED.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem] text-muted">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="mt-0.5 shrink-0">
                        <path d="M6 12h12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* questions */}
          <section id="questions" aria-labelledby="rq" className="mt-16 scroll-mt-40">
            <SectionHeading align="left" eyebrow="Good to know" title="Questions about this journey" id="rq" />
            <div className="mt-8">
              <FaqList items={ROUTE_FAQS} />
            </div>
            <p className="mt-6 text-[0.97rem]">
              Want this route adjusted?{" "}
              <a
                href={waLink(`Hi Kasbah Trails, I'd like to tweak the ${tour.title}.`)}
                target="_blank"
                rel="noopener"
                className="text-terra underline underline-offset-4"
              >
                Message us on WhatsApp
              </a>{" "}
              or browse{" "}
              <Link href="/tours" className="text-terra underline underline-offset-4">
                all 33 journeys
              </Link>
              .
            </p>
          </section>
        </div>

        {/* plan-this-journey sidebar */}
        <aside id="plan" className="scroll-mt-40">
          <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-card shadow-[0_24px_50px_-30px_rgba(43,23,12,.4)] lg:sticky lg:top-[calc(var(--header-h)+72px)]">
            <div className="relative isolate overflow-hidden bg-kasbah p-7 text-paper">
              <div aria-hidden className="zellige absolute inset-0 -z-10 opacity-[0.08]" />
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sun">Plan this journey</p>
              <p className="mt-2 font-serif text-[1.5rem] leading-snug">{tour.days} days, fully private</p>
              <p className="mt-1 text-[0.88rem] text-paper/70">Priced on request for your dates and group</p>
            </div>
            <dl className="divide-y divide-line px-7">
              {facts.map((f) => (
                <div key={f.k} className="flex items-center gap-3 py-3.5">
                  <Icon d={f.icon} className="text-sun-d" />
                  <dt className="sr-only">{f.k}</dt>
                  <dd className="text-[0.92rem] text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
            <div className="border-t border-line p-7">
              <p className="font-serif text-[1.3rem] text-ink">Ask about this route</p>
              <div className="mt-2">
                <ContactForm tourTitle={tour.title} compact />
              </div>
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="section-y bg-sand">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading align="left" eyebrow="You may also like" title={`More journeys from ${tour.from}`} />
              <Link href={`/tours?city=${tour.from}`} className="link-arrow">
                All journeys from {tour.from}
              </Link>
            </div>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Make the ${tour.days}-day journey your own`}
        body="Tell us your dates and what you'd change, and we'll come back with a real draft and a clear price, not a form letter."
        waText={`Hi Kasbah Trails, I'd like a quote for the ${tour.title}.`}
        photo={photo}
      />

      {/* phones: a slim booking bar that stays on screen */}
      <div className="tour-bar fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/97 backdrop-blur-md lg:hidden">
        <div className="container-site flex items-center justify-between gap-4 py-3">
          <div className="leading-tight">
            <p className="font-serif text-[1.1rem] text-ink">{tour.days} days · Private</p>
            <p className="text-[0.78rem] text-muted">{route}</p>
          </div>
          <a href="#plan" className="btn btn-primary btn-sm">
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
