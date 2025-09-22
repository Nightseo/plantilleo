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

  // URLs de plantillas
  const plantillas = plantillasData.plantillas

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${plantillas
    .map(
      (plantilla) => `
    <url>
      <loc>${escapeXml(`${baseUrl}/plantillas/${generateSlug(plantilla.titulo)}`)}</loc>
      <changefreq>monthly</changefreq>
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

