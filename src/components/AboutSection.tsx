import { motion } from "framer-motion";
import logoCetim from "@/assets/logo-cetim.png";
import logoPromeo from "@/assets/logo-promeo.png";
import logoSenlis from "@/assets/logo-senlis.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
            À PROPOS
          </h2>
          <div className="w-24 h-0.5 bg-gold mb-10" />

          <div className="glass-card rounded-lg p-8 md:p-10 box-glow">
            <p className="text-foreground leading-relaxed text-lg mb-6">
              Je suis étudiant en <span className="text-gold font-semibold">BTS SIO option SISR</span>, 
              spécialisé dans les infrastructures systèmes, réseaux et la cybersécurité.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Au cours de ma formation, j'ai conçu et déployé plusieurs infrastructures informatiques complètes, 
              incluant des architectures réseau Cisco, des environnements sécurisés multi-zones (LAN / WAN / DMZ) 
              ainsi que l'automatisation des configurations réseau grâce à Ansible et l'Infrastructure as Code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Au-delà de l'ingénierie des infrastructures, je m'intéresse particulièrement à l'impact de 
              l'intelligence artificielle et du machine learning sur l'administration des systèmes, 
              notamment pour l'analyse des logs, la détection d'anomalies et l'optimisation des 
              infrastructures informatiques.
            </p>
          </div>
        </motion.div>

        {/* Partenaires & Formation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="font-orbitron text-lg font-semibold text-gold text-glow-gold mb-6 text-center tracking-wider">
            PARTENAIRES & FORMATION
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { src: logoCetim, alt: "CETIM", label: "Entreprise" },
              { src: logoPromeo, alt: "Promeo", label: "Formation" },
              { src: logoSenlis, alt: "BTS SIO", label: "Diplôme" },
            ].map((logo, i) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 glass-card rounded-lg p-3 flex items-center justify-center box-glow-gold group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain logo-neon"
                  />
                </div>
                <span className="text-xs font-mono text-gold/70 uppercase tracking-wider">
                  {logo.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
