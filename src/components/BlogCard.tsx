import Link from "next/link";
import { TINT } from "@/lib/data";
import SceneSvg from "./SceneSvg";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const tint = TINT[post.origin] ?? TINT.Marrakech;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-card shadow-[0_18px_40px_-24px_rgba(63,33,9,.45)]"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <div className="h-full w-full transition-transform duration-300 group-hover:scale-105">
          <SceneSvg scene={post.scene} tint={tint} uid={`blog-${post.slug}`} />
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readMins} min read</span>
        </div>
        <h3 className="mb-2 font-serif text-lg font-semibold leading-snug text-espresso group-hover:text-terracotta">
          {post.title}
        </h3>
        <p className="text-sm text-muted">{post.description}</p>
      </div>
    </Link>
  );
}
