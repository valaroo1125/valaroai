import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function ServicesSection() {
  const { t } = useLang();
  const scrollTo = (id) => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  const services = [
    { tag: t.s1_tag, title: t.s1_title, desc: t.s1_desc, features: [t.s1_f1, t.s1_f2, t.s1_f3, t.s1_f4], color: "from-emerald-500 to-teal-700" },
    { tag: t.s2_tag, title: t.s2_title, desc: t.s2_desc, features: [t.s2_f1, t.s2_f2, t.s2_f3, t.s2_f4], color: "from-teal-600 to-emerald-800" },
    { tag: t.s3_tag, title: t.s3_title, desc: t.s3_desc, features: [t.s3_f1, t.s3_f2, t.s3_f3, t.s3_f4], color: "from-green-500 to-teal-700" },
  ];

  return (
    <section id="servicii" className="py-28 md:py-36" style={{ background: "#000" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <h2 className="font-display font-black text-white leading-none mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            {t.services_title}{" "}<span className="bg-gradient-to-r from-[#a8e6c3] to-[#0d7a55] bg-clip-text text-transparent">{t.services_title2}</span>
          </h2>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">{t.services_sub}</p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, x: i % 2 === 0 ? -70 : 70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative bg-white/3 rounded-2xl border border-white/8 overflow-hidden hover:border-emerald-400/20 transition-all duration-500 hover:-translate-y-2">
              <div className={`h-1 bg-gradient-to-r ${s.color}`} />
              <div className="p-8">
                <span className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-2">{s.tag}</span>
                <h3 className="font-display font-bold text-white text-xl mb-4">{s.title}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/60 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo("#contact")} className="w-full border border-white/15 text-white/70 font-display font-semibold text-sm py-3 rounded-lg hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group">
                  {t.services_cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
