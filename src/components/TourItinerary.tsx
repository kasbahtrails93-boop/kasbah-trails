import { INCLUDED, EXCLUDED, type Tour } from "@/lib/data";
import { waLink } from "@/lib/wa";

export default function TourItinerary({ tour }: { tour: Tour }) {
  return (
    <div>
      <h2 className="mb-3 font-serif text-lg font-semibold text-espresso">Highlights</h2>
      <ul className="mb-8 grid gap-2 sm:grid-cols-2">
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

      <h2 className="mb-3 font-serif text-lg font-semibold text-espresso">Day by day</h2>
      <div className="mb-8 space-y-4">
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

      <div className="mb-8 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="mb-2 font-serif text-base font-semibold text-espresso">What&apos;s included</h2>
          <ul className="space-y-1 text-sm text-muted">
            {INCLUDED.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-base font-semibold text-espresso">Not included</h2>
          <ul className="space-y-1 text-sm text-muted">
            {EXCLUDED.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 rounded-2xl border border-line bg-sand-2 p-6">
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
          className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-bold text-espresso hover:border-terracotta hover:text-terracotta"
        >
          Enquire by email
        </a>
      </div>
    </div>
  );
}
