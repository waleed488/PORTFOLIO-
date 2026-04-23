import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Waleed Ali Khan | Full Stack Developer",
  description:
    "Full Stack Developer with 2 years of experience building robust, scalable web applications with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Web Developer",
    "Waleed Ali Khan",
  ],
  authors: [{ name: "Waleed Ali Khan" }],
  creator: "Waleed Ali Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Waleed Ali Khan | Full Stack Developer",
    description:
      "Full Stack Developer with 2 years of experience building robust, scalable web applications.",
    siteName: "Waleed Ali Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Ali Khan | Full Stack Developer",
    description:
      "Full Stack Developer with 2 years of experience building robust, scalable web applications.",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
