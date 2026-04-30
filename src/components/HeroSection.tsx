import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveReveal from "@/components/animata/text/wave-reveal";
import { useIsMobile } from "@/hooks/use-mobile";

const ASCIIText = lazy(() => import("./ASCIIText"));

const getHeroAsciiConfig = (viewportWidth: number) => {
  if (viewportWidth < 768) {
    return {
      asciiFontSize: 4.75,
      textFontSize: 180,
      planeBaseHeight: 3.1,
    };
  }

  if (viewportWidth < 1536) {
    return {
      asciiFontSize: 6.25,
      textFontSize: 400,
      planeBaseHeight: 5.8,
    };
  }

  return {
    asciiFontSize: 8.5,
    textFontSize: 600,
    planeBaseHeight: 8.3,
  };
};

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: () => void,
    options?: { timeout: number },
  ) => number;
  cancelIdleCallback?: (id: number) => void;
};

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [viewportWidth, setViewportWidth] = useState(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    return window.innerWidth;
  });
  const [shouldLoadAscii, setShouldLoadAscii] = useState(false);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);

    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const { asciiFontSize, textFontSize, planeBaseHeight } =
    getHeroAsciiConfig(viewportWidth);

  useEffect(() => {
    const win = window as IdleWindow;
    let timeoutId: number | null = null;
    let idleId: number | null = null;

    if (!isMobile && typeof win.requestIdleCallback === "function") {
      idleId = win.requestIdleCallback(() => setShouldLoadAscii(true), {
        timeout: 1800,
      });
    } else {
      timeoutId = window.setTimeout(
        () => setShouldLoadAscii(true),
        isMobile ? 450 : 1200,
      );
    }

    return () => {
      if (idleId != null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleId);
      }
      if (timeoutId != null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isMobile]);

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center overflow-hidden ${isMobile ? "justify-start" : "justify-center"}`}
    >
      <div className="md:h-100 absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 [mask-image:linear-gradient(to_bottom,black_0%,black_72%,transparent_100%)]" />

      <>
        <div
          className={`absolute inset-x-0 z-20 pointer-events-none overflow-hidden ${isMobile ? "top-4 h-[300px] sm:h-[220px]" : "top-10 md:top-12 h-[320px] md:h-[360px]"}`}
        >
          {shouldLoadAscii ? (
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center px-4 text-center">
                  <p
                    className={`font-bold tracking-[0.25em] uppercase ${isMobile ? "text-2xl" : "text-4xl md:text-5xl"}`}
                    style={{ color: "#fdf9f3" }}
                  >
                    {isMobile ? "Bem vindo!" : "Bem vindo ao meu portfólio"}
                  </p>
                </div>
              }
            >
              <ASCIIText
                text={isMobile ? "BEM VINDO!" : "BEM VINDO AO MEU PORTFÓLIO"}
                asciiFontSize={isMobile ? 5.5 : asciiFontSize}
                textFontSize={isMobile ? 220 : textFontSize}
                textColor="#fdf9f3"
                planeBaseHeight={isMobile ? 3.4 : planeBaseHeight}
                enableWaves={true}
                textHeightScale={1.2}
              />
            </Suspense>
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center">
              <p
                className={`font-bold tracking-[0.25em] uppercase ${isMobile ? "text-2xl" : "text-4xl md:text-5xl"}`}
                style={{ color: "#fdf9f3" }}
              >
                {isMobile ? "Bem vindo!" : "Bem vindo ao meu portfólio"}
              </p>
            </div>
          )}
        </div>
        <div
          className={`${isMobile ? "h-[250px] sm:h-[290px]" : "h-[270px] md:h-[320px]"} w-full flex-shrink-0`}
        />
      </>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div
        className={`relative z-10 text-center px-4 max-w-3xl mx-auto ${isMobile ? "mt-0" : ""}`}
      >
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
