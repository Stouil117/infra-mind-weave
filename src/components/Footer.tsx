const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © 2025-2026 <span className="text-gold">Sofiane Touil</span> — BTS SIO SISR
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse-glow" />
          <p className="font-mono text-xs text-muted-foreground">
            Portfolio réalisé dans le cadre du BTS SIO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
