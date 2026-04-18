"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme, themes } from "./ThemeProvider";
import { ArrowRightIcon } from "./decor";
import { Magnetic } from "./motion";

const links = [
  { href: "/about",    label: "About"    },
  { href: "/services", label: "Services" },
  { href: "/sectors",  label: "Sectors"  },
  { href: "/insights", label: "Insights" },
  { href: "/careers",  label: "Careers"  },
  { href: "/contact",  label: "Contact"  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname = usePathname();
  const { theme, cycle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const currentTheme = themes.find(t => t.id === theme);
  const nextTheme = themes[(themes.findIndex(t => t.id === theme) + 1) % themes.length];

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
        padding: scrolled ? "0.5rem 0" : "0.875rem 0",
        transition: "padding 0.35s ease",
      }}>
        <div className="wrap">
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: "0.75rem",
            padding: "0.4rem 0.4rem 0.4rem 1rem",
            background: scrolled ? "var(--bg-card)" : "transparent",
            border: `1.5px solid ${scrolled ? "var(--border)" : "transparent"}`,
            borderRadius: "9999px",
            boxShadow: scrolled ? "var(--shadow-md)" : "none",
            backdropFilter: scrolled ? "blur(14px)" : "none",
            transition: "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease",
          }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }} data-cursor="hover">
              <span style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--accent)", color: "var(--on-accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.03em",
                border: "1.5px solid var(--fg)",
                transition: "background 0.6s",
              }}>HR</span>
              <span style={{ fontWeight: 900, fontSize: "clamp(0.95rem, 2vw, 1.1rem)", letterSpacing: "-0.02em", color: "var(--fg)" }}>
                HRpreneurs
              </span>
            </Link>

            <nav className="hide-mob" style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
              {links.map(l => (
                <Link key={l.href} href={l.href} data-cursor="hover"
                  style={{
                    fontSize: "0.9rem", fontWeight: 500,
                    color: pathname === l.href ? "var(--accent)" : "var(--fg-2)",
                    position: "relative",
                  }} className="nav-link-item">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
              <Magnetic strength={0.25}>
                <button onClick={cycle}
                  aria-label={`Current theme ${currentTheme?.label}. Click to switch to ${nextTheme.label}.`}
                  title={`Next: ${nextTheme.label}`}
                  data-cursor="hover" className="theme-swatch"
                  style={{
                    position: "relative",
                    width: 36, height: 36, borderRadius: "50%",
                    border: "1.5px solid var(--border-strong)",
                    cursor: "pointer", overflow: "hidden",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: currentTheme?.swatch ?? "var(--bg)",
                    transition: "border-color 0.25s, transform 0.25s",
                    flexShrink: 0,
                  }}>
                  <span style={{
                    display: "block", width: 12, height: 12,
                    borderRadius: "50%", background: currentTheme?.accent ?? "var(--accent)",
                    border: "1.5px solid var(--fg)",
                  }} />
                </button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <Link href="/contact" className="btn btn-primary hide-mob" data-cursor="hover"
                  style={{ padding: "0.55rem 0.55rem 0.55rem 1.125rem", fontSize: "0.85rem" }}>
                  Contact
                  <span className="btn-icon" style={{ width: "1.75rem", height: "1.75rem" }}><ArrowRightIcon size={12}/></span>
                </Link>
              </Magnetic>

              <button className="show-mob" onClick={() => setOpen(v => !v)} aria-label="Menu"
                aria-expanded={open}
                style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "var(--fg)", color: "var(--bg)",
                  display: "none", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                {open ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 800,
        background: "var(--accent)",
        padding: "5.5rem 1.5rem 3rem",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(-1rem)",
        pointerEvents: open ? "all" : "none",
        overflow: "auto",
      }}>
        {links.map((l, i) => (
          <Link key={l.href} href={l.href} style={{
            display: "block",
            fontSize: "clamp(2rem, 8vw, 3.5rem)",
            fontWeight: 900, letterSpacing: "-0.025em",
            color: pathname === l.href ? "var(--bg)" : "var(--on-accent)",
            padding: "0.5rem 0",
            borderBottom: "1.5px solid rgba(0,0,0,0.15)",
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(-1rem)",
            transition: `opacity 0.3s ${i * 60}ms ease, transform 0.3s ${i * 60}ms ease`,
          }}>{l.label}</Link>
        ))}
        <div style={{ marginTop: "2rem" }}>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
            <span className="btn-icon"><ArrowRightIcon size={14}/></span>
          </Link>
        </div>
      </div>

      <style>{`
        .nav-link-item::after {
          content: ""; position: absolute;
          left: 0; right: 0; bottom: -6px;
          height: 2px; background: var(--accent);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-link-item:hover::after { transform: scaleX(1); }
        .theme-swatch:hover { border-color: var(--fg) !important; transform: scale(1.08); }
      `}</style>
    </>
  );
}
