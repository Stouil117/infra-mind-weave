import { motion } from "framer-motion";
import { GraduationCap, Network, Shield, Server, BookOpen, Award } from "lucide-react";
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
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {[
              { src: logoCetim, alt: "CETIM", label: "Entreprise" },
              { src: logoPromeo, alt: "UIMM – Promeo", label: "Formation" },
              { src: logoSenlis, alt: "BTS SIO", label: "Diplôme" },
            ].map((logo, i) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-xl p-3 flex items-center justify-center bg-white rounded-xl border border-gold/30 box-glow-gold group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_30px_hsl(var(--gold)/0.5)]">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-mono text-gold/70 uppercase tracking-widest group-hover:text-gold transition-colors duration-300">
                  {logo.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formation Promeo Senlis – BTS SIO SISR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass-card rounded-lg p-8 md:p-10 box-glow-gold relative overflow-hidden">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-primary to-gold" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-gold/10 border border-gold/30">
                <GraduationCap className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-orbitron text-lg font-bold text-gold">
                  PROMEO — SENLIS
                </h3>
                <p className="font-mono text-xs text-muted-foreground tracking-wider">
                  UIMM « La Fabrique de l'Avenir » • BTS SIO option SISR
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Formation en alternance au sein de <span className="text-gold font-semibold">Promeo Senlis</span>, 
              centre de formation du réseau UIMM spécialisé dans les métiers de l'industrie et du numérique. 
              Le BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) forme des professionnels 
              capables de concevoir, déployer et administrer des infrastructures réseau sécurisées en environnement professionnel.
            </p>

            {/* Compétences clés */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Network,
                  title: "Infrastructure Réseau",
                  desc: "VLAN, OSPF, HSRP, VPN IPsec, architecture multi-sites",
                },
                {
                  icon: Shield,
                  title: "Cybersécurité",
                  desc: "Firewall pfSense, DMZ, ACL, proxy, filtrage réseau",
                },
                {
                  icon: Server,
                  title: "Administration Systèmes",
                  desc: "Windows Server, Active Directory, GPO, Linux",
                },
                {
                  icon: BookOpen,
                  title: "Automatisation",
                  desc: "Ansible, scripting PowerShell/Bash, IaC",
                },
                {
                  icon: Award,
                  title: "Gestion de Projet",
                  desc: "GLPI, documentation technique, conduite de projet IT",
                },
                {
                  icon: GraduationCap,
                  title: "Veille & Innovation",
                  desc: "IA appliquée aux SI, cloud computing, DevOps",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-4 rounded-lg border border-border/50 bg-background/30 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
                >
                  <item.icon className="text-primary mb-2 group-hover:text-gold transition-colors duration-300" size={18} />
                  <h4 className="font-orbitron text-xs font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
