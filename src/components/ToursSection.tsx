"use client";

import { useMemo, useState } from "react";
import { TOURS, type Tour } from "@/lib/data";
import TourCard from "./TourCard";

const CITY_CHIPS: { label: string; value: string }[] = [
  { label: "All cities", value: "all" },
  { label: "Marrakech", value: "Marrakech" },
  { label: "Fes", value: "Fes" },
  { label: "Casablanca", value: "Casablanca" },
  { label: "Tangier", value: "Tangier" },
];

const LEN_CHIPS: { label: string; value: string }[] = [
  { label: "Any length", value: "all" },
  { label: "1–3 days", value: "1-3" },
  { label: "4–7 days", value: "4-7" },
  { label: "8–11 days", value: "8-11" },
  { label: "12+ days", value: "12+" },
];

function cityMatch(t: Tour, c: string) {
  return c === "all" || t.from === c;
}
function lenMatch(t: Tour, l: string) {
  if (l === "all") return true;
  if (l === "1-3") return t.days <= 3;
  if (l === "4-7") return t.days >= 4 && t.days <= 7;
  if (l === "8-11") return t.days >= 8 && t.days <= 11;
  return t.days >= 12;
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? "border-terracotta bg-terracotta text-white"
          : "border-line bg-card text-ink hover:border-terracotta hover:text-terracotta"
      }`}
    >
      {children}
    </button>
  );
}

const CITY_VALUES = new Set(CITY_CHIPS.map((c) => c.value));
const LEN_VALUES = new Set(LEN_CHIPS.map((c) => c.value));

export default function ToursSection({
  initialCity = "all",
  initialLen = "all",
}: {
  initialCity?: string;
  initialLen?: string;
}) {
  const [fCity, setFCity] = useState(CITY_VALUES.has(initialCity) ? initialCity : "all");
  const [fLen, setFLen] = useState(LEN_VALUES.has(initialLen) ? initialLen : "all");

  const list = useMemo(
    () => TOURS.filter((t) => cityMatch(t, fCity) && lenMatch(t, fLen)),
    [fCity, fLen]
  );

  return (
    <section id="tours" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(24px,4vw,44px)]">
        <div className="flex flex-wrap gap-8">
          <div>
            <span className="mb-2 block text-xs font-bold tracking-wide text-muted">Starting from</span>
            <div className="flex flex-wrap gap-2">
              {CITY_CHIPS.map((c) => (
                <Chip key={c.value} active={fCity === c.value} onClick={() => setFCity(c.value)}>
                  {c.label}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <span className="mb-2 block text-xs font-bold tracking-wide text-muted">Length</span>
            <div className="flex flex-wrap gap-2">
              {LEN_CHIPS.map((c) => (
                <Chip key={c.value} active={fLen === c.value} onClick={() => setFLen(c.value)}>
                  {c.label}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted" role="status">
          Showing {list.length} of {TOURS.length} tours
        </p>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.length ? (
            list.map((t) => <TourCard key={t.id} tour={t} />)
          ) : (
            <div className="col-span-full rounded-lg border border-dashed border-line p-10 text-center text-muted">
              No tours match those filters yet — try widening your search, or{" "}
              <a href="#contact" className="text-terracotta underline">
                ask us for a custom trip
              </a>
              .
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
