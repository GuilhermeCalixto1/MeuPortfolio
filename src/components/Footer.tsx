const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} João Silva. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-foreground transition-colors">Início</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projetos</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
