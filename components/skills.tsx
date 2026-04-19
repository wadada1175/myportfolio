"use client"

import { useTranslations } from "next-intl"

const webDevelopmentSkills = ["React", "Next.js", "TypeScript", "JavaScript", "Python", "Node.js", "AWS", "microCMS"]
const researchSkills = ["Distributed Systems", "Large Language Models", "System Design", "Performance Optimization"]

export function Skills() {
  const t = useTranslations("skills")

  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-24 bg-card/30 flex flex-col items-center">
      <div className="max-w-4xl">
        <h2 className="text-sm text-primary mb-12 tracking-wider">{t("heading")}</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">{">"}</span>
              {t("web")}
            </h3>
            <ul className="space-y-3">
              {webDevelopmentSkills.map((skill) => (
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
              {t("research")}
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
