"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/data";

const LINKS = [
  { href: "/#destinations", label: "Destinations" },
  { href: "/#why", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

const TOUR_CITIES = ["Marrakech", "Fes", "Casablanca", "Tangier"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      {/* utility bar — scrolls away; only the main nav below stays sticky.
          Same 940px breakpoint as the nav's own mobile/desktop switch below,
          so there's no in-between width where the two disagree. */}
      <div className="hidden border-b border-white/10 bg-espresso-2 text-white/75 min-[941px]:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-[clamp(18px,4vw,40px)] py-2 text-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${CONTACT.phoneTel}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8 12a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
              </svg>
              {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-amber">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            33 private itineraries · 100% private departures
          </div>
        </div>
      </div>

      {/* main nav */}
      <div
        className={`sticky top-0 z-[60] bg-sand/85 backdrop-blur-md transition-shadow ${
          scrolled ? "border-b border-line shadow-[0_6px_20px_-18px_rgba(63,33,9,.6)]" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center gap-6 px-[clamp(18px,4vw,40px)]">
          <Link href="/#top" className="mr-auto flex items-center gap-2.5">
            <Image
              src="/images/brand/kasbah-trails-mark.png"
              alt="Kasbah Trails"
              width={160}
              height={62}
              priority
              className="h-9 w-auto shrink-0"
            />
            <span className="font-serif text-xl font-semibold text-espresso">Kasbah Trails</span>
          </Link>

          <nav
            aria-label="Main"
            className={`gap-6 items-center max-[940px]:fixed max-[940px]:inset-x-0 max-[940px]:top-[72px] max-[940px]:flex-col max-[940px]:items-stretch max-[940px]:bg-sand max-[940px]:border-b max-[940px]:border-line max-[940px]:px-[clamp(18px,4vw,40px)] max-[940px]:py-5 max-[940px]:shadow-lg max-[940px]:transition-transform ${
              open ? "max-[940px]:translate-y-0" : "max-[940px]:-translate-y-[140%]"
            } flex`}
          >
            <div className="group relative max-[940px]:w-full max-[940px]:border-b max-[940px]:border-line">
              <Link
                href="/tours"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 font-semibold text-ink hover:text-terracotta max-[940px]:w-full max-[940px]:py-3"
              >
                Tours
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="mt-0.5 transition-transform group-hover:rotate-180 max-[940px]:hidden"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div className="invisible absolute left-0 top-full w-64 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 max-[940px]:hidden">
                <div className="rounded-2xl border border-line bg-card p-2 shadow-[0_18px_40px_-24px_rgba(63,33,9,.5)]">
                  {TOUR_CITIES.map((c) => (
                    <Link
                      key={c}
                      href={`/tours?city=${c}`}
                      className="block rounded-lg px-3.5 py-2.5 text-sm font-medium text-ink hover:bg-sand-2 hover:text-terracotta"
                    >
                      From {c}
                    </Link>
                  ))}
                  <div className="my-1 border-t border-line" />
                  <Link
                    href="/tours"
                    className="block rounded-lg px-3.5 py-2.5 text-sm font-bold text-terracotta hover:bg-sand-2"
                  >
                    All 33 tours →
                  </Link>
                </div>
              </div>
            </div>

            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-semibold text-ink hover:text-terracotta max-[940px]:w-full max-[940px]:border-b max-[940px]:border-line max-[940px]:py-3"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-espresso-2 shadow-[0_10px_22px_-12px_rgba(206,138,37,.9)] hover:bg-amber-d"
            >
              Plan my trip
            </Link>
            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="hidden max-[940px]:block p-1.5 text-espresso"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
