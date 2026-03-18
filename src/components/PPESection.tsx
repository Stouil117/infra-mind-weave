import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Calendar, Building2 } from "lucide-react";

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
    activitePrincipale: string;
    situation: string;
    contexte: string;
    lieu: string;
    periode: string;
    modalite: string;
    productions: string[];
    competencesCouvertes: string[];
    outilsUtilises: string[];
    conditionsAcces: string;
    descriptionActivite: string;
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
    annexe: {
      activitePrincipale: "Conception et déploiement d'une plateforme SaaS industrielle (InduSaaS)",
      situation: "Situation professionnelle vécue en stage",
      contexte: "Projet de déploiement d'une plateforme SaaS pour la gestion de données industrielles au sein du CETIM",
      lieu: "CETIM — Senlis (60)",
      periode: "Octobre - Décembre 2025",
      modalite: "Travail en autonomie avec suivi du tuteur de stage",
      productions: ["Documentation technique", "Infrastructure déployée", "Rapport de stage"],
      competencesCouvertes: ["Gérer le patrimoine informatique", "Répondre aux incidents et aux demandes d'assistance", "Mettre à disposition des utilisateurs un service informatique", "Travailler en mode projet"],
      outilsUtilises: ["Docker", "Linux (Debian)", "Cloud Platform", "IA Prompting", "Outils de monitoring"],
      conditionsAcces: "Accès sécurisé via VPN et authentification multi-facteurs",
      descriptionActivite: "Déploiement d'une plateforme InduSaaS comprenant la conteneurisation des services, la configuration réseau, le monitoring et la documentation technique complète du projet.",
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
    annexe: {
      activitePrincipale: "Conception et déploiement d'une architecture réseau sécurisée multi-zones",
      situation: "Situation professionnelle vécue en formation",
      contexte: "Projet de conception d'une infrastructure réseau sécurisée avec segmentation WAN/LAN/DMZ",
      lieu: "Promeo — Senlis (60)",
      periode: "Décembre 2025 - Janvier 2026",
      modalite: "Travail en binôme avec présentation orale",
      productions: ["Schéma réseau complet", "Configuration des équipements", "Dossier technique", "Rapport de tests"],
      competencesCouvertes: ["Concevoir une solution d'infrastructure réseau", "Installer et configurer des équipements réseau", "Sécuriser les équipements et les accès", "Travailler en mode projet"],
      outilsUtilises: ["Cisco IOS", "Cisco Packet Tracer", "VLAN / ACL / NAT", "IA Prompting", "Draw.io"],
      conditionsAcces: "Accès physique au laboratoire réseau et accès distant via console",
      descriptionActivite: "Conception d'une architecture réseau sécurisée avec 3 zones distinctes (WAN, LAN, DMZ), configuration des VLAN, routage inter-VLAN, mise en place d'ACL et de règles de pare-feu pour sécuriser les communications entre les zones.",
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
    annexe: {
      activitePrincipale: "Automatisation de l'infrastructure TechScale avec Ansible",
      situation: "Situation professionnelle vécue en formation",
      contexte: "Projet d'automatisation d'une infrastructure IT complète via Infrastructure as Code avec Ansible",
      lieu: "Promeo — Senlis (60)",
      periode: "Février - Mars 2026",
      modalite: "Travail individuel avec présentation orale",
      productions: ["Playbooks Ansible", "Documentation technique", "Infrastructure automatisée", "Rapport de déploiement"],
      competencesCouvertes: ["Administrer les systèmes informatiques", "Automatiser les tâches d'administration", "Mettre à disposition des utilisateurs un service informatique", "Travailler en mode projet"],
      outilsUtilises: ["Ansible", "YAML", "Linux (Ubuntu/Debian)", "SSH", "Git", "IA Prompting"],
      conditionsAcces: "Accès SSH aux serveurs cibles depuis la machine de contrôle Ansible",
      descriptionActivite: "Création de playbooks Ansible pour automatiser le déploiement de serveurs web, bases de données et services de monitoring. Mise en place d'une architecture Infrastructure as Code complète avec gestion des variables, rôles et inventaires dynamiques.",
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

        {/* Annexe toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs font-mono text-primary/70 hover:text-primary transition-colors mt-2"
        >
          <FileText size={14} />
          <span>Annexe VII-1-A — Fiche de situation professionnelle</span>
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
              <div className="mt-4 p-5 bg-muted/30 border border-border rounded-md text-xs font-mono space-y-3">
                <h4 className="text-primary font-orbitron text-sm mb-3">
                  ANNEXE VII-1-A — BTS SIO SISR
                </h4>
                <Row label="Activité principale" value={ppe.annexe.activitePrincipale} />
                <Row label="Nature de la situation" value={ppe.annexe.situation} />
                <Row label="Contexte" value={ppe.annexe.contexte} />
                <Row label="Lieu" value={ppe.annexe.lieu} />
                <Row label="Période" value={ppe.annexe.periode} />
                <Row label="Modalité" value={ppe.annexe.modalite} />
                <div>
                  <span className="text-primary/80 block mb-1">Productions :</span>
                  <ul className="list-disc list-inside text-muted-foreground space-y-0.5 ml-2">
                    {ppe.annexe.productions.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <span className="text-primary/80 block mb-1">Compétences couvertes :</span>
                  <ul className="list-disc list-inside text-muted-foreground space-y-0.5 ml-2">
                    {ppe.annexe.competencesCouvertes.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
                <div>
                  <span className="text-primary/80 block mb-1">Outils utilisés :</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {ppe.annexe.outilsUtilises.map((o) => (
                      <span key={o} className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-sm">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
                <Row label="Conditions d'accès" value={ppe.annexe.conditionsAcces} />
                <div>
                  <span className="text-primary/80 block mb-1">Description de l'activité :</span>
                  <p className="text-muted-foreground leading-relaxed">{ppe.annexe.descriptionActivite}</p>
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
  <div>
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
