import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../lib/LanguageContext";

export default function ServicesButton() {
  const navigate = useNavigate();
  const { t } = useLang();

  return (
    <section style={{ padding: "4rem 0", background: "#000" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "center" }}>
        <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          onClick={() => navigate("/services")}
          style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.25rem, 3vw, 1.875rem)", background: "none", border: "none", cursor: "pointer" }}>
          {t.services_btn || "Ce Automatizăm Pentru Tine"}
          <ArrowRight style={{ width: 20, height: 20, color: "#34d399" }} />
        </motion.button>
      </div>
    </section>
  );
}
