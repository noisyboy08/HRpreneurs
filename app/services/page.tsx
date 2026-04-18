import Link from "next/link";
import { services } from "@/lib/data";
import { ArrowUpRight, ArrowRightIcon, Flower, Star, BlobShape, Squiggle } from "@/components/decor";
import {
  FadeUp, Stagger, StaggerItem, RevealText, LetterDrop,
  Floaty, Magnetic, Tilt, ParallaxY,
} from "@/components/motion";

const bgMap: Record<string, string> = {
  mint: "var(--mint)", sun: "var(--sun)", coral: "var(--coral)",
  purple: "var(--purple)", sand: "var(--sand)", cream: "var(--cream)",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-purple rounded-bottom" style={{
        padding: "10rem 0 6rem", position: "relative", overflow: "hidden",
      }}>
        <ParallaxY range={90} style={{ position: "absolute", top: "20%", right: "8%" }}>
          <Floaty><Flower size={120} color="var(--ink)" center="var(--purple)"/></Floaty>
        </ParallaxY>
        <ParallaxY range={120} style={{ position: "absolute", bottom: "15%", left: "5%", opacity: 0.15 }}>
          <BlobShape size={280} color="var(--ink)"/>
        </ParallaxY>
        <ParallaxY range={-80} style={{ position: "absolute", top: "55%", right: "35%" }}>
          <Floaty rotate={-15}><Star size={56} color="var(--ink)"/></Floaty>
        </ParallaxY>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <span className="pill" style={{ background: "var(--ink)", color: "var(--purple)", borderColor: "var(--ink)" }}>
              Our Services
            </span>
          </FadeUp>
          <h1 className="display" style={{ marginTop: "2rem", maxWidth: 1200 }}>
            <LetterDrop text="Everything HR."/>
            <br/>
            <span className="highlight-mint"><LetterDrop text="Under one roof." delay={0.4}/></span>
          </h1>
          <div style={{ maxWidth: 720, marginTop: "2.5rem" }}>
            <RevealText as="p" text="Six productised workstreams — pick one, combine a few, or outsource the full HR function. Each comes with defined outcomes, SLAs and domain-specialised pods." className="body-xl" delay={0.3}/>
          </div>
        </div>
      </section>

      {/* Services grid — links to detail pages */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <FadeUp>
              <span className="eyebrow text-accent">Six services</span>
              <h2 className="h2" style={{ marginTop: "1rem", maxWidth: 800 }}>
                Click any service to <span className="highlight">dive deeper</span>.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <Magnetic><Link href="/contact" className="btn btn-primary">
                Talk to us <span className="btn-icon"><ArrowUpRight/></span>
              </Link></Magnetic>
            </FadeUp>
          </div>

          <Stagger className="grid-3">
            {services.map(s => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`}>
                  <Tilt max={6}>
                    <div style={{
                      background: bgMap[s.bg],
                      color: "var(--ink)",
                      borderRadius: "var(--radius-lg)",
                      padding: "2.5rem",
                      border: "1.5px solid var(--ink)",
                      minHeight: 340,
                      display: "flex", flexDirection: "column", justifyContent: "space-between",
                      transition: "transform 0.3s ease",
                    }}>
                      <div>
                        <span className="pill" style={{ background: "var(--ink)", color: "var(--bg)", borderColor: "var(--ink)" }}>
                          {s.number} · {s.tag.toUpperCase()}
                        </span>
                        <h3 className="h2" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)", marginTop: "1.5rem" }}>
                          {s.title}
                        </h3>
                        <p className="body" style={{ marginTop: "1rem", color: "var(--ink-2)" }}>
                          {s.short}
                        </p>
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}>
                        <span style={{
                          width: 48, height: 48, borderRadius: "50%",
                          background: "var(--ink)", color: "var(--bg)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          transition: "transform 0.3s",
                        }} className="service-arrow"><ArrowUpRight/></span>
                      </div>
                    </div>
                  </Tilt>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How they combine */}
      <section className="section bg-cream">
        <div className="wrap">
          <FadeUp>
            <span className="eyebrow text-accent">Stackable services</span>
            <h2 className="h2" style={{ marginTop: "1rem", maxWidth: 1000 }}>
              Combine services into an <span className="highlight-purple">HR operating system</span>.
            </h2>
          </FadeUp>

          <div className="services-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "3.5rem" }}>
            {[
              { t: "Scale-up package", s: "Talent + HR Consulting + Tech for companies in hyper-growth mode." },
              { t: "Compliance shield",s: "Payroll + Compliance + Managed HR for regulated industries." },
              { t: "People transformation", s: "L&D + Consulting + Tech for culture and capability overhauls." },
            ].map((x, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="card-outline" style={{ background: "var(--bg-card)" }}>
                  <h3 className="h4" style={{ fontSize: "1.35rem" }}>{x.t}</h3>
                  <p className="body text-dim" style={{ marginTop: "0.75rem" }}>{x.s}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ink rounded-top">
        <div className="wrap" style={{ textAlign: "center" }}>
          <FadeUp>
            <h2 className="display" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", maxWidth: 1100, marginInline: "auto" }}>
              Ready to <span style={{ color: "var(--accent)" }}>simplify</span> your HR?
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "3rem", flexWrap: "wrap" }}>
              <Magnetic><Link href="/contact" className="btn btn-primary">
                Start a conversation <span className="btn-icon"><ArrowUpRight/></span>
              </Link></Magnetic>
              <Magnetic><Link href="/sectors" className="btn btn-outline">
                Explore sectors <span className="btn-icon"><ArrowRightIcon/></span>
              </Link></Magnetic>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
