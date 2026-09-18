type Scene = "dunes" | "medina" | "coast";

export default function SceneSvg({
  scene,
  tint,
  uid,
  sky = true,
}: {
  scene: Scene;
  tint: [string, string];
  uid: string | number;
  sky?: boolean;
}) {
  const [c1, c2] = tint;
  const skyGradId = `sk${uid}`;
  const dnGradId = `dn${uid}`;

  const defs = (
    <defs>
      <linearGradient id={skyGradId} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#F6E6C8" />
        <stop offset=".55" stopColor="#EFCF9B" />
        <stop offset="1" stopColor="#E7B872" />
      </linearGradient>
      <linearGradient id={dnGradId} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={c1} />
        <stop offset="1" stopColor={c2} />
      </linearGradient>
    </defs>
  );
  const bg = sky ? (
    <rect width="400" height="250" fill={`url(#${skyGradId})`} />
  ) : (
    <rect width="400" height="250" fill={c2} />
  );
  const sun = <circle cx="300" cy="92" r="40" fill="#E9A83E" opacity={sky ? 0.95 : 0.35} />;

  if (scene === "dunes") {
    return (
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        {defs}
        {bg}
        {sun}
        <path d="M0 165 Q120 120 220 160 T400 150 V250 H0 Z" fill={c1} opacity={0.85} />
        <path d="M0 195 Q140 150 260 190 T400 185 V250 H0 Z" fill={c2} />
        <path d="M0 225 Q120 200 240 222 T400 218 V250 H0 Z" fill="#2B1808" opacity={0.55} />
        <g fill="#3a2a12" opacity={0.9}>
          <path d="M92 175c-6-20-4-40 2-58 4 16 6 40-2 58z" />
          <rect x="90" y="172" width="4" height="26" />
          <path d="M108 178c-4-16-2-33 4-47 3 13 4 33-4 47z" />
          <rect x="107" y="176" width="3.5" height="24" />
        </g>
      </svg>
    );
  }

  if (scene === "coast") {
    return (
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        {defs}
        {bg}
        {sun}
        <rect y="150" width="400" height="100" fill={c2} />
        <path
          d="M0 160 Q60 152 120 160 T240 160 T400 160"
          stroke="#F6E6C8"
          strokeWidth="3"
          fill="none"
          opacity={0.6}
        />
        <path
          d="M0 180 Q60 172 120 180 T240 180 T400 180"
          stroke="#F6E6C8"
          strokeWidth="3"
          fill="none"
          opacity={0.4}
        />
        <g fill="#3a2a12">
          <rect x="150" y="120" width="60" height="40" />
          <path d="M150 120 L180 96 L210 120 Z" />
        </g>
      </svg>
    );
  }

  // medina / kasbah skyline
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      {defs}
      {bg}
      {sun}
      <g fill={c1}>
        <rect x="20" y="140" width="70" height="110" />
        <rect x="100" y="120" width="55" height="130" />
        <rect x="255" y="130" width="60" height="120" />
        <rect x="325" y="150" width="55" height="100" />
      </g>
      <g fill={c2}>
        <rect x="165" y="90" width="46" height="160" />
        <path d="M165 90h46l-23-26z" />
        <rect x="182" y="60" width="12" height="20" />
      </g>
      <g fill="#3a2a12" opacity={0.85}>
        <rect x="0" y="215" width="400" height="35" />
        <path d="M120 215v-14a12 12 0 0 1 24 0v14z" />
        <path d="M220 215v-14a12 12 0 0 1 24 0v14z" />
      </g>
      <g fill="#F6E6C8" opacity={0.5}>
        <rect x="36" y="160" width="8" height="14" />
        <rect x="60" y="160" width="8" height="14" />
        <rect x="116" y="145" width="8" height="16" />
        <rect x="272" y="152" width="8" height="16" />
      </g>
    </svg>
  );
}
