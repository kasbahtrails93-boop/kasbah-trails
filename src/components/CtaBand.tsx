import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/data";
import { waLink } from "@/lib/wa";
import { Star } from "./Ornament";

// Closing invitation used at the foot of most pages: a contained split panel,
// photograph on one side, the invitation and direct ways in on a kasbah-brown
// ground on the other.
export default function CtaBand({
  title = "Your Morocco begins here",
  body = "Tell us your dates and what you'd love to see. A real person on the ground in Morocco replies with a route and a price, usually within the hour.",
  waText = "Hi Kasbah Trails, I'd like to plan a private Morocco tour.",
  photo = {
    src: "/images/hero/kasbah-road-ouarzazate.webp",
    alt: "The Taourirt Kasbah's red earthen towers against a clear sky in Ouarzazate, Morocco",
  },
}: {
  title?: string;
  body?: string;
  waText?: string;
  photo?: { src: string; alt: string };
}) {
  return (
    <section className="section-y">
      <div className="container-site">
        <div className="grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded-[12px] bg-kasbah shadow-[0_40px_80px_-50px_rgba(43,23,12,.6)] lg:grid-cols-[1fr_1.15fr]">
          <div className="relative min-h-[260px] sm:min-h-[340px]">
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="relative isolate px-7 py-12 text-paper sm:px-12 sm:py-14">
            <div aria-hidden className="zellige absolute inset-0 -z-10 opacity-[0.06]" />
            <p className="flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-sun">
              <Star size={9} />
              Begin your journey
            </p>
            <h2 className="mt-4 max-w-[18ch] text-h2 text-paper">{title}</h2>
            <p className="mt-4 max-w-[48ch] text-[1.02rem] leading-relaxed text-paper/75">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="group btn btn-primary">
                Plan your journey
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <a href={waLink(waText)} target="_blank" rel="noopener" className="btn btn-outline-light">
                WhatsApp us
              </a>
            </div>
            <p className="mt-8 flex flex-wrap gap-x-6 gap-y-1 border-t border-line-dark pt-6 text-[0.9rem] text-paper/65">
              <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-sun">
                {CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-sun">
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
