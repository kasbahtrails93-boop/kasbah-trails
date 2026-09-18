import type { Metadata } from "next";
import Link from "next/link";
import { BLOG } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Morocco Travel Guides & Tips",
  description:
    "Practical Morocco travel guides from a boutique private tour operator — itinerary planning, the Sahara, packing lists, city comparisons and honest answers to the questions travellers actually ask.",
};

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: BLOG.map((post, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://kasbahtrails.com/blog/${post.slug}`,
    name: post.title,
  })),
};

export default function BlogPage() {
  return (
    <div className="bg-sand-2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }} />
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-8 pt-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      </div>
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-8">
        <p className="mb-2.5 text-sm font-bold tracking-wide text-terracotta">The Kasbah Trails journal</p>
        <h1 className="text-[clamp(1.9rem,4vw,3.1rem)] tracking-tight">Morocco travel guides &amp; tips</h1>
        <p className="mt-4 max-w-[70ch] text-[1.06rem] text-muted">
          Honest, specific answers to the questions we get asked most on WhatsApp — how many days
          to budget, what a desert camp night is really like, and how to build a route that
          doesn&apos;t rush past the parts worth lingering in. Browse everything below, or jump
          straight to <Link href="/tours" className="font-semibold text-terracotta underline">all 33 private itineraries</Link>.
        </p>
      </div>
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-[clamp(56px,8vw,104px)]">
        <p className="mb-6 text-sm text-muted">
          {BLOG.length} guides
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
