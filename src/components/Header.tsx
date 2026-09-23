"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/lib/data";
import { waLink } from "@/lib/wa";
import BrandLockup from "./BrandLockup";

const LINKS = [
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Paper-white sticky bar: logo, nav, a phone line and the one terracotta
// action. On the homepage it is fixed and transparent over the photo hero
// instead, turning paper-white once the page scrolls.
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const home = pathname === "/";
  const clear = home && !scrolled && !open;

  return (
    <>
      <header
        className={`top-0 z-[60] border-b transition-[background-color,border-color,box-shadow] duration-500 ${home ? "fixed inset-x-0" : "sticky"} ${
          clear
            ? "border-paper/15 bg-transparent"
            : `bg-paper/95 backdrop-blur-md ${scrolled ? "border-line shadow-[0_10px_30px_-22px_rgba(43,23,12,.45)]" : "border-transparent"}`
        }`}
      >
        <div className="container-site flex h-[var(--header-h)] items-center gap-3 sm:gap-6">
          <Link href="/" aria-label="Kasbah Trails, home" className="mr-auto min-w-0">
            <BrandLockup preload tone={clear ? "light" : "dark"} />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 xl:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`relative py-2 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-terra after:transition-transform after:duration-300 ${
                  isActive(l.href)
                    ? "text-terra after:scale-x-100"
                    : clear
                      ? "text-paper/85 after:scale-x-0 after:bg-sun hover:text-paper hover:after:scale-x-100"
                      : "text-ink/75 after:scale-x-0 hover:text-ink hover:after:scale-x-100"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ml-2 hidden items-center gap-5 2xl:flex">
            <a href={`tel:${CONTACT.phoneTel}`} className="text-right leading-tight">
              <span className={`block text-[0.62rem] font-medium uppercase tracking-[0.18em] ${clear ? "text-paper/60" : "text-muted"}`}>
                Speak to us
              </span>
              <span className={`block whitespace-nowrap text-[0.9rem] ${clear ? "text-paper" : "text-ink hover:text-terra"}`}>{CONTACT.phoneDisplay}</span>
            </a>
          </div>
          <Link
            href="/contact"
            className={`group btn btn-sm hidden sm:inline-flex ${clear ? "btn-outline-light" : "btn-primary"}`}
          >
            Plan your journey
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className={`-mr-2 shrink-0 p-2 xl:hidden ${clear ? "text-paper" : "text-ink"}`}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 7h18M7 12h14M3 17h18" />}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu sheet, outside <header>: the header's backdrop-filter
          would otherwise become its containing block. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-[59] overflow-y-auto bg-paper xl:hidden"
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col py-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`border-b border-line py-4 font-serif text-[1.8rem] ${isActive(l.href) ? "text-terra" : "text-ink"}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-auto space-y-5 pb-4 pt-10">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Plan your journey
            </Link>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.92rem] text-muted">
              <a href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")} target="_blank" rel="noopener">
                WhatsApp
              </a>
              <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
