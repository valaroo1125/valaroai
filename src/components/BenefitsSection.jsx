import { motion } from "framer-motion";
import { useLang } from "../lib/LanguageContext";

const gridStyle = `
  @media (max-width: 768px) {
    .benefits-grid { grid-template-columns: 1fr !important; }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
`;

const cardGradients = [
  "linear-gradient(160deg, #e8f5e0 0%, #7bc67a 40%, #1a6b4a 100%)",
  "linear-gradient(160deg, #0d4f3c 0%, #1a8a6a 50%, #a8e6b0 100%)",
  "linear-gradient(160deg, #c8d840 0%, #6a9a20 50%, #3a6010 100%)",
  "linear-gradient(160deg, #8b1a2a 0%, #c0304a 50%, #e06080 100%)",
  "linear-gradient(160deg, #2a1a0a 0%, #8b5a2a 40%, #d4a060 70%, #e8c090 100%)",
  "linear-gradient(160deg, #6a0a8a 0%, #b040c0 50%, #e080e0 100%)",
];

export default function BenefitsSection() {
  const { t } = useLang();
  const benefits = [
    { number: "01", titleKey: "b1_title", descKey: "b1_desc" },
    { number: "02", titleKey: "b2_title", descKey: "b2_desc" },
    { number: "03", titleKey: "b3_title", descKey: "b3_desc" },
    { number: "04", titleKey: "b4_title", descKey: "b4_desc" },
    { number: "05", titleKey: "b5_title", descKey: "b5_desc" },
    { number: "06", titleKey: "b6_title", descKey: "b6_desc" },
  ];

  return (
    <section id="beneficii" style={{ paddingTop: "1rem", paddingBottom: "4rem", background: "#000" }}>
      <style>{gridStyle}</style>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="benefits-grid">
          {benefits.map((b, i) => (
            <motion.div key={b.number} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ position: "relative", overflow: "hidden", cursor: "default", display: "flex", flexDirection: "column", background: cardGradients[i], minHeight: 420, gridColumn: "span 1" }}>
              <div style={{ padding: "2rem", display: "flex", flexDirection: "column", height: "100%" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2rem", display: "block", color: i === 0 || i === 2 ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.6)" }}>
                  {t[b.titleKey]}
                </span>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1.4, color: i === 0 ? "#000" : "#fff", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}>
                  {t[b.descKey]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
