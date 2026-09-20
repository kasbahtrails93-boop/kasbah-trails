import { CONTACT } from "@/lib/data";
import { waLink } from "@/lib/wa";

const POINTS = [
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

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-sand-2">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(28px,4vw,48px)]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">Let&apos;s plan it</p>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">Start your Morocco trip</h2>
            <p className="mt-4 max-w-[48ch] text-[1.06rem] text-muted">
              Send your dates, how many days you have, and what you&apos;d love to see. Here&apos;s
              what happens from there.
            </p>

            <ul className="mt-8 space-y-5">
              {POINTS.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <svg
                    className="mt-1 shrink-0 text-terracotta"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <div>
                    <b className="text-ink">{p.title}</b>
                    <span className="block text-sm text-muted">{p.body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-line bg-card p-7 sm:p-9">
            <p className="mb-1 text-sm font-bold text-espresso">Reach us directly</p>
            <p className="mb-6 text-sm text-muted">Whichever&apos;s easiest — we&apos;re on all three.</p>

            <div className="space-y-3">
              <a
                href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 rounded-lg bg-olive px-6 py-3.5 text-[.98rem] font-bold text-white hover:bg-olive-d"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.3c-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.2.1.7-.1 1.3z" />
                </svg>
                Message us on WhatsApp
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="flex items-center justify-center gap-2 rounded-lg border border-line bg-sand px-4 py-3 text-sm font-bold text-espresso hover:border-terracotta hover:text-terracotta"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8 12a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                  Call
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center justify-center gap-2 rounded-lg border border-line bg-sand px-4 py-3 text-sm font-bold text-espresso hover:border-terracotta hover:text-terracotta"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                  Email
                </a>
              </div>
            </div>

            <div className="mt-7 space-y-3 border-t border-line pt-6 text-sm">
              <div className="flex items-center gap-2.5 text-ink">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-muted">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8 12a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
                </svg>
                {CONTACT.phoneDisplay}
              </div>
              <div className="flex items-center gap-2.5 text-ink">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-muted">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                {CONTACT.email}
              </div>
              <div className="flex items-center gap-2.5 text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-muted">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Based in Fez, Morocco — travelling the whole country
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
