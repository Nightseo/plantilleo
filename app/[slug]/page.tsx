import { notFound } from "next/navigation"
import type { Metadata } from "next"
import PlantillaDetalle from "@/components/plantilla-detalle"
import CategoriaPage from "@/app/categorias/[slug]/page"
import { getAllTemplates, getTemplateBySlug, getCategoryBySlug, getAllCategories } from "@/lib/template-data"
import { generateSlug } from "@/lib/utils"

export async function generateStaticParams() {
  const templates = getAllTemplates()
  const categories = getAllCategories()
  
  const templateSlugs = templates.map((template) => ({
    slug: template.slug,
  }))

  const categorySlugs = categories.map((category) => ({
    slug: category.slug,
  }))

  return [...templateSlugs, ...categorySlugs]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const plantilla = getTemplateBySlug(slug)
  const categoria = getCategoryBySlug(slug)

  if (plantilla) {
    const metaDescription = `${plantilla.titulo} - Formato PDF y WORD | ${plantilla.valoracion}/5 ⭐ | ${plantilla.descargas.toLocaleString()} descargas | Modelo gratuito actualizado para cumplir con la legislación española en 2025.`
    const canonicalUrl = `https://www.plantilleo.com/${slug}`

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
  } else if (categoria) {
    const metaDescription = categoria.description
    const canonicalUrl = `https://www.plantilleo.com/${slug}`

    return {
      title: `Plantillas de ${categoria.name} [2025] | Plantilleo`,
      description: metaDescription,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `Plantillas de ${categoria.name} [2025] | Plantilleo`,
        description: metaDescription,
        url: canonicalUrl,
        siteName: "Plantilleo",
        locale: "es_ES",
        type: "website",
      },
    }
  }

  return {
    title: "Página no encontrada | Plantilleo",
    description: "La página que buscas no está disponible.",
  }
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const plantilla = getTemplateBySlug(slug)
  const categoria = getCategoryBySlug(slug)

  if (plantilla) {
    return <PlantillaDetalle plantilla={plantilla} />
  } else if (categoria) {
    return <CategoriaPage params={Promise.resolve({ slug })} />
  }

  notFound()
}

