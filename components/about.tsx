"use client"

import { useTranslations } from "next-intl"

export function About() {
  const t = useTranslations("about")

  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 flex flex-col items-center">
      <div className="max-w-4xl">
        <h2 className="text-sm text-primary mb-8 tracking-wider">{t("heading")}</h2>
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </div>
    </section>
  )
}
