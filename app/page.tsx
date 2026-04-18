import Link from "next/link";
import {
  FadeUp, Stagger, StaggerItem, RevealText, LetterDrop,
  Floaty, Magnetic, Tilt, ParallaxY, MouseParallax,
  Counter, TextCarousel, ScrollRotate, StickyStack,
} from "@/components/motion";
import {
  Squiggle, Star, Flower, BottomCurve, BlobShape,
  ArrowUpRight, ArrowRightIcon,
} from "@/components/decor";
import { services, sectors } from "@/lib/data";

const bgMap: Record<string, string> = {
  mint: "var(--mint)", sun: "var(--sun)", coral: "var(--coral)",
  purple: "var(--purple)", sand: "var(--sand)", cream: "var(--cream)",
};

const marquee = ["Talent Acquisition", "HR Consulting", "Payroll Management", "Labour Compliance", "Leadership", "HR Technology", "Workforce Planning", "Performance"];

const stickyPillars = [
  { tag: "Pillar 01", title: "People-first operating model", body: "Every engagement begins with your people — their context, their aspirations, their constraints. Strategy follows.",   bg: "var(--mint)" },
  { tag: "Pillar 02", title: "Sector-specialised pods",      body: "We don't rotate generalists. Your account is staffed with practitioners who've lived in your industry for a decade.", bg: "var(--sun)" },
  { tag: "Pillar 03", title: "Outcomes over activity",       body: "SLAs, KPIs, dashboards. Every workstream is measured against business outcomes — not how busy we look.",               bg: "var(--coral)" },
  { tag: "Pillar 04", title: "Tech-enabled, human-led",      body: "Automation for the repeatable. Humans for the judgemental. We unapologetically blend both.",                            bg: "var(--purple)" },
];

const values = [
  { n: "01", t: "Integrity", d: "Transparency and fairness in every engagement." },
  { n: "02", t: "Trust",     d: "Confidence built through consistency." },
  { n: "03", t: "Respect",   d: "Valuing people, perspectives, and professionalism." },
  { n: "04", t: "Unity",     d: "One team collaborating toward shared success." },
];

