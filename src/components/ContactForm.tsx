"use client";

import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/wa";

const CITIES = ["Marrakech", "Fes", "Casablanca", "Tangier"];

// Trip enquiry form. There's no backend: on submit it builds a message from
// the fields and opens WhatsApp with it filled in. `tourTitle` switches it to
// the per-tour "Ask about this route" version used in the tour sidebar.
export default function ContactForm({ tourTitle, compact = false }: { tourTitle?: string; compact?: boolean }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState(CITIES[0]);
  const [days, setDays] = useState("");
  const [travelers, setTravelers] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const opener = tourTitle
    ? `Hi Kasbah Trails, I'm interested in the ${tourTitle}.`
    : "Hi Kasbah Trails, I'd like to plan a private Morocco tour.";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      opener,
      `Name: ${name}`,
      !tourTitle && `Starting city: ${city}`,
      days && `Trip length: ${days} days`,
      travelers && `Travelers: ${travelers}`,
      dates && `Preferred dates: ${dates}`,
      message && `Notes: ${message}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  }

  const field = "field";
  const label = "mb-1.5 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted";
  const id = (s: string) => `${tourTitle ? "tf" : "cf"}-${s}`;

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? "" : "card p-7 sm:p-10"}
    >
      {!compact && <h2 className="text-[1.7rem]">Send us your trip details</h2>}
      <p className={`text-[0.93rem] leading-relaxed text-muted ${compact ? "" : "mt-2"}`}>
        {tourTitle
          ? "Send your rough dates and what you'd want to change, and we'll come back with a real draft, not a form letter."
          : "We'll open WhatsApp with everything filled in — just hit send from there."}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label htmlFor={id("name")} className={label}>
            Name <span className="text-terra">*</span>
          </label>
          <input id={id("name")} type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
        </div>
        {!tourTitle && (
          <div>
            <label htmlFor={id("city")} className={label}>
              Starting city
            </label>
            <select id={id("city")} value={city} onChange={(e) => setCity(e.target.value)} className={field}>
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label htmlFor={id("days")} className={label}>
            Trip length (days)
          </label>
          <input id={id("days")} type="number" min={1} max={30} value={days} onChange={(e) => setDays(e.target.value)} placeholder="e.g. 7" className={field} />
        </div>
        <div className={tourTitle ? "" : "col-span-2 sm:col-span-1"}>
          <label htmlFor={id("travelers")} className={label}>
            Travellers
          </label>
          <input id={id("travelers")} type="number" min={1} max={20} value={travelers} onChange={(e) => setTravelers(e.target.value)} placeholder="e.g. 2" className={field} />
        </div>
        <div className={tourTitle ? "col-span-2" : "col-span-2 sm:col-span-1"}>
          <label htmlFor={id("dates")} className={label}>
            Preferred dates
          </label>
          <input id={id("dates")} type="text" value={dates} onChange={(e) => setDates(e.target.value)} placeholder="e.g. mid-March" className={field} />
        </div>
        <div className="col-span-2">
          <label htmlFor={id("message")} className={label}>
            {tourTitle ? "What would you change about this route?" : "Anything else we should know?"}
          </label>
          <textarea
            id={id("message")}
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Places you'd love to see, pace, special occasions..."
            className={`${field} resize-none`}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-6 w-full">
        {tourTitle ? "Send inquiry on WhatsApp" : "Continue on WhatsApp"}
      </button>
      <p className="mt-3 text-center text-[0.8rem] text-muted" role="status">
        {sent ? (
          <>
            Opened WhatsApp in a new tab. Didn&apos;t appear?{" "}
            <a href={waLink(opener)} target="_blank" rel="noopener" className="underline">
              Try again
            </a>
            .
          </>
        ) : (
          "No payment is taken at this stage: this just starts the conversation."
        )}
      </p>
    </form>
  );
}
