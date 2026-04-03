import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Manager App",
    description: "App de gerenciamento de tarefas com drag & drop e colaboração em tempo real.",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    demo: "#",
    code: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos dinâmicos e relatórios em tempo real.",
    tags: ["React", "D3.js", "Tailwind", "REST API"],
    demo: "#",
    code: "#",
  },
  {
    title: "Social Media Clone",
    description: "Clone de rede social com feed, stories, chat e sistema de notificações.",
    tags: ["React", "Firebase", "Tailwind", "PWA"],
    demo: "#",
    code: "#",
  },
  {
    title: "Blog CMS",
    description: "Sistema de blog com editor rich-text, SEO otimizado e multi-idioma.",
    tags: ["Next.js", "MDX", "Vercel", "PostgreSQL"],
    demo: "#",
    code: "#",
  },
  {
    title: "Fitness Tracker",
    description: "App para rastreamento de treinos com gráficos de progresso e metas.",
    tags: ["React Native", "TypeScript", "Supabase"],
    demo: "#",
    code: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Meus <span className="gradient-text">Projetos</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden group hover:glow hover:border-primary/50 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-4xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                  🖥️
                </span>
              </div>

              <div className="p-5">
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

                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.demo}>
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="flex-1">
                    <a href={project.code}>
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
