"use client";
import Link from "next/link";
import { FadeUp, Stagger, StaggerItem, RevealText, Floaty } from "@/components/motion";
import { Squiggle, Star, Flower, BottomCurve, BlobShape, ArrowUpRight, ArrowRightIcon } from "@/components/decor";

const values = [
  { n: "01", t: "Integrity", s: "Transparency, fairness, and governance", d: "We operate with integrity and place strong governance at the center of every engagement.", bg: "var(--mint)" },
  { n: "02", t: "Trust",     s: "Consistency and accountability",          d: "We build confidence through consistency, accountability, and responsible decision-making.",   bg: "var(--sun)" },
  { n: "03", t: "Respect",   s: "People, perspectives, professionalism",   d: "We demonstrate the highest level of respect for our work, our people, and our stakeholders.",  bg: "var(--coral)" },
  { n: "04", t: "Humility",  s: "Compassion and long-term intent",         d: "We build long-term relationships grounded in humility and genuine understanding.",             bg: "var(--purple)" },
  { n: "05", t: "Unity",     s: "One team toward shared success",          d: "We value collaboration. Working together as one team, we deliver stronger outcomes.",          bg: "#fff" },
];

const culture = [
  { icon: "✦", l: "Entrepreneurial Mindset" },
  { icon: "✧", l: "Principled Leadership" },
  { icon: "✶", l: "Good Governance" },
  { icon: "✷", l: "Work-Life Balance" },
  { icon: "✸", l: "Continuous Learning" },
  { icon: "✹", l: "Inclusive Environment" },
];

