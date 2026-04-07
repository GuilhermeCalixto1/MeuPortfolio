import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveReveal from "@/components/animata/text/wave-reveal";
import TextPressure from "./TextPressure";
import ASCIIText from "./ASCIIText";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center overflow-hidden ${isMobile ? "justify-start" : "justify-center"}`}
    >
      <div className="md:h-100 absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 [mask-image:linear-gradient(to_bottom,black_0%,black_72%,transparent_100%)]" />

      {isMobile ? (
        <>
          <div className="absolute inset-x-0 top-0 z-20 h-[340px] sm:h-[260px] pointer-events-none">
            <ASCIIText
              text="BEM VINDO!"
              asciiFontSize={6}
              textFontSize={300}
              textColor="#fdf9f3"
              planeBaseHeight={4}
              enableWaves={true}
            />
          </div>
          <div className="h-[220px] sm:h-[260px] w-full flex-shrink-0" />
        </>
      ) : (
        <div className="w-full h-full md:h-80 mb-8">
          <TextPressure
            text="BEM VINDO AO MEU PORTFÓLIO"
            className="gradient-text"
            textColor="transparent"
            scale={true}
            flex={true}
          />
        </div>
      )}

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className={`relative z-10 text-center px-4 max-w-3xl mx-auto ${isMobile ? "mt-0" : ""}`}>
        <WaveReveal
          text="Meu nome é"
          mode="word"
          duration="1100ms"
          delay={150}
          className="!px-0"
          letterClassName="text-3xl text-muted-foreground"
        />
        <h1 className="mb-4">
          <WaveReveal
            text="Guilherme Calixto"
            mode="word"
            duration="1100ms"
            delay={150}
            className="!px-0"
            letterClassName="gradient-text  font-bold"
          />
        </h1>
        <WaveReveal
          text="Estudante de Engenharia de Software"
          mode="word"
          duration="1100ms"
          delay={500}
          className="mb-8 !px-0"
          letterClassName="text-sm md:text-2xl text-muted-foreground"
        />
        <WaveReveal
          text="Em transição de carreira para a área de TI, focado em React e desenvolvimento Web Moderno. Transformo ideias em código funcional e bem estruturado."
          mode="word"
          duration="1100ms"
          delay={750}
          className="max-w-lg mx-auto mb-10 !px-0"
          letterClassName="text-sm text-muted-foreground leading-relaxed"
        />
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
