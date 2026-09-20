import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-espresso-2 text-sand">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2.5">
              <Image
                src="/images/brand/kasbah-trails-mark.png"
                alt="Kasbah Trails"
                width={160}
                height={62}
                className="h-8 w-auto"
              />
              <p className="font-serif text-xl font-semibold text-white">Kasbah Trails</p>
            </div>
            <p className="max-w-[34ch] text-sm text-sand/70">
              Private, tailor-made Morocco tours guided by locals — the Sahara, the imperial cities
              and the Atlas, at your own pace.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-serif text-base font-semibold text-white">By city</h4>
            <ul className="space-y-2 text-sm text-sand/70">
              <li><Link href="/tours?city=Marrakech" className="transition-colors hover:text-white">From Marrakech</Link></li>
              <li><Link href="/tours?city=Fes" className="transition-colors hover:text-white">From Fes</Link></li>
              <li><Link href="/tours?city=Casablanca" className="transition-colors hover:text-white">From Casablanca</Link></li>
              <li><Link href="/tours?city=Tangier" className="transition-colors hover:text-white">From Tangier</Link></li>
              <li><Link href="/tours" className="transition-colors hover:text-white">All tours</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-serif text-base font-semibold text-white">By length</h4>
            <ul className="space-y-2 text-sm text-sand/70">
              <li><Link href="/tours?len=1-3" className="transition-colors hover:text-white">1–3 day tours</Link></li>
              <li><Link href="/tours?len=4-7" className="transition-colors hover:text-white">4–7 day tours</Link></li>
              <li><Link href="/tours?len=8-11" className="transition-colors hover:text-white">8–11 day tours</Link></li>
              <li><Link href="/tours?len=12%2B" className="transition-colors hover:text-white">12+ day grand tours</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-serif text-base font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-sand/70">
              <li><Link href="/about" className="transition-colors hover:text-white">About us</Link></li>
              <li><Link href="/#how" className="transition-colors hover:text-white">How it works</Link></li>
              <li><Link href="/#faq" className="transition-colors hover:text-white">FAQ</Link></li>
              <li><Link href="/destinations" className="transition-colors hover:text-white">Destinations</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-t border-amber/20 pt-6 text-xs text-sand/60">
          <span>© {year} Kasbah Trails. Private, tailor-made Morocco tours.</span>
          <div className="text-right">
            <div>Fez, Morocco</div>
            <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
