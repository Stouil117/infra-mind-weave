import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Scan line overlay */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm text-primary/70 mb-4 tracking-[0.3em] uppercase">
            // initializing_portfolio...
          </p>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-primary text-glow mb-6 leading-tight">
            SOFIANE TOUIL
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Infrastructure", "Automatisation", "Intelligence Artificielle"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider border border-primary/40 text-primary bg-primary/5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="font-rajdhani text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Étudiant en BTS SIO option SISR, passionné par l'intelligence artificielle,
            les infrastructures informatiques et l'automatisation des systèmes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary/50 text-primary font-mono text-sm uppercase tracking-wider hover:bg-primary/10 transition-all duration-300 box-glow"
          >
            Explorer →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
