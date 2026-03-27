import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Systèmes",
    skills: ["Windows Server", "Active Directory", "Linux (Debian/Ubuntu)", "GPO", "DNS / DHCP"],
  },
  {
    title: "Réseaux",
    skills: ["Cisco IOS", "VLAN", "Routage inter-VLAN", "ACL", "Pare-feu", "TCP/IP"],
  },
  {
    title: "Virtualisation",
    skills: ["VMware ESXi", "Proxmox", "Hyper-V", "Docker"],
  },
  {
    title: "Automatisation & IaC",
    skills: ["Ansible", "YAML", "Bash", "PowerShell", "SSH"],
  },
  {
    title: "Supervision & Outils",
    skills: ["GLPI", "Zabbix", "Wireshark", "Packet Tracer"],
  },
  {
    title: "Intelligence Artificielle",
    skills: ["IA Prompting", "ChatGPT", "Copilot", "Automatisation IA"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
            STACK TECHNIQUE
          </h2>
          <p className="font-mono text-xs text-muted-foreground tracking-wider">
            // compétences_et_technologies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-lg p-5 group hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="font-orbitron text-sm font-bold text-primary mb-4 tracking-wider uppercase">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[11px] font-mono bg-primary/10 text-primary/90 border border-primary/25 rounded-sm transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
