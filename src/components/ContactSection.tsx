import { motion } from "framer-motion";
import { Mail, Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-gold text-glow-gold mb-2">
            CONTACT
          </h2>
          <p className="font-mono text-xs text-muted-foreground tracking-wider mb-10">
            // établir_connexion
          </p>

          <p className="font-rajdhani text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Vous souhaitez en savoir plus sur mon parcours ou discuter d'un projet ?
            N'hésitez pas à me contacter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sofianetouil50@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 font-mono text-sm uppercase tracking-wider border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 box-glow rounded-sm"
            >
              <Mail size={16} />
              sofianetouil50@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/sofiane-touil-63b467200/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 font-mono text-sm uppercase tracking-wider border border-[hsl(210,80%,55%)]/50 text-[hsl(210,80%,65%)] hover:bg-[hsl(210,80%,55%)]/10 transition-all duration-300 rounded-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href="/docs/CV_Sofiane_Touil.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 font-mono text-sm uppercase tracking-wider bg-gold/10 border border-gold/50 text-gold hover:bg-gold/20 transition-all duration-300 box-glow-gold rounded-sm"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
