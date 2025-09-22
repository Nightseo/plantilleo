import type { Metadata } from 'next'
import type { Template, Category } from './template-data'

const SITE_NAME = 'Plantilleo'
const SITE_URL = 'https://www.plantilleo.com'
const DEFAULT_DESCRIPTION = 'Descarga plantillas gratuitas en PDF y Word: contratos, facturas, currículums y más. Documentos actualizados y con validez legal para España.'

export function generateTemplateMetadata(template: Template): Metadata {
  const title = `${template.titulo} - WORD y PDF Gratis [2025]`
  const description = `${template.titulo} - Formato PDF y WORD | ${template.valoracion}/5 ⭐ | ${template.descargas.toLocaleString()} descargas | Modelo gratuito actualizado para cumplir con la legislación española en 2025.`
  const url = `${SITE_URL}/${template.slug}`

  return {
    title,
    description,
    keywords: [
      template.titulo,
      template.categoria,
      'plantilla gratis',
      'PDF',
      'WORD',
      'documento profesional'
    ],
    authors: [{ name: SITE_NAME }],
    robots: 'index, follow',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'es_ES',
      type: 'website',
      images: template.imagenUrl ? [
        {
          url: template.imagenUrl,
          width: 1200,
          height: 630,
          alt: template.titulo
        }
      ] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: template.imagenUrl ? [template.imagenUrl] : undefined
    }
  }
}

export function generateCategoryMetadata(category: Category): Metadata {
  const title = `Plantillas de ${category.name} [2025] | ${SITE_NAME}`
  const description = category.description
  const url = `${SITE_URL}/categorias/${category.slug}`

  return {
    title,
    description,
    keywords: [
      `plantillas ${category.name}`,
      category.name,
      'plantillas gratis',
      'PDF',
      'WORD'
    ],
    authors: [{ name: SITE_NAME }],
    robots: 'index, follow',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'es_ES',
      type: 'website',
    }
  }
}

export function generatePageMetadata(
  title: string,
  description = DEFAULT_DESCRIPTION,
  path = ''
): Metadata {
  const fullTitle = path ? `${title} | ${SITE_NAME}` : title
  const url = `${SITE_URL}${path}`

  return {
    title: fullTitle,
    description,
    authors: [{ name: SITE_NAME }],
    robots: 'index, follow',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'es_ES',
      type: 'website',
    }
  }
}

export function generateStructuredData(template: Template) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: template.titulo,
    description: template.descripcion,
    category: template.categoria,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: template.valoracion,
      bestRating: 5,
      worstRating: 1,
      ratingCount: Math.floor(template.descargas / 10)
    },
    downloadUrl: template.formatos.map(formato => formato.url),
    operatingSystem: 'Windows, macOS, Linux',
    applicationCategory: 'BusinessApplication'
  }
}