import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Works } from "@/components/works"
import { Contact } from "@/components/contact"
import { LangSwitcher } from "@/components/lang-switcher"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("footer")

  return (
    <main className="min-h-screen">
      <LangSwitcher />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Works />
      <Contact />

      <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
        <p className="text-muted-foreground text-sm">{t("copy")}</p>
      </footer>
    </main>
  )
}
