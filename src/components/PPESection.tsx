import { motion } from "framer-motion";
import { FileText, Calendar, Building2, Download, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PPE {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  context: string;
  description: string;
  competences: string[];
  outils: string[];
  pdfLink?: string;
  annexePdf?: string;
}

const ppes: PPE[] = [
  {
    id: 1,
    title: "PPE 1 — InduSaaS",
    subtitle: "Plateforme SaaS industrielle",
    date: "10 décembre 2025",
    context: "CETIM — Senlis",
    description:
      "Conception et déploiement d'une plateforme SaaS industrielle pour le CETIM. Mise en place d'une infrastructure cloud, gestion des données industrielles et d'outils de monitoring.",
    competences: ["Support et mise à disposition de services informatiques", "SISR4 — Administration des systèmes", "SISR5 — Supervision des réseaux"],
    outils: ["Docker", "Linux", "Cloud", "IA Prompting", "Monitoring"],
    pdfLink: "/docs/PPE1_InduSaaS.pdf",
  },
  {
    id: 2,
    title: "PPE 2 — Architecture réseau sécurisée",
    subtitle: "Infrastructure multi-zones WAN/LAN/DMZ",
    date: "21 janvier 2026",
    context: "Promeo — Senlis",
    description:
      "Conception et déploiement d'une architecture réseau sécurisée multi-zones (WAN, LAN, DMZ) avec des équipements Cisco. Configuration de VLAN, routage inter-VLAN, pare-feu et ACL.",
    competences: ["SISR1 — Conception d'infrastructures réseau", "SISR2 — Installation et configuration", "SISR3 — Sécurisation des infrastructures"],
    outils: ["Cisco IOS", "Packet Tracer", "VLAN", "ACL", "IA Prompting"],
    pdfLink: "/docs/PPE2_Architecture_Reseau.pdf",
  },
  {
    id: 3,
    title: "PPE 3 — Ansible & TechScale",
    subtitle: "Automatisation d'infrastructure avec Ansible",
    date: "6 mars 2026",
    context: "Promeo — Senlis",
    description:
      "Automatisation du déploiement et de la configuration d'une infrastructure complète avec Ansible. Playbooks pour la gestion de serveurs, le déploiement de services et l'Infrastructure as Code.",
    competences: ["SISR4 — Administration des systèmes", "SISR5 — Supervision des réseaux", "Automatisation et IaC"],
    outils: ["Ansible", "YAML", "Linux", "SSH", "IA Prompting"],
    pdfLink: "/docs/PPE3_Ansible_TechScale.pdf",
  },
];

const PPECard = ({ ppe, index }: { ppe: PPE; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card rounded-lg overflow-hidden group relative transition-all duration-500 hover:border-gold/50"
      style={{
        boxShadow: hovered
          ? "0 0 25px hsl(43 74% 52% / 0.25), 0 0 50px hsl(43 74% 52% / 0.1), inset 0 0 20px hsl(43 74% 52% / 0.05)"
          : "none",
      }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-gold to-primary" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-orbitron text-base font-bold text-gold group-hover:text-glow-gold transition-all">
              {ppe.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">{ppe.subtitle}</p>
          </div>
          <div className="text-right text-[10px] font-mono text-muted-foreground shrink-0 ml-4">
            <div className="flex items-center gap-1 mb-1">
              <Calendar size={10} />
              <span>{ppe.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 size={10} />
              <span>{ppe.context}</span>
            </div>
          </div>
        </div>

        <p className="text-foreground/70 text-sm leading-relaxed mb-5">{ppe.description}</p>

        {/* Outils - revealed with gold glow on hover */}
        <div className="mb-4">
          <span className="text-[10px] font-mono text-gold/70 uppercase tracking-wider mb-2 block">
            Technologies
          </span>
          <div className="flex flex-wrap gap-2">
            {ppe.outils.map((o) => (
              <span
                key={o}
                className="px-2.5 py-1 text-[10px] font-mono uppercase bg-gold/10 text-gold border border-gold/25 rounded-sm transition-all duration-300 group-hover:bg-gold/20 group-hover:border-gold/40"
              >
                {o}
              </span>
            ))}
          </div>
        </div>

        {/* Compétences */}
        <div className="mb-5">
          <span className="text-[10px] font-mono text-primary/70 uppercase tracking-wider mb-2 block">
            Compétences
          </span>
          <div className="flex flex-wrap gap-1.5">
            {ppe.competences.map((c) => (
              <span key={c} className="px-2 py-0.5 text-[10px] font-mono bg-primary/10 text-primary/80 border border-primary/20 rounded-sm">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          {ppe.pdfLink && (
            <a
              href={ppe.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono bg-gold/10 text-gold border border-gold/30 rounded hover:bg-gold/20 hover:border-gold/50 transition-all duration-300 group/btn"
            >
              <Download size={13} />
              Télécharger le dossier PPE
              <ChevronRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          )}
          {ppe.annexePdf && (
            <a
              href={ppe.annexePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-secondary/10 text-secondary border border-secondary/30 rounded hover:bg-secondary/20 transition-colors"
            >
              <FileText size={13} />
              Annexe VII-1-A (remplie)
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PPESection = () => {
  return (
    <section id="ppe" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-gold text-glow-gold mb-2">
            PROJETS PPE
          </h2>
          <p className="font-mono text-xs text-muted-foreground tracking-wider">
            // épreuves_professionnelles_encadrées
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ppes.map((ppe, i) => (
            <PPECard key={ppe.id} ppe={ppe} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PPESection;
