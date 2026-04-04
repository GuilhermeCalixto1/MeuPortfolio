import { GraduationCap, Wrench, Target } from "lucide-react";
import profileImg from "@/images/877e467e-1f49-408a-8bfd-63ab97b800f8.jpeg";

const highlights = [
  { icon: GraduationCap, label: "UBM", desc: "Engenharia de Software" },
  { icon: Wrench, label: "4 anos", desc: "experiência industrial (CSN)" },
  { icon: Target, label: "Foco", desc: "React & Web Moderno" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Sobre <span className="gradient-text">mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl glass glow overflow-hidden">
              <img
                src={profileImg}
                alt="Guilherme Calixto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Olá! Meu nome é Guilherme Calixto, tenho 26 anos e sou estudante
              de Engenharia de Software pela UBM. Estou em transição de carreira
              vindo da área industrial — atuo há 4 anos na CSN como mecânico,
              experiência que me proporcionou uma base sólida de disciplina,
              resolução de problemas e trabalho em equipe.
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
