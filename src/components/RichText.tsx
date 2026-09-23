import Link from "next/link";
import type { ReactNode } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderRich(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    if (href.startsWith("/")) {
      parts.push(
        <Link key={key++} href={href} className="text-terra underline decoration-terra/40 underline-offset-4 hover:decoration-terra">
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-terra underline decoration-terra/40 underline-offset-4 hover:decoration-terra"
        >
          {label}
        </a>
      );
    }
    lastIndex = LINK_RE.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

export default function RichText({ text }: { text: string }) {
  return <>{renderRich(text)}</>;
}
