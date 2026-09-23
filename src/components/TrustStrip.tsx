import { TOURS } from "@/lib/data";

const ITEMS = [
  { title: "100% private", body: "Just you and your own driver-guide", icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0" },
  { title: `${TOURS.length} itineraries`, body: "Every one of them ready to tailor", icon: "M4 5h16M4 12h16M4 19h10" },
  { title: "4 start cities", body: "Marrakech, Fes, Casablanca, Tangier", icon: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" },
  { title: "Honest pricing", body: "A clear quote before you commit", icon: "M20 12l-8 8-9-9V3h8zM7.5 7.5h.01" },
];

// Four facts with line icons, under the journey finder (and on /about).
export default function TrustStrip() {
  return (
    <ul className="container-site grid grid-cols-2 gap-x-6 gap-y-8 py-12 lg:grid-cols-4">
      {ITEMS.map((it) => (
        <li key={it.title} className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sun-d/40 text-terra">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d={it.icon} />
            </svg>
          </span>
          <span>
            <span className="block font-serif text-[1.15rem] leading-tight text-ink">{it.title}</span>
            <span className="mt-1 block text-[0.88rem] leading-snug text-muted">{it.body}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
