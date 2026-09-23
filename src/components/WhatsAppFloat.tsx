"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { waLink } from "@/lib/wa";

// Floating WhatsApp button. On the homepage it waits until the visitor has
// scrolled past most of the hero, so it doesn't sit on the slide controls.
export default function WhatsAppFloat() {
  const home = usePathname() === "/";
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = home && !past;

  return (
    <a
      href={waLink("Hi Kasbah Trails, I'd like to plan a private Morocco tour.")}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className={`wa-float fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_28px_-10px_rgba(0,0,0,.5)] transition-[transform,opacity] duration-300 hover:scale-105 lg:bottom-7 lg:right-7 ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
      }`}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.3c-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.2.1.7-.1 1.3z" />
      </svg>
    </a>
  );
}
