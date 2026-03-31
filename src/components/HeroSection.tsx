import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Download, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-gold/5" />
      </div>

      {/* Scan line overlay */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? "hsl(43 74% 52% / 0.4)" : "hsl(185 100% 50% / 0.3)",
              animation: `float-particle ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm text-gold/70 mb-4 tracking-[0.3em] uppercase">
            // initializing_portfolio...
          </p>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-primary text-glow mb-4 leading-tight">
            SOFIANE TOUIL
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto mb-6" />
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { label: "Infrastructure", color: "primary" },
              { label: "Automatisation", color: "primary" },
              { label: "Intelligence Artificielle", color: "gold" },
            ].map((tag) => (
              <span
                key={tag.label}
                className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider border rounded-sm ${
                  tag.color === "gold"
                    ? "border-gold/40 text-gold bg-gold/5"
                    : "border-primary/40 text-primary bg-primary/5"
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <p className="font-rajdhani text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Étudiant en BTS SIO option SISR, passionné par l'intelligence artificielle,
            les infrastructures informatiques et l'automatisation des systèmes.
          </p>
          {/* Social links */}
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="mailto:sofianetouil50@gmail.com"
              className="p-2 border border-primary/30 text-primary/70 hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 rounded-sm"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sofiane-touil-63b467200/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-primary/30 text-primary/70 hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 rounded-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary/50 text-primary font-mono text-sm uppercase tracking-wider hover:bg-primary/10 transition-all duration-300 box-glow"
          >
            Explorer →
          </a>
          <a
            href="/docs/Tableau_Synthese_TOUIL_SOFIANE.xlsx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold/10 border border-gold/50 text-gold font-mono text-sm uppercase tracking-wider hover:bg-gold/20 transition-all duration-300 box-glow-gold"
          >
            <Download size={14} />
            Tableau de Synthèse (Annexe VI.5)
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
