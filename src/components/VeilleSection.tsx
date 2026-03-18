import { motion } from "framer-motion";
import { Shield, FileSearch, AlertTriangle, Bot, Database } from "lucide-react";

const topics = [
  { icon: Shield, label: "IA pour la cybersécurité" },
  { icon: FileSearch, label: "Analyse intelligente des logs systèmes" },
  { icon: AlertTriangle, label: "Détection d'anomalies dans les réseaux" },
  { icon: Bot, label: "Automatisation intelligente des infrastructures" },
  { icon: Database, label: "Impact de la data science sur l'administration des systèmes" },
];

const VeilleSection = () => {
  return (
    <section id="veille" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
            VEILLE TECHNOLOGIQUE
          </h2>
          <p className="font-mono text-xs text-muted-foreground mb-10 tracking-wider">
            // intelligence_artificielle_&_infrastructures
          </p>

          <div className="glass-card rounded-lg p-8 box-glow">
            <p className="text-foreground/80 leading-relaxed mb-8">
              Dans le cadre de ma veille technologique, je m'intéresse à l'intégration de
              l'intelligence artificielle et du machine learning dans la gestion des systèmes
              informatiques. Cette veille porte notamment sur :
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {topics.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-md bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <t.icon size={18} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground/80">{t.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VeilleSection;
