import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceBlade({ service, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="border-t border-white/10 group"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full py-8 md:py-10 flex items-center justify-between gap-6 text-left hover:pl-4 transition-all duration-500 group"
      >
        <div className="flex items-center gap-6 md:gap-10 flex-1">
          <span className="font-mono text-xs text-white/30 hidden md:block">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-indigo-400 transition-colors">
            {service.title}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-white/30 hidden lg:block">
            {service.tag}
          </span>
          <motion.div
            animate={{ rotate: expanded ? 45 : 0 }}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-900/30 transition-all"
          >
            <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-indigo-400 transition-colors -rotate-45" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 pb-10">
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-body text-white/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-3 text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span className="font-body text-sm text-slate-700">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
