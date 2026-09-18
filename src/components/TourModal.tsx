"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { INCLUDED, EXCLUDED, type Tour } from "@/lib/data";
import { waLink } from "@/lib/wa";
import { pickPhoto } from "@/lib/photoPool";

export default function TourModal({ tour, onClose }: { tour: Tour; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const photo = pickPhoto(tour.scene, tour.id);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[rgba(30,15,4,.6)] p-[4vh_16px] backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="my-[4vh] w-full max-w-[720px] overflow-hidden rounded-3xl bg-card shadow-2xl">
        <div className="relative">
          <div className="relative aspect-[16/7] w-full">
            <Image src={photo.src} alt={photo.alt} fill sizes="720px" className="object-cover" priority />
          </div>
          <button
            ref={closeRef}
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
          >
            ✕
          </button>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
            <div className="mb-1 text-sm font-semibold text-white/85">
              {tour.from} → {tour.to}
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">{tour.title}</h3>
            <div className="mt-2 flex flex-wrap gap-3 text-sm text-white/90">
              <span>◷ {tour.days} days</span>
              <span>◈ {tour.cat}</span>
              <span>✦ 100% private</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="mb-5 text-[1.02rem] text-ink">{tour.blurb}</p>

          <h4 className="mb-3 font-serif text-lg font-semibold text-espresso">Highlights</h4>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {tour.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-ink">
                <svg
                  className="mt-0.5 shrink-0 text-terracotta"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {h}
              </li>
            ))}
          </ul>

          <h4 className="mb-3 font-serif text-lg font-semibold text-espresso">Day by day</h4>
          <div className="mb-6 space-y-4">
            {tour.itin.map((day, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full bg-sand-2 text-espresso">
                  <small className="text-[.6rem] uppercase leading-none text-muted">Day</small>
                  <span className="font-serif text-base font-semibold leading-none">{i + 1}</span>
                </div>
                <div>
                  <b className="text-ink">{day.t}</b>
                  <p className="mt-1 text-sm text-muted">{day.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 font-serif text-base font-semibold text-espresso">What&apos;s included</h4>
              <ul className="space-y-1 text-sm text-muted">
                {INCLUDED.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-serif text-base font-semibold text-espresso">Not included</h4>
              <ul className="space-y-1 text-sm text-muted">
                {EXCLUDED.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={waLink(`Hi Kasbah Trails, I'd like a quote for the ${tour.title}.`)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[#1f7a4d] px-6 py-3 text-sm font-bold text-white hover:bg-[#186139]"
            >
              Get a quote on WhatsApp
            </a>
            <a
              href={`mailto:hello@kasbahtrails.com?subject=${encodeURIComponent("Enquiry: " + tour.title)}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-bold text-espresso hover:border-terracotta hover:text-terracotta"
            >
              Enquire by email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
