import { notFound } from "next/navigation"
import type { Metadata } from "next"
import PlantillaDetalle from "@/components/plantilla-detalle"
import { getTemplateBySlug, getAllTemplates } from "@/lib/template-data"
import { generateSlug } from "@/lib/utils"

export async function generateStaticParams() {
  return getAllTemplates().map((plantilla) => ({
    slug: plantilla.slug,
  }))
}

// Modificar la función generateMetadata para añadir [2025] al título y actualizar la descripción
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const plantilla = getTemplateBySlug(slug)

  if (!plantilla) {
    return {
      title: "Plantilla no encontrada | Plantilleo",
      description: "La plantilla que buscas no está disponible.",
    }
  }

  const metaDescription = `${plantilla.titulo} - Formato PDF y WORD | ${plantilla.valoracion}/5 ⭐ | ${plantilla.descargas.toLocaleString()} descargas | Modelo gratuito actualizado para cumplir con la legislación española en 2025.`
  const canonicalUrl = `https://www.plantilleo.com/plantillas/${slug}`

  return {
    title: `${plantilla.titulo} - WORD y PDF Gratis [2025]`,
    description: metaDescription,
    keywords: [plantilla.titulo],
    authors: [{ name: "Plantilleo" }],
    robots: "index, follow",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${plantilla.titulo} - WORD y PDF Gratis [2025]`,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "Plantilleo",
      locale: "es_ES",
      type: "website",
    },
  }
}

export default async function PlantillaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const plantilla = getTemplateBySlug(slug)

  if (!plantilla) {
    notFound()
  }

  return <PlantillaDetalle plantilla={plantilla} />
}

