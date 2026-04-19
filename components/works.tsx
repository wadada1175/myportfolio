"use client"

import { useTranslations } from "next-intl"

const projectTags = [
  ["Next.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "AWS", ],
  ["Next.js", "TypeScript", "Netlify", "microCMS"],
  ["Astro"],
  ["HTML", "CSS", "JavaScript"],
]

export function Works() {
  const t = useTranslations("works")
  const projects = t.raw("projects") as Array<{ title: string; description: string }>

  return (
    <section id="works" className="px-6 md:px-12 lg:px-24 py-24 flex flex-col items-center">
      <div className="max-w-6xl">
        <h2 className="text-sm text-primary mb-12 tracking-wider">{t("heading")}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="aspect-video bg-secondary rounded mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-muted-foreground text-4xl font-bold opacity-20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projectTags[index]?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
