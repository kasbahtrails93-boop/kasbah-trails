import { WHY_POINTS } from "../Why";

// The four standing promises in one raised card, split by hairlines.
export default function Values() {
  return (
    <section aria-labelledby="values-title" className="pb-[var(--sy)]">
      <div className="container-site">
        <div className="overflow-hidden rounded-[12px] border border-line bg-card shadow-[0_30px_70px_-45px_rgba(43,23,12,.45)]">
          <div className="border-b border-line px-7 py-7 sm:px-10">
            <h2 id="values-title" className="text-[1.6rem] sm:text-[1.9rem]">
              What stays the same on every journey
            </h2>
          </div>
          <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {WHY_POINTS.map((p) => (
              <li key={p.title} className="bg-card p-7 sm:p-9">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sand text-terra">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d={p.icon} />
                  </svg>
                </span>
                <h3 className="mt-5 text-[1.25rem]">{p.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
