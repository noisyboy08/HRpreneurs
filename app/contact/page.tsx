"use client";
import { useState } from "react";
import Link from "next/link";
import { FadeUp, Stagger, StaggerItem, RevealText, Floaty } from "@/components/motion";
import { Star, Flower, BlobShape, ArrowUpRight, ArrowRightIcon } from "@/components/decor";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" });
    }, 4000);
  };

  const ip: React.CSSProperties = {
    width: "100%", padding: "1rem 0",
    background: "transparent", border: "none",
    borderBottom: "1.5px solid var(--line-strong)",
    fontSize: "1rem", color: "var(--fg)", outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const lbl: React.CSSProperties = {
    display: "block", fontSize: "0.75rem", fontWeight: 700,
    letterSpacing: "0.1em", textTransform: "uppercase",
    color: "var(--fg-3)", marginBottom: "0.35rem",
  };

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section style={{ position: "relative", paddingTop: "8rem", paddingBottom: "5rem", overflow: "hidden" }}>
        <Floaty rotate={8} style={{ position: "absolute", top: "22%", right: "8%" }}>
          <Star color="var(--accent)" size={56} />
        </Floaty>
        <Floaty rotate={-12} style={{ position: "absolute", bottom: "0", left: "5%" }}>
          <Flower color="var(--mint-deep)" center="var(--sun)" size={70} />
        </Floaty>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <div className="pill" style={{ marginBottom: "2.5rem" }}><span className="dot"/> Let's Talk</div>
          </FadeUp>
          <h1 className="display">
            <RevealText text="Get in" />{" "}
            <span className="highlight">touch.</span>
          </h1>
          <FadeUp delay={0.3}>
            <p className="body-xl text-dim" style={{ maxWidth: 600, marginTop: "2rem" }}>
              Whether you need strategic HR advisory, full-service management, or specific project support — let's start a conversation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ═══════ CONTACT SPLIT ═══════ */}
      <section style={{ paddingBottom: "7rem" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "4rem" }} className="contact-grid">

            {/* Left — info */}
            <FadeUp>
              <div style={{
                background: "var(--purple)", borderRadius: "var(--radius-lg)",
                padding: "3rem", border: "1.5px solid var(--ink)",
                position: "relative", overflow: "hidden",
                minHeight: 620,
              }}>
                <Floaty rotate={15} style={{ position: "absolute", top: "2rem", right: "2rem" }}>
                  <Star color="var(--ink)" size={36} />
                </Floaty>

                <p className="eyebrow" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Reach us</p>
                <h2 className="h2" style={{ color: "var(--ink)", marginBottom: "3rem", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                  Let's build something <span className="highlight highlight-sun">together.</span>
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  <div>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(14,10,20,0.55)", marginBottom: "0.4rem" }}>Email</p>
                    <a href="mailto:info@hrpreneurs.com" style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--ink)" }}>info@hrpreneurs.com</a>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(14,10,20,0.55)", marginBottom: "0.4rem" }}>Phone</p>
                    <a href="tel:+919987097792" style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--ink)" }}>+91 99870 97792</a>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(14,10,20,0.55)", marginBottom: "0.4rem" }}>Office</p>
                    <p style={{ fontSize: "1rem", color: "var(--ink)", lineHeight: 1.55, fontWeight: 500 }}>
                      93 East Building, 705,<br/>
                      Mahakali Caves Road,<br/>
                      Andheri East, Mumbai 400093<br/>
                      India
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(14,10,20,0.55)", marginBottom: "0.4rem" }}>Hours</p>
                    <p style={{ fontSize: "1rem", color: "var(--ink)", fontWeight: 500 }}>Mon – Fri · 9:30 AM – 6:30 PM IST</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(14,10,20,0.55)", marginBottom: "0.6rem" }}>Connect</p>
                    <a href="https://www.linkedin.com/company/107051602" target="_blank" rel="noopener noreferrer"
                       style={{
                         display: "inline-flex", alignItems: "center", gap: "0.5rem",
                         padding: "0.625rem 1.25rem",
                         borderRadius: "9999px",
                         background: "var(--ink)", color: "var(--on-ink)",
                         fontSize: "0.85rem", fontWeight: 600,
                       }}>
                      LinkedIn <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right — form */}
            <FadeUp delay={0.15}>
              <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-lg)", padding: "3rem", border: "1.5px solid var(--line)" }}>
                {sent ? (
                  <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>✉</div>
                    <h3 className="h3" style={{ marginBottom: "1rem" }}>Message Received</h3>
                    <p className="body text-dim">Thanks for reaching out. Our team will respond within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="h3" style={{ marginBottom: "0.5rem" }}>Send us a message</h2>
                    <p className="body-sm text-dim" style={{ marginBottom: "2.5rem" }}>We'll respond within 1 business day.</p>

                    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem" }} className="fm-row">
                        <div>
                          <label style={lbl}>Full Name *</label>
                          <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                 placeholder="Your name" style={ip} className="form-field" />
                        </div>
                        <div>
                          <label style={lbl}>Email *</label>
                          <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                 placeholder="you@company.com" style={ip} className="form-field" />
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem" }} className="fm-row">
                        <div>
                          <label style={lbl}>Company</label>
                          <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                                 placeholder="Your organization" style={ip} className="form-field" />
                        </div>
                        <div>
                          <label style={lbl}>Phone</label>
                          <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                 placeholder="+91 ..." style={ip} className="form-field" />
                        </div>
                      </div>
                      <div>
                        <label style={lbl}>Service Interested In</label>
                        <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                                style={{ ...ip, cursor: "pointer" }} className="form-field">
                          <option value="">Select a service</option>
                          <option>Talent Acquisition</option>
                          <option>HR Consulting & Advisory</option>
                          <option>Payroll & Compliance</option>
                          <option>Learning & Development</option>
                          <option>HR Technology</option>
                          <option>Managed HR Services</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={lbl}>Message *</label>
                        <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                  placeholder="Tell us about your HR needs..."
                                  style={{ ...ip, resize: "vertical", paddingTop: "1rem" }}
                                  className="form-field" />
                      </div>
                      <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                        Send message <span className="btn-icon"><ArrowRightIcon size={14}/></span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <style>{`
        .form-field:focus { border-color: var(--accent) !important; }
        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .fm-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
