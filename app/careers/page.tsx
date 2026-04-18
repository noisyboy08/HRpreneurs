"use client";
import { useState } from "react";
import Link from "next/link";
import { FadeUp, Stagger, StaggerItem, RevealText, Floaty } from "@/components/motion";
import { Star, Flower, BottomCurve, ArrowUpRight, ArrowRightIcon } from "@/components/decor";
import ApplyModal, { type Position } from "@/components/ApplyModal";

const benefits = [
  { icon: "✦", t: "Entrepreneurial Mindset", d: "Join a team that values initiative, ownership, and meaningful impact in every role." },
  { icon: "✧", t: "Principled Leadership",   d: "Work under leaders who lead with integrity, respect, and strong governance principles." },
  { icon: "✶", t: "Continuous Learning",     d: "Access to training, mentorship, and certifications — we invest in your professional growth." },
  { icon: "✷", t: "Work-Life Balance",       d: "A vibrant and enjoyable workspace that respects your personal time and wellbeing." },
  { icon: "✸", t: "Cross-Industry Exposure", d: "Work with clients across 15+ sectors — gain breadth and depth of HR experience." },
  { icon: "✹", t: "Competitive Compensation", d: "Industry-aligned compensation, benefits, and performance recognition." },
];

const positions = [
  { title: "Senior HR Consultant",        type: "Full-time", loc: "Mumbai",      exp: "6-10 yrs", skills: ["Strategic HR","Client Management","Multi-industry"] },
  { title: "HR Technology Specialist",    type: "Full-time", loc: "Mumbai",      exp: "4-7 yrs",  skills: ["HRMS","Automation","Analytics"] },
  { title: "Talent Acquisition Lead",     type: "Full-time", loc: "Mumbai",      exp: "5-8 yrs",  skills: ["Executive Search","Sourcing","Stakeholder Mgmt"] },
  { title: "Compliance Manager",          type: "Full-time", loc: "Mumbai",      exp: "4-7 yrs",  skills: ["Labour Law","Payroll","Audit"] },
  { title: "Learning & Development Lead", type: "Full-time", loc: "Mumbai",      exp: "5-8 yrs",  skills: ["Training Design","Leadership","Facilitation"] },
  { title: "HR Analyst — Intern",         type: "Internship", loc: "Mumbai",     exp: "0-1 yrs",  skills: ["Research","Analytics","Communication"] },
];

