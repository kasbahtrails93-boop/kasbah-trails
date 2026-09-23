import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TOURS, DEST, CONTACT } from "@/lib/data";
import { pickPhoto } from "@/lib/photoPool";
import { waLink } from "@/lib/wa";
import PreviewHeroSlider from "@/components/preview/HeroSlider";

export const metadata: Metadata = {
  title: "Style Refresh Preview — Kasbah Trails",
  robots: { index: false, follow: false },
};

const FEATURED_IDS = ["3-mar", "5-mar", "7-mar", "8-best-mar", "10-totally-mar", "12-mar"];
const featuredTours = FEATURED_IDS.map((id) => TOURS.find((t) => t.id === id)!).filter(Boolean);

const WHY_POINTS = [
  {
    title: "Guides who grew up here",
    body: "Born and raised in Morocco, fluent in English, French and Arabic — happy to tear up the day's plan when something better comes along.",
  },
  {
    title: "Handpicked places to stay",
    body: "Character riads inside the medinas and comfortable camps in the dunes — not roadside chain hotels.",
  },
  {
    title: "Honest, all-in pricing",
    body: "Your quote spells out exactly what's included before you commit to anything. No surprises at checkout.",
  },
  {
    title: "Safe, comfortable travel",
    body: "Modern, air-conditioned vehicles and licensed drivers who know the mountain passes in the dark.",
  },
];

const PROCESS_STEPS = [
  { title: "Tell us your dates", body: "Message us with when you're coming, how long you have and what you'd love to see." },
  { title: "Get a draft itinerary", body: "A day-by-day plan with routes, riads and a clear price — yours to tweak." },
  { title: "Confirm with a deposit", body: "A small deposit locks in your dates and vehicle. Balance on arrival." },
  { title: "We meet you on day one", body: "Your driver-guide greets you at the airport or riad, and the road is yours." },
];

export default function PreviewPage() {
  return (
    <div>
      <div className="border-b border-line bg-gold/10 px-4 py-3 text-center text-sm font-semibold text-espresso">
        Style refresh preview — same colors, same fonts, refined buttons &amp; cards. Not live.
      </div>

      <PreviewHeroSlider />

      {/* FEATURED TOURS — border cards instead of shadow cards, rounded-lg not 2xl/3xl */}
      <section id="tours" className="py-[clamp(40px,6vw,64px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)]">
          <div className="text-center">
            <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">Private itineraries</p>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">A few favourite routes</h2>
          </div>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((t) => {
              const photo = pickPhoto(t.scene, t.id);
              return (
                <Link
                  key={t.id}
                  href={`/tours/${t.id}`}
                  className="group overflow-hidden rounded-lg border border-line bg-ivory transition-colors hover:border-terracotta"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-muted">{t.days} days · {t.cat}</p>
                    <h3 className="mt-1 font-serif text-lg font-semibold text-espresso">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted">{t.blurb}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3.5 text-[.98rem] font-bold text-espresso transition-colors hover:border-terracotta hover:text-terracotta"
            >
              View all 33 tours
            </Link>
          </div>
        </div>
      </section>

      {/* WHY — border-top index row instead of icon-badge checklist, no shadow */}
      <section className="py-[clamp(40px,6vw,64px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)]">
          <div className="text-center">
            <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">Why Kasbah Trails</p>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">
              A trip that feels like Morocco, not a package
            </h2>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_POINTS.map((p) => (
              <div key={p.title} className="border-t border-espresso pt-4">
                <h3 className="font-serif text-lg font-semibold text-espresso">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — border cards instead of shadow cards */}
      <section className="bg-cream py-[clamp(40px,6vw,64px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)]">
          <div className="text-center">
            <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">Simple from the first message</p>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">How planning works</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.title} className="rounded-lg border border-line bg-ivory p-6">
                <div className="mb-3 font-serif text-3xl font-semibold text-burnt">{i + 1}</div>
                <h3 className="mb-1.5 font-serif text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS — border cards, rounded-lg photos, no drop shadow */}
      <section className="bg-cream py-[clamp(40px,6vw,64px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)]">
          <div className="text-center">
            <p className="mb-2.5 text-sm font-bold tracking-wide text-burnt">Where you&apos;ll go</p>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">Places worth the drive</h2>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3">
            {DEST.slice(0, 6).map((d) => {
              const photo = pickPhoto(d.scene, d.n);
              return (
                <div key={d.n} className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <b className="font-serif text-lg">{d.n}</b>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT BAND — new button shape, same brand colors */}
      <section className="bg-deep py-[clamp(48px,7vw,80px)] text-center text-white">
        <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)]">
          <h2 className="mx-auto max-w-[20ch] font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold text-white">
            Tell us your dates. We&apos;ll handle the rest.
          </h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-olive px-7 py-3.5 text-[.98rem] font-bold text-white transition-colors hover:bg-olive"
            >
              Message us on WhatsApp
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="text-sm font-semibold text-white/80 underline underline-offset-4 hover:text-white">
              or call {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
