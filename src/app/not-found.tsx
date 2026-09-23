import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[70svh] flex-col items-center justify-center py-20 text-center">
      <Eyebrow>Page not found</Eyebrow>
      <h1 className="mt-4 max-w-[20ch] text-h1">This road doesn&apos;t lead anywhere</h1>
      <p className="mt-4 max-w-[46ch] text-[1.02rem] leading-relaxed">
        The page may have moved, or the link may be mistyped. Every route we run is listed on the tours page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/tours" className="btn btn-primary">
          Browse all tours
        </Link>
        <Link href="/" className="btn btn-ghost">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
