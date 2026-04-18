import Link from "next/link";
import { ArrowRightIcon } from "@/components/decor";

export default function NotFound() {
  return (
    <section style={{ minHeight: "80vh", display: "flex", alignItems: "center", padding: "6rem 0" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div style={{ fontSize: "clamp(6rem, 20vw, 18rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.9 }}>
          <span style={{ color: "var(--accent)" }}>4</span>0<span style={{ color: "var(--accent)" }}>4</span>
        </div>
        <h1 className="h2" style={{ marginBottom: "1rem" }}>Page not found</h1>
        <p className="body-lg text-dim" style={{ maxWidth: 480, margin: "0 auto 2.5rem" }}>
          The page you're looking for doesn't exist. Head back home.
        </p>
        <Link href="/" className="btn btn-primary">
          Back home <span className="btn-icon"><ArrowRightIcon size={14}/></span>
        </Link>
      </div>
    </section>
  );
}
