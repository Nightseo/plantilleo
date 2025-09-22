import type { MetadataRoute } from "next"
import plantillasData from "@/data/plantillas.json"
import { generateSlug } from "@/lib/utils"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.plantilleo.com"

  // URLs estáticas
  const staticPages = ["", "/nuestras-plantillas", "/categorias", "/sobre-nosotros", "/contacto"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // URLs de categorías
  const categorias = Array.from(new Set(plantillasData.plantillas.map((p) => p.categoria)))
  const categoriaPages = categorias.map((categoria) => ({
    url: `${baseUrl}/${generateSlug(categoria)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // URLs de plantillas (en la raíz)
  const plantillaPages = plantillasData.plantillas.map((plantilla) => ({
    url: `${baseUrl}/${generateSlug(plantilla.titulo)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  return [...staticPages, ...categoriaPages, ...plantillaPages]
}

