import Image from "next/image";
import Link from "next/link";
import { Star } from "../Ornament";

// Who we are: one tall framed photograph with a pull quote laid over its
// foot, beside the brand's own story and a signed-off close.
export default function Intro() {
  return (
    <section id="intro" className="section-y overflow-hidden">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <figure className="relative mx-auto w-full max-w-[520px] pb-16 pl-5 sm:pl-8 lg:mx-0">
          <div aria-hidden className="absolute left-0 top-8 h-[calc(100%-6rem)] w-[70%] rounded-[var(--radius-card)] bg-sand" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-dune shadow-[0_30px_60px_-35px_rgba(43,23,12,.55)]">
            <Image
              src="/images/destinations/ait-ben-haddou-kasbah-unesco-site.webp"
              alt="The fortified earthen ksar of Aït Ben Haddou, a UNESCO World Heritage site in Morocco"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <blockquote className="absolute bottom-0 right-0 w-[82%] rounded-[var(--radius-card)] bg-kasbah p-6 text-paper shadow-[0_24px_50px_-28px_rgba(43,23,12,.7)] sm:right-[-2rem] sm:p-7">
            <Star size={12} className="text-sun" />
            <p className="mt-3 font-serif text-[1.2rem] leading-snug sm:text-[1.35rem]">
              The viewpoint a few switchbacks past where every other itinerary tells you to turn around.
            </p>
            <figcaption className="mt-3 text-[0.72rem] uppercase tracking-[0.2em] text-sun">Aït Ben Haddou</figcaption>
          </blockquote>
        </figure>

        <div>
          <p className="eyebrow flex items-center gap-2.5 text-terra">
            <Star size={9} />
            Who we are
          </p>
          <h2 className="mt-4 max-w-[16ch] text-h2">A trip that feels like Morocco, not a package</h2>
          <p className="mt-7 text-[1.08rem] leading-[1.8] text-ink">
            We&apos;ve spent years driving these routes, staying in these riads and drinking tea in these villages —
            long before any of it went on a website.
          </p>
          <p className="mt-4 text-[1.02rem] leading-[1.85]">
            That&apos;s the difference you feel on the road: the shortcut around the tour-bus queue at the kasbah gate,
            the family who waves you in for tea, and a plan that bends when something better comes along.
          </p>

          <div className="mt-9 flex items-center gap-4 border-t border-line pt-7">
            <Image src="/images/brand/kasbah-trails-mark.png" alt="" width={1000} height={390} className="h-9 w-auto shrink-0" />
            <p className="text-[0.9rem] leading-snug">
              <span className="block font-serif text-[1.15rem] text-ink">The Kasbah Trails team</span>
              <span className="text-muted">Based in Fez, planning private trips across Morocco</span>
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/about" className="group btn btn-dark">
              Our story
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link href="/tours" className="link-arrow">
              Browse journeys
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
