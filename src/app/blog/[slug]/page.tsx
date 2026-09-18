import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG, getPost, getRelatedPosts } from "@/lib/blog";
import { pickPhoto } from "@/lib/photoPool";
import BlogBlocks from "@/components/BlogBlocks";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateStaticParams() {
  return BLOG.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const photo = pickPhoto(post.scene, post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Kasbah Trails" },
    publisher: { "@type": "Organization", name: "Kasbah Trails" },
    mainEntityOfPage: `https://kasbahtrails.com/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kasbahtrails.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://kasbahtrails.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://kasbahtrails.com/blog/${post.slug}` },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-sand-2">
        <div className="mx-auto max-w-[820px] px-[clamp(18px,4vw,40px)] pb-6 pt-10">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]}
          />
        </div>
        <div className="mx-auto max-w-[820px] px-[clamp(18px,4vw,40px)] pb-10">
          <h1 className="text-[clamp(1.9rem,4vw,2.9rem)] tracking-tight">{post.title}</h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readMins} min read</span>
          </div>
        </div>
      </div>

      <div className="relative aspect-[21/9] w-full">
        <Image src={photo.src} alt={photo.alt} fill sizes="100vw" priority className="object-cover" />
      </div>

      <div className="mx-auto max-w-[820px] px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,64px)]">
        <p className="mb-6 text-[1.15rem] leading-relaxed text-ink">{post.intro}</p>
        <BlogBlocks blocks={post.blocks} />

        <div className="mt-10 rounded-2xl border border-line bg-sand-2 p-6">
          <p className="text-ink">
            Ready to see this in an itinerary?{" "}
            <Link href="/tours" className="font-semibold text-terracotta underline">
              Browse all 33 private Morocco tours
            </Link>{" "}
            or message us directly with your dates on{" "}
            <Link href="/#contact" className="font-semibold text-terracotta underline">
              WhatsApp
            </Link>{" "}
            for a route built around this trip.
          </p>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-5 font-serif text-2xl font-semibold text-espresso">Related reading</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} post={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

