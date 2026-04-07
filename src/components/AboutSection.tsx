import { GraduationCap, Wrench, Target } from "lucide-react";
import profileImg from "@/images/Adobe Express - file.png";
import ProfileCard from "./ProfileCard";

const highlights = [
  { icon: GraduationCap, label: "UBM", desc: "Engenharia de Software" },
  { icon: Wrench, label: "4 anos", desc: "experiência industrial (CSN)" },
  { icon: Target, label: "Foco", desc: "React & Web Moderno" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-muted-foreground">
          Sobre <span className="gradient-text">mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-[280px] h-[380px] md:w-[390px] md:h-[500px] rounded-2xl glass glow overflow-hidden flex items-center justify-center">
              <ProfileCard
                name="Guilherme Calixto"
                title="Estudante de Engenharia de Software"
                avatarUrl={profileImg}
                handle="GuiCalixto"
                onContactClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Olá! Meu nome é Guilherme Calixto, tenho 26 anos e sou estudante
              no 2º semestre de Engenharia de Software pela UBM. Estou em
              transição de carreira vindo da área industrial — atuo há 4 anos na
              CSN como mecânico, experiência que me proporcionou uma base sólida
              de disciplina, resolução de problemas e trabalho em equipe.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Busco minha primeira oportunidade na área de TI para aplicar essa
              maturidade profissional somada aos meus conhecimentos técnicos.
              Atualmente, foco meus estudos em React e desenvolvimento Web
              Moderno, criando projetos funcionais com React, JavaScript,
              Bootstrap e HTML.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="glass rounded-xl p-4 text-center">
                  <h.icon className="mx-auto mb-2 text-primary" size={24} />
                  <p className="font-bold text-lg">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
