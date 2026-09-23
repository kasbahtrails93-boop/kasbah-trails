import type { Metadata } from "next";
import Link from "next/link";
import { BLOG } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import PageHero from "@/components/PageHero";
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
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }} />
      <PageHero
        image={heroPhoto}
        eyebrow="The journal"
        title="Morocco travel guides & tips"
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        intro={
          <p>
            Honest, specific answers to the questions we get asked most on WhatsApp — how many days to budget,
            what a desert camp night is really like, and how to build a route that doesn&apos;t rush past the
            parts worth lingering in. Or jump straight to{" "}
            <Link href="/tours" className="text-sun underline underline-offset-4 hover:text-paper">
              all 33 private itineraries
            </Link>
            .
          </p>
        }
      />
      <section className="section-y">
        <div className="container-site">
          <p className="text-[0.92rem] text-muted">{BLOG.length} guides</p>
          <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
