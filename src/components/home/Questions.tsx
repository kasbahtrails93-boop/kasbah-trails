import Link from "next/link";
import { FAQS } from "../Faq";

// FAQ as rounded accordion cards in two columns.
export default function Questions() {
  const half = Math.ceil(FAQS.length / 2);
  const cols = [FAQS.slice(0, half), FAQS.slice(half)];
  return (
    <section id="faq" className="section-y scroll-mt-24">
      <div className="container-site">
        <div className="text-center">
          <p className="eyebrow text-terra">Good to know</p>
          <h2 className="mt-4 text-h2">Questions, answered</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:items-start">
          {cols.map((col, c) => (
            <div key={c} className="grid gap-4">
              {col.map((f) => (
                <details key={f.q} className="faq-item group rounded-[var(--radius-card)] border border-line bg-card px-6 open:border-terra/40 open:shadow-[0_18px_40px_-30px_rgba(43,23,12,.4)]">
                  <summary className="flex cursor-pointer items-center justify-between gap-5 py-5 font-serif text-[1.12rem] leading-snug text-ink">
                    {f.q}
                  </summary>
                  <p className="pb-6 text-[0.95rem] leading-[1.8]">{f.a}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-[0.98rem]">
          Something not covered here?{" "}
          <Link href="/contact" className="text-terra underline underline-offset-4">
            Ask us directly
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
