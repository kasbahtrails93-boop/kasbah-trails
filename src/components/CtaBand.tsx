import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/wa";
import Ornament from "./Ornament";

// Closing invitation over a photograph, used at the foot of most pages.
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
    <section className="relative isolate overflow-hidden bg-kasbah-2">
      <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="-z-10 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-kasbah-2/75" />
      <div className="container-site flex flex-col items-center py-24 text-center sm:py-28">
        <Ornament tone="light" />
        <h2 className="mt-6 max-w-[20ch] text-h1 text-paper">{title}</h2>
        <p className="mt-5 max-w-[52ch] text-[1.05rem] leading-relaxed text-paper/80">{body}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            Plan your journey
          </Link>
          <a href={waLink(waText)} target="_blank" rel="noopener" className="btn btn-outline-light">
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
