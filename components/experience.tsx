"use client"

import { useTranslations } from "next-intl"

export function Experience() {
  const t = useTranslations("experience")
  const items = t.raw("items") as Array<{
    company: string
    role: string
    period: string
    description: string
    tags: string[]
  }>

  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl">
        <h2 className="text-sm text-primary mb-12 tracking-wider">{t("heading")}</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {items.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-foreground font-semibold">{item.company}</h3>
                    <p className="text-primary text-sm">{item.role}</p>
                  </div>
                  {item.period && (
                    <span className="text-muted-foreground text-sm whitespace-nowrap">{item.period}</span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
