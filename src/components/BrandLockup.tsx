import Image from "next/image";

// Logo mark + wordmark + tagline. The mark is the supplied logo and is never
// redrawn or recoloured; only the wordmark switches tone for dark grounds.
export default function BrandLockup({
  tone = "dark",
  preload = false,
}: {
  tone?: "dark" | "light";
  preload?: boolean;
}) {
  const light = tone === "light";
  return (
    <span className="flex items-center gap-2 min-[380px]:gap-3">
      <Image
        src="/images/brand/kasbah-trails-mark.png"
        alt=""
        width={1000}
        height={390}
        preload={preload}
        className="h-7 w-auto shrink-0 min-[380px]:h-9 sm:h-11"
      />
      <span className="flex flex-col">
        <span className={`whitespace-nowrap font-serif text-[1.15rem] leading-none min-[380px]:text-[1.35rem] sm:text-[1.55rem] ${light ? "text-paper" : "text-ink"}`}>
          Kasbah Trails
        </span>
        <span className={`mt-1.5 whitespace-nowrap text-[0.5rem] font-medium uppercase tracking-[0.24em] min-[380px]:text-[0.55rem] min-[380px]:tracking-[0.32em] sm:text-[0.6rem] ${light ? "text-sun" : "text-terra"}`}>
          Private Morocco Tours
        </span>
      </span>
    </span>
  );
}
