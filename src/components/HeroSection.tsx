import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Olá, eu sou
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">Guilherme Calixto</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Estudante de Engenharia de Software
        </p>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
          Em transição de carreira para a área de TI, focado em React e
          desenvolvimento Web Moderno. Transformo ideias em código funcional e
          bem estruturado.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="glow">
            <a href="#contact">Fale comigo</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">Ver projetos</a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
