"use client";

import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/wa";

const CITIES = ["Marrakech", "Fes", "Casablanca", "Tangier"];

const inputClass =
  "w-full rounded-lg border border-line bg-sand px-4 py-2.5 text-[.95rem] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-terracotta";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState(CITIES[0]);
  const [days, setDays] = useState("");
  const [travelers, setTravelers] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      `Hi Kasbah Trails, I'd like to plan a private Morocco tour.`,
      `Name: ${name}`,
      `Starting city: ${city}`,
      days && `Trip length: ${days} days`,
      travelers && `Travelers: ${travelers}`,
      dates && `Preferred dates: ${dates}`,
      message && `Notes: ${message}`,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-line bg-card p-7 sm:p-9"
    >
      <p className="mb-1 text-sm font-bold text-espresso">Send us your trip details</p>
      <p className="mb-6 text-sm text-muted">
        We&apos;ll open WhatsApp with everything filled in — just hit send from there.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-ink">
            Full name <span className="text-terracotta">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="cf-city" className="mb-1.5 block text-sm font-semibold text-ink">
              Starting city <span className="text-terracotta">*</span>
            </label>
            <select
              id="cf-city"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={inputClass}
            >
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="cf-days" className="mb-1.5 block text-sm font-semibold text-ink">
              Trip length (days)
            </label>
            <input
              id="cf-days"
              type="number"
              min={1}
              max={30}
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="7"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="cf-travelers" className="mb-1.5 block text-sm font-semibold text-ink">
              Travelers
            </label>
            <input
              id="cf-travelers"
              type="number"
              min={1}
              max={20}
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              placeholder="2"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="cf-dates" className="mb-1.5 block text-sm font-semibold text-ink">
              Preferred dates
            </label>
            <input
              id="cf-dates"
              type="text"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              placeholder="e.g. mid-March"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold text-ink">
            Anything else we should know?
          </label>
          <textarea
            id="cf-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Places you'd love to see, pace, special occasions..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-olive px-6 py-3.5 text-[.98rem] font-bold text-white transition-colors hover:bg-olive-d"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.3c-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.2.1.7-.1 1.3z" />
          </svg>
          Continue on WhatsApp
        </button>

        {sent && (
          <p className="text-center text-sm text-muted">
            Opened WhatsApp in a new tab — didn&apos;t appear?{" "}
            <a href={waLink(`Hi Kasbah Trails, I'd like to plan a private Morocco tour.`)} target="_blank" rel="noopener" className="font-semibold text-terracotta underline">
              Try again
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
