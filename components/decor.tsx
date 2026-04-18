/* Decorative SVG helpers — hand-drawn squiggle / stroke / circle */

export function Squiggle({ color = "var(--accent)", className, style, width = 160 }:
  { color?: string; className?: string; style?: React.CSSProperties; width?: number }) {
  return (
    <svg className={className} style={style} width={width} height={width * 0.12} viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12 Q 15 2, 28 12 T 54 12 T 80 12 T 106 12 T 132 12 T 158 12 T 184 12 T 198 12"
            stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export function CircleStroke({ color = "var(--accent)", className, style }:
  { color?: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="none">
      <path d="M14 40 C 14 18, 60 8, 100 8 C 148 8, 194 22, 188 44 C 180 68, 120 76, 76 72 C 40 68, 14 60, 18 44"
            stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export function Star({ color = "var(--ink)", className, style, size = 48 }:
  { color?: string; className?: string; style?: React.CSSProperties; size?: number }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 2 L27 18 L42 14 L30 24 L42 34 L27 30 L24 46 L21 30 L6 34 L18 24 L6 14 L21 18 Z"
            fill={color}/>
    </svg>
  );
}

export function Flower({ color = "var(--accent)", center = "#fff", className, style, size = 48 }:
  { color?: string; center?: string; className?: string; style?: React.CSSProperties; size?: number }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 60, 120, 180, 240, 300].map(a => (
        <ellipse key={a} cx="24" cy="12" rx="6" ry="10" fill={color} transform={`rotate(${a} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="5" fill={center}/>
    </svg>
  );
}

export function BlobShape({ color = "var(--accent)", className, style, size = 200 }:
  { color?: string; className?: string; style?: React.CSSProperties; size?: number }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46 36 C 82 6, 152 12, 172 54 C 192 96, 172 148, 128 168 C 84 188, 28 164, 18 120 C 8 76, 22 56, 46 36 Z"
            fill={color}/>
    </svg>
  );
}

/* Big curved bottom divider — used below hero */
export function BottomCurve({ color = "var(--sand)", className, style }:
  { color?: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={{ display: "block", width: "100%", height: "auto", ...style }}
         viewBox="0 0 1444 83" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 15 C 256 3, 770 -12, 1397 15 C 1409 15, 1420 23, 1425 35 C 1435 60, 1444 73, 1444 78 L 1444 83 L 0 83 L 0 78 L 19 33 C 24 22, 34 15, 45 15 Z"
            fill={color}/>
    </svg>
  );
}

/* Top curved divider (inverse) */
export function TopCurve({ color = "var(--sand)", className, style }:
  { color?: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={{ display: "block", width: "100%", height: "auto", transform: "scaleY(-1)", ...style }}
         viewBox="0 0 1444 83" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 15 C 256 3, 770 -12, 1397 15 C 1409 15, 1420 23, 1425 35 C 1435 60, 1444 73, 1444 78 L 1444 83 L 0 83 L 0 78 L 19 33 C 24 22, 34 15, 45 15 Z"
            fill={color}/>
    </svg>
  );
}

/* Arrow icon (used inside circular btn-icon) */
export function ArrowUpRight({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17 L17 7 M8 7 H17 V16" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ArrowRightIcon({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12 H19 M13 6 L19 12 L13 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
