import Link from "next/link";
import { BLOG } from "@/lib/blog";
import BlogCard from "./BlogCard";

export default function BlogTeaser() {
  const latest = BLOG.slice(0, 3);
  return (
    <section className="bg-sand-2">
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(44px,7vw,80px)]">
        <div className="text-center">
          <h2 className="text-[clamp(1.7rem,3.6vw,2.9rem)] tracking-tight">Planning notes worth reading</h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-[1.06rem] text-muted">
            Honest answers to the questions we get asked most, before you even message us.
          </p>
        </div>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3.5 text-[.98rem] font-bold text-espresso hover:border-terracotta hover:text-terracotta"
          >
            Read all guides
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
