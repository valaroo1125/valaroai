import { useLang } from "../lib/LanguageContext";

export default function TrustSection() {
  const { t } = useLang();

  return (
    <section id="despre-noi" style={{ padding: "7rem 0", background: "#000" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "2rem", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              {t.trust_title}{" "}
              <span style={{ background: "linear-gradient(to right, #a8e6c3, #0d7a55)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{t.trust_title2}</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.5)", fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {t.trust_p1}{" "}<strong style={{ color: "rgba(255,255,255,0.8)" }}>{t.trust_p1b}</strong>{" "}{t.trust_p1c}
            </p>
            <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {t.trust_p2}{" "}<strong style={{ color: "rgba(255,255,255,0.8)" }}>{t.trust_p2b}</strong>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="https://media.base44.com/images/public/69dd27f9e151e6db6895b36c/f915acfb8_Image.jpg" alt="AI Automation"
              style={{ width: "100%", borderRadius: 8, objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
