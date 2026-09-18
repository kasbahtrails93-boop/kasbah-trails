"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { waLink } from "@/lib/wa";
import Logo from "./Logo";

const LINKS = [
  { href: "/tours", label: "Tours" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/#how", label: "How it works" },
  { href: "/#why", label: "Why us" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

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
    <header
      className={`sticky top-0 z-[60] bg-sand/85 backdrop-blur-md transition-shadow ${
        scrolled ? "border-b border-line shadow-[0_6px_20px_-18px_rgba(63,33,9,.6)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center gap-6 px-[clamp(18px,4vw,40px)]">
        <Link href="/#top" className="mr-auto flex items-center gap-2.5">
          <Logo className="h-9 w-9 shrink-0" />
          <span className="font-serif text-xl font-semibold text-espresso">Kasbah Trails</span>
        </Link>

        <nav
          aria-label="Main"
          className={`gap-6 items-center max-[940px]:fixed max-[940px]:inset-x-0 max-[940px]:top-[72px] max-[940px]:flex-col max-[940px]:bg-sand max-[940px]:border-b max-[940px]:border-line max-[940px]:px-[clamp(18px,4vw,40px)] max-[940px]:py-5 max-[940px]:shadow-lg max-[940px]:transition-transform ${
            open ? "max-[940px]:translate-y-0" : "max-[940px]:-translate-y-[140%]"
          } flex`}
        >
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
          <a
            href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
            target="_blank"
            rel="noopener"
            className="max-[940px]:hidden inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-bold text-espresso hover:border-terracotta hover:text-terracotta"
          >
            WhatsApp
          </a>
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
    </header>
  );
}
