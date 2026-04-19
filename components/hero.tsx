"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-20">
      <div className="flex w-full max-w-5xl flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
        <div className="w-full min-w-0 flex-1 text-center md:text-left">
          <p className="text-primary mb-4 text-sm tracking-wider">{t("greeting")}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            {t("name")}
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            {t("title")}
          </h2>
          <p className="text-foreground/80 mx-auto max-w-2xl leading-relaxed text-base md:mx-0 md:text-lg">
            {t("bio")}
          </p>
          <div className="mt-12 flex justify-center gap-6 md:justify-start">
            <a
              href="#works"
              className="text-primary hover:text-primary/80 transition-colors duration-200 underline underline-offset-4"
            >
              {t("viewWorks")}
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {t("contact")}
            </a>
          </div>
        </div>
        <div className="relative size-48 shrink-0 overflow-hidden rounded-full bg-muted ring-2 ring-primary/25 shadow-md md:size-56 lg:size-64">
          <Image
            src="/profile.webp"
            alt={t("name")}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
            priority
          />
        </div>
      </div>
    </section>
  )
}
