import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Daiki Wada | Frontend Engineer',
  description: 'Frontend Engineer & M2 Researcher specializing in React, Next.js, and Distributed Systems',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
