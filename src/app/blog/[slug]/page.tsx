import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG, getPost, getRelatedPosts } from "@/lib/blog";
import { pickPhoto } from "@/lib/photoPool";
import BlogBlocks from "@/components/BlogBlocks";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CtaBand from "@/components/CtaBand";
import { Star } from "@/components/Ornament";

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
  const metaTitle = post.metaTitle ?? post.title;
  return {
    title: metaTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: metaTitle,
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

      <header className="bg-sand">
        <div className="container-site max-w-[52rem] pb-12 pt-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/blog" }, { label: post.title }]} />
          <p className="mt-9 flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-terra">
            <Star size={9} />
            Travel guide · {post.readMins} min read
          </p>
          <h1 className="mt-4 text-h1">{post.title}</h1>
          <div className="mt-7 flex items-center gap-3 border-t border-line pt-5">
            <Image src="/images/brand/kasbah-trails-mark.png" alt="Kasbah Trails" width={1000} height={390} className="h-8 w-auto shrink-0" />
            <div className="text-[0.9rem] leading-snug">
              <p className="text-ink">Written by the Kasbah Trails team</p>
              <p className="text-muted">
                Published <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container-site -mt-2 pt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] bg-dune md:aspect-[21/9]">
          <Image src={photo.src} alt={photo.alt} fill sizes="100vw" preload className="object-cover" />
        </div>
      </div>

      <div className="container-site max-w-[46rem] py-14">
        <p className="mb-10 font-serif text-[1.4rem] leading-[1.55] text-ink">{post.intro}</p>
        <TableOfContents blocks={post.blocks} />
        <BlogBlocks blocks={post.blocks} />
      </div>

      {related.length > 0 && (
        <section className="section-y bg-sand">
          <div className="container-site">
            <h2 className="text-h2">Related reading</h2>
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} post={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Ready to see this in an itinerary?"
        body="Browse all 33 private Morocco journeys, or message us with your dates for a route built around this trip."
      />
    </article>
  );
}
