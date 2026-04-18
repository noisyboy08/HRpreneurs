import Link from "next/link";
import { sectors } from "@/lib/data";
import { ArrowUpRight, ArrowRightIcon, Flower, Star, BlobShape } from "@/components/decor";
import {
  FadeUp, Stagger, StaggerItem, RevealText, LetterDrop,
  Floaty, Magnetic, Tilt, ParallaxY, Counter,
} from "@/components/motion";

const bgMap: Record<string, string> = {
  mint: "var(--mint)", sun: "var(--sun)", coral: "var(--coral)",
  purple: "var(--purple)", sand: "var(--sand)", cream: "var(--cream)",
};

export default function SectorsPage() {
  return (
    <>
      <section className="bg-mint rounded-bottom" style={{
        padding: "10rem 0 6rem", position: "relative", overflow: "hidden",
      }}>
        <ParallaxY range={90} style={{ position: "absolute", top: "18%", right: "10%" }}>
          <Floaty><Star size={60} color="var(--ink)"/></Floaty>
        </ParallaxY>
        <ParallaxY range={120} style={{ position: "absolute", bottom: "10%", left: "6%", opacity: 0.15 }}>
          <BlobShape size={260} color="var(--ink)"/>
        </ParallaxY>
        <ParallaxY range={-60} style={{ position: "absolute", top: "60%", right: "38%" }}>
          <Floaty rotate={10}><Flower size={80} color="var(--ink)" center="var(--mint)"/></Floaty>
        </ParallaxY>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <span className="pill" style={{ background: "var(--ink)", color: "var(--mint)", borderColor: "var(--ink)" }}>
              Sectors We Serve
            </span>
          </FadeUp>
          <h1 className="display" style={{ marginTop: "2rem", maxWidth: 1300 }}>
            <LetterDrop text="Industry"/>
            <br/>
            <span className="highlight-purple"><LetterDrop text="expertise," delay={0.3}/></span>
            <br/>
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>deeply specialised.</em>
          </h1>
          <div style={{ maxWidth: 720, marginTop: "2.5rem" }}>
            <RevealText as="p" text="Twelve industries. Each with a dedicated pod, an accredited playbook, and a roster of domain-specialised practitioners." className="body-xl" delay={0.3}/>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-ink">
        <div className="wrap">
          <div className="grid-4" style={{ gap: "2rem" }}>
            {[
              { n: 12, s: "",  l: "Industry verticals" },
              { n: 500, s: "+", l: "Clients served" },
              { n: 18, s: "+",  l: "Years of depth" },
              { n: 25, s: "+",  l: "Cities of operation" },
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

      {/* Sectors grid */}
      <section className="section">
        <div className="wrap">
          <FadeUp>
            <span className="eyebrow text-accent">Twelve sectors</span>
            <h2 className="h2" style={{ marginTop: "1rem", maxWidth: 900 }}>
              Click any sector to see our <span className="highlight">dedicated offering</span>.
            </h2>
          </FadeUp>

          <Stagger className="grid-3" style={{ marginTop: "4rem" }}>
            {sectors.map(s => (
              <StaggerItem key={s.slug}>
                <Link href={`/sectors/${s.slug}`}>
                  <Tilt max={5}>
                    <div style={{
                      background: bgMap[s.bg],
                      color: "var(--ink)",
                      borderRadius: "var(--radius-lg)",
                      padding: "2rem",
                      border: "1.5px solid var(--ink)",
                      minHeight: 260,
                      display: "flex", flexDirection: "column", justifyContent: "space-between",
                      position: "relative",
                    }}>
                      <div style={{
                        position: "absolute", top: "1rem", right: "1rem",
                        width: 40, height: 40, borderRadius: "50%",
                        background: "var(--ink)", color: "var(--bg)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}><ArrowUpRight/></div>
                      <div style={{
                        width: 56, height: 56, borderRadius: "50%",
                        background: "var(--bg-card)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.75rem", border: "1.5px solid var(--ink)",
                      }}>{s.icon}</div>
                      <div>
                        <h3 className="h3" style={{ fontSize: "1.4rem" }}>{s.title}</h3>
                        <p className="body-sm text-dim" style={{ marginTop: "0.75rem", color: "var(--ink-2)" }}>{s.short}</p>
                      </div>
                    </div>
                  </Tilt>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-purple rounded-top">
        <div className="wrap" style={{ textAlign: "center" }}>
          <FadeUp>
            <h2 className="display" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", maxWidth: 1100, marginInline: "auto" }}>
              Don't see your <em style={{ fontStyle: "italic", fontWeight: 400 }}>sector?</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="body-xl" style={{ marginTop: "1.5rem", maxWidth: 700, marginInline: "auto" }}>
              Our playbook works across 35+ industries. Let's have a conversation about yours.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "3rem", flexWrap: "wrap" }}>
              <Magnetic><Link href="/contact" className="btn btn-primary">
                Start a conversation <span className="btn-icon"><ArrowUpRight/></span>
              </Link></Magnetic>
              <Magnetic><Link href="/services" className="btn btn-outline">
                Browse services <span className="btn-icon"><ArrowRightIcon/></span>
              </Link></Magnetic>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
