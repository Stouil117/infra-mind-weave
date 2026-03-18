import { motion } from "framer-motion";
import { Brain, Network, Cog, Radar } from "lucide-react";

const qualities = [
  {
    icon: Brain,
    title: "Intelligence stratégique",
    desc: "Capacité à analyser une situation technique dans son ensemble afin de prendre des décisions pertinentes et concevoir des solutions durables.",
  },
  {
    icon: Network,
    title: "Pensée systémique",
    desc: "Capacité à comprendre les infrastructures informatiques comme des systèmes complexes où réseaux, données, sécurité et automatisation interagissent.",
  },
  {
    icon: Cog,
    title: "Esprit d'automatisation",
    desc: "Recherche constante d'optimisation et d'automatisation des tâches techniques afin d'améliorer la fiabilité et la scalabilité des infrastructures.",
  },
  {
    icon: Radar,
    title: "Curiosité technologique",
    desc: "Veille permanente sur les évolutions technologiques, notamment dans les domaines de l'IA, du machine learning et des infrastructures intelligentes.",
  },
];

const QualitiesSection = () => {
  return (
    <section id="qualities" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
            QUALITÉS
          </h2>
          <p className="font-mono text-xs text-muted-foreground mb-10 tracking-wider">
            // hors_des_sentiers_battus
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {qualities.map((q, i) => (
              <motion.div
                key={q.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-lg p-6 hover:box-glow transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <q.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-sm font-semibold text-foreground mb-2">
                      {q.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{q.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualitiesSection;
