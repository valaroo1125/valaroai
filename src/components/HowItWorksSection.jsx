import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function HowItWorksSection() {
  const { t } = useLang();
  const scrollTo = (id) => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  const steps = [
    { number: "01", titleKey: "step1_title", descKey: "step1_desc" },
    { number: "02", titleKey: "step2_title", descKey: "step2_desc" },
    { number: "03", titleKey: "step3_title", descKey: "step3_desc" },
  ];

  return (
    <section id="cum-functioneaza" className="py-28 md:py-36" style={{ background: "#000" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <h2 className="font-display font-black text-white leading-none mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            {t.how_title}{" "}<span className="bg-gradient-to-r from-[#a8e6c3] to-[#0d7a55] bg-clip-text text-transparent">{t.how_title2}</span>
          </h2>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">{t.how_sub}</p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, x: i % 2 === 0 ? -70 : 70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative text-center group p-8 rounded-2xl border border-white/8 bg-white/3 hover:border-emerald-400/20 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="font-display font-black text-emerald-400 text-xl">{step.number}</span>
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-4">{t[step.titleKey]}</h3>
              <p className="font-body text-white/50 text-sm leading-relaxed">{t[step.descKey]}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="text-center mt-16">
          <button onClick={() => scrollTo("#contact")} className="bg-gradient-to-r from-[#a8e6c3] to-[#0d7a55] text-black font-display font-bold text-base px-10 py-4 rounded-lg hover:shadow-xl hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group">
            {t.how_cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
