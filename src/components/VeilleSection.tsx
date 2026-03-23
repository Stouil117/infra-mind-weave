import { motion } from "framer-motion";
import { Shield, FileSearch, AlertTriangle, Bot, Database, BookOpen, Brain } from "lucide-react";

const topics = [
  { icon: Brain, label: "Deep Learning & LLM (Large Language Models)", gold: true },
  { icon: Shield, label: "IA pour la cybersécurité" },
  { icon: FileSearch, label: "Analyse intelligente des logs systèmes" },
  { icon: AlertTriangle, label: "Détection d'anomalies dans les réseaux" },
  { icon: Bot, label: "Automatisation intelligente des infrastructures" },
  { icon: Database, label: "Impact de la data science sur l'administration système" },
  { icon: BookOpen, label: "Formation Udemy — Deep Learning & LLM appliqués", gold: true },
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
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-gold text-glow-gold mb-2">
            VEILLE TECHNOLOGIQUE
          </h2>
          <p className="font-mono text-xs text-muted-foreground mb-10 tracking-wider">
            // intelligence_artificielle_&_infrastructures
          </p>

          <div className="glass-card rounded-lg p-8 box-glow">
            <p className="text-foreground/80 leading-relaxed mb-8">
              Dans le cadre de ma veille technologique, je m'intéresse à l'intégration de
              l'intelligence artificielle, du <span className="text-gold font-semibold">Deep Learning</span> et 
              des <span className="text-gold font-semibold">LLM (Large Language Models)</span> dans la gestion 
              des systèmes informatiques et l'administration des infrastructures. 
              Formation continue via <span className="text-gold">Udemy</span> pour approfondir ces sujets.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {topics.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-3 p-3 rounded-md border transition-all duration-300 hover:scale-[1.02] ${
                    (t as any).gold
                      ? "bg-gold/10 border-gold/30 hover:border-gold/50 hover:bg-gold/15"
                      : "bg-muted/30 border-border/50 hover:border-primary/30"
                  }`}
                >
                  <t.icon size={18} className={`shrink-0 ${(t as any).gold ? "text-gold" : "text-primary"}`} />
                  <span className={`text-sm ${(t as any).gold ? "text-gold/90 font-medium" : "text-foreground/80"}`}>
                    {t.label}
                  </span>
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
