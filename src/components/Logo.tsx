export default function Logo({
  className = "h-9 w-9",
  onDarkBg = false,
}: {
  className?: string;
  onDarkBg?: boolean;
}) {
  const badge = onDarkBg ? "var(--terracotta)" : "var(--espresso)";
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill={badge} />
      <circle cx="27" cy="12" r="4.5" fill="var(--amber)" />
      <path
        d="M11 30V19a9 9 0 0 1 18 0v11a1.4 1.4 0 0 1-1.4 1.4H12.4A1.4 1.4 0 0 1 11 30Z"
        fill="var(--sand)"
      />
      <path d="M15 30v-9a5 5 0 0 1 10 0v9Z" fill={badge} />
    </svg>
  );
}
