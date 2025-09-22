import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PlantillaCard } from "@/components/plantilla-card"
import { getAllCategories, getCategoryBySlug, getTemplatesByCategory } from "@/lib/template-data"

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const categoria = getCategoryBySlug(slug)

  if (!categoria) {
    return {
      title: "Categoría no encontrada | Plantilleo",
      description: "La categoría que buscas no está disponible.",
    }
  }

  const metaDescription = categoria.description
  const canonicalUrl = `https://www.plantilleo.com/categorias/${slug}`

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

export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const categoria = getCategoryBySlug(slug)

  if (!categoria) {
    notFound()
  }

  const plantillasCategoria = getTemplatesByCategory(slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Plantillas de {categoria.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plantillasCategoria.map((plantilla) => (
          <PlantillaCard key={plantilla.id} plantilla={plantilla} showImage={false} />
        ))}
      </div>
    </div>
  )
}

