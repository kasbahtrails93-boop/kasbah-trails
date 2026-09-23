import Image from "next/image";
import Link from "next/link";
import { BLOG } from "@/lib/blog";
import { pickPhoto } from "@/lib/photoPool";
import Rail from "./Rail";

// Journal guides as a scrolling rail on the sand band.
export default function Guides() {
  const posts = BLOG.slice(0, 8);
  return (
    <section className="section-y bg-sand">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[40rem]">
            <p className="eyebrow text-terra">The journal</p>
            <h2 className="mt-4 text-h2">Before you travel</h2>
            <p className="mt-4 text-[1.04rem] leading-relaxed">
              Clear answers to the questions we&apos;re asked most, from how many days to budget to what a desert
              camp night is really like.
            </p>
          </div>
          <Link href="/blog" className="btn btn-ghost">
            All {BLOG.length} guides
          </Link>
        </div>
        <div className="mt-10">
          <Rail label="Travel guides">
            {posts.map((p) => {
              const photo = pickPhoto(p.scene, p.slug);
              return (
                <li key={p.slug} className="w-[80%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-2.5rem)/3)]">
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] bg-dune">
                      <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 80vw, 33vw" className="zoom object-cover" />
                      <span className="absolute left-3 top-3 rounded-full bg-paper/95 px-3 py-1 text-[0.72rem] text-ink">
                        {p.readMins} min read
                      </span>
                    </div>
                    <h3 className="mt-5 text-[1.3rem] leading-snug transition-colors group-hover:text-terra">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-[0.92rem] leading-relaxed text-muted">{p.description}</p>
                  </Link>
                </li>
              );
            })}
          </Rail>
        </div>
      </div>
    </section>
  );
}
