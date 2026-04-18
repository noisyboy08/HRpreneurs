import Link from "next/link";
import { notFound } from "next/navigation";
import { sectors, services } from "@/lib/data";
import { ArrowUpRight, ArrowRightIcon, Flower, Star, BlobShape } from "@/components/decor";
import {
  FadeUp, Stagger, StaggerItem, RevealText, LetterDrop,
  Floaty, Magnetic, Tilt, ParallaxY, ScaleIn, Counter,
} from "@/components/motion";

export function generateStaticParams() {
  return sectors.map(s => ({ slug: s.slug }));
}

const bgMap: Record<string, string> = {
  mint: "var(--mint)", sun: "var(--sun)", coral: "var(--coral)",
  purple: "var(--purple)", sand: "var(--sand)", cream: "var(--cream)",
};

export default async function SectorDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = sectors.find(s => s.slug === slug);
  if (!sector) return notFound();

  const idx = sectors.findIndex(s => s.slug === slug);
  const next = sectors[(idx + 1) % sectors.length];
  const heroBg = bgMap[sector.bg];
  const related = services.filter(x => sector.services.includes(x.title));

  return (
    <>
      {/* Hero */}
      <section style={{
        background: heroBg, color: "var(--ink)",
        padding: "10rem 0 6rem", position: "relative", overflow: "hidden",
      }} className="rounded-bottom">
        <ParallaxY range={80} style={{ position: "absolute", top: "15%", right: "10%" }}>
          <Floaty><Star size={60} color="var(--ink)"/></Floaty>
        </ParallaxY>
        <ParallaxY range={120} style={{ position: "absolute", bottom: "10%", left: "5%", opacity: 0.15 }}>
          <BlobShape size={260} color="var(--ink)"/>
        </ParallaxY>
        <ParallaxY range={-60} style={{ position: "absolute", top: "50%", right: "30%" }}>
          <Floaty rotate={10}><Flower size={70} color="var(--ink)" center={heroBg}/></Floaty>
        </ParallaxY>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <Link href="/sectors" className="pill" style={{ background: "var(--ink)", color: heroBg, borderColor: "var(--ink)" }}>
              <span style={{ fontWeight: 700 }}>← All Sectors</span>
            </Link>
          </FadeUp>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <FadeUp delay={0.1}>
              <div style={{
                width: 96, height: 96, borderRadius: "50%",
                background: "var(--bg-card)",
                border: "2px solid var(--ink)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "3rem",
              }}>{sector.icon}</div>
            </FadeUp>
            <div>
              <FadeUp delay={0.15}>
                <span className="eyebrow">Sector</span>
              </FadeUp>
              <h1 className="display" style={{ maxWidth: 1000, fontSize: "clamp(3rem, 9vw, 8rem)", marginTop: "0.5rem" }}>
                <LetterDrop text={sector.title}/>
              </h1>
            </div>
          </div>

          <div style={{ maxWidth: 760, marginTop: "2.5rem" }}>
            <RevealText as="p" text={sector.description} className="body-xl" delay={0.2}/>
          </div>

          <FadeUp delay={0.4}>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "3rem", flexWrap: "wrap" }}>
              <Magnetic><Link href="/contact" className="btn btn-primary">
                Talk to our {sector.title} team <span className="btn-icon"><ArrowUpRight/></span>
              </Link></Magnetic>
              <Magnetic><Link href="#highlights" className="btn btn-outline">
                Explore capabilities <span className="btn-icon"><ArrowRightIcon/></span>
              </Link></Magnetic>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Capabilities highlights */}
      <section id="highlights" className="section">
        <div className="wrap">
          <div className="sector-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", marginBottom: "3.5rem" }}>
            <FadeUp>
              <span className="eyebrow text-accent">Sector Capabilities</span>
              <h2 className="h2" style={{ marginTop: "1rem" }}>
                Built for the <span className="highlight">rhythm</span> of {sector.title.toLowerCase()}.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="body-xl text-dim">
                We bring dedicated pods with deep industry fluency, accredited tools, and an operating model tuned to your sector's compliance, cadence and talent economics.
              </p>
            </FadeUp>
          </div>

          <Stagger className="grid-2">
            {sector.highlights.map((h, i) => (
              <StaggerItem key={i}>
                <Tilt max={5}>
                  <div className="card-outline" style={{
                    minHeight: 160, display: "flex", alignItems: "center", gap: "1.5rem",
                  }}>
                    <span style={{
                      flexShrink: 0,
                      width: 56, height: 56, borderRadius: "50%",
                      background: "var(--accent)", color: "var(--bg)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 900, fontSize: "1.25rem",
                      border: "2px solid var(--fg)",
                    }}>{String(i + 1).padStart(2, "0")}</span>
                    <p className="h4" style={{ fontSize: "1.35rem" }}>{h}</p>
                  </div>
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-ink">
        <div className="wrap">
          <div className="grid-4" style={{ gap: "2rem" }}>
            {[
              { n: 40, s: "+",  l: "Clients in sector" },
              { n: 2500, s: "+", l: "Placements delivered" },
              { n: 15, s: "+",  l: "Years of sector depth" },
              { n: 98, s: "%",  l: "Client retention" },
            ].map((x, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 900, color: "var(--accent)" }}>
                  <Counter to={x.n} suffix={x.s}/>
                </div>
                <p style={{ opacity: 0.7, fontSize: "0.9rem", marginTop: "0.5rem" }}>{x.l}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section bg-cream">
        <div className="wrap">
          <FadeUp>
            <span className="eyebrow text-accent">Services we typically deploy</span>
            <h2 className="h2" style={{ marginTop: "1rem", maxWidth: 900 }}>
              Pick the capabilities that match your <span className="highlight-purple">priorities</span>.
            </h2>
          </FadeUp>

          <Stagger className="grid-2" style={{ marginTop: "3.5rem" }}>
            {related.map(s => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`}>
                  <Tilt max={4}>
                    <div style={{
                      background: bgMap[s.bg],
                      color: "var(--ink)",
                      borderRadius: "var(--radius-lg)",
                      padding: "2.5rem",
                      border: "1.5px solid var(--ink)",
                      minHeight: 240,
                      display: "flex", flexDirection: "column", justifyContent: "space-between",
                    }}>
                      <div>
                        <span className="pill" style={{ background: "var(--ink)", color: "var(--bg)", borderColor: "var(--ink)" }}>
                          {s.number} · {s.tag}
                        </span>
                        <h3 className="h2" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginTop: "1.5rem" }}>
                          {s.title}
                        </h3>
                        <p className="body text-dim" style={{ marginTop: "1rem", color: "var(--ink-2)" }}>
                          {s.short}
                        </p>
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem" }}>
                        <span style={{
                          width: 44, height: 44, borderRadius: "50%",
                          background: "var(--ink)", color: "var(--bg)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}><ArrowUpRight/></span>
                      </div>
                    </div>
                  </Tilt>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-purple rounded-top">
        <div className="wrap" style={{ textAlign: "center" }}>
          <FadeUp>
            <h2 className="display" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", maxWidth: 1100, marginInline: "auto" }}>
              Let's build the <em style={{ fontStyle: "italic", fontWeight: 400 }}>right</em> workforce for your {sector.title.toLowerCase()} business.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "3rem", flexWrap: "wrap" }}>
              <Magnetic><Link href="/contact" className="btn btn-primary">
                Book a Strategy Call <span className="btn-icon"><ArrowUpRight/></span>
              </Link></Magnetic>
              <Magnetic><Link href={`/sectors/${next.slug}`} className="btn btn-outline">
                Next sector: {next.title} <span className="btn-icon"><ArrowRightIcon/></span>
              </Link></Magnetic>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
