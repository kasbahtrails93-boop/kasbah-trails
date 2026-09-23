import Image from "next/image";
import Link from "next/link";
import { WHY_POINTS } from "./Why";
import SectionHeading from "./SectionHeading";

// Dark kasbah-brown band: the four promises beside a framed photograph.
export default function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden bg-kasbah">
      <div aria-hidden className="zellige absolute inset-0 -z-10 opacity-[0.06]" />
      <div className="container-site section-y grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[480px] pb-6 pr-6">
          <div aria-hidden className="absolute bottom-0 right-0 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[var(--radius-card)] border border-sun/35" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-card)]">
            <Image
              src="/images/pool/mhamid-desert-dunes-sunset.webp"
              alt="Sunset over the rolling dunes of the Sahara desert near Mhamid, Morocco"
              fill
              sizes="(max-width: 1024px) 90vw, 36vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="Why travel with us"
            title="The difference is in who plans it"
          />
          <ul className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {WHY_POINTS.map((p) => (
              <li key={p.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-sun/40 text-sun">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d={p.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 text-[1.3rem] text-paper">{p.title}</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-paper/65">{p.body}</p>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-primary mt-11">
            Start planning
          </Link>
        </div>
      </div>
    </section>
  );
}
