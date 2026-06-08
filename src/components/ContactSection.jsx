import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLang } from "../lib/LanguageContext";

const sectionLinks = [
  { labelKey: "nav_services", href: "/services" },
  { labelKey: "nav_about", href: "#despre-noi" },
  { labelKey: "nav_contact", href: "/contact" },
];

function BigValaroText() {
  return (
    <div style={{ position: "relative", overflow: "hidden", width: "100%", height: 520, userSelect: "none", pointerEvents: "none" }} aria-hidden>
      <div style={{ position: "absolute", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(6rem, 20vw, 18rem)", letterSpacing: "-0.05em", lineHeight: 1, top: "50%", left: "55%", transform: "translate(-50%, -50%) rotate(-90deg)", whiteSpace: "nowrap", background: "linear-gradient(180deg, #a8e6c3 0%, #0d7a55 50%, #052e20 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        VALARO
      </div>
    </div>
  );
}

export default function ContactSection() {
  const { t } = useLang();
  const navigate = useNavigate();

  const handleLink = (href) => {
    if (href.startsWith("/")) { navigate(href); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const tagline = t.contact_tagline.split("\n");

  return (
    <section id="contact" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6rem 0", background: "#000" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 1.5rem", width: "100%", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start", marginBottom: "5rem" }}>
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "4rem", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              {tagline[0]}<br />{tagline[1]}
            </p>
            <nav style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem 3rem" }}>
              {sectionLinks.map((link) => (
                <button key={link.labelKey} onClick={() => handleLink(link.href)}
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  {t[link.labelKey]}
                </button>
              ))}
            </nav>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
            <BigValaroText />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} Valaro. {t.footer_rights}</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>{t.footer_privacy}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>{t.footer_terms}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
