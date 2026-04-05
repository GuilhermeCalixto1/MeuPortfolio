import LogoLoop, { type LogoItem } from "./LogoLoop";
import javascriptLogo from "@/images/javascript.png";
import cLogo from "@/images/C.png";
import cssLogo from "@/images/css.png";
import bootstrapLogo from "@/images/bootstrap.png";
import htmlLogo from "@/images/html.png";
import reactLogo from "@/images/react.png";
import tailwindLogo from "@/images/tailwind.png";
import nodejsLogo from "@/images/nodejs.png";
import gitLogo from "@/images/git.png";
import githubLogo from "@/images/github.png";
import supabaseLogo from "@/images/supabase.png";
import viteLogo from "@/images/vite.png";
import vercelLogo from "@/images/vercel.png";

const skillGroups = [
  {
    category: "Linguagens",
    skills: [
      "JavaScript",
      "C",
      "CSS",
      "Bootstrap",
      "HTML",
      "React",
      "Tailwind",
      "Node.js",
    ],
  },
  {
    category: "Ferramentas",
    skills: ["Git", "GitHub", "Supabase", "Vite", "Vercel"],
  },
  {
    category: "Metodologias",
    skills: ["Scrum", "Kanban"],
  },
];

const skillImageMap: Record<string, string> = {
  JavaScript: javascriptLogo,
  C: cLogo,
  CSS: cssLogo,
  Bootstrap: bootstrapLogo,
  HTML: htmlLogo,
  React: reactLogo,
  Tailwind: tailwindLogo,
  "Node.js": nodejsLogo,
  Git: gitLogo,
  GitHub: githubLogo,
  Supabase: supabaseLogo,
  Vite: viteLogo,
  Vercel: vercelLogo,
};

const loopCategories = new Set(["Linguagens", "Ferramentas"]);

const buildLogosFromSkills = (skills: string[]): LogoItem[] =>
  skills.flatMap((skill) => {
    const src = skillImageMap[skill];
    if (!src) return [];

    return [
      {
        src,
        alt: skill,
        title: skill,
      },
    ];
  });

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-muted-foreground">
          Skills & <span className="gradient-text">Tecnologias</span>
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center">
                {group.category}
              </h3>
              {loopCategories.has(group.category) ? (
                <div className="glass rounded-2xl px-4 py-5">
                  <LogoLoop
                    logos={buildLogosFromSkills(group.skills)}
                    speed={95}
                    logoHeight={42}
                    gap={34}
                    pauseOnHover
                    fadeOut
                    scaleOnHover
                    ariaLabel={`Logos de ${group.category}`}
                    className="w-full"
                    direction={
                      group.category === "Linguagens" ? "left" : "right"
                    }
                  />
                </div>
              ) : (
                <div className="flex flex-wrap justify-center gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="glass rounded-xl px-5 py-3 text-center group hover:glow hover:border-primary/50 transition-all duration-300"
                    >
                      <p className="font-semibold text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
