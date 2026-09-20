import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { CONTACT } from "@/lib/data";
import { pickPhoto } from "@/lib/photoPool";

const POINTS = [
  {
    title: "Usually within the hour",
    body: "Message any time — a real person on the ground in Morocco replies with ideas and a price, not a bot.",
  },
  {
    title: "No obligation, no pressure",
    body: "Ask questions, compare a few routes, take a day to think. There's no deposit until you're ready.",
  },
  {
    title: "One planner, start to finish",
    body: "The same person who quotes your trip stays reachable throughout it — not a call centre queue.",
  },
];

const heroPhoto = pickPhoto("medina", "contact-index");

export const metadata: Metadata = {
  title: "Contact Kasbah Trails",
  description:
    "Message Kasbah Trails on WhatsApp, call or email to start planning a private Morocco tour — a real person replies with ideas and a price, usually within the hour.",
  alternates: { canonical: "/contact" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kasbahtrails.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://kasbahtrails.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-sand-2">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        </div>
      </div>

      <div className="relative h-[34vh] min-h-[260px] max-h-[380px] w-full overflow-hidden">
        <Image src={heroPhoto.src} alt={heroPhoto.alt} fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/5" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-[clamp(24px,4vw,40px)]">
            <h1 className="max-w-[20ch] font-serif text-[clamp(1.9rem,4vw,3.1rem)] font-semibold tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,.4)]">
              Get in touch
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,64px)]">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">Send us your trip details</h2>
            <p className="mt-4 max-w-[48ch] text-[1.06rem] text-muted">
              Fill in as much or as little as you know — we&apos;ll fill in the rest with you on
              WhatsApp. Here&apos;s what happens from there.
            </p>

            <ul className="mt-8 space-y-5">
              {POINTS.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <svg
                    className="mt-1 shrink-0 text-terracotta"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <div>
                    <b className="text-ink">{p.title}</b>
                    <span className="block text-sm text-muted">{p.body}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 border-t border-line pt-6 text-sm">
              <p className="mb-2 text-sm font-bold text-espresso">Prefer to reach us directly?</p>
              <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-2.5 text-ink hover:text-terracotta">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-muted">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8 12a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
                </svg>
                {CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 text-ink hover:text-terracotta">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-muted">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-2.5 text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-muted">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Based in Fez, Morocco — travelling the whole country
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      <Faq />
    </div>
  );
}
