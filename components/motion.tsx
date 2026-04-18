"use client";
import {
  motion, useScroll, useSpring, useTransform, useMotionValue, Variants,
  AnimatePresence, useInView, useMotionValueEvent,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   1. ScrollProgress — top progress bar
═══════════════════════════════════════════════════════════════ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

/* ═══════════════════════════════════════════════════════════════
   2. FadeUp
═══════════════════════════════════════════════════════════════ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.6, 0.2, 1] } },
};
export function FadeUp({
  children, delay = 0, className, style,
}: { children: ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show"
      viewport={{ once: true, amount: 0.2 }} transition={{ delay }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. Stagger container + item
═══════════════════════════════════════════════════════════════ */
export function Stagger({
  children, stagger = 0.08, className, style,
}: { children: ReactNode; stagger?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}
export function StaggerItem({
  children, className, style, y = 30,
}: { children: ReactNode; className?: string; style?: React.CSSProperties; y?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.6, 0.2, 1] } },
      }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. RevealText — word-by-word slide up
═══════════════════════════════════════════════════════════════ */
export function RevealText({
  text, className, style, as = "span", delay = 0,
}: {
  text: string; className?: string; style?: React.CSSProperties;
  as?: "span" | "h1" | "h2" | "h3" | "p"; delay?: number;
}) {
  const words = text.split(" ");
  const Tag: any = motion[as];
  return (
    <Tag className={className}
      style={{ display: "inline-block", ...style }}
      initial="hidden" whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: delay } } }}>
      {words.map((w, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em", verticalAlign: "top" }}>
          <motion.span style={{ display: "inline-block" }}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show:   { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] } },
            }}>
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. LetterDrop — character-by-character cascade
═══════════════════════════════════════════════════════════════ */
export function LetterDrop({
  text, className, style, delay = 0,
}: { text: string; className?: string; style?: React.CSSProperties; delay?: number }) {
  return (
    <motion.span className={className} style={{ display: "inline-block", ...style }}
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.025, delayChildren: delay } } }}>
      {text.split("").map((c, i) => (
        <motion.span key={i} style={{ display: "inline-block" }}
          variants={{
            hidden: { y: -80, opacity: 0, rotate: -30 },
            show:   { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 500, damping: 30 } },
          }}>
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. ScaleIn
═══════════════════════════════════════════════════════════════ */
export function ScaleIn({
  children, className, style, delay = 0,
}: { children: ReactNode; className?: string; style?: React.CSSProperties; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. Floaty
═══════════════════════════════════════════════════════════════ */
export function Floaty({
  children, className, style, rotate = 0,
}: { children: ReactNode; className?: string; style?: React.CSSProperties; rotate?: number }) {
  return (
    <motion.div animate={{ y: [0, -14, 0], rotate: [rotate, rotate + 3, rotate] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. Magnetic — cursor pulls element
═══════════════════════════════════════════════════════════════ */
export function Magnetic({
  children, strength = 0.4, className, style,
}: { children: ReactNode; strength?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}
      style={{ x: sx, y: sy, display: "inline-block", ...style }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9. Tilt — 3D card tilt on hover
═══════════════════════════════════════════════════════════════ */
export function Tilt({
  children, max = 10, className, style,
}: { children: ReactNode; max?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sy = useSpring(ry, { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set((0.5 - py) * max * 2);
  };
  const handleLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div ref={ref}
      onMouseMove={handleMove} onMouseLeave={handleLeave}
      style={{ rotateX: sx, rotateY: sy, transformStyle: "preserve-3d", perspective: 1000, ...style }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10. Counter — number counting up
═══════════════════════════════════════════════════════════════ */
export function Counter({
  to, suffix = "", prefix = "", duration = 2,
  className, style,
}: { to: number; suffix?: string; prefix?: string; duration?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTs = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - startTs) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(to);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return <span ref={ref} className={className} style={style}>{prefix}{val}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════════
   11. CustomCursor — blob cursor that grows on hover
═══════════════════════════════════════════════════════════════ */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [big, setBig] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    let rx = 0, ry = 0, mx = 0, my = 0;
    let raf = 0;

    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const tick = () => {
      rx += (mx - rx) * 0.22;
      ry += (my - ry) * 0.22;
      el.style.transform = `translate(${rx - el.offsetWidth / 2}px, ${ry - el.offsetHeight / 2}px)`;
      raf = requestAnimationFrame(tick);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [data-cursor="hover"]');
      setBig(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    tick();
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className={`blob-cursor${big ? " lg" : ""}`} />;
}

/* ═══════════════════════════════════════════════════════════════
   12. PageTransition — full-screen curtain on route change
═══════════════════════════════════════════════════════════════ */
export function PageTransition({ pathname }: { pathname: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}
        initial={{ clipPath: "circle(0% at 10% 90%)" }}
        animate={{ clipPath: "circle(0% at 10% 90%)" }}
        exit={{ clipPath: "circle(150% at 10% 90%)" }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
        style={{
          position: "fixed", inset: 0, zIndex: 1500, pointerEvents: "none",
          background: "var(--accent)",
        }}
      />
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════════
   13. TextCarousel — vertical rotating words
═══════════════════════════════════════════════════════════════ */
export function TextCarousel({
  words, interval = 2200, className, style,
}: { words: string[]; interval?: number; className?: string; style?: React.CSSProperties }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span style={{ display: "inline-block", position: "relative", overflow: "hidden", verticalAlign: "bottom", ...style }}
      className={className}>
      <span style={{ display: "inline-block", visibility: "hidden" }}>
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={words[i]}
          initial={{ y: "120%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-120%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.7, 0, 0.2, 1] }}
          style={{ position: "absolute", left: 0, right: 0, color: "var(--accent)" }}>
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   14. ParallaxY — scroll-linked vertical parallax
═══════════════════════════════════════════════════════════════ */
export function ParallaxY({
  children, range = 120, className, style,
}: { children: ReactNode; range?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  return (
    <motion.div ref={ref} style={{ y, ...style }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   15. ScrollRotate — rotates with scroll
═══════════════════════════════════════════════════════════════ */
export function ScrollRotate({
  children, className, style,
}: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <motion.div ref={ref} style={{ rotate, ...style }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   16. RippleButton — click ripple effect
═══════════════════════════════════════════════════════════════ */
export function RippleButton({
  children, onClick, className, style,
}: { children: ReactNode; onClick?: () => void; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLButtonElement>(null);
  const handle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const b = ref.current;
    if (b) {
      const r = b.getBoundingClientRect();
      const s = document.createElement("span");
      const size = Math.max(r.width, r.height);
      s.className = "ripple";
      s.style.width = s.style.height = `${size}px`;
      s.style.left = `${e.clientX - r.left - size / 2}px`;
      s.style.top  = `${e.clientY - r.top  - size / 2}px`;
      b.appendChild(s);
      setTimeout(() => s.remove(), 800);
    }
    onClick?.();
  };
  return (
    <button ref={ref} onClick={handle} className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}>
      {children}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   17. MouseParallax — moves element based on mouse
═══════════════════════════════════════════════════════════════ */
export function MouseParallax({
  children, strength = 20, className, style,
}: { children: ReactNode; strength?: number; className?: string; style?: React.CSSProperties }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 40, damping: 20 });
  const sy = useSpring(y, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth  - 0.5) * strength;
      const ny = (e.clientY / window.innerHeight - 0.5) * strength;
      x.set(nx); y.set(ny);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [strength, x, y]);

  return <motion.div style={{ x: sx, y: sy, ...style }} className={className}>{children}</motion.div>;
}

/* ═══════════════════════════════════════════════════════════════
   18. MaskReveal — image/element clip-path reveal
═══════════════════════════════════════════════════════════════ */
export function MaskReveal({
  children, className, style, delay = 0,
}: { children: ReactNode; className?: string; style?: React.CSSProperties; delay?: number }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, delay, ease: [0.7, 0, 0.2, 1] }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   19. DrawLine — SVG line that draws on view
═══════════════════════════════════════════════════════════════ */
export function DrawLine({
  d, color = "var(--accent)", width = 3, className, style, duration = 1.4,
}: { d: string; color?: string; width?: number; className?: string; style?: React.CSSProperties; duration?: number }) {
  return (
    <svg viewBox="0 0 200 30" fill="none" className={className} style={style} preserveAspectRatio="none">
      <motion.path d={d} stroke={color} strokeWidth={width} strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration, ease: [0.7, 0, 0.2, 1] }} />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   20. StickyStack — scrolling cards that stack
═══════════════════════════════════════════════════════════════ */
export function StickyStack({ items }: {
  items: { title: string; body: string; tag?: string; bg?: string }[];
}) {
  return (
    <div style={{ position: "relative" }}>
      {items.map((it, i) => (
        <div key={i} style={{
          position: "sticky",
          top: `calc(10vh + ${i * 22}px)`,
          marginBottom: "2rem",
          zIndex: i + 1,
        }}>
          <div style={{
            background: it.bg ?? "var(--bg-card)",
            borderRadius: "var(--radius-lg)",
            padding: "3rem",
            border: "1.5px solid var(--fg)",
            boxShadow: "var(--shadow-lg)",
          }}>
            {it.tag && (
              <div style={{
                display: "inline-block", padding: "0.35rem 0.9rem", borderRadius: 9999,
                background: "var(--fg)", color: "var(--bg)",
                fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}>{it.tag}</div>
            )}
            <h3 className="h2" style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", marginBottom: "1rem" }}>{it.title}</h3>
            <p className="body-lg text-dim" style={{ maxWidth: 640 }}>{it.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   21. Split scroll — two-column with one sticky
═══════════════════════════════════════════════════════════════ */
export function StickySide({
  left, right, className,
}: { left: ReactNode; right: ReactNode; className?: string }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
      <div style={{ position: "sticky", top: "10vh" }}>{left}</div>
      <div>{right}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   22. Breath — subtle breathing scale loop
═══════════════════════════════════════════════════════════════ */
export function Breath({
  children, className, style,
}: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   23. Elastic — spring scale on click
═══════════════════════════════════════════════════════════════ */
export function Elastic({
  children, className, style, onClick,
}: { children: ReactNode; className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  return (
    <motion.div whileTap={{ scale: 0.88 }}
      transition={{ type: "spring", stiffness: 600, damping: 15 }}
      onClick={onClick}
      className={className} style={{ display: "inline-block", cursor: "pointer", ...style }}>
      {children}
    </motion.div>
  );
}
