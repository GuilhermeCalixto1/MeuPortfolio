import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import gerenciadorImg from "@/images/Captura de tela 2026-02-15 203832.png";
import orcamentoImg from "@/images/Captura de tela 2026-04-03 194318.png";
import crudImg from "@/images/Captura de tela 2026-04-03 194249.png";
import calculadoraImg from "@/images/Captura de tela 2026-04-03 195004.png";
import mosquitoImg from "@/images/Captura de tela 2026-04-03 194200.png";
import validacaoImg from "@/images/Captura de tela 2026-04-03 204123.png";

const projects = [
  {
    title: "Gerenciador de Tarefas React",
    description:
      "SPA com React Router DOM, persistência via localStorage, estilização com Tailwind CSS e gerenciamento de estado completo (criar, listar, deletar e concluir tarefas).",
    tags: ["React", "Tailwind CSS", "React Router DOM", "localStorage"],
    demo: "https://gerenciador-de-tarefas-react-six.vercel.app",
    code: "https://github.com/GuilhermeCalixto1",
    image: gerenciadorImg,
  },
  {
    title: "Orçamento Pessoal",
    description:
      "Aplicativo web para controle financeiro pessoal com cadastro, consulta e gerenciamento de despesas. Utiliza POO em JavaScript e persistência com LocalStorage.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    demo: "https://orcamento-pessoal-lilac.vercel.app/",
    code: "https://github.com/GuilhermeCalixto1/OrcamentoPessoal",
    image: orcamentoImg,
  },
  {
    title: "Controle de Fornecedores (CRUD)",
    description:
      "Aplicação Fullstack que consome uma API REST real hospedada na nuvem. CRUD completo com Vite, Axios e padrão de camadas.",
    tags: ["JavaScript", "Vite", "Axios", "Node.js", "CSS3"],
    demo: "https://projeto-crud-eta.vercel.app",
    code: "https://github.com/GuilhermeCalixto1/Projeto-CRUD",
    image: crudImg,
  },
  {
    title: "Calculadora",
    description:
      "Calculadora funcional e responsiva com tema Dark/Purple, CSS Grid, tratamento de erros e design adaptável a diferentes tamanhos de tela.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://projeto-calculadora-pied-nine.vercel.app",
    code: "https://github.com/GuilhermeCalixto1",
    image: calculadoraImg,
  },
  {
    title: "Game Mata Mosquito",
    description:
      "Jogo interativo em JavaScript puro com geração randômica de mosquitos, sistema de vidas, cronômetro e 3 níveis de dificuldade. Responsivo e divertido!",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    demo: "https://projeto-app-mata-mosquito.vercel.app/",
    code: "https://github.com/GuilhermeCalixto1/Projeto-AppMataMosquito",
    image: mosquitoImg,
  },
  {
    title: "Validação de Formulário",
    description:
      "Formulário de registo com validação em tempo real (JS/Regex) e interface Dark Mode focada em UX. O projeto pratica a manipulação do DOM e garante a integridade dos dados com feedbacks visuais e prevenção de erros.",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Regex"],
    demo: "https://validacao-de-formulario-three.vercel.app/",
    code: "https://github.com/GuilhermeCalixto1/ValidacaoDeFormulario",
    image: validacaoImg,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-muted-foreground">
          Meus <span className="gradient-text">Projetos</span>
        </h2>

        <div className="grid items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass h-full min-h-[520px] rounded-2xl overflow-hidden group hover:glow hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-1 flex-col">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex gap-2 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="flex-1">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
