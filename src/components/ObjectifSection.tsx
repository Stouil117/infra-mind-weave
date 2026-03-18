import { motion } from "framer-motion";
import { Target } from "lucide-react";

const ObjectifSection = () => {
  return (
    <section id="objectif" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
            OBJECTIF PROFESSIONNEL
          </h2>
          <p className="font-mono text-xs text-muted-foreground mb-10 tracking-wider">
            // next_chapter
          </p>

          <div className="glass-card rounded-lg p-10 box-glow">
            <Target size={40} className="text-primary mx-auto mb-6 animate-pulse-glow" />
            <p className="text-foreground text-lg md:text-xl leading-relaxed">
              Mon objectif est d'évoluer vers les métiers de la{" "}
              <span className="text-primary font-semibold">data science</span> et de{" "}
              <span className="text-secondary font-semibold">l'intelligence artificielle</span>,
              en combinant les compétences en infrastructures informatiques, automatisation et
              analyse de données.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectifSection;
