import { motion } from "framer-motion";
import { FileText, Calendar, Building2, Download } from "lucide-react";

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
      "Conception et déploiement d'une plateforme SaaS industrielle pour le CETIM. Mise en place d'une infrastructure cloud, gestion des données industrielles et intégration d'outils de monitoring.",
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

const PPECard = ({ ppe }: { ppe: PPE }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-lg overflow-hidden hover:box-glow transition-all duration-500"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-orbitron text-lg font-bold text-primary">{ppe.title}</h3>
            <p className="text-muted-foreground text-sm">{ppe.subtitle}</p>
          </div>
          <div className="text-right text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-1 mb-1">
              <Calendar size={12} />
              <span>{ppe.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 size={12} />
              <span>{ppe.context}</span>
            </div>
          </div>
        </div>

        <p className="text-foreground/80 text-sm leading-relaxed mb-4">{ppe.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {ppe.outils.map((o) => (
            <span key={o} className="px-2 py-0.5 text-[10px] font-mono uppercase bg-primary/10 text-primary border border-primary/20 rounded-sm">
              {o}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {ppe.competences.map((c) => (
            <span key={c} className="px-2 py-0.5 text-[10px] font-mono bg-secondary/10 text-secondary border border-secondary/20 rounded-sm">
              {c}
            </span>
          ))}
        </div>

        {/* Liens PDF + Annexe */}
        <div className="flex flex-wrap gap-3">
          {ppe.pdfLink && (
            <a
              href={ppe.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded hover:bg-primary/20 transition-colors"
            >
              <Download size={13} />
              Télécharger le dossier PPE
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
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
            PROJETS PPE
          </h2>
          <p className="font-mono text-xs text-muted-foreground mb-10 tracking-wider">
            // épreuves_professionnelles_encadrées
          </p>
        </motion.div>

        <div className="space-y-6">
          {ppes.map((ppe) => (
            <PPECard key={ppe.id} ppe={ppe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PPESection;
