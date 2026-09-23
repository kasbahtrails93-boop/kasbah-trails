"use client";

import { useMemo, useState } from "react";
import { TOURS, type Tour } from "@/lib/data";
import TourCard from "./TourCard";

const CITIES = ["Marrakech", "Casablanca", "Fes", "Tangier"];
const CATS = ["Desert", "Imperial & Culture", "Grand Tour"];
const LENGTHS: { label: string; value: string }[] = [
  { label: "Any length", value: "all" },
  { label: "1–3 days", value: "1-3" },
  { label: "4–7 days", value: "4-7" },
  { label: "8–11 days", value: "8-11" },
  { label: "12+ days", value: "12+" },
];

function lenMatch(t: Tour, l: string) {
  if (l === "all") return true;
  if (l === "1-3") return t.days <= 3;
  if (l === "4-7") return t.days >= 4 && t.days <= 7;
  if (l === "8-11") return t.days >= 8 && t.days <= 11;
  return t.days >= 12;
}

function Tab({
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
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`relative whitespace-nowrap px-1 py-3 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-terra after:transition-transform after:duration-300 ${
        active ? "text-terra after:scale-x-100" : "text-muted after:scale-x-0 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-[0.66rem] font-medium uppercase tracking-[0.2em] text-terra">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="field cursor-pointer py-2.5 font-serif text-[1.05rem]"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

// The full tour catalogue with city, style and length filters. Deep links
// (/tours?city=&cat=&len=) pre-select the filters.
export default function ToursSection({
  initialCity = "all",
  initialLen = "all",
  initialCat = "all",
}: {
  initialCity?: string;
  initialLen?: string;
  initialCat?: string;
}) {
  const [city, setCity] = useState(CITIES.includes(initialCity) ? initialCity : "all");
  const [cat, setCat] = useState(CATS.includes(initialCat) ? initialCat : "all");
  const [len, setLen] = useState(LENGTHS.some((l) => l.value === initialLen) ? initialLen : "all");

  const list = useMemo(
    () =>
      TOURS.filter(
        (t) => (city === "all" || t.from === city) && (cat === "all" || t.cat === cat) && lenMatch(t, len)
      ),
    [city, cat, len]
  );

  return (
    <section id="tours" className="section-y scroll-mt-24">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <div role="group" aria-label="Travel style" className="flex gap-7 overflow-x-auto border-b border-line [scrollbar-width:none]">
            <Tab active={cat === "all"} onClick={() => setCat("all")}>
              All journeys
            </Tab>
            {CATS.map((c) => (
              <Tab key={c} active={cat === c} onClick={() => setCat(c)}>
                {c === "Desert" ? "Sahara & desert" : c === "Imperial & Culture" ? "Imperial cities" : "Grand tours"}
              </Tab>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:w-[420px]">
            <Select
              label="Starting from"
              value={city}
              onChange={setCity}
              options={[{ label: "Any city", value: "all" }, ...CITIES.map((c) => ({ label: c, value: c }))]}
            />
            <Select label="Trip length" value={len} onChange={setLen} options={LENGTHS} />
          </div>
        </div>

        <p className="mt-8 text-[0.92rem] text-muted" role="status">
          Showing <span className="text-ink">{list.length}</span> of {TOURS.length} private journeys
        </p>

        <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>

        {!list.length && (
          <div className="rounded-[var(--radius-card)] border border-dashed border-line p-12 text-center">
            <p className="font-serif text-[1.4rem] text-ink">No journeys match those filters yet.</p>
            <p className="mt-2">
              Try widening your search, or{" "}
              <a href="#contact" className="text-terra underline underline-offset-4">
                ask us for a custom trip
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
