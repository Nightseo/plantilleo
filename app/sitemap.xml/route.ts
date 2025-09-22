import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://www.plantilleo.com"

  // Crear un sitemap index que cumpla estrictamente con el formato estándar
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/paginas-sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/plantillas-sitemap.xml</loc>
  </sitemap>
</sitemapindex>`

  // Devolver siempre como XML para asegurar que los bots lo interpreten correctamente
  return new NextResponse(sitemapIndex, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}

