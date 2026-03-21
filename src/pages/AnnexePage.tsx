import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface AnnexeData {
  numero: string;
  nom: string;
  date: string;
  intitule: string;
  periode: string;
  lieu: string;
  modalite: string;
  competencesTravaillees: string[];
  conditionsRealisation: string;
  ressourcesUtilisees: string[];
  modalitesAcces: string;
  descriptif: string;
  pdfRemplie?: string;
}

const annexes: Record<string, AnnexeData> = {
  "1": {
    numero: "1",
    nom: "TOUIL Sofiane",
    date: "10 décembre 2025",
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
    pdfRemplie: "/docs/Annexe_PPE1_remplie.pdf",
  },
  "2": {
    numero: "2",
    nom: "TOUIL Sofiane",
    date: "21 janvier 2026",
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
  "3": {
    numero: "3",
    nom: "TOUIL Sofiane",
    date: "6 mars 2026",
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
};

const AnnexeRow = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-1">
    <span className="text-primary/80 font-semibold">{label} :</span>{" "}
    <span className="text-muted-foreground">{value}</span>
  </div>
);

const AnnexePage = () => {
  const { id } = useParams<{ id: string }>();
  const annexe = id ? annexes[id] : null;

  if (!annexe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground font-mono">Annexe introuvable.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/#ppe"
            className="inline-flex items-center gap-2 text-xs font-mono text-primary/70 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Retour aux projets PPE
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-lg p-6 md:p-10"
          >
            {/* Header officiel */}
            <div className="text-center border-b border-border pb-4 mb-6">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                BTS Services Informatiques aux Organisations — Session 2026
              </p>
              <h1 className="text-primary font-orbitron text-xl md:text-2xl mt-2 font-bold">
                ANNEXE VII-1-A
              </h1>
              <p className="text-muted-foreground text-xs mt-1">
                Fiche descriptive de réalisation professionnelle — Épreuve E6 (SISR)
              </p>
            </div>

            <div className="space-y-6 text-sm font-mono">
              {/* Infos générales */}
              <div className="border-b border-border pb-4">
                <AnnexeRow label="N° réalisation" value={annexe.numero} />
                <AnnexeRow label="Nom, prénom" value={annexe.nom} />
                <AnnexeRow label="Date" value={annexe.date} />
              </div>

              {/* Organisation */}
              <div className="border-b border-border pb-4">
                <h2 className="text-primary/90 font-bold text-xs uppercase tracking-wider mb-3">
                  Organisation support de la réalisation professionnelle
                </h2>
                <AnnexeRow label="Intitulé" value={annexe.intitule} />
                <AnnexeRow label="Période de réalisation" value={annexe.periode} />
                <AnnexeRow label="Lieu" value={annexe.lieu} />
                <AnnexeRow label="Modalité" value={annexe.modalite} />
              </div>

              {/* Compétences */}
              <div className="border-b border-border pb-4">
                <h2 className="text-primary/90 font-bold text-xs uppercase tracking-wider mb-3">
                  Compétences travaillées
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                  {annexe.competencesTravaillees.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Conditions */}
              <div className="border-b border-border pb-4">
                <h2 className="text-primary/90 font-bold text-xs uppercase tracking-wider mb-3">
                  Conditions de réalisation
                </h2>
                <p className="text-muted-foreground leading-relaxed">{annexe.conditionsRealisation}</p>
              </div>

              {/* Ressources */}
              <div className="border-b border-border pb-4">
                <h2 className="text-primary/90 font-bold text-xs uppercase tracking-wider mb-3">
                  Ressources documentaires, matérielles et logicielles utilisées
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {annexe.ressourcesUtilisees.map((r) => (
                    <span
                      key={r}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-sm"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modalités d'accès */}
              <div className="border-b border-border pb-4">
                <h2 className="text-primary/90 font-bold text-xs uppercase tracking-wider mb-3">
                  Modalités d'accès aux productions
                </h2>
                <p className="text-muted-foreground leading-relaxed">{annexe.modalitesAcces}</p>
              </div>

              {/* Descriptif */}
              <div>
                <h2 className="text-primary/90 font-bold text-xs uppercase tracking-wider mb-3">
                  Descriptif de la réalisation professionnelle
                </h2>
                <p className="text-muted-foreground leading-relaxed">{annexe.descriptif}</p>
              </div>

              {/* Télécharger le modèle PDF */}
              <div className="pt-4 border-t border-border">
                <a
                  href="/docs/Annexe_VII-1-A_modele.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded hover:bg-primary/20 transition-colors"
                >
                  <Download size={14} />
                  Télécharger l'annexe VII-1-A (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AnnexePage;
