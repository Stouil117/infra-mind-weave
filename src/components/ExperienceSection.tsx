import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar } from "lucide-react";
import logoCetim from "@/assets/logo-cetim.png";

const missions = [
  "Support technique aux utilisateurs",
  "Gestion des incidents informatiques",
  "Installation et configuration des postes de travail",
  "Administration des comptes utilisateurs via Active Directory",
  "Résolution de problèmes systèmes et réseau",
  "Participation à la gestion du parc informatique",
  "Assistance aux utilisateurs sur les outils numériques de l'entreprise",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
            EXPÉRIENCE PROFESSIONNELLE
          </h2>
          <p className="font-mono text-xs text-muted-foreground mb-10 tracking-wider">
            // parcours_en_entreprise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-lg overflow-hidden hover:box-glow transition-all duration-500"
        >
          <div className="p-6 md:p-8">
            {/* Header avec logo */}
            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 glass-card rounded-lg p-2 flex items-center justify-center shrink-0">
                <img src={logoCetim} alt="CETIM" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="font-orbitron text-lg font-bold text-primary">CETIM</h3>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <span className="flex items-center gap-1.5 text-sm text-foreground/90">
                    <Briefcase size={14} className="text-primary/70" />
                    Technicien Helpdesk (alternance)
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    <Building2 size={12} />
                    Senlis (60)
                  </span>
                </div>
              </div>
            </div>

            {/* Missions */}
            <div>
              <span className="text-xs font-mono text-primary/80 uppercase tracking-wider mb-3 block">
                Missions principales
              </span>
              <ul className="space-y-2">
                {missions.map((mission, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {mission}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
