import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { ArrowUpRight, ArrowRightIcon, Flower, Star, BlobShape } from "@/components/decor";
import {
  FadeUp, Stagger, StaggerItem, RevealText, LetterDrop,
  Floaty, Magnetic, Tilt, ParallaxY, ScaleIn, Counter, DrawLine,
} from "@/components/motion";

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return notFound();

  const idx = services.findIndex(s => s.slug === slug);
  const next = services[(idx + 1) % services.length];
  const bgMap: Record<string, string> = {
    mint: "var(--mint)", sun: "var(--sun)", coral: "var(--coral)",
    purple: "var(--purple)", sand: "var(--sand)", cream: "var(--cream)",
  };
  const heroBg = bgMap[service.bg];

  return (
    <>
      {/* Hero */}
      <section style={{
        background: heroBg, color: "var(--ink)",
        padding: "10rem 0 6rem", position: "relative", overflow: "hidden",
      }} className="rounded-bottom">
        <ParallaxY range={80} style={{ position: "absolute", top: "18%", right: "8%", opacity: 0.9 }}>
          <Floaty><Flower size={110} color="var(--ink)" center={heroBg}/></Floaty>
        </ParallaxY>
        <ParallaxY range={120} style={{ position: "absolute", bottom: "12%", left: "6%", opacity: 0.15 }}>
          <BlobShape size={280} color="var(--ink)"/>
        </ParallaxY>
        <ParallaxY range={-60} style={{ position: "absolute", top: "22%", left: "48%" }}>
          <Floaty rotate={-12}><Star size={42} color="var(--ink)"/></Floaty>
        </ParallaxY>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <Link href="/services" className="pill" style={{ background: "var(--ink)", color: heroBg, borderColor: "var(--ink)" }}>
              <span style={{ fontWeight: 700 }}>← All Services</span>
            </Link>
          </FadeUp>

          <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <FadeUp delay={0.1}>
              <span style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 900, opacity: 0.4 }}>
                {service.number}.
              </span>
            </FadeUp>
            <div>
              <FadeUp delay={0.15}>
                <span className="pill" style={{ background: "var(--ink)", color: "var(--bg)", borderColor: "var(--ink)", marginBottom: "1rem" }}>
                  {service.tag}
                </span>
              </FadeUp>
              <h1 className="display" style={{ maxWidth: 1100 }}>
                <LetterDrop text={service.title}/>
              </h1>
            </div>
          </div>

          <div style={{ maxWidth: 720, marginTop: "2.5rem" }}>
            <RevealText as="p" text={service.description} className="body-xl" delay={0.2}/>
          </div>

          <FadeUp delay={0.4}>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "3rem", flexWrap: "wrap" }}>
              <Magnetic><Link href="/contact" className="btn btn-primary">
                Start a Conversation <span className="btn-icon"><ArrowUpRight/></span>
              </Link></Magnetic>
              <Magnetic><Link href="#offerings" className="btn btn-outline">
                Explore Offerings <span className="btn-icon"><ArrowRightIcon/></span>
              </Link></Magnetic>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Key metrics strip */}
      <section className="section-sm bg-ink">
        <div className="wrap">
          <div className="grid-4" style={{ gap: "2rem" }}>
            {[
              { n: 18, s: "+", l: "Years of practice" },
              { n: 500,s: "+", l: "Engagements delivered" },
              { n: 100,s: "%", l: "Statutory compliance" },
              { n: 24, s: "/7", l: "Client support" },
            ].map((x, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div>
                  <div style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--accent)" }}>
                    <Counter to={x.n} suffix={x.s}/>
                  </div>
                  <p style={{ opacity: 0.7, fontSize: "0.9rem", marginTop: "0.5rem" }}>{x.l}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings grid */}
      <section id="offerings" className="section">
        <div className="wrap">
          <div className="service-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", marginBottom: "4rem" }}>
            <FadeUp>
              <span className="eyebrow text-accent">What we deliver</span>
              <h2 className="h2" style={{ marginTop: "1rem" }}>
                Full-stack <span className="highlight">{service.title.toLowerCase()}</span>, not fragments.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="body-xl text-dim">
                Each offering below is a fully-productised workstream with defined deliverables, SLAs and outcomes — plug in individually or combine them.
              </p>
            </FadeUp>
          </div>

          <Stagger className="grid-3">
            {service.offerings.map((o, i) => (
              <StaggerItem key={i}>
                <Tilt max={6}>
                  <div className="card card-hover" style={{
                    background: "var(--bg-card)",
                    border: "1.5px solid var(--border)",
                    minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "space-between",
                  }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--fg-3)" }}>
                      0{i + 1} · Offering
                    </span>
                    <h3 className="h4" style={{ fontSize: "1.25rem", marginTop: "1rem" }}>{o}</h3>
                    <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "flex-end" }}>
                      <span style={{
                        width: 36, height: 36, borderRadius: "50%",
                        background: "var(--fg)", color: "var(--bg)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}><ArrowUpRight/></span>
                    </div>
                  </div>
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process section — timeline */}
      <section className="section bg-cream">
        <div className="wrap">
          <FadeUp>
            <span className="eyebrow text-accent">How we work</span>
            <h2 className="h2" style={{ marginTop: "1rem", maxWidth: 900 }}>
              A structured, <span className="highlight-purple">outcomes-first</span> process.
            </h2>
          </FadeUp>

          <div className="service-steps-grid" style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", position: "relative" }}>
            <div style={{ position: "absolute", top: "3rem", left: "5%", right: "5%", height: 3, pointerEvents: "none" }}>
              <DrawLine d="M0 15 L 200 15" color="var(--accent)" width={3} duration={2}/>
            </div>
            {service.process.map((p, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div style={{ position: "relative", paddingTop: "4.5rem" }}>
                  <div style={{
                    position: "absolute", top: 0, left: 0,
                    width: 48, height: 48, borderRadius: "50%",
                    background: "var(--accent)", color: "var(--bg)",
                    border: "3px solid var(--fg)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: "1rem",
                  }}>{p.step}</div>
                  <h3 className="h4" style={{ fontSize: "1.35rem" }}>{p.title}</h3>
                  <p className="body text-dim" style={{ marginTop: "0.75rem" }}>{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-purple rounded-top rounded-bottom">
        <div className="wrap">
          <div className="service-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem" }}>
            <FadeUp>
              <span className="eyebrow">Why teams choose us</span>
              <h2 className="h2" style={{ marginTop: "1rem" }}>
                Outcomes you can <em style={{ fontStyle: "italic", fontWeight: 400 }}>measure</em>.
              </h2>
            </FadeUp>
            <Stagger>
              {service.benefits.map((b, i) => (
                <StaggerItem key={i}>
                  <div style={{
                    display: "flex", gap: "1.5rem", alignItems: "flex-start",
                    padding: "1.75rem 0",
                    borderBottom: "1.5px solid rgba(14,10,20,0.15)",
                  }}>
                    <span style={{
                      flexShrink: 0,
                      width: 40, height: 40, borderRadius: "50%",
                      background: "var(--ink)", color: "var(--purple)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 900,
                    }}>{i + 1}</span>
                    <p className="body-lg" style={{ fontWeight: 500 }}>{b}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <FadeUp>
            <span className="eyebrow text-accent">FAQs</span>
            <h2 className="h2" style={{ marginTop: "1rem", maxWidth: 800 }}>
              Answers to <span className="highlight-sun">common</span> questions.
            </h2>
          </FadeUp>
          <div style={{ marginTop: "3rem", maxWidth: 900 }}>
            {service.faqs.map((f, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <details style={{
                  borderBottom: "1.5px solid var(--border-strong)",
                  padding: "1.75rem 0",
                  cursor: "pointer",
                }}>
                  <summary style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 700,
                    listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    {f.q}
                    <span style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: "var(--fg)", color: "var(--bg)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>+</span>
                  </summary>
                  <p className="body-lg text-dim" style={{ marginTop: "1rem", paddingRight: "3rem" }}>{f.a}</p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Next service */}
      <section className="section-sm bg-ink rounded-top">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span className="eyebrow" style={{ color: "var(--accent)" }}>Next Service</span>
              <Link href={`/services/${next.slug}`}>
                <h3 className="h2" style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", marginTop: "0.5rem" }}>
                  {next.title} <span style={{ color: "var(--accent)" }}>→</span>
                </h3>
              </Link>
            </div>
            <Magnetic>
              <Link href={`/services/${next.slug}`} className="btn btn-purple">
                Read Next <span className="btn-icon"><ArrowUpRight/></span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  );
}
