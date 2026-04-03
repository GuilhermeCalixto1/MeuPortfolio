import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "5+ anos", desc: "de experiência" },
  { icon: Rocket, label: "50+", desc: "projetos entregues" },
  { icon: Users, label: "30+", desc: "clientes satisfeitos" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Sobre <span className="gradient-text">mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl glass glow flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sou um desenvolvedor web fullstack apaixonado por criar soluções
              digitais elegantes e funcionais. Com experiência em React,
              TypeScript, Node.js e diversas outras tecnologias modernas, busco
              sempre entregar código limpo, performático e de fácil manutenção.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Acredito que a tecnologia deve servir as pessoas, por isso foco em
              criar interfaces intuitivas e experiências que façam diferença no
              dia a dia dos usuários.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="glass rounded-xl p-4 text-center"
                >
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
