import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Start",
    price: "200 – 400",
    tagline: "Perfect pentru un prim pas în automatizare",
    badge: null,
    features: [
      "1 flux de automatizare AI",
      "Răspunsuri automate email sau WhatsApp",
      "Implementare în 3–5 zile",
      "Suport tehnic inclus",
      "Raport lunar de performanță",
    ],
    cta: "Vreau pachetul Start",
    color: "from-emerald-400 to-teal-600",
    border: "border-white/10",
    featured: false,
  },
  {
    name: "Business",
    price: "400 – 800",
    tagline: "Cel mai ales — automatizare completă",
    badge: "Cel mai popular",
    features: [
      "3 fluxuri de automatizare AI",
      "Email + WhatsApp + programări automate",
      "Calificarea lead-urilor cu AI",
      "Integrare CRM sau Google Calendar",
      "Follow-up automatizat clienți",
      "Implementare în 5–7 zile",
    ],
    cta: "Vreau pachetul Business",
    color: "from-emerald-400 to-teal-600",
    border: "border-emerald-400/40",
    featured: true,
  },
  {
    name: "Premium",
    price: "800 – 1500",
    tagline: "Automatizare totală a business-ului tău",
    badge: "Cel mai complet",
    features: [
      "Fluxuri nelimitate de automatizare",
      "AI pe toate canalele de comunicare",
      "Nurturing & conversie lead-uri automat",
      "Integrare avansată cu orice platformă",
      "Suport prioritar 60 de zile",
      "Implementare în 7–14 zile",
    ],
    cta: "Vreau pachetul Premium",
    color: "from-teal-400 to-emerald-700",
    border: "border-teal-400/30",
    featured: false,
  },
];

export default function PricingSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pachete" className="py-28 md:py-36" style={{ background: "#000" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="font-display font-black text-white leading-none mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Investiție clară,{" "}
            <span className="bg-gradient-to-r from-[#a8e6c3] to-[#0d7a55] bg-clip-text text-transparent">
              rezultate garantate
            </span>
          </h2>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">
            Alege pachetul potrivit pentru afacerea ta. Fără surprize, fără costuri ascunse.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border ${plan.border} overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  plan.featured
                    ? "bg-gradient-to-b from-white/8 to-white/3 shadow-2xl shadow-emerald-500/10 scale-105"
                    : "bg-white/3 hover:border-white/20"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a8e6c3] to-[#0d7a55]" />
                )}
                {plan.badge && (
                  <div className="absolute top-4 right-6">
                    <span className="bg-gradient-to-r from-[#a8e6c3] to-[#0d7a55] text-black font-mono text-xs font-bold px-4 py-1.5 rounded-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black" />
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-8">
                    <span className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-2">Pachet</span>
                    <h3 className="font-display font-black text-white text-2xl mb-2">{plan.name}</h3>
                    <p className="font-body text-white/40 text-sm mb-6">{plan.tagline}</p>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-display font-black text-4xl bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}€
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-white/70 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.featured ? "text-emerald-400" : "text-white/40"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className={`w-full font-display font-bold text-sm py-4 rounded-lg flex items-center justify-center gap-2 group transition-all duration-300 ${
                      plan.featured
                        ? "bg-gradient-to-r from-[#a8e6c3] to-[#0d7a55] text-black hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
                        : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center font-body text-white/30 text-sm mt-10"
        >
          Nu ești sigur ce pachet se potrivește?{" "}
          <button onClick={() => scrollTo("#contact")} className="text-emerald-400 hover:underline">
            Contactează-ne gratuit
          </button>{" "}
          și te ajutăm să alegi.
        </motion.p>
      </div>
    </section>
  );
}
