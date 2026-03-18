import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Calendar, Building2, Download, ExternalLink } from "lucide-react";

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
  annexe: {
    numero: string;
    intitule: string;
    periode: string;
    lieu: string;
    modalite: string;
    competencesTravaillees: string[];
    conditionsRealisation: string;
    ressourcesUtilisees: string[];
    modalitesAcces: string;
    descriptif: string;
  };
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
    annexe: {
      numero: "1",
      intitule: "Conception et déploiement d'une plateforme SaaS industrielle (InduSaaS)",
      periode: "Octobre - Décembre 2025",
      lieu: "CETIM — Senlis (60)",
      modalite: "Seul(e)",
      competencesTravaillees: [
        "Concevoir une solution d'infrastructure réseau",
        "Installer, tester et déployer une solution d'infrastructure réseau",
        "Exploiter, dépanner et superviser une solution d'infrastructure réseau",
      ],
      conditionsRealisation:
        "Déploiement d'une plateforme SaaS industrielle dans un environnement de production. Résultats attendus : infrastructure conteneurisée fonctionnelle, documentation technique complète, monitoring opérationnel.",
      ressourcesUtilisees: [
        "Docker & Docker Compose",
        "Linux (Debian)",
        "Cloud Platform",
        "Outils de monitoring (Grafana, Prometheus)",
        "IA Prompting (ChatGPT, Copilot)",
        "Documentation technique interne CETIM",
      ],
      modalitesAcces:
        "Accès sécurisé via VPN et authentification multi-facteurs. Productions disponibles sur dépôt Git interne et documentation hébergée.",
      descriptif:
        "Déploiement complet d'une plateforme InduSaaS comprenant : la conteneurisation des services applicatifs avec Docker, la configuration réseau et le routage, la mise en place d'un système de monitoring avec Grafana et Prometheus, la gestion des logs centralisés, et la rédaction de la documentation technique complète du projet. L'IA a été utilisée comme outil d'assistance pour le prompting de configurations et la résolution de problèmes techniques.",
    },
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
    annexe: {
      numero: "2",
      intitule: "Conception et déploiement d'une architecture réseau sécurisée multi-zones (WAN/LAN/DMZ)",
      periode: "Décembre 2025 - Janvier 2026",
      lieu: "Promeo — Senlis (60)",
      modalite: "En équipe",
      competencesTravaillees: [
        "Concevoir une solution d'infrastructure réseau",
        "Installer, tester et déployer une solution d'infrastructure réseau",
        "Exploiter, dépanner et superviser une solution d'infrastructure réseau",
      ],
      conditionsRealisation:
        "Conception d'une infrastructure réseau segmentée en 3 zones (WAN, LAN, DMZ). Résultats attendus : schéma réseau complet, configurations fonctionnelles, tests de connectivité et de sécurité validés.",
      ressourcesUtilisees: [
        "Cisco IOS (routeurs et switches)",
        "Cisco Packet Tracer",
        "VLAN / ACL / NAT / PAT",
        "Draw.io (schémas réseau)",
        "IA Prompting (ChatGPT, Copilot)",
        "Documentation Cisco officielle",
      ],
      modalitesAcces:
        "Accès physique au laboratoire réseau Promeo et accès distant via console série. Schémas et configurations disponibles dans le dossier technique.",
      descriptif:
        "Conception et mise en œuvre d'une architecture réseau sécurisée comprenant 3 zones distinctes : WAN (accès Internet), LAN (réseau interne avec segmentation VLAN) et DMZ (zone démilitarisée pour les services exposés). Configuration des équipements Cisco : routeurs avec routage inter-VLAN, switches avec VLAN et trunking, mise en place d'ACL pour le filtrage du trafic, NAT/PAT pour la translation d'adresses. Tests de connectivité et validation de la sécurité entre les zones. L'IA Prompting a été utilisée pour l'optimisation des configurations et la résolution de problèmes.",
    },
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
    annexe: {
      numero: "3",
      intitule: "Automatisation de l'infrastructure TechScale avec Ansible",
      periode: "Février - Mars 2026",
      lieu: "Promeo — Senlis (60)",
      modalite: "Seul(e)",
      competencesTravaillees: [
        "Concevoir une solution d'infrastructure réseau",
        "Installer, tester et déployer une solution d'infrastructure réseau",
        "Exploiter, dépanner et superviser une solution d'infrastructure réseau",
      ],
      conditionsRealisation:
        "Automatisation complète d'une infrastructure IT via Ansible. Résultats attendus : playbooks fonctionnels, infrastructure déployée automatiquement, documentation IaC complète.",
      ressourcesUtilisees: [
        "Ansible (playbooks, rôles, inventaires)",
        "YAML",
        "Linux (Ubuntu/Debian)",
        "SSH",
        "Git & GitHub",
        "IA Prompting (ChatGPT, Copilot)",
      ],
      modalitesAcces:
        "Accès SSH aux serveurs cibles depuis la machine de contrôle Ansible. Playbooks et documentation disponibles sur dépôt Git.",
      descriptif:
        "Création de playbooks Ansible pour automatiser le déploiement complet d'une infrastructure TechScale : serveurs web (Nginx/Apache), bases de données (MySQL/PostgreSQL), services de monitoring (Zabbix/Grafana). Mise en place d'une architecture Infrastructure as Code avec gestion des variables, rôles Ansible structurés et inventaires dynamiques. Automatisation des mises à jour système, de la configuration des pare-feu et du déploiement de certificats SSL. L'IA Prompting a été utilisée pour optimiser les playbooks et résoudre les erreurs de configuration.",
    },
  },
];

