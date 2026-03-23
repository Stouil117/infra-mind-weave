import { motion } from "framer-motion";
import { Briefcase, Building2, Shield, Wrench, Monitor, Users, Smartphone } from "lucide-react";
import logoCetim from "@/assets/logo-cetim.png";

const missions = [
  { icon: Users, text: "Support technique aux utilisateurs" },
  { icon: Shield, text: "Gestion des incidents informatiques (GLPI)" },
  { icon: Monitor, text: "Installation et configuration des postes de travail" },
  { icon: Users, text: "Administration des comptes utilisateurs via Active Directory" },
  { icon: Wrench, text: "Migration parc informatique vers Windows 11" },
  { icon: Smartphone, text: "Configuration et déploiement iPhones entreprise" },
  { icon: Monitor, text: "Participation à la gestion du parc informatique" },
];

const timelineSteps = [
  { year: "2022", label: "Bac Scientifique", detail: "Obtention du baccalauréat" },
  { year: "2023", label: "CETIM — Alternance", detail: "Technicien Helpdesk" },
  { year: "2024–2026", label: "BTS SIO SISR", detail: "Promeo — Senlis" },
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

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative flex items-center justify-between">
            {/* Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-gold to-primary/20 -translate-y-1/2" />
            
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center group z-10"
              >
                <div className="w-4 h-4 rounded-full bg-gold border-2 border-gold/50 group-hover:scale-150 transition-transform duration-300 mb-3" 
                     style={{ boxShadow: "0 0 12px hsl(43 74% 52% / 0.5)" }} />
                <div className="glass-card rounded-md px-4 py-2 text-center group-hover:box-glow-gold transition-all duration-300">
                  <span className="font-orbitron text-xs font-bold text-gold block">{step.year}</span>
                  <span className="text-xs font-semibold text-foreground block mt-1">{step.label}</span>
                  <span className="text-[10px] text-muted-foreground">{step.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-lg overflow-hidden hover:box-glow transition-all duration-500"
        >
          <div className="h-1 w-full bg-gradient-to-r from-primary via-gold to-primary" />
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 glass-card rounded-lg p-2 flex items-center justify-center shrink-0 box-glow-gold">
                <img src={logoCetim} alt="CETIM" className="w-full h-full object-contain logo-neon" />
              </div>
              <div className="flex-1">
                <h3 className="font-orbitron text-lg font-bold text-gold">CETIM</h3>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <span className="flex items-center gap-1.5 text-sm text-foreground/90">
                    <Briefcase size={14} className="text-gold/70" />
                    Technicien Helpdesk (alternance)
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    <Building2 size={12} />
                    Senlis (60)
                  </span>
                </div>
              </div>
            </div>

            {/* Missions grid */}
            <div>
              <span className="text-xs font-mono text-gold/80 uppercase tracking-wider mb-4 block">
                Missions principales
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {missions.map((mission, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-md bg-muted/20 border border-border/30 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 group"
                  >
                    <mission.icon size={15} className="text-primary group-hover:text-gold mt-0.5 shrink-0 transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">{mission.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