const timeline = [
  { y: "2006", e: "HRpreneurs founded with a vision to transform HR consulting in India." },
  { y: "2010", e: "Expanded services to cover payroll, compliance, and workforce planning." },
  { y: "2015", e: "Launched leadership development programs across top organizations." },
  { y: "2018", e: "Pioneered HR technology automation for 100+ SME clients." },
  { y: "2022", e: "Extended advisory services to 15+ industry sectors nationwide." },
  { y: "2024", e: "Launched end-to-end managed HR services for growing enterprises." },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section style={{ position: "relative", paddingTop: "8rem", paddingBottom: "6rem", overflow: "hidden" }}>
        <Floaty rotate={-10} style={{ position: "absolute", top: "20%", right: "8%" }}>
          <Flower color="var(--coral)" center="var(--sun)" size={72} />
        </Floaty>
        <Floaty rotate={12} style={{ position: "absolute", top: "50%", left: "6%" }}>
          <Star color="var(--purple)" size={56} />
        </Floaty>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <div className="pill" style={{ marginBottom: "2.5rem" }}><span className="dot"/> About HRpreneurs</div>
          </FadeUp>

          <h1 className="display" style={{ maxWidth: "1000px" }}>
            <RevealText text="Built on" /><br/>
            <span className="highlight">experience.</span><br/>
            <span style={{ color: "var(--accent)" }}><RevealText text="Driven by" delay={0.2} /></span>{" "}
            <RevealText text="purpose." delay={0.35} />
          </h1>
        </div>
      </section>

      {/* ═══════ INTRO ═══════ */}
      <section className="bg-cream" style={{ position: "relative", paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "5rem", alignItems: "start" }} className="intro-about">
            <FadeUp>
              <p className="eyebrow text-accent" style={{ marginBottom: "1.25rem" }}>Our Story</p>
              <h2 className="h2">
                A full-service <span className="highlight highlight-purple">HR partner</span> for growing organizations.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <p className="body-lg text-dim">
                  HRpreneurs is a professional human resource management and advisory firm that partners with organizations to build strong, compliant, and future-ready workforces. We provide end-to-end HR solutions supporting businesses across the entire employee lifecycle.
                </p>
                <p className="body text-dim">
                  From talent acquisition and workforce planning to compliance, performance management, and HR transformation — our approach combines practical expertise with structured processes to enable organizations to manage people operations with clarity and confidence.
                </p>
                <p className="body text-dim">
                  Our strength lies in combining hands-on execution with strategic advisory, acting as both a trusted partner and an extension of our clients' internal HR teams.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════ MISSION / VISION ═══════ */}
      <section className="section">
        <div className="wrap">
          <Stagger stagger={0.15} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
                   className="mission-grid">
            <StaggerItem>
              <div style={{
                background: "var(--purple)", borderRadius: "var(--radius-lg)",
                padding: "3.5rem", border: "1.5px solid var(--ink)",
                minHeight: 340, position: "relative", overflow: "hidden",
              }}>
                <Floaty rotate={15} style={{ position: "absolute", top: "2rem", right: "2rem" }}>
                  <Star color="var(--ink)" size={36} />
                </Floaty>
                <p className="eyebrow" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Strategy · Mission</p>
                <h3 className="h2" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", color: "var(--ink)", marginBottom: "1.5rem" }}>Our Mission</h3>
                <p style={{ color: "rgba(14,10,20,0.82)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                  To deliver outstanding professional services to a diverse range of global and domestic clients — upholding our core values, consistent profitability, long-term sustainability, and social responsibility.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{
                background: "var(--mint)", borderRadius: "var(--radius-lg)",
                padding: "3.5rem", border: "1.5px solid var(--ink)",
                minHeight: 340, position: "relative", overflow: "hidden",
              }}>
                <Floaty rotate={-10} style={{ position: "absolute", top: "2rem", right: "2rem" }}>
                  <Flower color="var(--coral)" center="var(--ink)" size={52} />
                </Floaty>
                <p className="eyebrow" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Purpose · Vision</p>
                <h3 className="h2" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", color: "var(--ink)", marginBottom: "1.5rem" }}>Our Vision</h3>
                <p style={{ color: "rgba(14,10,20,0.82)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                  To be a leading and trusted human resource partner for organizations seeking structured, compliant, and future-ready people practices that enable sustainable business growth.
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ═══════ VALUES (purple bg) ═══════ */}
      <section className="bg-purple" style={{ position: "relative", padding: "8rem 0 10rem" }}>
        <div style={{ position: "absolute", top: -1, left: 0, right: 0, transform: "scaleY(-1)" }}>
          <BottomCurve color="var(--purple)" />
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: "3rem" }}>
          <FadeUp>
            <p className="eyebrow" style={{ color: "var(--ink)", marginBottom: "2rem" }}>Our Foundation</p>
          </FadeUp>
          <h2 className="h1" style={{ color: "var(--ink)", marginBottom: "4rem" }}>
            <RevealText text="Five values." /><br/>
            <RevealText text="One " delay={0.15} />
            <span className="highlight highlight-sun"><RevealText text="culture." delay={0.3} /></span>
          </h2>

          <Stagger stagger={0.1} style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}
                   className="values-about">
            {values.map(v => (
              <StaggerItem key={v.n} style={{
                background: v.bg, borderRadius: "var(--radius)",
                padding: "2rem", border: "1.5px solid var(--ink)",
                minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--ink)", opacity: 0.4, marginBottom: "1rem" }}>{v.n}</div>
                  <h4 className="h4" style={{ color: "var(--ink)", marginBottom: "0.5rem", fontSize: "1.35rem" }}>{v.t}</h4>
                  <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(14,10,20,0.65)" }}>{v.s}</p>
                </div>
                <p style={{ fontSize: "0.85rem", color: "rgba(14,10,20,0.75)", lineHeight: 1.6, marginTop: "1.25rem" }}>{v.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <BottomCurve color="var(--bg)" />
        </div>
      </section>

      {/* ═══════ CULTURE ═══════ */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
               className="culture-grid">
            <div>
              <FadeUp>
                <p className="eyebrow text-accent" style={{ marginBottom: "1.25rem" }}>How we work</p>
                <h2 className="h1" style={{ marginBottom: "2rem" }}>Our <span className="highlight">culture.</span></h2>
                <p className="body-lg text-dim" style={{ marginBottom: "1.25rem" }}>
                  Our organizational culture is characterized by an entrepreneurial mindset, principled leadership, resilience, and good governance — fostered within a vibrant and enjoyable workspace.
                </p>
                <p className="body text-dim">
                  We believe effective human resource management is a strategic function that directly influences business performance, culture, and long-term sustainability.
                </p>
              </FadeUp>
            </div>
            <Stagger stagger={0.08} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {culture.map(c => (
                <StaggerItem key={c.l}>
                  <div className="card-outline" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem" }}>
                    <span style={{ fontSize: "1.5rem", color: "var(--accent)" }}>{c.icon}</span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>{c.l}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ═══════ FOUNDERS ═══════ */}
      <section className="bg-cream" style={{ position: "relative", padding: "8rem 0", overflow: "hidden" }}>
        <Floaty rotate={10} style={{ position: "absolute", top: "8%", right: "6%" }}>
          <BlobShape color="var(--purple)" size={100} />
        </Floaty>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <p className="eyebrow text-accent" style={{ marginBottom: "1.5rem" }}>Leadership</p>
          </FadeUp>
          <h2 className="h1" style={{ marginBottom: "4rem" }}>
            <RevealText text="Meet the" /><br/>
            <span className="highlight highlight-purple">founders.</span>
          </h2>

          <Stagger stagger={0.2} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
                   className="founders-grid">
            {/* Ami */}
            <StaggerItem>
              <div className="card-lg" style={{ border: "1.5px solid var(--ink)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2rem" }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    background: "var(--purple)", border: "1.5px solid var(--ink)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: "1rem",
                  }}>AU</div>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: "1.35rem" }}>Ami Upadhyaya</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--accent)", fontWeight: 500 }}>Founder, HRpreneurs</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.5rem" }}>
                  {["M.Com.","M.B.A.","M.B.L.","BMS","Certified Hypnotist","Life Coach","NLP Practitioner"].map(q => (
                    <span key={q} style={{ padding: "0.3rem 0.75rem", borderRadius: "9999px", border: "1px solid var(--line-strong)", fontSize: "0.7rem", fontWeight: 500, color: "var(--fg-2)" }}>{q}</span>
                  ))}
                </div>
                <p className="body-sm text-dim" style={{ marginBottom: "0.875rem" }}>
                  Ami brings 18+ years of experience as an HR Professional across IT, Retail, and Real Estate. She has served in leadership roles at global and multinational organizations and is a visiting faculty at management colleges.
                </p>
                <p className="body-sm text-dim">
                  Her expertise spans Executive Talent Screening, Workforce Planning, Compensation & Benefits, Policy Development (POSH, CoC, D&I), and Leadership Training.
                </p>
              </div>
            </StaggerItem>

            {/* Rushi */}
            <StaggerItem>
              <div className="card-lg" style={{ border: "1.5px solid var(--ink)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2rem" }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    background: "var(--mint)", border: "1.5px solid var(--ink)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: "1rem",
                  }}>RU</div>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: "1.35rem" }}>Rushi Upadhyaya</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--accent)", fontWeight: 500 }}>Founder · HRA Legal · Legal Consultant</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.5rem" }}>
                  {["MBL","LLB","BMS","Company Secretary","PGIPR"].map(q => (
                    <span key={q} style={{ padding: "0.3rem 0.75rem", borderRadius: "9999px", border: "1px solid var(--line-strong)", fontSize: "0.7rem", fontWeight: 500, color: "var(--fg-2)" }}>{q}</span>
                  ))}
                </div>
                <p className="body-sm text-dim" style={{ marginBottom: "0.875rem" }}>
                  Rushi brings 15+ years of experience as Counsel in Legal, Corporate Affairs, and Business Affairs in Media & Entertainment — with Sony Pictures Networks India, Shemaroo Entertainment, Reliance Industries, and Sony Music India.
                </p>
                <p className="body-sm text-dim">
                  She excels at structuring, negotiating, and executing complex agreements, with strategic advisory on corporate, commercial, and IP matters.
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ═══════ TIMELINE ═══════ */}
      <section className="section">
        <div className="wrap">
          <FadeUp>
            <p className="eyebrow text-accent" style={{ marginBottom: "1.5rem" }}>Our Journey</p>
          </FadeUp>
          <h2 className="h1" style={{ marginBottom: "4rem" }}>
            <RevealText text="Growing" /><br/>
            <span className="highlight highlight-coral">since 2006.</span>
          </h2>

          <div style={{ maxWidth: 800 }}>
            <Stagger stagger={0.12}>
              {timeline.map((m, i) => (
                <StaggerItem key={m.y} style={{ display: "flex", gap: "2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 56, flexShrink: 0 }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: "50%",
                      background: "var(--purple)", border: "1.5px solid var(--ink)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.75rem", fontWeight: 800, color: "var(--ink)",
                    }}>'{m.y.slice(2)}</div>
                    {i < timeline.length - 1 && <div style={{ flex: 1, width: 2, background: "var(--line-strong)", marginTop: "0.375rem" }} />}
                  </div>
                  <div style={{ padding: "0.75rem 0 2.5rem" }}>
                    <div style={{ fontWeight: 800, color: "var(--accent)", fontSize: "0.95rem", marginBottom: "0.375rem" }}>{m.y}</div>
                    <p className="body text-dim" style={{ maxWidth: 620 }}>{m.e}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section style={{ padding: "4rem 0 6rem" }}>
        <div className="wrap">
          <div className="bg-ink" style={{
            borderRadius: "var(--radius-lg)", padding: "5rem 3rem",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <Floaty rotate={12} style={{ position: "absolute", top: "2rem", left: "3rem" }}>
              <Star color="var(--purple)" size={44} />
            </Floaty>
            <Floaty rotate={-8} style={{ position: "absolute", bottom: "2rem", right: "3rem" }}>
              <Flower color="var(--mint)" center="var(--sun)" size={48} />
            </Floaty>
            <FadeUp>
              <h2 className="h2" style={{ color: "var(--on-ink)", marginBottom: "1.5rem" }}>Ready to <span style={{ color: "var(--purple)" }}>partner</span> with us?</h2>
              <p className="body-lg" style={{ color: "var(--on-ink-2)", maxWidth: 480, margin: "0 auto 2.5rem" }}>
                Let's build a structured, compliant, and future-ready HR function for your organization.
              </p>
              <Link href="/contact" className="btn btn-purple">
                Get in Touch <span className="btn-icon" style={{ background: "var(--ink)", color: "#fff" }}><ArrowUpRight size={14}/></span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .intro-about { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .mission-grid { grid-template-columns: 1fr !important; }
          .values-about { grid-template-columns: repeat(2, 1fr) !important; }
          .culture-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .founders-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .values-about { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