const PPECard = ({ ppe }: { ppe: PPE }) => {
  const [expanded, setExpanded] = useState(false);

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

        {/* PDF + Annexe buttons */}
        <div className="flex flex-wrap gap-3 mb-4">
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
          <a
            href="/docs/Annexe_PPE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-secondary/10 text-secondary border border-secondary/30 rounded hover:bg-secondary/20 transition-colors"
          >
            <ExternalLink size={13} />
            Annexe VII-1-A (modèle vierge)
          </a>
        </div>

        {/* Annexe toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs font-mono text-primary/70 hover:text-primary transition-colors mt-2"
        >
          <FileText size={14} />
          <span>Annexe VII-1-A — Fiche de réalisation professionnelle (remplie)</span>
          <ChevronDown size={14} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 p-5 bg-muted/30 border border-border rounded-md text-xs font-mono space-y-4">
                {/* Header officiel */}
                <div className="text-center border-b border-border pb-3 mb-3">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">BTS Services Informatiques aux Organisations — Session 2026</p>
                  <h4 className="text-primary font-orbitron text-sm mt-1">
                    ANNEXE VII-1-A
                  </h4>
                  <p className="text-muted-foreground text-[10px] mt-0.5">
                    Fiche descriptive de réalisation professionnelle — Épreuve E6 (SISR)
                  </p>
                </div>

                <Row label="N° réalisation" value={ppe.annexe.numero} />
                <Row label="Nom, prénom" value="TOUIL Sofiane" />
                <Row label="Date" value={ppe.date} />

                <div className="border-t border-border pt-3">
                  <span className="text-primary/80 font-bold block mb-2 text-[11px]">Organisation support de la réalisation professionnelle</span>
                  <Row label="Intitulé" value={ppe.annexe.intitule} />
                  <Row label="Période de réalisation" value={ppe.annexe.periode} />
                  <Row label="Lieu" value={ppe.annexe.lieu} />
                  <Row label="Modalité" value={ppe.annexe.modalite} />
                </div>

                <div className="border-t border-border pt-3">
                  <span className="text-primary/80 font-bold block mb-2 text-[11px]">Compétences travaillées</span>
                  <ul className="list-disc list-inside text-muted-foreground space-y-0.5 ml-2">
                    {ppe.annexe.competencesTravaillees.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>

                <div className="border-t border-border pt-3">
                  <span className="text-primary/80 font-bold block mb-2 text-[11px]">Conditions de réalisation</span>
                  <p className="text-muted-foreground leading-relaxed">{ppe.annexe.conditionsRealisation}</p>
                </div>

                <div className="border-t border-border pt-3">
                  <span className="text-primary/80 font-bold block mb-2 text-[11px]">Ressources documentaires, matérielles et logicielles utilisées</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {ppe.annexe.ressourcesUtilisees.map((o) => (
                      <span key={o} className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-sm">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-3">
                  <span className="text-primary/80 font-bold block mb-2 text-[11px]">Modalités d'accès aux productions</span>
                  <p className="text-muted-foreground leading-relaxed">{ppe.annexe.modalitesAcces}</p>
                </div>

                <div className="border-t border-border pt-3">
                  <span className="text-primary/80 font-bold block mb-2 text-[11px]">Descriptif de la réalisation professionnelle</span>
                  <p className="text-muted-foreground leading-relaxed">{ppe.annexe.descriptif}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-1">
    <span className="text-primary/80">{label} :</span>{" "}
    <span className="text-muted-foreground">{value}</span>
  </div>
);

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
