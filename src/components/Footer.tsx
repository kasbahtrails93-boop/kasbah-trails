import Link from "next/link";
import { CONTACT, DEST } from "@/lib/data";
import { waLink } from "@/lib/wa";
import { destSlug } from "@/lib/destinations";
import BrandLockup from "./BrandLockup";
import { Star } from "./Ornament";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Journeys",
    links: [
      { href: "/tours?cat=Desert", label: "Sahara & desert" },
      { href: "/tours?cat=Imperial%20%26%20Culture", label: "Imperial cities" },
      { href: "/tours?cat=Grand%20Tour", label: "Grand tours" },
      { href: "/tours?city=Marrakech", label: "From Marrakech" },
      { href: "/tours?city=Fes", label: "From Fes" },
      { href: "/tours", label: "All journeys" },
    ],
  },
  {
    title: "Destinations",
    links: [
      ...DEST.slice(0, 5).map((d) => ({ href: `/destinations#${destSlug(d.n)}`, label: d.n })),
      { href: "/destinations", label: "All destinations" },
    ],
  },
  {
    title: "Kasbah Trails",
    links: [
      { href: "/about", label: "About us" },
      { href: "/#how", label: "How it works" },
      { href: "/blog", label: "Journal" },
      { href: "/#faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden bg-kasbah-2 text-paper/70">
      <div aria-hidden className="zellige absolute inset-0 -z-10 opacity-[0.05]" />
      <div className="container-site grid gap-12 pb-14 pt-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
        <div>
          <Link href="/" aria-label="Kasbah Trails, home" className="inline-block">
            <BrandLockup tone="light" />
          </Link>
          <p className="mt-6 max-w-[34ch] text-[0.95rem] leading-relaxed">
            Private, tailor-made Morocco tours guided by locals: the Sahara, the imperial cities and the Atlas,
            at your own pace.
          </p>
          <ul className="mt-6 space-y-2 text-[0.95rem]">
            <li>
              <a href={`tel:${CONTACT.phoneTel}`} className="text-paper hover:text-sun">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="text-paper hover:text-sun">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
                target="_blank"
                rel="noopener"
                className="text-paper hover:text-sun"
              >
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h2 className="flex items-center gap-2 font-sans text-[0.72rem] font-medium uppercase tracking-[0.22em] text-sun">
              <Star size={8} />
              {col.title}
            </h2>
            <ul className="mt-6 space-y-3 text-[0.95rem]">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors duration-200 hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line-dark">
        <div className="container-site flex flex-wrap justify-between gap-3 py-6 text-[0.82rem] text-paper/50">
          <span>© {year} Kasbah Trails. All rights reserved.</span>
          <span>Based in Fez, Morocco</span>
        </div>
      </div>
    </footer>
  );
}
