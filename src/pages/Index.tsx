import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LazySection from "@/components/LazySection";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const LineWaves = lazy(() => import("@/components/LineWaves"));

const Index = () => {
  const isMobile = useIsMobile();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotionPreferenceChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    handleMotionPreferenceChange();
    handleVisibilityChange();

    mediaQuery.addEventListener("change", handleMotionPreferenceChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const shouldRenderLineWaves = !isMobile && !prefersReducedMotion;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {shouldRenderLineWaves ? (
        <Suspense fallback={null}>
          <div className="pointer-events-none fixed inset-0" aria-hidden="true">
            <LineWaves paused={!isPageVisible} targetFps={24} />
          </div>
        </Suspense>
      ) : null}

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <LazySection
          placeholderMinHeight="860px"
          placeholderClassName="mx-4 my-24 h-[760px] rounded-3xl border border-border/30 bg-muted/15 animate-pulse"
          fallback={<div className="mx-4 my-24 h-[760px] rounded-3xl border border-border/30 bg-muted/15 animate-pulse" />}
        >
          <AboutSection />
        </LazySection>
        <LazySection
          placeholderMinHeight="460px"
          placeholderClassName="mx-4 my-24 h-[360px] rounded-3xl border border-border/30 bg-muted/15 animate-pulse"
          fallback={<div className="mx-4 my-24 h-[360px] rounded-3xl border border-border/30 bg-muted/15 animate-pulse" />}
        >
          <SkillsSection />
        </LazySection>
        <LazySection
          placeholderMinHeight="1500px"
          placeholderClassName="mx-4 my-24 h-[1400px] rounded-3xl border border-border/30 bg-muted/15 animate-pulse"
          fallback={<div className="mx-4 my-24 h-[1400px] rounded-3xl border border-border/30 bg-muted/15 animate-pulse" />}
        >
          <ProjectsSection />
        </LazySection>
        <LazySection
          placeholderMinHeight="680px"
          placeholderClassName="mx-4 my-24 h-[560px] rounded-3xl border border-border/30 bg-muted/15 animate-pulse"
          fallback={<div className="mx-4 my-24 h-[560px] rounded-3xl border border-border/30 bg-muted/15 animate-pulse" />}
        >
          <ContactSection />
        </LazySection>
        <LazySection
          placeholderMinHeight="140px"
          placeholderClassName="mx-4 mb-8 h-16 rounded-2xl border border-border/30 bg-muted/15 animate-pulse"
          fallback={<div className="mx-4 mb-8 h-16 rounded-2xl border border-border/30 bg-muted/15 animate-pulse" />}
        >
          <Footer />
        </LazySection>
      </div>
    </div>
  );
};

export default Index;
