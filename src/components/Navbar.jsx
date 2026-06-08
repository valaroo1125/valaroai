import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../lib/LanguageContext";

const LOGO = "https://media.base44.com/images/public/69dd27f9e151e6db6895b36c/1d147d0e9_ChatGPTImageMay7202609_08_48PM.png";
const languages = [
  { code: "ro", label: "România" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
];

function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <button onClick={() => setOpen(!open)}
        style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)", fontSize: "0.875rem", background: "none", border: "none", cursor: "pointer", padding: "0.5rem 0.75rem" }}>
        <Globe style={{ width: 16, height: 16 }} />
        <span>{selected.label}</span>
        <ChevronDown style={{ width: 14, height: 14, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}
            style={{ position: "absolute", right: 0, top: "100%", marginTop: 8, background: "#000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, overflow: "hidden", zIndex: 50, minWidth: 140 }}>
            {languages.map((l) => (
              <button key={l.code} onClick={() => { setLang(l.code); setOpen(false); }}
                style={{ width: "100%", textAlign: "left", padding: "0.625rem 1rem", fontFamily: "var(--font-body)", fontSize: "0.875rem", background: selected.code === l.code ? "rgba(255,255,255,0.1)" : "none", color: selected.code === l.code ? "#fff" : "rgba(255,255,255,0.6)", border: "none", cursor: "pointer" }}>
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLang();

  const navLinks = [
    { labelKey: "nav_services", href: "/services" },
    { labelKey: "nav_about", href: "#despre-noi" },
    { labelKey: "nav_contact", href: "/contact" },
  ];

  const scrollTo = (href) => {
    setMenuOpen(false);
    if (href.startsWith("/")) { navigate(href); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "transparent" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
          <button onClick={() => scrollTo("#hero")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
            <img src={LOGO} alt="Valaro Logo" style={{ height: 56, width: "auto", mixBlendMode: "screen" }} />
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <button key={link.labelKey} onClick={() => scrollTo(link.href)}
                style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }}>
                {t[link.labelKey]}
              </button>
            ))}
            <LanguageSwitcher />
          </div>
          <button onClick={() => setMenuOpen(true)} className="show-mobile" style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 8 }}>
            <Menu style={{ width: 24, height: 24 }} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ duration: 0.3 }}
            style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", flexDirection: "column", background: "#000" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem", height: 80, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <img src={LOGO} alt="Logo" style={{ height: 48, width: "auto", mixBlendMode: "screen" }} />
              <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 8 }}>
                <X style={{ width: 24, height: 24 }} />
              </button>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 2rem", gap: "1.5rem" }}>
              {navLinks.map((link, i) => (
                <motion.button key={link.labelKey} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  style={{ textAlign: "left", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.875rem", color: "#fff", background: "none", border: "none", cursor: "pointer" }}>
                  {t[link.labelKey]}
                </motion.button>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ marginTop: "1rem" }}>
                <LanguageSwitcher />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
