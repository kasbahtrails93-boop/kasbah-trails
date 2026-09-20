import Link from "next/link";
import Image from "next/image";
import { pickPhoto } from "@/lib/photoPool";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const photo = pickPhoto(post.scene, post.slug);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-lg border border-line bg-card"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden className="inline-block h-3 w-px bg-line" />
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
