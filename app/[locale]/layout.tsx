import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import "../globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const BASE_URL = "https://wadada1175.com"

const meta = {
  en: {
    title: "Daiki Wada | Frontend Engineer",
    description:
      "Frontend Engineer & M2 Researcher specializing in React, Next.js, and Distributed Systems. Available for freelance and part-time work.",
  },
  ja: {
    title: "和田 大輝 | フロントエンドエンジニア",
    description:
      "フロントエンドエンジニア・大学院生。React / Next.js を中心にWeb制作・Webアプリ開発を行っています。副業・業務委託のご依頼はお気軽にどうぞ。",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const m = locale === "ja" ? meta.ja : meta.en
  const url = `${BASE_URL}/${locale}`
  const alternateLocale = locale === "ja" ? "en" : "ja"

  return {
    title: m.title,
    description: m.description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      languages: {
        [locale]: url,
        [alternateLocale]: `${BASE_URL}/${alternateLocale}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: m.title,
      description: m.description,
      siteName: "Daiki Wada Portfolio",
      locale: locale === "ja" ? "ja_JP" : "en_US",
      // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      site: "@wdada1175",
      creator: "@wdada1175",
      // images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as "en" | "ja")) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className="bg-background">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
