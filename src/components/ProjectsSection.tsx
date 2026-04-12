import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import gerenciadorImg from "@/images/Captura de tela 2026-02-15 203832.png";
import orcamentoImg from "@/images/Captura de tela 2026-04-03 194318.png";
import crudImg from "@/images/Captura de tela 2026-04-03 194249.png";
import calculadoraImg from "@/images/Captura de tela 2026-04-03 195004.png";
import mosquitoImg from "@/images/Captura de tela 2026-04-03 194200.png";
import validacaoImg from "@/images/Captura de tela 2026-04-03 204123.png";
import seitools1Img from "@/images/SeiTools1.png";
import gerenciadorReadme from "@/readmes/gerenciador.md?raw";
import orcamentoReadme from "@/readmes/orcamentopessoal.md?raw";
import crudReadme from "@/readmes/controlecrud.md?raw";
import calculadoraReadme from "@/readmes/calculadora.md?raw";
import mosquitoReadme from "@/readmes/matamosquito.md?raw";
import validacaoReadme from "@/readmes/validacaoform.md?raw";
import seiToolsReadme from "@/readmes/SeiTools.md?raw";

type Project = {
  title: string;
  description: string;
  tags: string[];
  demo: string;
  code: string;
  image: string;
  readme: string;
};

const projects: Project[] = [
  {
    title: "Gerenciador de Tarefas React",
    description:
      "SPA com React Router DOM, persistência via localStorage, estilização com Tailwind CSS e gerenciamento de estado completo (criar, listar, deletar e concluir tarefas).",
    tags: ["React", "Tailwind CSS", "React Router DOM", "localStorage"],
    demo: "https://gerenciador-de-tarefas-react-six.vercel.app",
    code: "https://github.com/GuilhermeCalixto1",
    image: gerenciadorImg,
    readme: gerenciadorReadme,
  },
  {
    title: "Orçamento Pessoal",
    description:
      "Aplicativo web para controle financeiro pessoal com cadastro, consulta e gerenciamento de despesas. Utiliza POO em JavaScript e persistência com LocalStorage.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    demo: "https://orcamento-pessoal-lilac.vercel.app/",
    code: "https://github.com/GuilhermeCalixto1/OrcamentoPessoal",
    image: orcamentoImg,
    readme: orcamentoReadme,
  },
  {
    title: "Controle de Fornecedores (CRUD)",
    description:
      "Aplicação Fullstack que consome uma API REST real hospedada na nuvem. CRUD completo com Vite, Axios e padrão de camadas.",
    tags: ["JavaScript", "Vite", "Axios", "Node.js", "CSS3"],
    demo: "https://projeto-crud-eta.vercel.app",
    code: "https://github.com/GuilhermeCalixto1/Projeto-CRUD",
    image: crudImg,
    readme: crudReadme,
  },
  {
    title: "Calculadora",
    description:
      "Calculadora funcional e responsiva com tema Dark/Purple, CSS Grid, tratamento de erros e design adaptável a diferentes tamanhos de tela.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://projeto-calculadora-pied-nine.vercel.app",
    code: "https://github.com/GuilhermeCalixto1",
    image: calculadoraImg,
    readme: calculadoraReadme,
  },
  {
    title: "Game Mata Mosquito",
    description:
      "Jogo interativo em JavaScript puro com geração randômica de mosquitos, sistema de vidas, cronômetro e 3 níveis de dificuldade. Responsivo e divertido!",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    demo: "https://projeto-app-mata-mosquito.vercel.app/",
    code: "https://github.com/GuilhermeCalixto1/Projeto-AppMataMosquito",
    image: mosquitoImg,
    readme: mosquitoReadme,
  },
  {
    title: "Validação de Formulário",
    description:
      "Formulário de registo com validação em tempo real (JS/Regex) e interface Dark Mode focada em UX. O projeto pratica a manipulação do DOM e garante a integridade dos dados com feedbacks visuais e prevenção de erros.",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Regex"],
    demo: "https://validacao-de-formulario-three.vercel.app/",
    code: "https://github.com/GuilhermeCalixto1/ValidacaoDeFormulario",
    image: validacaoImg,
    readme: validacaoReadme,
  },
  {
    title: "SeiTools",
    description:
      "Sistema web empresarial para gestão de materiais e ferramentaria, com controle de estoque, empréstimos e devoluções, dashboard analítico, auditoria de ações e níveis de acesso por perfil. Inclui exportação de relatórios e fluxo administrativo completo.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Radix UI",
      "Recharts",
    ],
    demo: "https://pedidos-de-materiais.vercel.app/",
    code: "https://github.com/GuilhermeCalixto1/PedidosDeMateriais",
    image: seitools1Img,
    readme: seiToolsReadme,
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const markdownComponents: Components = {
    h1: ({ children }) => (
      <h1 className="mt-2 mb-4 text-2xl font-bold tracking-tight text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-7 mb-3 border-b border-border/60 pb-2 text-xl font-semibold text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 text-lg font-semibold text-foreground">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-[0.95rem] text-muted-foreground">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-5 list-disc space-y-1 text-muted-foreground">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-5 list-decimal space-y-1 text-muted-foreground">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
      >
        {children}
      </a>
    ),
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt ?? "Imagem do README"}
        className="my-4 mx-auto h-auto max-h-[260px] w-auto max-w-full rounded-lg border border-border/60 bg-card object-contain"
      />
    ),
    table: ({ children }) => (
      <div className="my-5 overflow-x-auto rounded-lg border border-border/60">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="bg-muted px-3 py-2 text-left font-semibold text-foreground">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border-t border-border/50 px-3 py-2 align-top text-muted-foreground">{children}</td>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-primary/60 bg-muted/40 px-4 py-2 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg border border-border/60 bg-muted/70 p-4 text-sm">
        {children}
      </pre>
    ),
    code: ({ children, className }) => {
      const content = String(children ?? "");
      const isBlockCode = content.includes("\n") || Boolean(className);

      if (isBlockCode) {
        return <code className="text-[0.9em] leading-6 text-foreground">{children}</code>;
      }

      return <code className="rounded bg-muted px-1.5 py-0.5 text-[0.85em] text-foreground">{children}</code>;
    },
    hr: () => <hr className="my-8 border-border/60" />,
  };

  const lastIndex = projects.length - 1;
  const hasSoloCardAtSm = projects.length % 2 === 1;
  const hasSoloCardAtLg = projects.length % 3 === 1;

  const detailsTitle = useMemo(
    () =>
      selectedProject
        ? `Detalhes - ${selectedProject.title}`
        : "Detalhes do projeto",
    [selectedProject],
  );

  const renderProjectCard = (
    project: (typeof projects)[number],
    index: number,
  ) => {
    const isSeiTools = project.title === "SeiTools";
    const isLastSeiTools = isSeiTools && index === lastIndex;

    const soloRowSpanClasses = `${
      isLastSeiTools && hasSoloCardAtSm ? "sm:col-span-2" : ""
    } ${isLastSeiTools && hasSoloCardAtLg ? "lg:col-span-3" : ""}`.trim();

    const soloRowWidthClasses =
      isLastSeiTools && (hasSoloCardAtSm || hasSoloCardAtLg)
        ? "sm:max-w-3xl sm:mx-auto"
        : "";

    return (
      <div
        key={project.title}
        className={`glass h-full rounded-2xl overflow-hidden group hover:glow hover:border-primary/50 transition-all duration-300 flex flex-col ${soloRowSpanClasses} ${soloRowWidthClasses} ${
          isSeiTools ? "min-h-[460px]" : "min-h-[520px]"
        }`}
      >
        <div
          className={`overflow-hidden ${
            isSeiTools
              ? "h-52 bg-white flex items-center justify-center p-5"
              : "h-44"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
              isSeiTools ? "object-contain" : "object-cover"
            }`}
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

          <div className="mt-auto space-y-2 pt-2">
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
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

            <Button
              variant="secondary"
              size="sm"
              className="w-full"
              onClick={() => setSelectedProject(project)}
            >
              Detalhes
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-muted-foreground">
          Meus <span className="gradient-text">Projetos</span>
        </h2>

        <div className="grid items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(renderProjectCard)}
        </div>

        <Sheet
          open={Boolean(selectedProject)}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
        >
          <SheetContent
            side="top"
            className="h-[90vh] overflow-y-auto border-b border-border/60 bg-background/95 backdrop-blur"
          >
            <div className="mx-auto w-full max-w-5xl pt-6">
              <SheetHeader>
                <SheetTitle>{detailsTitle}</SheetTitle>
                <SheetDescription>
                  Visão completa do projeto e README técnico.
                </SheetDescription>
              </SheetHeader>

              {selectedProject ? (
                <div className="mt-6 space-y-6">
                  <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="h-auto max-h-[340px] w-full object-contain"
                    />
                  </div>

                  <article className="rounded-xl border border-border/60 bg-card p-5 md:p-7">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={markdownComponents}
                    >
                      {selectedProject.readme}
                    </ReactMarkdown>
                  </article>
                </div>
              ) : null}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default ProjectsSection;
