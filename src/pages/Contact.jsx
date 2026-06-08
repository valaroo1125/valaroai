import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../lib/LanguageContext";

const LOGO = "https://media.base44.com/images/public/69dd27f9e151e6db6895b36c/1d147d0e9_ChatGPTImageMay7202609_08_48PM.png";

export default function ContactPage() {
  const { t } = useLang();
  const inquiryTypes = [
    t.sv1_title, t.sv2_title, t.sv3_title, t.sv4_title, t.sv5_title,
    t.sv6_title, t.sv7_title, t.sv8_title, t.sv9_title, t.sv10_title, t.sv11_title,
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const prefilledService = urlParams.get("service") || "";

  const [form, setForm] = useState({
    inquiryType: prefilledService,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    business: "",
    message: prefilledService ? `Serviciu solicitat: ${prefilledService}` : "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const text = `Cerere automatizare Valaro%0A%0ATip cerere: ${encodeURIComponent(form.inquiryType)}%0ANume: ${encodeURIComponent(form.firstName + " " + form.lastName)}%0ATelefon: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0ABusiness: ${encodeURIComponent(form.business)}%0AMesaj: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/40729331789?text=${text}`, "_blank");
    setLoading(false);
    setSubmitted(true);
  };

  const canSubmit = form.firstName.trim() && form.email.trim() && form.inquiryType;

  if (submitted) {
    return (
      <div style={{ background: "#000", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "0 1.5rem" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
            <ArrowRight style={{ width: 32, height: 32, color: "#34d399" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "#fff", fontSize: "1.875rem", marginBottom: "1rem" }}>Cerere trimisă!</h2>
          <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.5)", marginBottom: "2rem" }}>Îți răspundem în maximum 2 ore pe WhatsApp.</p>
          <Link to="/" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#34d399", textDecoration: "none" }}>← Înapoi la pagina principală</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={LOGO} alt="Valaro" style={{ height: 48, width: "auto", mixBlendMode: "screen" }} />
        </Link>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
          <ArrowLeft style={{ width: 16, height: 16 }} /> {t.cp_back_label}
        </Link>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "#fff", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "3rem" }}>
            {t.cp_title} {t.cp_title2}
          </h1>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <div>
              <label style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", display: "block", marginBottom: "0.75rem" }}>
                {t.cp_inquiry_type} *
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={form.inquiryType}
                  onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                  required
                  style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontFamily: "var(--font-body)", padding: "1rem 1.25rem", appearance: "none", outline: "none", borderRadius: 0 }}
                >
                  <option value="" disabled style={{ background: "#000" }}>{t.cp_select}</option>
                  {inquiryTypes.map((opt) => (
                    <option key={opt} value={opt} style={{ background: "#000" }}>{opt}</option>
                  ))}
                </select>
                <ChevronDown style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, color: "rgba(255,255,255,0.4)", pointerEvents: "none" }} />
              </div>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "#fff", fontSize: "1.5rem", marginBottom: "2rem" }}>{t.cp_about}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                  <div>
                    <label style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", display: "block", marginBottom: "0.75rem" }}>{t.cp_firstname} *</label>
                    <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required
                      style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontFamily: "var(--font-body)", padding: "1rem 1.25rem", outline: "none", borderRadius: 0, boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", display: "block", marginBottom: "0.75rem" }}>{t.cp_lastname}</label>
                    <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontFamily: "var(--font-body)", padding: "1rem 1.25rem", outline: "none", borderRadius: 0, boxSizing: "border-box" }} />
                  </div>
                </div>
                {[
                  { label: t.cp_email + " *", key: "email", type: "email", required: true },
                  { label: t.cp_phone, key: "phone", type: "tel", required: false },
                  { label: t.cp_business, key: "business", type: "text", required: false },
                ].map(({ label, key, type, required }) => (
                  <div key={key}>
                    <label style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", display: "block", marginBottom: "0.75rem" }}>{label}</label>
                    <input type={type} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} required={required}
                      style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontFamily: "var(--font-body)", padding: "1rem 1.25rem", outline: "none", borderRadius: 0, boxSizing: "border-box" }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", display: "block", marginBottom: "0.75rem" }}>{t.cp_message}</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5}
                    style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontFamily: "var(--font-body)", padding: "1rem 1.25rem", outline: "none", borderRadius: 0, resize: "none", boxSizing: "border-box" }} />
                </div>
              </div>
            </div>

            <div style={{ paddingTop: "1rem" }}>
              <button type="submit" disabled={!canSubmit || loading}
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontFamily: "var(--font-display)", fontWeight: 700, color: canSubmit ? "#fff" : "rgba(255,255,255,0.4)", fontSize: "1.125rem", background: "none", border: "none", cursor: canSubmit ? "pointer" : "not-allowed", padding: 0 }}>
                {loading ? "Se trimite..." : t.cp_submit}
                <ArrowRight style={{ width: 20, height: 20 }} />
              </button>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", marginTop: "1rem" }}>{t.cp_note}</p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
