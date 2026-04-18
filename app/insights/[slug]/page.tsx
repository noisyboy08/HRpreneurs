import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/insights";
import { ArrowUpRight, ArrowRightIcon, Flower, Star, BlobShape } from "@/components/decor";
import {
  FadeUp, Stagger, StaggerItem, RevealText, LetterDrop,
  Floaty, Magnetic, ParallaxY,
} from "@/components/motion";

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

const bgMap: Record<string, string> = {
  mint: "var(--mint)", sun: "var(--sun)", coral: "var(--coral)",
  purple: "var(--purple)", sand: "var(--sand)", cream: "var(--cream)",
};

export default async function ArticlePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) return notFound();

  const idx = articles.findIndex(a => a.slug === slug);
  const next = articles[(idx + 1) % articles.length];
  const related = articles.filter(a => a.slug !== article.slug).slice(0, 3);
  const heroBg = bgMap[article.bg];

  return (
    <>
      <section style={{
        background: heroBg, color: "var(--ink)",
        padding: "10rem 0 5rem", position: "relative", overflow: "hidden",
      }} className="rounded-bottom">
        <ParallaxY range={80} style={{ position: "absolute", top: "18%", right: "8%" }}>
          <Floaty><Flower size={90} color="var(--ink)" center={heroBg}/></Floaty>
        </ParallaxY>
        <ParallaxY range={-60} style={{ position: "absolute", bottom: "12%", left: "6%" }}>
          <Floaty rotate={-8}><Star size={44} color="var(--ink)"/></Floaty>
        </ParallaxY>
        <ParallaxY range={120} style={{ position: "absolute", top: "50%", left: "45%", opacity: 0.1 }}>
          <BlobShape size={220} color="var(--ink)"/>
        </ParallaxY>

        <div className="wrap" style={{ position: "relative", zIndex: 2, maxWidth: 960 }}>
          <FadeUp>
            <Link href="/insights" className="pill" style={{ background: "var(--ink)", color: heroBg, borderColor: "var(--ink)" }}>
              <span style={{ fontWeight: 700 }}>← All Insights</span>
            </Link>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <span className="pill" style={{ background: "var(--bg-card)", color: "var(--ink)", borderColor: "var(--ink)" }}>
                {article.tag}
              </span>
              <span className="pill-ghost" style={{ borderColor: "var(--ink)", color: "var(--ink)" }}>
                {article.date}
              </span>
              <span className="pill-ghost" style={{ borderColor: "var(--ink)", color: "var(--ink)" }}>
                {article.read} read
              </span>
            </div>
          </FadeUp>

          <h1 className="display" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", marginTop: "2rem" }}>
            <LetterDrop text={article.title}/>
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "3rem" }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%",
              background: "var(--ink)", color: heroBg,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, border: "2px solid var(--ink)",
            }}>{article.author.split(" ").map(s => s[0]).join("")}</div>
            <div>
              <div style={{ fontWeight: 700 }}>{article.author}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--ink-2)" }}>Published {article.date}</div>
            </div>
          </div>
        </div>
      </section>

      <article className="section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <FadeUp>
            <p className="body-xl" style={{ fontWeight: 500 }}>{article.excerpt}</p>
          </FadeUp>
          <div style={{ marginTop: "2.5rem" }}>
            {article.body.map((p, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <p className="body-lg text-dim" style={{ marginBottom: "1.75rem" }}>{p}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div style={{
              marginTop: "4rem", padding: "2rem",
              background: "var(--bg-card)",
              borderRadius: "var(--radius)",
              border: "1.5px solid var(--border-strong)",
            }}>
              <p className="eyebrow text-accent">Share this article</p>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem", flexWrap: "wrap" }}>
                {["LinkedIn", "Twitter", "Copy Link"].map(s => (
                  <button key={s} className="pill gooey">{s}</button>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </article>

      <section className="section bg-cream">
        <div className="wrap">
          <FadeUp>
            <span className="eyebrow text-accent">Related reads</span>
            <h2 className="h2" style={{ marginTop: "1rem" }}>Continue your journey.</h2>
          </FadeUp>
          <Stagger className="grid-3" style={{ marginTop: "3rem" }}>
            {related.map(a => (
              <StaggerItem key={a.slug}>
                <Link href={`/insights/${a.slug}`}>
                  <div className="card card-hover" style={{ background: "var(--bg-card)", minHeight: 260, border: "1.5px solid var(--border)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <span className="pill" style={{
                        background: bgMap[a.bg], borderColor: "var(--ink)", color: "var(--ink)",
                        fontSize: "0.7rem",
                      }}>{a.tag}</span>
                      <h3 className="h4" style={{ fontSize: "1.25rem", marginTop: "1rem" }}>{a.title}</h3>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem" }}>
                      <span style={{ fontSize: "0.8rem", color: "var(--fg-3)" }}>{a.date} · {a.read}</span>
                      <span style={{
                        width: 36, height: 36, borderRadius: "50%",
                        background: "var(--fg)", color: "var(--bg)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}><ArrowUpRight/></span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-sm bg-ink rounded-top">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <span className="eyebrow" style={{ color: "var(--accent)" }}>Next article</span>
              <Link href={`/insights/${next.slug}`}>
                <h3 className="h2" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", marginTop: "0.5rem" }}>
                  {next.title} <span style={{ color: "var(--accent)" }}>→</span>
                </h3>
              </Link>
            </div>
            <Magnetic>
              <Link href={`/insights/${next.slug}`} className="btn btn-purple">
                Read next <span className="btn-icon"><ArrowUpRight/></span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  );
}
