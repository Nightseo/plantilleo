import { NextResponse } from "next/server"
import plantillasData from "@/data/plantillas.json"
import { generateSlug } from "@/lib/utils"

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case "&":
        return "&amp;"
      case "'":
        return "&apos;"
      case '"':
        return "&quot;"
      default:
        return c
    }
  })
}

export async function GET() {
  const baseUrl = "https://www.plantilleo.com"

  // URLs estáticas principales
  const staticPages = [
    { url: "", priority: "1.0", changefreq: "daily" },
    { url: "/plantillas", priority: "0.9", changefreq: "daily" },
    { url: "/categorias", priority: "0.9", changefreq: "weekly" },
    { url: "/sobre-nosotros", priority: "0.7", changefreq: "monthly" },
    { url: "/contacto", priority: "0.7", changefreq: "monthly" },
  ]

  // URLs de categorías
  const categorias = Array.from(new Set(plantillasData.plantillas.map((p) => p.categoria)))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
    <url>
      <loc>${escapeXml(`${baseUrl}${page.url}`)}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `,
    )
    .join("")}
  ${categorias
    .map(
      (categoria) => `
    <url>
      <loc>${escapeXml(`${baseUrl}/categorias/${generateSlug(categoria)}`)}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `,
    )
    .join("")}
</urlset>`

  // Devolver siempre como XML
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}

