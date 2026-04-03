import { motion } from "framer-motion";
import { Briefcase, Building2, Shield, Wrench, Monitor, Users, Smartphone, Server, Network, AlertTriangle, CheckCircle2, ArrowRight, Zap, Clock, MessageSquare, GitBranch, Cloud, Bot } from "lucide-react";
import logoCetim from "@/assets/logo-cetim.png";
import { useState } from "react";

const missions = [
  { icon: Users, text: "Support technique aux utilisateurs" },
  { icon: Shield, text: "Gestion des incidents informatiques (GLPI)" },
  { icon: Monitor, text: "Installation et configuration des postes de travail" },
  { icon: Users, text: "Administration des comptes utilisateurs via Active Directory" },
  { icon: Wrench, text: "Migration parc informatique vers Windows 11" },
  { icon: Smartphone, text: "Configuration et déploiement iPhones entreprise" },
  { icon: Monitor, text: "Participation à la gestion du parc informatique" },
];

const timelineSteps = [
  { year: "2023", label: "Bac Scientifique", detail: "Obtention du baccalauréat" },
  { year: "2024–2026", label: "CETIM — Alternance", detail: "Technicien Helpdesk" },
  { year: "2024–2026", label: "BTS SIO SISR", detail: "Promeo — Senlis" },
];

const envTechnique = [
  { icon: Monitor, label: "Windows 10/11" },
  { icon: Shield, label: "Active Directory" },
  { icon: Server, label: "GPO" },
  { icon: Wrench, label: "GLPI" },
  { icon: Server, label: "MDT / PXE" },
  { icon: Network, label: "Réseau interne" },
];

const difficultes = [
  {
    title: "Problème NTFS / Groupes AD",
    description: "Droits d'accès incorrects liés à l'héritage NTFS et aux groupes de sécurité Active Directory.",
  },
  {
    title: "Trust Relationship cassée",
    description: "Relation d'approbation entre le poste et le domaine rompue, nécessitant une réintégration.",
  },
  {
    title: "Problème SIM / CG-NAT",
    description: "Connexion mobile bloquée par le CG-NAT de l'opérateur, empêchant certaines connexions entrantes.",
  },
];

const glpiWorkflow = [
  { step: "Création", desc: "Ticket ouvert" },
  { step: "Prise en charge", desc: "Attribution" },
  { step: "Diagnostic", desc: "Analyse" },
  { step: "Résolution", desc: "Intervention" },
  { step: "Clôture", desc: "Validation" },
];

const SectionCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`glass-card rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-500 ${className}`}
  >
    <div className="h-1 w-full bg-gradient-to-r from-primary via-gold to-primary" />
    {children}
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
            EXPÉRIENCE PROFESSIONNELLE
          </h2>
          <p className="font-mono text-xs text-muted-foreground mb-10 tracking-wider">
            // parcours_en_entreprise
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative flex items-center justify-between">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-gold to-primary/20 -translate-y-1/2" />
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center group z-10"
              >
                <div className="w-4 h-4 rounded-full bg-gold border-2 border-gold/50 group-hover:scale-150 transition-transform duration-300 mb-3"
                  style={{ boxShadow: "0 0 12px hsl(43 74% 52% / 0.5)" }} />
                <div className="glass-card rounded-md px-4 py-2 text-center group-hover:box-glow-gold transition-all duration-300">
                  <span className="font-orbitron text-xs font-bold text-gold block">{step.year}</span>
                  <span className="text-xs font-semibold text-foreground block mt-1">{step.label}</span>
                  <span className="text-[10px] text-muted-foreground">{step.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">

          {/* 1. CONTEXTE ENTREPRISE */}
          <SectionCard>
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 glass-card rounded-lg p-2 flex items-center justify-center shrink-0 box-glow-gold">
                  <img src={logoCetim} alt="CETIM" className="w-full h-full object-contain logo-neon" />
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron text-lg font-bold text-gold">CONTEXTE ENTREPRISE</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <span className="flex items-center gap-1.5 text-sm text-foreground/90">
                      <Briefcase size={14} className="text-gold/70" />
                      Technicien Helpdesk (alternance)
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                      <Building2 size={12} />
                      Senlis (60)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Le CETIM est un centre technique industriel dans lequel le système d'information est essentiel pour les activités de recherche et de production.
              </p>

              {/* Organigramme IT */}
              <div className="mb-6">
                <span className="text-xs font-mono text-gold/80 uppercase tracking-wider mb-4 block">
                  Organigramme IT
                </span>
                <div className="flex flex-col items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="px-5 py-3 glass-card rounded-md border border-gold/30 text-center"
                  >
                    <span className="text-xs font-mono text-muted-foreground block">Direction</span>
                    <span className="text-sm font-semibold text-gold">Responsable IT</span>
                  </motion.div>
                  <div className="w-px h-6 bg-gold/30" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="px-5 py-3 glass-card rounded-md border border-primary/30 text-center"
                  >
                    <span className="text-xs font-mono text-muted-foreground block">N+1</span>
                    <span className="text-sm font-semibold text-primary">Admin Système / Réseau</span>
                  </motion.div>
                  <div className="w-px h-6 bg-primary/30" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="px-5 py-3 glass-card rounded-md border border-secondary/40 text-center relative"
                    style={{ boxShadow: "0 0 15px hsl(150 80% 45% / 0.2)" }}
                  >
                    <span className="text-xs font-mono text-muted-foreground block">Mon poste</span>
                    <span className="text-sm font-bold text-secondary">Helpdesk — Sofiane</span>
                    <span className="absolute -right-2 -top-2 px-2 py-0.5 text-[9px] font-mono bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                      1ère ligne
                    </span>
                  </motion.div>
                </div>
                <p className="text-foreground/60 text-xs text-center mt-3 italic">
                  "J'étais positionné en première ligne du support utilisateur."
                </p>
              </div>

              {/* Environnement technique */}
              <div>
                <span className="text-xs font-mono text-gold/80 uppercase tracking-wider mb-3 block">
                  Environnement technique
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {envTechnique.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col items-center gap-2 p-3 rounded-md bg-muted/20 border border-border/30 hover:border-gold/30 hover:bg-gold/5 transition-all group"
                    >
                      <item.icon size={18} className="text-primary group-hover:text-gold transition-colors" />
                      <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground/80 text-center transition-colors">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* ANALYSE DU SI */}
          <SectionCard>
            <div className="p-6 md:p-8">
              <h3 className="font-orbitron text-base font-bold text-gold mb-2">
                ANALYSE DU SYSTÈME D'INFORMATION
              </h3>
              <p className="text-foreground/60 text-xs font-mono mb-6">// vision_stratégique</p>

              <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                <p>
                  Le CETIM est une structure dans laquelle le système d'information joue un <span className="text-gold font-semibold">rôle central</span> dans les activités industrielles et de recherche.
                </p>
                <p>
                  Loin d'être un simple support, l'informatique constitue un <span className="text-gold font-semibold">levier de performance globale</span>, permettant d'assurer la continuité des activités, la productivité des équipes et la sécurisation des données.
                </p>
                <p>
                  Au cours de mon expérience, j'ai compris que le système d'information fonctionne comme un <span className="text-primary font-semibold">écosystème</span>, où chaque composant (réseau, système, utilisateurs) est interconnecté.
                </p>
                <p>
                  Ainsi, un incident technique peut avoir des impacts bien plus larges qu'un simple dysfonctionnement local, en affectant l'organisation et l'efficacité globale de l'entreprise.
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-md border border-gold/25 bg-gold/5 italic text-foreground/70"
                >
                  "Le rôle du support informatique, et notamment du helpdesk, est donc essentiel puisqu'il constitue le <span className="text-gold font-semibold not-italic">point d'entrée du système d'information</span> et le premier niveau de garantie de sa stabilité."
                </motion.p>
              </div>
            </div>
          </SectionCard>

          {/* 2. PROCESSUS DE SUPPORT — WORKFLOW GLPI */}
          <SectionCard>
            <div className="p-6 md:p-8">
              <h3 className="font-orbitron text-base font-bold text-gold mb-2">PROCESSUS DE SUPPORT</h3>
              <p className="text-foreground/60 text-xs font-mono mb-6">// workflow_glpi</p>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Les demandes utilisateurs étaient traitées via GLPI selon un processus structuré :
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
                {glpiWorkflow.map((item, i) => (
                  <div key={item.step} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center px-4 py-3 glass-card rounded-md border border-gold/20 hover:border-gold/40 hover:bg-gold/5 transition-all"
                    >
                      <span className="text-[10px] font-mono text-gold/60 mb-1">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-xs font-semibold text-foreground">{item.step}</span>
                      <span className="text-[10px] text-muted-foreground">{item.desc}</span>
                    </motion.div>
                    {i < glpiWorkflow.length - 1 && (
                      <ArrowRight size={14} className="text-gold/40 mx-1 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          {/* 3. MON QUOTIDIEN */}
          <SectionCard>
            <div className="p-6 md:p-8">
              <h3 className="font-orbitron text-base font-bold text-gold mb-2">MON QUOTIDIEN</h3>
              <p className="text-foreground/60 text-xs font-mono mb-6">// missions_et_réalités</p>

              {/* Missions grid */}
              <div className="mb-8">
                <span className="text-xs font-mono text-gold/80 uppercase tracking-wider mb-4 block">
                  Missions principales
                </span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {missions.map((mission, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-md bg-muted/20 border border-border/30 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 group"
                    >
                      <mission.icon size={15} className="text-primary group-hover:text-gold mt-0.5 shrink-0 transition-colors" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">{mission.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Difficultés rencontrées */}
              <div className="mb-8">
                <span className="text-xs font-mono text-destructive/80 uppercase tracking-wider mb-4 block flex items-center gap-2">
                  <AlertTriangle size={12} />
                  Difficultés rencontrées
                </span>
                <div className="space-y-3">
                  {difficultes.map((diff, i) => (
                    <motion.div
                      key={diff.title}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-md bg-destructive/5 border border-destructive/20 hover:border-destructive/40 transition-all"
                    >
                      <span className="text-sm font-semibold text-foreground block mb-1">{diff.title}</span>
                      <span className="text-xs text-muted-foreground">{diff.description}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-foreground/60 text-xs italic mt-3">
                  "Certains incidents nécessitaient une analyse approfondie, notamment pour distinguer un problème réseau d'un problème poste."
                </p>
              </div>

              {/* Travail en équipe + Planning + Retour */}
              <div className="grid sm:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-md bg-muted/20 border border-border/30"
                >
                  <Users size={16} className="text-gold mb-2" />
                  <span className="text-xs font-semibold text-foreground block mb-1">Travail en équipe</span>
                  <span className="text-[11px] text-muted-foreground">
                    "Je collaborais avec les administrateurs systèmes et réseaux pour les incidents complexes."
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-4 rounded-md bg-muted/20 border border-border/30"
                >
                  <Clock size={16} className="text-gold mb-2" />
                  <span className="text-xs font-semibold text-foreground block mb-1">Planning réel</span>
                  <span className="text-[11px] text-muted-foreground">
                    "Le planning était régulièrement adapté en fonction des incidents imprévus."
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-4 rounded-md bg-muted/20 border border-border/30"
                >
                  <MessageSquare size={16} className="text-gold mb-2" />
                  <span className="text-xs font-semibold text-foreground block mb-1">Retour utilisateur</span>
                  <span className="text-[11px] text-muted-foreground">
                    "Les utilisateurs attendaient des solutions rapides, ce qui m'a permis de développer ma réactivité et ma communication."
                  </span>
                </motion.div>
              </div>
            </div>
          </SectionCard>

          {/* 4. PARTIE TECHNIQUE — AVANT/APRÈS + ROLLBACK */}
          <SectionCard>
            <div className="p-6 md:p-8">
              <h3 className="font-orbitron text-base font-bold text-gold mb-2">PARTIE TECHNIQUE</h3>
              <p className="text-foreground/60 text-xs font-mono mb-6">// avant_après_&_rollback</p>

              {/* Avant / Après */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-md bg-destructive/5 border border-destructive/20"
                >
                  <span className="text-xs font-mono text-destructive uppercase tracking-wider mb-3 block">❌ Avant</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-destructive mt-0.5">•</span>
                      Installation manuelle de chaque poste
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-destructive mt-0.5">•</span>
                      Temps d'intervention long
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-destructive mt-0.5">•</span>
                      Configurations non standardisées
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-md bg-secondary/5 border border-secondary/20"
                >
                  <span className="text-xs font-mono text-secondary uppercase tracking-wider mb-3 block">✅ Après</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-secondary mt-0.5">•</span>
                      Déploiement automatisé via MDT / PXE
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-secondary mt-0.5">•</span>
                      Gain de temps considérable
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-secondary mt-0.5">•</span>
                      Postes identiques et conformes
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Procédures de test */}
              <div className="mb-8 p-4 rounded-md bg-muted/20 border border-border/30">
                <span className="text-xs font-mono text-primary/80 uppercase tracking-wider mb-2 block flex items-center gap-2">
                  <CheckCircle2 size={12} />
                  Procédures de test
                </span>
                <p className="text-sm text-foreground/70">
                  "Chaque solution était testée en reproduisant le problème ou en vérifiant le bon fonctionnement après intervention."
                </p>
              </div>

              {/* Plan de reprise / Rollback */}
              <div className="p-5 rounded-md border border-gold/25 bg-gold/5">
                <span className="text-xs font-mono text-gold uppercase tracking-wider mb-3 block flex items-center gap-2">
                  <GitBranch size={12} />
                  Plan de reprise (Rollback)
                </span>
                <p className="text-sm text-foreground/70 mb-4">
                  "En cas de problème, plusieurs solutions étaient possibles :"
                </p>
                <div className="space-y-2">
                  {[
                    "Réintégration au domaine Active Directory",
                    "Restauration des droits NTFS / GPO",
                    "Redéploiement complet du poste via MDT",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-sm text-foreground/80"
                    >
                      <span className="w-6 h-6 rounded-full bg-gold/20 text-gold text-[10px] font-mono flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* TRANSITION CLOUD — MICROSOFT INTUNE */}
          <SectionCard>
            <div className="p-6 md:p-8">
              <h3 className="font-orbitron text-base font-bold text-gold mb-2">TRANSITION VERS LA GESTION CLOUD</h3>
              <p className="text-foreground/60 text-xs font-mono mb-6">// microsoft_intune</p>

              <div className="space-y-5">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Dans une logique d'évolution des pratiques, la gestion des postes a progressivement évolué d'un modèle traditionnel basé sur <span className="text-gold font-semibold">MDT</span> vers une approche cloud avec <span className="text-gold font-semibold">Microsoft Intune</span>.
                </p>

                {/* Comparaison MDT vs Intune */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-md border border-foreground/10 bg-foreground/5"
                  >
                    <span className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-3 block flex items-center gap-2">
                      <Server size={12} />
                      MDT — On-Premise
                    </span>
                    <ul className="space-y-2">
                      {["Infrastructure locale requise", "Déploiement via PXE / réseau interne", "Dépendance au réseau physique"].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-foreground/40 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-md border border-gold/30 bg-gold/5"
                    style={{ boxShadow: "0 0 20px hsl(43 74% 52% / 0.08)" }}
                  >
                    <span className="text-xs font-mono text-gold uppercase tracking-wider mb-3 block flex items-center gap-2">
                      <Cloud size={12} />
                      Intune — Cloud
                    </span>
                    <ul className="space-y-2">
                      {["Gestion à distance via Internet", "Configuration automatique des postes", "Déploiement d'applications & politiques de sécurité"].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gold/80">
                          <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed">
                  Contrairement à MDT, qui repose sur une infrastructure locale, Intune permet de gérer les équipements à distance, sans dépendre du réseau interne de l'entreprise. Cette approche offre une plus grande <span className="text-gold font-semibold">flexibilité</span>, notamment pour les utilisateurs en mobilité.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-md border border-gold/25 bg-gold/5"
                >
                  <p className="text-sm text-foreground/80 leading-relaxed italic">
                    "Cette transition illustre le passage d'une infrastructure <span className="text-gold font-semibold">on-premise</span> vers une gestion moderne basée sur le <span className="text-gold font-semibold">cloud</span>, plus adaptée aux environnements actuels."
                  </p>
                </motion.div>
              </div>
            </div>
          </SectionCard>

          {/* 5. EXEMPLE CONCRET — CG-NAT */}
          <SectionCard>
            <div className="p-6 md:p-8">
              <h3 className="font-orbitron text-base font-bold text-gold mb-2">EXEMPLE CONCRET</h3>
              <p className="text-foreground/60 text-xs font-mono mb-6">// cas_réel_résolu</p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-md border border-gold/30 bg-gold/5"
                style={{ boxShadow: "0 0 30px hsl(43 74% 52% / 0.1)" }}
              >
                <Zap size={20} className="text-gold absolute top-4 right-4" />

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-destructive/80 uppercase tracking-wider block mb-1">Problème</span>
                    <p className="text-sm text-foreground/80">
                      Un utilisateur ne pouvait pas accéder à distance via une connexion mobile, mais cela fonctionnait parfaitement avec une box internet classique.
                    </p>
                  </div>

                  <div className="w-full h-px bg-gold/20" />

                  <div>
                    <span className="text-xs font-mono text-primary/80 uppercase tracking-wider block mb-1">Diagnostic</span>
                    <p className="text-sm text-foreground/80">
                      Après analyse, j'ai identifié un problème lié au réseau mobile utilisant le <span className="text-gold font-semibold">CG-NAT</span> (Carrier-Grade NAT), empêchant certaines connexions entrantes vers l'infrastructure de l'entreprise.
                    </p>
                  </div>

                  <div className="w-full h-px bg-gold/20" />

                  <div>
                    <span className="text-xs font-mono text-secondary/80 uppercase tracking-wider block mb-1">Résolution</span>
                    <p className="text-sm text-foreground/80">
                      Identification du mécanisme de CG-NAT et proposition d'alternatives (VPN, changement d'APN, contact opérateur pour IP publique dédiée).
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionCard>

          {/* 6. OPTIMISATION XOLIDO */}
          <SectionCard>
            <div className="p-6 md:p-8">
              <h3 className="font-orbitron text-base font-bold text-gold mb-2">SITUATION : OPTIMISATION DU TRAITEMENT DES TICKETS XOLIDO</h3>
              <p className="text-foreground/60 text-xs font-mono mb-6">// amélioration_processus</p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-md border border-gold/30 bg-gold/5"
                style={{ boxShadow: "0 0 30px hsl(43 74% 52% / 0.1)" }}
              >
                <Wrench size={20} className="text-gold absolute top-4 right-4" />

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-destructive/80 uppercase tracking-wider block mb-1">Constat</span>
                    <p className="text-sm text-foreground/80">
                      Dans le cadre de la gestion des tickets via Xolido, certains champs comme l'approbateur et le rédacteur étaient renseignés <span className="text-destructive font-semibold">manuellement</span>, ce qui entraînait une perte de temps et des risques d'erreurs.
                    </p>
                  </div>

                  <div className="w-full h-px bg-gold/20" />

                  <div>
                    <span className="text-xs font-mono text-primary/80 uppercase tracking-wider block mb-1">Analyse</span>
                    <p className="text-sm text-foreground/80">
                      Après analyse du fonctionnement, j'ai identifié que ces informations pouvaient être <span className="text-primary font-semibold">automatisées</span>.
                    </p>
                  </div>

                  <div className="w-full h-px bg-gold/20" />

                  <div>
                    <span className="text-xs font-mono text-gold/80 uppercase tracking-wider block mb-1">Solution</span>
                    <p className="text-sm text-foreground/80">
                      J'ai proposé une amélioration en modifiant le <span className="text-gold font-semibold">fichier XML de configuration</span>, permettant de pré-remplir automatiquement certains champs.
                    </p>
                  </div>

                  <div className="w-full h-px bg-gold/20" />

                  <div>
                    <span className="text-xs font-mono text-secondary/80 uppercase tracking-wider block mb-1">Résultat</span>
                    <p className="text-sm text-foreground/80">
                      Cette optimisation a permis de <span className="text-secondary font-semibold">gagner du temps</span>, de fiabiliser le processus et d'améliorer l'efficacité globale du traitement des tickets.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionCard>

          {/* 7. CONCLUSION */}
          <SectionCard>
            <div className="p-6 md:p-8">
              <h3 className="font-orbitron text-base font-bold text-gold mb-4">BILAN</h3>
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border-l-2 border-gold/50 pl-5 text-sm text-foreground/80 leading-relaxed italic"
              >
                "Cette expérience m'a permis de développer une méthode de diagnostic, de comprendre le fonctionnement global d'un système d'information et de travailler dans un environnement professionnel structuré. J'ai appris à gérer la pression des utilisateurs, à collaborer avec une équipe technique et à documenter rigoureusement chaque intervention."
              </motion.blockquote>
            </div>
          </SectionCard>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
