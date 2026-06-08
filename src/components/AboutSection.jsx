import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ABOUT_IMG = "https://media.base44.com/images/public/69dd27f9e151e6db6895b36c/362b45aa5_generated_ba806478.png";

const pillars = [
  { number: "01", title: "Precision", desc: "Every solution is engineered with surgical accuracy for your specific business model." },
  { number: "02", title: "Scale", desc: "Built to grow with you — from startup operations to enterprise-grade infrastructure." },
  { number: "03", title: "Speed", desc: "Rapid deployment cycles that get your AI systems live in weeks, not months." },
];

export default function AboutSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="font-mono text-xs tracking-widest text-indigo-300 uppercase">
                About Us
              </span>
            </div>
            <h2
              className="font-display font-black text-white leading-none mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}
            >
              We architect the{" "}
              <span className="text-indigo-500">cognitive infrastructure</span>{" "}
              of tomorrow
            </h2>
            <p className="font-body text-white/60 text-lg leading-relaxed mb-10">
              AutoBot Innovations is an AI automation agency that builds intelligent systems
              for businesses ready to scale. We combine deep technical expertise with strategic
              thinking to deliver automation that doesn't just work — it transforms.
            </p>

            <div className="space-y-8 mb-10">
              {pillars.map((p) => (
                <div key={p.number} className="flex gap-6 group">
                  <span className="font-mono text-xs text-indigo-500 mt-1">{p.number}</span>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white mb-1">{p.title}</h4>
                    <p className="font-body text-white/50 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#contact")}
              className="bg-indigo-600 text-white font-display font-semibold text-sm px-8 py-4 rounded-full hover:bg-indigo-500 transition-all duration-300 flex items-center gap-3 group"
            >
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={ABOUT_IMG}
                alt="AI neural pathways visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-slate-800 rounded-xl shadow-xl p-6 border border-white/10">
              <div className="font-display font-black text-3xl text-indigo-500 mb-1">100+</div>
              <div className="font-body text-sm text-white/50">Automations Deployed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
