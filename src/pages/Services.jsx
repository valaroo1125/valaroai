import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "../lib/LanguageContext";

const LOGO = "https://media.base44.com/images/public/69dd27f9e151e6db6895b36c/1d147d0e9_ChatGPTImageMay7202609_08_48PM.png";
const serviceKeys = ["sv1","sv2","sv3","sv4","sv5","sv6","sv7","sv8","sv9","sv10","sv11"];

function ServiceRow({ index, title, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 0", cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flex: 1 }}>
        <span style={{ width: 10, height: 10, background: hovered ? "#34d399" : "rgba(255,255,255,0.2)", display: "inline-block", flexShrink: 0, transition: "background 0.3s" }} />
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)", color: hovered ? "#fff" : "rgba(255,255,255,0.35)", letterSpacing: "-0.02em", transition: "color 0.3s" }}>
          {title}
        </span>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            onClick={onSelect}
            style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem", padding: "0.625rem 1.25rem", background: "linear-gradient(135deg, #0d7a55, #34d399)", color: "#fff", border: "none", cursor: "pointer", flexShrink: 0, marginLeft: "1.5rem", whiteSpace: "nowrap" }}
          >
            Cere ofertă <ArrowRight style={{ width: 16, height: 16 }} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesPage() {
  const { t } = useLang();
  const navigate = useNavigate();

  const handleSelect = (title) => {
    navigate(`/contact?service=${encodeURIComponent(title)}`);
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={LOGO} alt="Valaro" style={{ height: 48, width: "auto", mixBlendMode: "screen" }} />
        </Link>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
          <ArrowLeft style={{ width: 16, height: 16 }} /> {t.cp_back_label}
        </Link>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2.5rem 1.5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", overflow: "hidden", minHeight: 220 }}>
          <div style={{ flex: "0 0 40%", minWidth: 200, minHeight: 200 }}>
            <img src="https://media.base44.com/images/public/69dd27f9e151e6db6895b36c/e0f587ba0_Image.jpg" alt="Automation"
              style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 200, maxHeight: 300 }} />
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "2rem", background: "#000" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.2, margin: 0 }}>
              Ce automatizam pentru tine.<br />
              <span style={{ fontWeight: 800 }}>Indiferent de tipul afacerii tale, avem automatizarea perfecta.</span>
            </h1>
          </div>
        </motion.div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem 5rem" }}>
        {serviceKeys.map((key, i) => (
          <ServiceRow key={key} index={i} title={t[`${key}_title`]} onSelect={() => handleSelect(t[`${key}_title`])} />
        ))}
      </div>
    </div>
  );
}