export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section style={{ position: "relative", paddingTop: "7rem", paddingBottom: "3rem", overflow: "hidden", minHeight: "90vh" }}>
        <MouseParallax strength={30} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <Floaty style={{ position: "absolute", top: "12%", right: "8%" }}>
            <Star color="var(--accent)" size={56} />
          </Floaty>
          <Floaty rotate={-10} style={{ position: "absolute", top: "34%", right: "18%" }}>
            <Flower color="var(--coral)" center="var(--sun)" size={72} />
          </Floaty>
          <Floaty rotate={12} style={{ position: "absolute", top: "20%", left: "5%" }}>
            <BlobShape color="var(--mint)" size={90} />
          </Floaty>
          <ScrollRotate style={{ position: "absolute", bottom: "10%", right: "6%" }}>
            <svg width="120" height="120" viewBox="0 0 120 120">
              <defs>
                <path id="circlePath" d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"/>
              </defs>
              <text fill="var(--fg-2)" fontSize="11" fontWeight="700" letterSpacing="4">
                <textPath href="#circlePath">AWWWARDS · NOMINEE · 2026 · HRPRENEURS · </textPath>
              </text>
            </svg>
          </ScrollRotate>
        </MouseParallax>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <div className="pill" style={{ background: "var(--bg-card)", marginBottom: "2rem" }}>
              <span className="dot" /> Full-Service HR · 18+ Years
            </div>
          </FadeUp>

          <h1 className="display" style={{ marginBottom: "1rem" }}>
            <LetterDrop text="Make HR" /><br/>
            <span style={{ position: "relative", display: "inline-block" }}>
              <LetterDrop text="work for" delay={0.3} />
              <Squiggle color="var(--accent)" width={260} style={{ position: "absolute", left: 0, bottom: "-0.3em" }} />
            </span>
            <br/>
            <span style={{ color: "var(--accent)" }}>
              <LetterDrop text="your " delay={0.6}/>
              <TextCarousel words={["people.", "teams.", "growth.", "future."]} className="highlight-sun" style={{ fontWeight: 900 }} />
            </span>
          </h1>

          <FadeUp delay={0.8}>
            <p className="body-xl text-dim" style={{ maxWidth: 560, marginTop: "2rem", marginBottom: "2.5rem" }}>
              A full-service HR solutions firm partnering with organizations to build structured, compliant, and future-ready workforces across India.
            </p>
          </FadeUp>

          <FadeUp delay={0.95}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Magnetic strength={0.35}>
                <Link href="/services" className="btn btn-primary">
                  Explore Services <span className="btn-icon"><ArrowUpRight/></span>
                </Link>
              </Magnetic>
              <Magnetic strength={0.35}>
                <Link href="/about" className="btn btn-outline">
                  About Us <span className="btn-icon" style={{ background: "transparent", border: "1.5px solid var(--fg)" }}><ArrowRightIcon/></span>
                </Link>
              </Magnetic>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════ PURPLE INTRO + COUNTERS ═══════ */}
      <section className="bg-purple" style={{ position: "relative", paddingTop: "8rem", paddingBottom: "10rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -1, left: 0, right: 0, transform: "scaleY(-1)" }}>
          <BottomCurve color="var(--purple)" />
        </div>

        <ParallaxY range={80} style={{ position: "absolute", top: "15%", right: "8%" }}>
          <Floaty rotate={15}><Star color="var(--ink)" size={40} /></Floaty>
        </ParallaxY>
        <ParallaxY range={120} style={{ position: "absolute", bottom: "12%", left: "6%" }}>
          <Floaty rotate={-10}><Flower color="var(--sun)" center="var(--ink)" size={64} /></Floaty>
        </ParallaxY>

        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: "2rem" }}>
          <FadeUp>
            <p className="eyebrow" style={{ color: "var(--ink)", marginBottom: "2rem" }}>Who we are</p>
          </FadeUp>

          <h2 className="h1" style={{ color: "var(--ink)", marginBottom: "2rem" }}>
            <RevealText text="Your strategic" /><br/>
            <span>HR <span className="highlight highlight-sun">partner</span></span><br/>
            <RevealText text="— not just a vendor." delay={0.2} />
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginTop: "4rem", alignItems: "start" }} className="intro-grid">
            <FadeUp>
              <p className="body-xl" style={{ color: "var(--ink)", maxWidth: 540 }}>
                HRpreneurs is a full-service human resources solutions firm with 18+ years of experience in talent acquisition, staffing, compensation, policy development, training, and HR technology.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="body-lg" style={{ color: "rgba(14,10,20,0.75)", marginBottom: "2rem" }}>
                We partner with businesses to manage talent, improve organizational efficiency, and create people-centric workplaces — combining practical HR expertise with structured processes.
              </p>
              <Magnetic>
                <Link href="/about" className="btn btn-primary">
                  Learn more about us <span className="btn-icon"><ArrowUpRight /></span>
                </Link>
              </Magnetic>
            </FadeUp>
          </div>

          <Stagger stagger={0.12} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginTop: "7rem" }} className="stats-grid">
            {[
              { n: 18,  s: "+",  l: "Years of Experience" },
              { n: 500, s: "+",  l: "Clients Served"      },
              { n: 15,  s: "+",  l: "Industry Sectors"    },
              { n: 100, s: "%",  l: "Client Satisfaction" },
            ].map(s => (
              <StaggerItem key={s.l} style={{ padding: "2rem", background: "var(--bg-card)", borderRadius: "var(--radius)", border: "1.5px solid var(--ink)" }}>
                <div style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "var(--ink)", lineHeight: 1 }}>
                  <Counter to={s.n} suffix={s.s}/>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--ink-2)", marginTop: "0.75rem", fontWeight: 500 }}>{s.l}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <BottomCurve color="var(--bg)" />
        </div>
      </section>

      {/* ═══════ MARQUEE ═══════ */}
      <div className="bg-ink" style={{ padding: "1.5rem 0", overflow: "hidden" }}>
        <div className="marquee-track fast">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 800, letterSpacing: "-0.02em",
              color: "var(--on-ink)", padding: "0 2rem",
              display: "inline-flex", alignItems: "center", gap: "2rem",
            }}>
              {t}
              <Star color="var(--accent)" size={24} />
            </span>
          ))}
        </div>
      </div>

      {/* ═══════ SERVICES (link to detail) ═══════ */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "4rem" }}>
            <div>
              <FadeUp>
                <p className="eyebrow text-accent" style={{ marginBottom: "1.25rem" }}>What we do</p>
              </FadeUp>
              <h2 className="h1">
                <RevealText text="One firm." /><br/>
                <RevealText text="Every HR" delay={0.15} />{" "}
                <span className="highlight">function.</span>
              </h2>
            </div>
            <FadeUp delay={0.3}>
              <Magnetic>
                <Link href="/services" className="btn btn-outline">
                  All Services <span className="btn-icon" style={{ background: "transparent", border: "1.5px solid var(--fg)" }}><ArrowUpRight/></span>
                </Link>
              </Magnetic>
            </FadeUp>
          </div>

          <Stagger stagger={0.1} className="grid-3">
            {services.map(s => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`}>
                  <Tilt max={6}>
                    <div style={{
                      background: bgMap[s.bg],
                      borderRadius: "var(--radius-lg)",
                      padding: "2.5rem",
                      border: "1.5px solid var(--ink)",
                      minHeight: 300,
                      display: "flex", flexDirection: "column", justifyContent: "space-between",
                      color: "var(--ink)",
                    }}>
                      <div>
                        <span className="pill" style={{
                          background: "var(--ink)", color: "var(--on-ink)", borderColor: "var(--ink)",
                        }}>{s.number} · {s.tag.toUpperCase()}</span>
                        <h3 className="h3" style={{ color: "var(--ink)", marginTop: "1.5rem" }}>{s.title}</h3>
                        <p style={{ color: "rgba(14,10,20,0.78)", fontSize: "0.95rem", lineHeight: 1.65, marginTop: "0.75rem" }}>{s.short}</p>
                      </div>
                      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: "50%",
                          background: "var(--ink)", color: "var(--on-ink)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}><ArrowUpRight size={16} /></div>
                      </div>
                    </div>
                  </Tilt>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══════ STICKY PILLARS ═══════ */}
      <section className="section bg-cream">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem" }} className="sticky-grid">
            <div style={{ position: "sticky", top: "10vh", alignSelf: "start" }}>
              <FadeUp>
                <p className="eyebrow text-accent">How we operate</p>
                <h2 className="h2" style={{ marginTop: "1rem" }}>
                  Four <span className="highlight-purple">pillars</span>.
                  <br/>
                  One <em style={{ fontStyle: "italic", fontWeight: 400 }}>unfair</em> advantage.
                </h2>
                <p className="body-xl text-dim" style={{ marginTop: "1.5rem", maxWidth: 420 }}>
                  Every engagement runs on the same operating system — battle-tested across 500+ organisations.
                </p>
              </FadeUp>
            </div>
            <StickyStack items={stickyPillars} />
          </div>
        </div>
      </section>

      {/* ═══════ VALUES (dark) ═══════ */}
      <section className="bg-ink rounded-top" style={{ position: "relative", padding: "8rem 0", overflow: "hidden" }}>
        <Floaty rotate={10} style={{ position: "absolute", top: "12%", right: "6%", zIndex: 1 }}>
          <Flower color="var(--accent)" center="var(--sun)" size={56} />
        </Floaty>
        <Floaty rotate={-8} style={{ position: "absolute", bottom: "10%", left: "4%", zIndex: 1 }}>
          <Star color="var(--mint)" size={48} />
        </Floaty>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: "1.5rem" }}>What we stand for</p>
          </FadeUp>

          <h2 className="h1" style={{ color: "var(--on-ink)", marginBottom: "4rem" }}>
            <RevealText text="Values that" /><br/>
            <span style={{ color: "var(--accent)" }}><RevealText text="guide every" delay={0.15} /></span><br/>
            <RevealText text="engagement." delay={0.3} />
          </h2>

          <Stagger stagger={0.1} className="grid-4">
            {values.map(v => (
              <StaggerItem key={v.n}>
                <Tilt max={8}>
                  <div style={{
                    padding: "2.5rem 2rem",
                    background: "color-mix(in srgb, var(--on-ink) 4%, transparent)",
                    borderRadius: "var(--radius)",
                    border: "1px solid color-mix(in srgb, var(--on-ink) 8%, transparent)",
                    minHeight: 220,
                  }}>
                    <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--accent)", opacity: 0.7, letterSpacing: "-0.04em", marginBottom: "1rem" }}>{v.n}</div>
                    <h4 className="h4" style={{ color: "var(--on-ink)", marginBottom: "0.5rem" }}>{v.t}</h4>
                    <p style={{ color: "var(--on-ink-2)", fontSize: "0.9rem" }}>{v.d}</p>
                  </div>
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══════ SECTORS (linked) ═══════ */}
      <section className="section">
        <div className="wrap">
          <FadeUp>
            <p className="eyebrow text-accent" style={{ marginBottom: "1.5rem" }}>Industries</p>
          </FadeUp>
          <h2 className="h1" style={{ marginBottom: "3.5rem" }}>
            <RevealText text="Sectors" /><br/>
            <span className="highlight highlight-purple">we serve.</span>
          </h2>

          <Stagger stagger={0.04} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {sectors.map(s => (
              <StaggerItem key={s.slug} y={15}>
                <Link href={`/sectors/${s.slug}`} className="pill gooey"
                  style={{
                    background: "var(--bg-card)", borderColor: "var(--border-strong)",
                    padding: "0.75rem 1.25rem", fontSize: "0.95rem",
                  }}>
                  <span style={{ fontSize: "1rem" }}>{s.icon}</span> {s.title}
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══════ FOUNDER QUOTE ═══════ */}
      <section className="bg-cream" style={{ position: "relative", padding: "10rem 0", overflow: "hidden" }}>
        <ParallaxY range={100} style={{ position: "absolute", top: "20%", left: "8%" }}>
          <Floaty rotate={-5}><BlobShape color="var(--accent)" size={120} /></Floaty>
        </ParallaxY>
        <ParallaxY range={-80} style={{ position: "absolute", bottom: "15%", right: "10%" }}>
          <Floaty rotate={8}><Star color="var(--coral)" size={56} /></Floaty>
        </ParallaxY>

        <div className="wrap" style={{ position: "relative", zIndex: 2, maxWidth: 900, textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <FadeUp>
            <p className="eyebrow text-accent" style={{ marginBottom: "2.5rem" }}>Founder's note</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <blockquote className="h2" style={{ marginBottom: "3rem" }}>
              <span style={{ color: "var(--accent)", fontSize: "1.5em", lineHeight: 0, verticalAlign: "top", marginRight: "0.1em" }}>"</span>
              HRpreneurs was established to bridge the gap — bringing <span className="highlight highlight-purple">structure, clarity,</span> and reliability to human resource management.
            </blockquote>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "var(--accent)", border: "1.5px solid var(--ink)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: "0.8rem", color: "var(--ink)",
              }}>AU</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: "1rem" }}>Ami Upadhyaya</div>
                <div style={{ fontSize: "0.85rem", color: "var(--fg-2)" }}>Founder, HRpreneurs</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .intro-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .sticky-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
