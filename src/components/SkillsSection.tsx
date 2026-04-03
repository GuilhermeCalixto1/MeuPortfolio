const skillGroups = [
  {
    category: "Desenvolvimento",
    skills: ["JavaScript", "C", "CSS", "Bootstrap", "HTML", "React", "Tailwind", "Node.js"],
  },
  {
    category: "Ferramentas",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Metodologias",
    skills: ["Scrum", "Kanban"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Skills & <span className="gradient-text">Tecnologias</span>
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center">
                {group.category}
              </h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