export default function CareersPage() {
  const [applyFor, setApplyFor] = useState<Position | null>(null);
  return (
    <>
      <ApplyModal position={applyFor} onClose={() => setApplyFor(null)} />

      {/* ═══════ HERO ═══════ */}
      <section style={{ position: "relative", paddingTop: "8rem", paddingBottom: "6rem", overflow: "hidden" }}>
        <Floaty rotate={-10} style={{ position: "absolute", top: "20%", right: "8%" }}>
          <Flower color="var(--coral)" center="var(--sun)" size={72} />
        </Floaty>
        <Floaty rotate={12} style={{ position: "absolute", bottom: "10%", left: "6%" }}>
          <Star color="var(--accent)" size={56} />
        </Floaty>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <div className="pill" style={{ marginBottom: "2.5rem" }}><span className="dot"/> We're Hiring</div>
          </FadeUp>
          <h1 className="display">
            <RevealText text="Build your" /><br/>
            <RevealText text="career" delay={0.15} />{" "}
            <span className="highlight">with us.</span>
          </h1>
          <FadeUp delay={0.4}>
            <p className="body-xl text-dim" style={{ maxWidth: 580, marginTop: "2.5rem" }}>
              Join a team where HR professionals solve meaningful problems, grow continuously, and shape the future of people operations.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ═══════ WHY JOIN ═══════ */}
      <section className="bg-cream section">
        <div className="wrap">
          <FadeUp>
            <p className="eyebrow text-accent" style={{ marginBottom: "1.5rem" }}>Why join us</p>
          </FadeUp>
          <h2 className="h1" style={{ marginBottom: "4rem" }}>
            <RevealText text="Work that" /><br/>
            <span className="highlight highlight-purple">matters.</span>
          </h2>

          <Stagger stagger={0.08} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}
                   className="benefits-grid careers-roles-grid">
            {benefits.map(b => (
              <StaggerItem key={b.t}>
                <div className="card" style={{ border: "1.5px solid var(--line)", minHeight: 220 }}>
                  <div style={{ fontSize: "2rem", color: "var(--accent)", marginBottom: "1rem" }}>{b.icon}</div>
                  <h4 className="h4" style={{ marginBottom: "0.875rem", fontSize: "1.25rem" }}>{b.t}</h4>
                  <p className="body-sm text-dim">{b.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══════ OPEN POSITIONS ═══════ */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>
            <div>
              <FadeUp>
                <p className="eyebrow text-accent" style={{ marginBottom: "1.5rem" }}>Open positions</p>
              </FadeUp>
              <h2 className="h1">
                <RevealText text="Current" /><br/>
                <span className="highlight"><RevealText text="opportunities." delay={0.2} /></span>
              </h2>
            </div>
            <FadeUp delay={0.2}>
              <div className="pill" style={{ background: "var(--mint)" }}>
                <span className="dot" /> {positions.length} open roles
              </div>
            </FadeUp>
          </div>

          <Stagger stagger={0.08} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {positions.map(p => (
              <StaggerItem key={p.title}>
                <div className="job-row" style={{
                  background: "var(--bg-card)", borderRadius: "var(--radius)",
                  padding: "2rem 2.25rem", border: "1.5px solid var(--line)",
                  display: "grid", gridTemplateColumns: "1.5fr 1fr auto", gap: "2rem", alignItems: "center", rowGap: "1rem",
                  transition: "border-color 0.25s, transform 0.25s",
                }}>
                  <div>
                    <h3 className="h4" style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{p.title}</h3>
                    <div style={{ display: "flex", gap: "1rem", fontSize: "0.8rem", color: "var(--fg-2)", flexWrap: "wrap" }}>
                      <span>· {p.type}</span>
                      <span>· {p.loc}</span>
                      <span>· {p.exp}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {p.skills.map(s => (
                      <span key={s} style={{
                        padding: "0.3rem 0.75rem", borderRadius: "9999px",
                        border: "1px solid var(--line-strong)",
                        fontSize: "0.72rem", fontWeight: 500, color: "var(--fg-2)",
                      }}>{s}</span>
                    ))}
                  </div>
                  <button onClick={() => setApplyFor(p)} className="btn btn-primary" style={{ padding: "0.75rem 1rem 0.75rem 1.5rem", fontSize: "0.85rem" }}>
                    Apply <span className="btn-icon"><ArrowRightIcon size={12}/></span>
                  </button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══════ INTERNSHIP ═══════ */}
      <section className="bg-purple" style={{ position: "relative", padding: "9rem 0", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -1, left: 0, right: 0, transform: "scaleY(-1)" }}>
          <BottomCurve color="var(--purple)" />
        </div>

        <Floaty rotate={10} style={{ position: "absolute", top: "15%", right: "5%" }}>
          <Flower color="var(--sun)" center="var(--ink)" size={64} />
        </Floaty>

        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="intern-grid">
            <div>
              <FadeUp>
                <p className="eyebrow" style={{ color: "var(--ink)", marginBottom: "1.25rem" }}>Internship Program</p>
                <h2 className="h1" style={{ color: "var(--ink)", marginBottom: "2rem" }}>
                  Kickstart<br/>your HR<br/>
                  <span className="highlight highlight-sun">career.</span>
                </h2>
                <p className="body-lg" style={{ color: "rgba(14,10,20,0.85)", marginBottom: "2.5rem", maxWidth: 500 }}>
                  Our internship program offers hands-on exposure across HR consulting, talent acquisition, compliance, and HR technology — perfect for students and early career professionals.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Apply for internship <span className="btn-icon"><ArrowUpRight size={14}/></span>
                </Link>
              </FadeUp>
            </div>
            <Stagger stagger={0.12} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { n: "01", t: "Duration",    d: "3–6 months, flexible based on program and academic calendar." },
                { n: "02", t: "Exposure",    d: "Rotations across HR consulting, TA, compliance, and HR tech." },
                { n: "03", t: "Mentorship",  d: "Direct mentorship from senior HR professionals and leadership." },
                { n: "04", t: "Outcomes",    d: "Real project work, certification, and potential for full-time conversion." },
              ].map(i => (
                <StaggerItem key={i.n}>
                  <div style={{
                    background: "#fff", borderRadius: "var(--radius)",
                    padding: "1.75rem", border: "1.5px solid var(--ink)",
                    display: "flex", gap: "1.25rem",
                  }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--accent)", minWidth: 32 }}>{i.n}</div>
                    <div>
                      <h4 className="h4" style={{ marginBottom: "0.35rem", fontSize: "1.1rem" }}>{i.t}</h4>
                      <p className="body-sm text-dim">{i.d}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <BottomCurve color="var(--bg)" />
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section style={{ padding: "8rem 0", textAlign: "center" }}>
        <div className="wrap" style={{ maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
          <FadeUp>
            <h2 className="h2" style={{ marginBottom: "1.25rem" }}>
              Don't see the <span className="highlight highlight-coral">right role?</span>
            </h2>
            <p className="body-lg text-dim" style={{ marginBottom: "2.5rem" }}>
              We're always looking for exceptional talent. Send us your resume and we'll be in touch as opportunities arise.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Send us your resume <span className="btn-icon"><ArrowUpRight size={14}/></span>
            </Link>
          </FadeUp>
        </div>
      </section>

      <style>{`
        .job-row:hover { border-color: var(--ink); transform: translateX(4px); }
        @media (max-width: 960px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .job-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .intern-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 560px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
