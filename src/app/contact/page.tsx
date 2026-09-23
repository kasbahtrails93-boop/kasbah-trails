import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { CONTACT_POINTS, DirectContact } from "@/components/Contact";
import Faq from "@/components/Faq";
import SectionHeading from "@/components/SectionHeading";
import { Star } from "@/components/Ornament";
import { pickPhoto } from "@/lib/photoPool";

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

      <PageHero
        image={heroPhoto}
        eyebrow="Plan your journey"
        title="Let's start planning"
        intro="A real person on the ground in Morocco replies with ideas and a price, usually within the hour."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-y">
        <div className="container-site grid items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in touch"
              title="Tell us about your trip"
              intro="Fill in as much or as little as you know — we'll fill in the rest with you on WhatsApp."
            />
            <ul className="mt-9 space-y-6">
              {CONTACT_POINTS.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sun-d/40 text-terra">
                    <Star size={11} />
                  </span>
                  <div>
                    <h3 className="text-[1.2rem]">{p.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-[var(--radius-card)] bg-sand px-7 py-3">
              <DirectContact />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Faq />
    </div>
  );
}
