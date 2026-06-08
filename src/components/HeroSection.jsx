import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import { useNavigate } from "react-router-dom";

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    let animId;
    const particles = Array.from({ length: 180 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2
    }));
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(52,168,120,${(1 - dist / 120) * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,210,160,${p.alpha})`; ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />;
}

export default function HeroSection() {
  const { t } = useLang();
  const navigate = useNavigate();
  const scrollTo = (id) => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#000" }}>
      <ParticleCanvas />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "33%", left: "33%", width: 600, height: 400, background: "rgba(6,95,70,0.15)", borderRadius: "50%", filter: "blur(150px)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1400, margin: "0 auto", padding: "8rem 1.5rem 5rem", textAlign: "center" }}>
        <div style={{ marginBottom: "2.5rem", overflow: "hidden" }}>
          <motion.div initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "#fff", display: "block", lineHeight: 1, fontSize: "clamp(3.5rem, 10vw, 8rem)", letterSpacing: "-0.03em" }}>VALARO</span>
          </motion.div>
        </div>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)", fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 672, marginLeft: "auto", marginRight: "auto" }}>
          {t.hero_desc}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "center", marginBottom: "5rem" }}>
          <button onClick={() => navigate("/services")}
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", padding: "1rem 2.5rem", background: "none", cursor: "pointer", borderRadius: 0 }}>
            {t.hero_cta2}
          </button>
        </motion.div>
      </div>
      <motion.button onClick={() => scrollTo("#beneficii")} initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ opacity: { delay: 2 }, y: { repeat: Infinity, duration: 2 } }}
        style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.25)", zIndex: 10, background: "none", border: "none", cursor: "pointer" }}>
        <ChevronDown style={{ width: 24, height: 24 }} />
      </motion.button>
    </section>
  );
}
