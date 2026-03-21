import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const annexePdfs: Record<string, { title: string; pdf: string }> = {
  "1": {
    title: "PPE 1 — InduSaaS",
    pdf: "/docs/Annexe_PPE1_remplie.pdf",
  },
  "2": {
    title: "PPE 2 — Architecture réseau sécurisée",
    pdf: "/docs/Annexe_VII-1-A_modele.pdf",
  },
  "3": {
    title: "PPE 3 — Ansible & TechScale",
    pdf: "/docs/Annexe_VII-1-A_modele.pdf",
  },
};

const AnnexePage = () => {
  const { id } = useParams<{ id: string }>();
  const annexe = id ? annexePdfs[id] : null;

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
        <div className="max-w-5xl mx-auto">
          <Link
            to="/#ppe"
            className="inline-flex items-center gap-2 text-xs font-mono text-primary/70 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Retour aux projets PPE
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-primary font-orbitron text-lg md:text-xl font-bold">
                {annexe.title} — Annexe VII-1-A
              </h1>
              <a
                href={annexe.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded hover:bg-primary/20 transition-colors"
              >
                <Download size={14} />
                Télécharger
              </a>
            </div>

            <div className="glass-card rounded-lg overflow-hidden">
              <iframe
                src={annexe.pdf}
                title={`Annexe ${annexe.title}`}
                className="w-full border-0"
                style={{ height: "85vh" }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AnnexePage;
