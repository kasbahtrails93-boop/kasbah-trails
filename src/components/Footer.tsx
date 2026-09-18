import { CONTACT } from "@/lib/data";
import { waLink } from "@/lib/wa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-espresso-2 text-sand">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-serif text-xl font-semibold text-white">Kasbah Trails</p>
            <p className="max-w-[34ch] text-sm text-sand/70">
              Private, tailor-made Morocco tours guided by locals — the Sahara, the imperial cities
              and the Atlas, at your own pace.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-serif text-base font-semibold text-white">Tours</h4>
            <ul className="space-y-2 text-sm text-sand/70">
              <li><a href="#tours" className="hover:text-white">From Marrakech</a></li>
              <li><a href="#tours" className="hover:text-white">From Fes</a></li>
              <li><a href="#tours" className="hover:text-white">From Casablanca</a></li>
              <li><a href="#tours" className="hover:text-white">From Tangier</a></li>
              <li><a href="#tours" className="hover:text-white">All tours</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-serif text-base font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-sand/70">
              <li><a href="#why" className="hover:text-white">About us</a></li>
              <li><a href="#how" className="hover:text-white">How it works</a></li>
              <li><a href="#destinations" className="hover:text-white">Destinations</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li>
                <a
                  href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-2 border-t border-white/10 pt-6 text-xs text-sand/60">
          <span>© {year} Kasbah Trails · Private Morocco Tours. All rights reserved.</span>
          <span>Fez, Morocco · {CONTACT.email}</span>
        </div>
      </div>
    </footer>
  );
}
