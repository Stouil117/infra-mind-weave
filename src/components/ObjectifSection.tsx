import { motion } from "framer-motion";
import { Target, TrendingUp, Cpu } from "lucide-react";
import { useEffect, useRef } from "react";

const DataFlowBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-px opacity-20"
          style={{
            left: `${8 + i * 8}%`,
            height: "100%",
            background: `linear-gradient(180deg, transparent, ${i % 2 === 0 ? "hsl(43 74% 52% / 0.4)" : "hsl(185 100% 50% / 0.3)"}, transparent)`,
            animation: `data-flow ${3 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

const ObjectifSection = () => {
  return (
    <section id="objectif" className="py-24 px-6 relative overflow-hidden">
      <DataFlowBackground />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-gold text-glow-gold mb-2">
            PROJET D'ÉTUDE
          </h2>
          <p className="font-mono text-xs text-muted-foreground mb-10 tracking-wider">
            // ia_appliquée_à_la_finance
          </p>

          <div className="glass-card rounded-lg p-10 relative overflow-hidden" style={{
            boxShadow: "0 0 30px hsl(43 74% 52% / 0.15), 0 0 60px hsl(185 100% 50% / 0.05), inset 0 0 30px hsl(43 74% 52% / 0.03)"
          }}>
            <div className="h-1 w-full bg-gradient-to-r from-primary via-gold to-primary absolute top-0 left-0" />
            
            <div className="flex justify-center gap-6 mb-8">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Cpu size={32} className="text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Target size={32} className="text-gold" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <TrendingUp size={32} className="text-gold" />
              </motion.div>
            </div>

            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6">
              Mon objectif est d'évoluer vers les métiers de la{" "}
              <span className="text-gold font-semibold">data science</span> et de{" "}
              <span className="text-gold font-semibold">l'intelligence artificielle</span>,
              en combinant les compétences en infrastructures informatiques, automatisation et
              analyse de données.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Je suis particulièrement passionné par l'<span className="text-gold">IA appliquée à la Finance</span> — 
              l'utilisation du Deep Learning et des modèles prédictifs pour l'analyse de marché, 
              la détection de fraude et l'optimisation algorithmique des systèmes financiers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectifSection;
