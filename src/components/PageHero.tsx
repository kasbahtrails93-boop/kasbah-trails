import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import { Star } from "./Ornament";

// Photo banner for listing pages: breadcrumbs, label, title and intro set
// left over a warm kasbah-brown wash.
export default function PageHero({
  image,
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  image: { src: string; alt: string };
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate flex min-h-[400px] items-end overflow-hidden bg-kasbah-2 md:min-h-[460px]">
      <Image src={image.src} alt={image.alt} fill preload sizes="100vw" className="-z-10 object-cover" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(41,20,10,.85)_0%,rgba(41,20,10,.5)_50%,rgba(41,20,10,.15)_100%),linear-gradient(0deg,rgba(41,20,10,.5)_0%,rgba(41,20,10,0)_45%)]"
      />
      <div className="container-site pb-14 pt-24">
        {crumbs && <Breadcrumbs items={crumbs} tone="light" />}
        {eyebrow && (
          <p className="mt-6 flex items-center gap-2.5 text-[0.74rem] font-medium uppercase tracking-[0.28em] text-sun">
            <Star size={9} />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-[20ch] text-h1 text-paper">{title}</h1>
        {intro && <div className="mt-5 max-w-[58ch] text-[1.05rem] leading-relaxed text-paper/80">{intro}</div>}
      </div>
    </section>
  );
}
