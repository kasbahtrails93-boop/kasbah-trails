import { CONTACT } from "@/lib/data";
import { waLink } from "@/lib/wa";
import SectionHeading from "./SectionHeading";
import { Star } from "./Ornament";

export const CONTACT_POINTS = [
  {
    title: "Usually within the hour",
    body: "Message any time — a real person on the ground in Morocco replies with ideas and a price, not a bot.",
  },
  {
    title: "No obligation, no pressure",
    body: "Ask questions, compare a few routes, take a day to think. There's no deposit until you're ready.",
  },
  {
    title: "One planner, start to finish",
    body: "The same person who quotes your trip stays reachable throughout it — not a call centre queue.",
  },
];

// Direct contact details, shared by the band below and the /contact page.
export function DirectContact() {
  const rows = [
    { k: "WhatsApp", v: "Message us", href: waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour."), external: true },
    { k: "Phone", v: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneTel}` },
    { k: "Email", v: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { k: "Based in", v: "Fez, Morocco" },
  ];
  return (
    <dl className="divide-y divide-line">
      {rows.map((r) => (
        <div key={r.k} className="flex justify-between gap-6 py-4 text-[0.97rem]">
          <dt className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted">{r.k}</dt>
          <dd className="text-ink">
            {r.href ? (
              <a href={r.href} {...(r.external ? { target: "_blank", rel: "noopener" } : {})} className="hover:text-terra">
                {r.v}
              </a>
            ) : (
              r.v
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

// "Not sure which journey fits?" band under the tours and destinations lists.
export default function Contact() {
  return (
    <section id="contact" className="section-y scroll-mt-24 bg-sand">
      <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Plan your journey"
            title="Not sure which journey fits?"
            intro="Send your dates, how many days you have and what you'd love to see. Here's what happens from there."
          />
          <ul className="mt-9 space-y-6">
            {CONTACT_POINTS.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sun-d/40 text-terra">
                  <Star size={11} />
                </span>
                <div>
                  <h3 className="text-[1.2rem]">{p.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card self-start p-7 sm:p-9">
          <a href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")} target="_blank" rel="noopener" className="btn btn-primary w-full">
            Message us on WhatsApp
          </a>
          <div className="mt-5">
            <DirectContact />
          </div>
        </div>
      </div>
    </section>
  );
}
