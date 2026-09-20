import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pickPhoto } from "@/lib/photoPool";

const heroPhoto = pickPhoto("medina", "blog-index");

export const metadata: Metadata = {
  title: "Morocco Travel Guides & Tips",
  description:
    "Practical Morocco travel guides from a boutique private tour operator — itinerary planning, packing lists, city comparisons and clear answers to the questions travellers ask most.",
  alternates: { canonical: "/blog" },
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
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      </div>
      <div className="relative h-[40vh] min-h-[300px] max-h-[440px] w-full overflow-hidden">
        <Image src={heroPhoto.src} alt={heroPhoto.alt} fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/5" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-[clamp(24px,4vw,40px)]">
            <h1 className="max-w-[20ch] font-serif text-[clamp(1.9rem,4vw,3.1rem)] font-semibold tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,.4)]">
              Morocco travel guides &amp; tips
            </h1>
            <p className="mt-4 max-w-[70ch] text-[1.02rem] text-white/85">
              Honest, specific answers to the questions we get asked most on WhatsApp — how many
              days to budget, what a desert camp night is really like, and how to build a route
              that doesn&apos;t rush past the parts worth lingering in. Browse everything below, or
              jump straight to{" "}
              <Link href="/tours" className="font-semibold text-white underline">
                all 33 private itineraries
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] pb-[clamp(56px,8vw,104px)] pt-[clamp(32px,5vw,56px)]">
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
