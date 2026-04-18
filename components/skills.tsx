const frontendSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
]

const researchSkills = [
  "Distributed Systems",
  "Large Language Models",
  "System Design",
  "Performance Optimization",
]

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-24 bg-card/30">
      <div className="max-w-4xl">
        <h2 className="text-sm text-primary mb-12 tracking-wider">{"// skills"}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">{">"}</span>
              Frontend
            </h3>
            <ul className="space-y-3">
              {frontendSkills.map((skill) => (
                <li 
                  key={skill}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <span className="text-primary/60 mr-3">-</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">{">"}</span>
              Research
            </h3>
            <ul className="space-y-3">
              {researchSkills.map((skill) => (
                <li 
                  key={skill}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <span className="text-primary/60 mr-3">-</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
