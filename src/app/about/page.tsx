import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import TrustStrip from "@/components/TrustStrip";
import Eyebrow from "@/components/Eyebrow";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";

const heroPhoto = {
  src: "/images/pool/ait-ben-haddou-guide-kasbah-road.webp",
  alt: "A local Kasbah Trails guide overlooking the kasbah of Aït Ben Haddou",
};

const introPhoto = {
  src: "/images/hero/kasbah-road-ouarzazate.webp",
  alt: "The Taourirt Kasbah's red earthen towers against a clear sky in Ouarzazate, Morocco",
};

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

      <PageHero
        image={heroPhoto}
        eyebrow="About Kasbah Trails"
        title="A trip that feels like Morocco, not a package"
        intro="Private, tailor-made Morocco tours guided by locals: the Sahara, the imperial cities and the Atlas, at your own pace."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <TrustStrip />

      <section className="section-y bg-sand">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="arch relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden bg-dune">
            <Image src={introPhoto.src} alt={introPhoto.alt} fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" />
          </div>
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 text-h2">Local guides, handpicked stays, honest pricing</h2>
            <p className="mt-6 text-[1.05rem] leading-[1.8]">
              We&apos;ve spent years driving these routes, staying in these riads and drinking tea in these
              villages — long before any of it went on a website. That&apos;s the difference you feel on the
              road: the shortcut around the tour-bus queue at the kasbah gate, the family who waves you in for
              tea, the viewpoint a few switchbacks past where every other itinerary tells you to turn around.
            </p>
            <p className="mt-4 text-[1.05rem] leading-[1.8]">
              Every one of our 33 itineraries is a starting point, not a fixed package — tell us your dates,
              pace and interests and we&apos;ll adjust the route, swap in extra nights, or build something from
              scratch around what you actually want to see. There are no strangers added to your group and no
              fixed departure dates to work around: it&apos;s just you, your travel companions, and a dedicated
              driver-guide in your own vehicle for the whole trip.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/tours" className="btn btn-primary">
                Browse journeys
              </Link>
              <Link href="/destinations" className="btn btn-ghost">
                Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
      <Process />
      <Faq />
      <CtaBand />
    </article>
  );
}
