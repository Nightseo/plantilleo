import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Script from "next/script"
import { Layout } from "@/components/layout"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Plantilleo - Documentos Profesionales que Impresionan",
  description:
    "Descubre plantillas de diseño profesional para currículums, presentaciones, informes y más. Crea documentos que destacan.",
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" }, // Actualizado a 48x48
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.png", sizes: "48x48", type: "image/png" }], // Añadido shortcut icon
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#f97316",
      },
    ],
  },
  manifest: "/site.webmanifest",
  // Añadido verificación para Google
  verification: {
    google: "notranslate", // Esto ayuda a Google a reconocer tu sitio
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-ES" className={poppins.variable}>
      <head>
        {/* Añadido link explícito para el favicon que Google prefiere */}
        <link rel="icon" type="image/png" href="/favicon.png" sizes="48x48" />
      </head>
      <body className={poppins.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6NQCYX0EQ8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6NQCYX0EQ8');
          `}
        </Script>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

