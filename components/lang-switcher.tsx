"use client"

import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { useParams } from "next/navigation"

export function LangSwitcher() {
  const t = useTranslations("nav")
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const currentLocale = params.locale as string

  const handleSwitch = () => {
    const nextLocale = currentLocale === "en" ? "ja" : "en"
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <button
      onClick={handleSwitch}
      className="fixed top-6 right-6 z-50 text-xs px-3 py-1.5 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200 rounded"
    >
      {t("lang")}
    </button>
  )
}
