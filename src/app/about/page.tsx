import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { waLink } from "@/lib/wa";

const heroPhoto = {
  src: "/images/pool/ait-ben-haddou-guide-kasbah-road.webp",
  alt: "A local Kasbah Trails guide overlooking the kasbah of Aït Ben Haddou",
};

const introPhoto = {
  src: "/images/hero/kasbah-road-ouarzazate.webp",
  alt: "The Taourirt Kasbah's red earthen towers against a clear sky in Ouarzazate, Morocco",
};

const STATS = [
  { n: "33", label: "private itineraries" },
  { n: "100%", label: "private departures" },
  { n: "4", label: "starting cities" },
  { n: "3–15", label: "days, any pace" },
];

const POINTS = [
  {
    title: "Guides who grew up here",
    body: "Born and raised in Morocco, fluent in English, French and Arabic — the kind of guides who know which stall in the souk still bargains fair, and are happy to tear up the day's plan when something better comes along.",
  },
  {
    title: "Handpicked places to stay",
    body: "Character riads inside the medinas and comfortable camps in the dunes — not roadside chain hotels. Every stay is one we've slept in ourselves, chosen for character over a brand name on the door.",
  },
  {
    title: "Honest, all-in pricing",
    body: "Your quote spells out exactly what's included before you commit to anything. No pushy carpet-shop detours, no last-minute add-ons, no surprises waiting at checkout.",
  },
  {
    title: "Safe, comfortable travel",
    body: "Modern, air-conditioned vehicles and licensed drivers who know the mountain passes in the dark — plus a phone number that actually gets answered if your plans change mid-trip.",
  },
];

const STEPS = [
  {
    title: "Tell us your dates",
    body: "Message us with when you're coming, how long you have and what you'd love to see — even if all you've got is a rough shape and a handful of names you've read about.",
  },
  {
    title: "Get a draft itinerary",
    body: "We send back a day-by-day plan with routes, riads and a clear price, built around what you told us — move things around until it's exactly the trip you want.",
  },
  {
    title: "Confirm with a deposit",
    body: "Happy with it? A small deposit locks in your dates, your vehicle and your driver-guide. The balance isn't due until you arrive.",
  },
  {
    title: "We meet you on day one",
    body: "Your driver-guide is waiting at the airport or your riad with your name on a sign, and from there the road is yours.",
  },
];

export const metadata: Metadata = {
  title: "About Kasbah Trails",
  description:
    "Kasbah Trails is a boutique private tour operator for Morocco — local guides, handpicked riads and honest pricing, with every itinerary built around you rather than sold off a shelf.",
  alternates: { canonical: "/about" },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Kasbah Trails",
  url: "https://kasbahtrails.com/about",
  mainEntity: { "@type": "TravelAgency", name: "Kasbah Trails" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kasbahtrails.com/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://kasbahtrails.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-sand-2">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        </div>
      </div>

      <div className="relative h-[40vh] min-h-[300px] max-h-[440px] w-full overflow-hidden">
        <Image src={heroPhoto.src} alt={heroPhoto.alt} fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/5" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-[clamp(24px,4vw,40px)]">
            <p className="mb-2.5 text-sm font-bold tracking-wide text-amber">Why Kasbah Trails</p>
            <h1 className="max-w-[20ch] font-serif text-[clamp(1.9rem,4vw,3.1rem)] font-semibold tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,.4)]">
              A trip that feels like Morocco, not a package
            </h1>
          </div>
        </div>
      </div>

      <div className="border-b border-line bg-sand-2">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-[clamp(18px,4vw,40px)] py-5 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <span className="font-serif text-2xl font-semibold text-espresso">{s.n}</span>{" "}
              <span className="text-sm text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,64px)]">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-[1.15rem] leading-relaxed text-ink">
              We&apos;ve spent years driving these routes, staying in these riads and drinking tea
              in these villages — long before any of it went on a website. That&apos;s the
              difference you feel on the road: the shortcut around the tour-bus queue at the
              kasbah gate, the family who waves you in for tea, the viewpoint a few switchbacks
              past where every other itinerary tells you to turn around.
            </p>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
              Every one of our 33 itineraries is a starting point, not a fixed package — tell us
              your dates, pace and interests and we&apos;ll adjust the route, swap in extra
              nights, or build something from scratch around what you actually want to see. There
              are no strangers added to your group and no fixed departure dates to work around:
              it&apos;s just you, your travel companions, and a dedicated driver-guide in your own
              vehicle for the whole trip.
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-line">
            <Image
              src={introPhoto.src}
              alt={introPhoto.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-sand-2">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,64px)]">
          <h2 className="text-center text-[clamp(1.5rem,3vw,2.2rem)] tracking-tight">
            Why travel with us
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {POINTS.map((p) => (
              <div key={p.title} className="flex gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-espresso">{p.title}</h3>
                  <p className="mt-1 text-[.98rem] text-muted">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,64px)]">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2.2rem)] tracking-tight">
          How planning works
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-lg border border-line bg-card p-6">
              <div className="mb-3 font-serif text-3xl font-semibold text-amber-d">{i + 1}</div>
              <h3 className="mb-1.5 font-serif text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-sand-2">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,64px)] text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] tracking-tight">
            Nine destinations, one road trip
          </h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-[1.02rem] text-muted">
            The Sahara dunes, the imperial medinas, the blue lanes of Chefchaouen, the Atlantic at
            Essaouira — see what each is actually like and which routes visit it.
          </p>
          <Link
            href="/destinations"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-terracotta px-6 py-3 text-sm font-bold text-white hover:bg-terracotta-d"
          >
            Explore destinations →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[820px] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,64px)]">
        <div className="rounded-lg border border-dashed border-line p-6 text-center">
          <p className="text-ink">
            Ready to start planning? Browse{" "}
            <Link href="/tours" className="font-semibold text-terracotta underline">
              all 33 private itineraries
            </Link>{" "}
            or message us directly on{" "}
            <a
              href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
              target="_blank"
              rel="noopener"
              className="font-semibold text-terracotta underline"
            >
              WhatsApp
            </a>{" "}
            with your dates.
          </p>
        </div>
      </div>
    </article>
  );
}
