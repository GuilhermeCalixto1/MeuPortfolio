const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "PostgreSQL", level: 75 },
  { name: "Docker", level: 70 },
  { name: "Git", level: 90 },
  { name: "Figma", level: 65 },
  { name: "Python", level: 60 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Skills & <span className="gradient-text">Tecnologias</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass rounded-xl p-5 text-center group hover:glow hover:border-primary/50 transition-all duration-300"
            >
              <p className="font-semibold text-sm mb-2">{skill.name}</p>
              <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
