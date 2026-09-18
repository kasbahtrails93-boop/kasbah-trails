"use client";

import { CONTACT, TOURS } from "@/lib/data";
import { waLink } from "@/lib/wa";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData(f);
    const msg = `Hi Kasbah Trails! I'd like to plan a private Morocco tour.
Name: ${data.get("name") || "-"}
Email: ${data.get("email") || "-"}
Tour: ${data.get("tour") || "Custom / not sure"}
Dates: ${data.get("dates") || "-"}
Notes: ${data.get("message") || "-"}`;
    window.open(waLink(msg), "_blank", "noopener");
  }

  const inputClasses =
    "mt-1 w-full rounded-lg border border-line bg-card px-3.5 py-2.5 text-sm text-ink outline-none focus:border-terracotta";

  return (
    <section id="contact" className="bg-sand-2">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(56px,8vw,104px)]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">Let&apos;s plan it</p>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">Start your Morocco trip</h2>
          </div>
          <p className="max-w-[46ch] text-[1.06rem] text-muted">
            Tell us a little about your trip and we&apos;ll reply — usually within the hour — with
            ideas and a rough price. No obligation.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-terracotta">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8 12a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <div>
                <b className="block">Call</b>
                <a href={`tel:${CONTACT.phoneTel}`} className="text-terracotta">
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-terracotta">
                <path d="M21 11.5a8.4 8.4 0 0 1-1.2 4.3A8.5 8.5 0 0 1 8.2 19L3 21l1.9-5.1A8.5 8.5 0 1 1 21 11.5z" />
              </svg>
              <div>
                <b className="block">WhatsApp</b>
                <a
                  href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
                  target="_blank"
                  rel="noopener"
                  className="text-terracotta"
                >
                  Chat with us now
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-terracotta">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <div>
                <b className="block">Email</b>
                <a href={`mailto:${CONTACT.email}`} className="text-terracotta">
                  {CONTACT.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 text-terracotta">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <b className="block">Based in</b>
                <span className="text-muted">Fez, Morocco — travelling the whole country</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fname" className="text-sm font-semibold">
                  Your name
                </label>
                <input id="fname" name="name" placeholder="Jane Traveller" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="femail" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="femail"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="ftour" className="text-sm font-semibold">
                  Tour of interest
                </label>
                <select id="ftour" name="tour" className={inputClasses}>
                  <option value="">Not sure yet / custom trip</option>
                  {TOURS.map((t) => (
                    <option key={t.id}>{t.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="fdates" className="text-sm font-semibold">
                  Rough dates / length
                </label>
                <input id="fdates" name="dates" placeholder="Early May, ~8 days" className={inputClasses} />
              </div>
            </div>
            <div>
              <label htmlFor="fmsg" className="text-sm font-semibold">
                Anything you&apos;d love to include?
              </label>
              <textarea
                id="fmsg"
                name="message"
                rows={4}
                placeholder="We're 2 adults, love food and hiking, would prefer riads over hotels…"
                className={inputClasses}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-amber px-6 py-3.5 text-center text-[.98rem] font-bold text-espresso-2 hover:bg-amber-d"
            >
              Send my enquiry on WhatsApp
            </button>
            <small className="block text-[.8rem] text-muted">
              Opens WhatsApp with your details pre-filled — or use the email above.
            </small>
          </form>
        </div>
      </div>
    </section>
  );
}
