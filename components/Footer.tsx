"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Star, Flower, Squiggle } from "./decor";
import { Magnetic } from "./motion";

/* ══════════════════════════════════════════════════════════
   Unique animated footer
   – Kinetic wordmark that assembles on scroll (letter by letter)
   – Live Mumbai clock
   – Magnetic column links
   – Animated marquee ribbon (two opposite directions)
   – Floating "back to top" that rotates on hover
   ══════════════════════════════════════════════════════════ */

export default function Footer() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  const curveRise  = useTransform(scrollYProgress, [0, 1], [80, 0]);

  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: false, timeZone: "Asia/Kolkata",
      });
      setTime(fmt.format(now));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer
      ref={containerRef}
      className="bg-ink footer-root"
      style={{
        position: "relative",
        marginTop: 0,
        overflow: "hidden",
        borderTopLeftRadius: "clamp(1.5rem, 4vw, 3rem)",
        borderTopRightRadius: "clamp(1.5rem, 4vw, 3rem)",
      }}
    >
      {/* Decorative rising blobs */}
      <motion.div style={{ y: curveRise, position: "absolute", top: 40, left: "8%", opacity: 0.35, pointerEvents: "none" }}>
        <Star color="var(--accent)" size={54} />
      </motion.div>
      <motion.div style={{ y: curveRise, position: "absolute", top: 110, right: "10%", opacity: 0.3, pointerEvents: "none" }}>
        <Flower color="color-mix(in srgb, var(--accent) 70%, transparent)" center="var(--ink-surface)" size={68} />
      </motion.div>
      <div style={{ position: "absolute", top: 80, left: "30%", opacity: 0.22, pointerEvents: "none" }}>
        <Squiggle color="var(--accent)" width={160} />
      </div>

      {/* ─── TOP: animated CTA ─────────────────────────── */}
      <section className="wrap" style={{ padding: "clamp(4rem, 9vw, 7rem) 0 clamp(2.5rem, 5vw, 4rem)", position: "relative" }}>
        <motion.p
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="eyebrow" style={{ color: "var(--accent)", marginBottom: "1.25rem" }}>
          ✦ Let&apos;s build something together
        </motion.p>

        <CTAHeadline />

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="cta-row"
          style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <Magnetic strength={0.3}>
            <Link href="/contact" className="btn btn-accent" style={{ fontSize: "0.95rem" }}>
              Start a conversation <span className="btn-icon"><ArrowUpRight size={14}/></span>
            </Link>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a href="mailto:info@hrpreneurs.com" className="btn btn-outline" style={{ color: "var(--on-ink)", borderColor: "var(--border-strong)", fontSize: "0.95rem" }}>
              info@hrpreneurs.com
            </a>
          </Magnetic>
        </motion.div>
      </section>

      {/* ─── Marquee ribbon (two directions, infinite loop) ─── */}
      <MarqueeStrip />

      {/* ─── COLUMNS ────────────────────────────────────── */}
      <section className="wrap" style={{ padding: "clamp(3rem, 6vw, 5rem) 0 2rem" }}>
        <div className="footer-main-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 0.9fr 0.9fr 1.1fr", gap: "clamp(2rem, 4vw, 3rem)" }}>
          {/* Col 1 — brand + clock + social */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.75rem" }}>
              <span style={{
                width: 42, height: 42, borderRadius: "50%",
                background: "var(--accent)", color: "var(--on-accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.78rem", fontWeight: 900,
                border: "1.5px solid var(--on-ink)",
              }}>HR</span>
              <span style={{ fontWeight: 900, fontSize: "1.3rem", color: "var(--on-ink)" }}>HRpreneurs</span>
            </Link>
            <p className="body-sm" style={{ color: "var(--on-ink-2)", maxWidth: 340, lineHeight: 1.7, marginBottom: "2rem" }}>
              A full-service HR solutions firm building structured, compliant, and future-ready organizations since 2006.
            </p>

            {/* Live Mumbai clock card */}
            <div className="clock-card" style={{
              display: "inline-flex", alignItems: "center", gap: "0.875rem",
              padding: "0.9rem 1.1rem",
              background: "color-mix(in srgb, var(--on-ink) 6%, transparent)",
              border: "1px solid var(--border-strong)",
              borderRadius: 14,
            }}>
              <span style={{ position: "relative", width: 10, height: 10 }}>
                <motion.span
                  animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--accent)" }} />
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--accent)" }} />
              </span>
              <div>
                <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--on-ink-3)" }}>
                  Mumbai · IST
                </p>
                <p style={{ fontSize: "1rem", fontWeight: 800, color: "var(--on-ink)", fontVariantNumeric: "tabular-nums", letterSpacing: "0.02em", marginTop: 2 }}>
                  {time || "—"}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.75rem" }}>
              {[
                { label: "in", href: "https://www.linkedin.com/company/107051602", aria: "LinkedIn" },
                { label: "@",  href: "mailto:info@hrpreneurs.com",                 aria: "Email" },
                { label: "✦",  href: "https://twitter.com/",                        aria: "X" },
              ].map(s => (
                <Magnetic key={s.label} strength={0.4}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.aria}
                     className="social-btn">
                    {s.label}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <FooterCol title="Company" items={[["About","/about"],["Services","/services"],["Sectors","/sectors"],["Insights","/insights"],["Careers","/careers"],["Contact","/contact"]]} />
          <FooterCol title="Services" items={[
            ["Talent Acquisition","/services/talent-acquisition"],
            ["HR Consulting","/services/hr-consulting"],
            ["Payroll & Compliance","/services/payroll-compliance"],
            ["L&D Programs","/services/learning-development"],
            ["HR Technology","/services/hr-technology"],
            ["Managed HR","/services/managed-hr"],
          ]} />

          {/* Col 4 — contact + newsletter-style capsule */}
          <div>
            <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: "1.25rem" }}>Reach us</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              <InfoRow l="Email" v={<a href="mailto:info@hrpreneurs.com" className="fx-link">info@hrpreneurs.com</a>} />
              <InfoRow l="Phone" v={<a href="tel:+919987097792" className="fx-link">+91 99870 97792</a>} />
              <InfoRow l="Office" v={<>93 East Building, 705,<br/>Mahakali Caves Road,<br/>Andheri East, Mumbai 400093</>} />
            </div>

            <div style={{ padding: "1rem", borderRadius: 14, border: "1px dashed var(--border-strong)" }}>
              <p className="eyebrow" style={{ fontSize: "0.62rem", color: "var(--accent)", marginBottom: "0.5rem" }}>Stay in the loop</p>
              <p style={{ fontSize: "0.8rem", color: "var(--on-ink-2)", marginBottom: "0.75rem", lineHeight: 1.55 }}>
                Fresh POVs on hiring, compliance and HR-tech — once a month, never spammy.
              </p>
              <form onSubmit={e => e.preventDefault()} style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                <input type="email" placeholder="you@company.com" required
                  style={{
                    flex: "1 1 140px",
                    padding: "0.6rem 0.9rem", borderRadius: 9999,
                    background: "color-mix(in srgb, var(--on-ink) 6%, transparent)",
                    border: "1px solid var(--border-strong)",
                    fontSize: "0.82rem", color: "var(--on-ink)",
                  }}/>
                <button className="btn btn-accent" style={{ padding: "0.55rem 1rem", fontSize: "0.8rem" }} type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KINETIC WORDMARK (letters assemble on scroll) ─── */}
      <KineticWordmark text="HRpreneurs" />

      {/* ─── BOTTOM BAR ─── */}
      <section className="wrap" style={{ paddingBottom: "1.5rem" }}>
        <div className="footer-bottom" style={{
          borderTop: "1px solid var(--border-strong)",
          paddingTop: "1.5rem",
          display: "flex", justifyContent: "space-between",
          gap: "1rem", flexWrap: "wrap", alignItems: "center",
        }}>
          <p style={{ fontSize: "0.78rem", color: "var(--on-ink-3)" }}>
            © {new Date().getFullYear()} HRpreneurs · Crafted with care in Mumbai
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {["Privacy","Terms","Cookies"].map(t => (
              <Link key={t} href="#" className="fx-link" style={{ fontSize: "0.78rem" }}>{t}</Link>
            ))}
          </div>
          <BackToTop />
        </div>
      </section>

      <style>{`
        .fx-link { position: relative; color: var(--on-ink-2); transition: color 0.25s; display: inline-block; }
        .fx-link::after {
          content: ""; position: absolute; left: 0; bottom: -2px;
          width: 100%; height: 1px; background: var(--accent);
          transform: scaleX(0); transform-origin: right;
          transition: transform 0.35s cubic-bezier(.7,0,.2,1);
        }
        .fx-link:hover { color: var(--accent); }
        .fx-link:hover::after { transform: scaleX(1); transform-origin: left; }

        .social-btn {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid var(--border-strong);
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--on-ink); font-weight: 700; font-size: 0.85rem;
          transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.25s;
          flex-shrink: 0;
        }
        .social-btn:hover {
          background: var(--accent); border-color: var(--accent);
          color: var(--on-accent); transform: translateY(-3px) rotate(-6deg);
        }

        .clock-card { transition: border-color 0.25s, background 0.25s; }
        .clock-card:hover { border-color: var(--accent); }

        @media (max-width: 960px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-main-grid { grid-template-columns: 1fr !important; }
          .footer-bottom   { justify-content: flex-start !important; }
          .cta-row .btn    { width: 100%; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}

/* ═════════ CTA Headline with animated highlight and mask ═════════ */
function CTAHeadline() {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <h2 ref={ref} className="h1 on-ink" style={{ maxWidth: 1100, lineHeight: 0.98 }}>
      <motion.span
        initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [.2, .7, .2, 1] }}
        style={{ display: "block" }}>
        Ready to design an
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.12, ease: [.2, .7, .2, 1] }}
        style={{ display: "inline-block", position: "relative" }}>
        HR function that
        <motion.svg
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }}
          style={{ position: "absolute", left: "-2%", right: "-2%", bottom: "-8%", width: "104%", height: "22px", pointerEvents: "none" }}
          viewBox="0 0 200 18" preserveAspectRatio="none">
          <motion.path d="M2 10 Q 50 2, 100 8 T 198 9" stroke="var(--accent)" strokeWidth="3"
            fill="none" strokeLinecap="round" />
        </motion.svg>
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.24, ease: [.2, .7, .2, 1] }}
        style={{ display: "block", color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
        actually works?
      </motion.span>
    </h2>
  );
}

/* ═════════ Two-direction marquee ribbon ═════════ */
function MarqueeStrip() {
  const tags = [
    "HRpreneurs", "Since 2006", "15+ sectors", "200+ clients",
    "People-first", "Mumbai", "Compliance-ready", "HR-tech",
    "Managed HR", "L&D", "Talent", "Culture",
  ];
  return (
    <div style={{
      borderTop: "1px solid var(--border-strong)",
      borderBottom: "1px solid var(--border-strong)",
      padding: "1.25rem 0",
      overflow: "hidden",
    }}>
      <div className="marquee-track" style={{ gap: "3rem" }}>
        {[...tags, ...tags].map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "3rem", fontSize: "clamp(1rem, 2.4vw, 1.75rem)", fontWeight: 900, letterSpacing: "-0.02em", color: "var(--on-ink)", whiteSpace: "nowrap" }}>
            {t}
            <span style={{ color: "var(--accent)", fontSize: "1.5em", lineHeight: 1 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═════════ Kinetic wordmark — letters spring in on scroll ═════════ */
function KineticWordmark({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.25, once: false });
  const letters = text.split("");

  return (
    <div ref={ref} style={{ overflow: "hidden", padding: "2rem 0 0.75rem", pointerEvents: "none", position: "relative" }}>
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "flex-end",
        fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.85, whiteSpace: "nowrap",
        fontSize: "clamp(3.5rem, 20vw, 20rem)",
      }}>
        {letters.map((l, i) => (
          <motion.span
            key={i}
            initial={{ y: "120%", rotate: -12, opacity: 0, color: "transparent" }}
            animate={inView ? {
              y: 0, rotate: 0, opacity: 1,
              color: "transparent",
            } : { y: "120%", rotate: -12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 22, delay: i * 0.05 }}
            whileHover={{ y: -12, rotate: i % 2 === 0 ? -3 : 3, color: "var(--accent)", transition: { type: "spring", stiffness: 300, damping: 14 } }}
            style={{
              display: "inline-block",
              pointerEvents: "auto",
              WebkitTextStroke: "1.5px color-mix(in srgb, var(--accent) 55%, transparent)",
              transformOrigin: "bottom",
              cursor: "default",
            }}>
            {l}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ═════════ Magnetic footer column ═════════ */
function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: "1.25rem" }}>{title}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {items.map(([l, h], i) => (
          <motion.div key={h}
            initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}>
            <Link href={h} className="fx-link" style={{ fontSize: "0.9rem" }}>{l}</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function InfoRow({ l, v }: { l: string; v: React.ReactNode }) {
  return (
    <div>
      <p style={{ fontSize: "0.66rem", color: "var(--on-ink-3)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "0.3rem", fontWeight: 700 }}>{l}</p>
      <div style={{ fontSize: "0.88rem", color: "var(--on-ink)", lineHeight: 1.55 }}>{v}</div>
    </div>
  );
}

/* ═════════ Back to top with rotating arrow ═════════ */
function BackToTop() {
  return (
    <Magnetic strength={0.4}>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="back-top">
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.04em" }}>Back to top</span>
        </motion.span>

        <style>{`
          .back-top {
            display: inline-flex; align-items: center;
            padding: 0.55rem 1rem;
            border-radius: 9999px;
            background: color-mix(in srgb, var(--on-ink) 6%, transparent);
            color: var(--on-ink);
            border: 1px solid var(--border-strong);
            transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.25s;
          }
          .back-top:hover { background: var(--accent); border-color: var(--accent); color: var(--on-accent); }
        `}</style>
      </button>
    </Magnetic>
  );
}
