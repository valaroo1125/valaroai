import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/69dd27f9e151e6db6895b36c/1d147d0e9_ChatGPTImageMay7202609_08_48PM.png";

const links = [
  { label: "Servicii", href: "#servicii" },
  { label: "Pachete & Prețuri", href: "#pachete" },
  { label: "Cum funcționează", href: "#cum-functioneaza" },
  { label: "Despre noi", href: "#despre-noi" },
  { label: "Contact", href: "#contact" },
];

export default function FooterSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/8 pt-20 pb-10" style={{ background: "#000" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={LOGO} alt="Valaro" className="h-14 w-auto" style={{ mixBlendMode: "screen" }} />
              <span className="font-display font-bold text-white text-lg">
                <span className="bg-gradient-to-r from-[#a8e6c3] to-[#0d7a55] bg-clip-text text-transparent">Valaro</span>
              </span>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-6">
              Automatizări AI pentru antreprenori și business-uri care vor să crească fără să muncească mai mult.
            </p>
            <a
              href="https://wa.me/40768917999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 font-display font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-green-500/20 transition-all"
            >
              WhatsApp: 0768 917 999
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold text-white/80 text-sm uppercase tracking-wider mb-6">
              Navigare
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-white/40 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white/80 text-sm uppercase tracking-wider mb-6">
              Începe acum
            </h4>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-5">
              Ești gata să automatizezi? Contactează-ne și îți facem o analiză gratuită.
            </p>
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-gradient-to-r from-[#a8e6c3] to-[#0d7a55] text-black font-display font-semibold text-sm px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 flex items-center gap-2 group w-fit"
            >
              Cere consultație gratuită
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-white/20">
            © {new Date().getFullYear()} Valaro. Toate drepturile rezervate.
          </span>
          <div className="flex gap-6">
            <span className="font-mono text-xs text-white/20">Politică de confidențialitate</span>
            <span className="font-mono text-xs text-white/20">Termeni și condiții</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mt-16 text-center"
        >
          <span
            className="font-display font-black text-white/[0.02] select-none block leading-none"
            style={{ fontSize: "clamp(3rem, 12vw, 9rem)", letterSpacing: "-0.04em" }}
          >
            VALARO
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
