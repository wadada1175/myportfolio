"use client"

import { useTranslations } from "next-intl"

const webSkills = ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Astro"]
const infraSkills = ["PostgreSQL", "Python", "AWS", "GCP", "microCMS"]
const researchSkills = ["Distributed Systems", "LLM", "System Design", "Performance Optimization"]

export function Skills() {
  const t = useTranslations("skills")

  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-24 bg-card/30">
      <div className="max-w-6xl">
        <h2 className="text-sm text-primary mb-12 tracking-wider">{t("heading")}</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { label: t("web"), skills: webSkills },
            { label: t("infra"), skills: infraSkills },
            { label: t("research"), skills: researchSkills },
          ].map(({ label, skills }) => (
            <div key={label}>
              <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
                <span className="text-primary">{">"}</span>
                {label}
              </h3>
              <ul className="space-y-3">
                {skills.map((skill) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
