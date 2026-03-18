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
          <div className="w-24 h-0.5 bg-primary mb-10" />

          <div className="glass-card rounded-lg p-8 md:p-10 box-glow">
            <p className="text-foreground leading-relaxed text-lg mb-6">
              Je suis étudiant en <span className="text-primary font-semibold">BTS SIO option SISR</span>, 
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

          {/* Logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
            {[
              { src: logoCetim, alt: "CETIM" },
              { src: logoPromeo, alt: "Promeo" },
              { src: logoSenlis, alt: "Senlis" },
            ].map((logo) => (
              <div
                key={logo.alt}
                className="w-24 h-24 glass-card rounded-lg p-3 flex items-center justify-center"
              >
                <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
