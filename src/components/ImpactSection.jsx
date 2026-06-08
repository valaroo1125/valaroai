import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const IMPACT_BG = "https://media.base44.com/images/public/69dd27f9e151e6db6895b36c/2a56ae50d_generated_eea4528c.png";

const stats = [
  { value: "+400%", label: "Efficiency Increase", desc: "Average workflow improvement across client operations" },
  { value: "85%", label: "Cost Reduction", desc: "In manual processing time through AI automation" },
  { value: "24/7", label: "Always Online", desc: "Autonomous systems working while your team rests" },
  { value: "3x", label: "Faster Growth", desc: "Revenue acceleration with intelligent lead systems" },
];

function AnimatedStat({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative p-8 md:p-10 group"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-indigo-400/30 transition-all duration-500" />
      <div className="relative">
        <span
          className="font-display font-black text-white block leading-none mb-3"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.04em" }}
        >
          {stat.value}
        </span>
        <span className="font-display font-semibold text-indigo-300 text-sm uppercase tracking-wider block mb-2">
          {stat.label}
        </span>
        <p className="font-body text-white/60 text-sm leading-relaxed">
          {stat.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMPACT_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/85" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="font-mono text-xs tracking-widest text-indigo-300 uppercase">
              Impact Journal
            </span>
          </div>
          <h2
            className="font-display font-black text-white max-w-3xl leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
          >
            Real results. <span className="text-indigo-400">Proven impact.</span>
          </h2>
          <p className="font-body text-white/60 mt-6 max-w-xl text-lg leading-relaxed">
            Every automation we build is measured by one standard: the tangible ROI it delivers to your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
