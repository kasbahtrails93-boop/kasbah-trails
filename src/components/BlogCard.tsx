import Link from "next/link";
import Image from "next/image";
import { pickPhoto } from "@/lib/photoPool";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const photo = pickPhoto(post.scene, post.slug);
  return (
    <article className="card card-hover group relative flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-dune">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="zoom object-cover"
        />
        <span className="tag absolute left-4 top-4">{post.readMins} min read</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.8rem] text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h3 className="mt-2 text-[1.35rem] leading-snug">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-terra">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-[0.92rem] leading-relaxed text-muted">{post.description}</p>
        <div className="mt-auto pt-5">
          <span className="link-arrow">Read the guide</span>
        </div>
      </div>
    </article>
  );
}
