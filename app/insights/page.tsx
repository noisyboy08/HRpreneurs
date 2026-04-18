import Link from "next/link";
import { articles } from "@/lib/insights";
import { ArrowUpRight, ArrowRightIcon, Flower, Star, BlobShape } from "@/components/decor";
import {
  FadeUp, Stagger, StaggerItem, RevealText, LetterDrop,
  Floaty, Magnetic, Tilt, ParallaxY,
} from "@/components/motion";

const bgMap: Record<string, string> = {
  mint: "var(--mint)", sun: "var(--sun)", coral: "var(--coral)",
  purple: "var(--purple)", sand: "var(--sand)", cream: "var(--cream)",
};

export default function InsightsPage() {
  const featured = articles.find(a => a.featured) || articles[0];
  const rest = articles.filter(a => a.slug !== featured.slug);

  return (
    <>
      <section style={{ position: "relative", paddingTop: "9rem", paddingBottom: "5rem", overflow: "hidden" }}>
        <ParallaxY range={100} style={{ position: "absolute", top: "20%", right: "10%" }}>
          <Floaty rotate={8}><Star color="var(--accent)" size={56} /></Floaty>
        </ParallaxY>
        <ParallaxY range={-70} style={{ position: "absolute", bottom: "15%", left: "6%" }}>
          <Floaty rotate={-10}><Flower color="var(--sun)" center="var(--ink)" size={68} /></Floaty>
        </ParallaxY>
        <ParallaxY range={140} style={{ position: "absolute", top: "40%", left: "50%", opacity: 0.1 }}>
          <BlobShape color="var(--accent)" size={240}/>
        </ParallaxY>

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <FadeUp>
            <span className="pill" style={{ background: "var(--bg-card)" }}>
              <span className="dot"/> HR Insights
            </span>
          </FadeUp>
          <h1 className="display" style={{ marginTop: "2rem", maxWidth: 1200 }}>
            <LetterDrop text="Ideas, "/>
            <span className="highlight-purple"><LetterDrop text="research," delay={0.3}/></span>
            <br/><LetterDrop text="and field-notes" delay={0.6}/>
            <br/><em style={{ fontStyle: "italic", fontWeight: 400 }}>from the HR frontlines.</em>
          </h1>
          <div style={{ maxWidth: 720, marginTop: "2.5rem" }}>
            <RevealText as="p" text="Original writing, research reports, compliance breakdowns and leadership essays — curated for operators who build people-first organisations." className="body-xl" delay={0.3}/>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="section-sm">
        <div className="wrap">
          <Link href={`/insights/${featured.slug}`}>
            <Tilt max={4}>
              <div style={{
                background: bgMap[featured.bg], color: "var(--ink)",
                borderRadius: "var(--radius-lg)",
                padding: "clamp(2.5rem, 5vw, 5rem)",
                border: "1.5px solid var(--ink)",
                position: "relative", overflow: "hidden",
                minHeight: 460,
              }}>
                <span className="pill" style={{ background: "var(--ink)", color: "var(--bg)", borderColor: "var(--ink)" }}>
                  Featured · {featured.tag}
                </span>
                <h2 className="h1" style={{ marginTop: "2rem", maxWidth: 900, fontSize: "clamp(2rem, 6vw, 5rem)" }}>
                  {featured.title}
                </h2>
                <p className="body-xl" style={{ marginTop: "1.5rem", maxWidth: 720, color: "var(--ink-2)" }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "3rem", flexWrap: "wrap", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: "var(--ink)", color: bgMap[featured.bg],
                      display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.8rem",
                    }}>{featured.author.split(" ").map(s => s[0]).join("")}</div>
                    <div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 700 }}>{featured.author}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--ink-2)" }}>{featured.date} · {featured.read} read</div>
                    </div>
                  </div>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: "var(--ink)", color: bgMap[featured.bg],
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}><ArrowUpRight size={18}/></div>
                </div>
              </div>
            </Tilt>
          </Link>
        </div>
      </section>

      {/* Latest articles */}
      <section className="section">
        <div className="wrap">
          <FadeUp>
            <span className="eyebrow text-accent">Latest articles</span>
            <h2 className="h2" style={{ marginTop: "1rem" }}>
              Recent writing from the <span className="highlight">HRpreneurs</span> team.
            </h2>
          </FadeUp>

          <Stagger className="grid-2" style={{ marginTop: "3rem" }}>
            {rest.map(a => (
              <StaggerItem key={a.slug}>
                <Link href={`/insights/${a.slug}`}>
                  <Tilt max={5}>
                    <div className="card card-hover" style={{
                      background: "var(--bg-card)",
                      border: "1.5px solid var(--border)",
                      padding: "2.5rem",
                      minHeight: 260,
                      display: "flex", flexDirection: "column", justifyContent: "space-between",
                    }}>
                      <div>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                          <span className="pill" style={{ background: bgMap[a.bg], borderColor: "var(--ink)", color: "var(--ink)", fontSize: "0.7rem" }}>
                            {a.tag}
                          </span>
                          <span style={{ fontSize: "0.75rem", color: "var(--fg-3)", alignSelf: "center" }}>
                            {a.date} · {a.read}
                          </span>
                        </div>
                        <h3 className="h3" style={{ fontSize: "clamp(1.25rem, 2vw, 1.65rem)", marginTop: "1.25rem" }}>
                          {a.title}
                        </h3>
                        <p className="body text-dim" style={{ marginTop: "0.75rem" }}>{a.excerpt}</p>
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem" }}>
                        <span style={{
                          width: 40, height: 40, borderRadius: "50%",
                          background: "var(--fg)", color: "var(--bg)",
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

      <section className="section bg-ink rounded-top rounded-bottom">
        <div className="wrap" style={{ textAlign: "center" }}>
          <FadeUp>
            <h2 className="display" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", maxWidth: 1000, marginInline: "auto" }}>
              Get our writing <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>first.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="body-xl" style={{ marginTop: "1.5rem", opacity: 0.8, maxWidth: 600, marginInline: "auto" }}>
              Subscribe to receive original HR research, compliance updates, and leadership essays directly in your inbox.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <form style={{ marginTop: "3rem", display: "flex", gap: "0.75rem", maxWidth: 560, marginInline: "auto", flexWrap: "wrap", justifyContent: "center" }}>
              <input type="email" placeholder="you@company.com" style={{
                flex: "1 1 280px",
                padding: "1rem 1.5rem", borderRadius: 9999,
                background: "color-mix(in srgb, var(--on-ink) 8%, transparent)",
                border: "1.5px solid var(--border-strong)",
                color: "var(--on-ink)", fontSize: "1rem",
              }}/>
              <Magnetic><button type="submit" className="btn btn-purple">
                Subscribe <span className="btn-icon"><ArrowUpRight/></span>
              </button></Magnetic>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
