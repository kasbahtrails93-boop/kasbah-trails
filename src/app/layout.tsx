import type { Metadata } from "next";
import { Fraunces, Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://kasbahtrails.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kasbah Trails | Boutique Private Morocco Tours, Tailor-Made",
    template: "%s | Kasbah Trails",
  },
  description:
    "A boutique private tour operator for Morocco — small, high-touch journeys built around you, not sold off a shelf. Sahara desert circuits, imperial cities and Atlas passes from Marrakech, Fes, Casablanca and Tangier.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kasbah Trails | Boutique Private Morocco Tours",
    description:
      "A boutique operator for private Morocco journeys — every itinerary built around you, with a dedicated driver-guide throughout. The imperial cities, the High Atlas and the Erg Chebbi Sahara.",
    type: "website",
    url: SITE_URL,
    siteName: "Kasbah Trails",
  },
};

const travelAgencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Kasbah Trails",
  description:
    "Kasbah Trails is a boutique private tour operator running small, tailor-made journeys across Morocco — Sahara desert circuits, imperial city tours and High Atlas mountain passes — each with a dedicated English-speaking driver-guide and no fixed departure groups.",
  areaServed: { "@type": "Country", name: "Morocco" },
  priceRange: "$$$",
  makesOffer: [
    "Private Sahara desert tours",
    "Imperial cities tours (Fes, Meknes, Rabat, Chefchaouen)",
    "Custom multi-day Morocco itineraries",
  ],
  knowsAbout: [
    "Morocco travel",
    "Sahara desert tours",
    "Erg Chebbi",
    "Aït Ben Haddou",
    "Moroccan imperial cities",
    "Private guided tours",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are Kasbah Trails tours private, or do we join a group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every Kasbah Trails itinerary is 100% private — just you, your travel companions, and a dedicated driver-guide in your own vehicle. There are no strangers added to your group and no fixed departure dates to work around.",
      },
    },
    {
      "@type": "Question",
      name: "Can you customize an itinerary, or do we have to book one exactly as listed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every trip on this site is a starting point. Tell us your dates, pace and interests on WhatsApp or through the form below, and we'll adjust the route, swap in extra nights, or build something from scratch around what you actually want to see.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in the price of a private Morocco tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard inclusions are a private air-conditioned vehicle with fuel and tolls, an English-speaking driver-guide for the whole trip, accommodation in riads, kasbahs and a desert camp, the Erg Chebbi camel trek, daily breakfast, local guides in the imperial cities, and all local taxes. International flights, most lunches and dinners, entrance fees, tips and travel insurance are not included.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a private Sahara desert tour cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on group size, season, and the level of riad or kasbah you choose, since every trip is quoted individually rather than sold at a fixed group rate. Message us on WhatsApp with your dates and traveller count for an exact quote — there's no obligation to book.",
      },
    },
    {
      "@type": "Question",
      name: "Is Morocco safe to visit, and is a guide necessary for the Sahara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Morocco is a well-established, welcoming destination for private travel, and the desert routes we run — through Ouarzazate, the gorges and Merzouga — are on paved and well-travelled roads. A local driver-guide isn't strictly required to enter the country, but it makes the long mountain and desert legs far easier, and it's how a camel trek and desert camp get arranged properly rather than booked blind.",
      },
    },
    {
      "@type": "Question",
      name: "When's the best time of year for a Sahara desert tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spring (March to May) and autumn (September to November) give the most comfortable temperatures for both the High Atlas passes and the dunes. Summer is workable but hot in the desert by midday; winter nights in the Sahara and the mountains can be cold, so pack layers if travelling between November and February.",
      },
    },
    {
      "@type": "Question",
      name: "Which cities can a tour start and end in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most itineraries start or end in Marrakech, Fes, Casablanca or Tangier — wherever your flight lands. Filter the tours by city to see what's available, or ask us to build a route between two different cities if you don't see the combination you need.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${mulish.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-sand text-ink font-sans antialiased" style={{ fontSize: "17px", lineHeight: 1.65 }}>
        <Header />
        <a id="top" />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
