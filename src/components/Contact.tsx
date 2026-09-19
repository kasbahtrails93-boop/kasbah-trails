import { CONTACT } from "@/lib/data";
import { waLink } from "@/lib/wa";

export default function Contact() {
  return (
    <section id="contact" className="bg-sand-2">
      <div className="mx-auto max-w-[720px] px-[clamp(18px,4vw,40px)] py-[clamp(56px,8vw,104px)] text-center">
        <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">Let&apos;s plan it</p>
        <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">Start your Morocco trip</h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-[1.06rem] text-muted">
          Message us your dates, how many days you have, and what you&apos;d love to see. We reply
          — usually within the hour — with ideas and a rough price. No obligation.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[#1f7a4d] px-7 py-3.5 text-[.98rem] font-bold text-white shadow-[0_10px_22px_-12px_rgba(31,122,77,.7)] hover:bg-[#186139]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.3c-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.2.1.7-.1 1.3z" />
            </svg>
            Message us on WhatsApp
          </a>
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-7 py-3.5 text-[.98rem] font-bold text-espresso hover:border-terracotta hover:text-terracotta"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8 12a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
            </svg>
            Call
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-7 py-3.5 text-[.98rem] font-bold text-espresso hover:border-terracotta hover:text-terracotta"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            Email
          </a>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-muted">
          <span>{CONTACT.phoneDisplay}</span>
          <span aria-hidden className="hidden sm:inline">
            ·
          </span>
          <span>{CONTACT.email}</span>
          <span aria-hidden className="hidden sm:inline">
            ·
          </span>
          <span>Based in Fez, Morocco — travelling the whole country</span>
        </div>
      </div>
    </section>
  );
}
