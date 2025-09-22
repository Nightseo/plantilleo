import { cache } from 'react'

export interface Template {
  id: string
  titulo: string
  slug: string
  categoria: string
  descripcion: string
  imagenUrl: string
  descargas: number
  valoracion: number
  caracteristicas: string[]
  formatos: Array<{
    tipo: string
    url: string
  }>
  comoUsar: string[]
  faqs: Array<{
    pregunta: string
    respuesta: string
  }>
  informacionLegal: string
  detalles: {
    fechaActualizacion: string
    tamanoArchivo: string
    idiomas: string[]
    softwareRecomendado: string[]
    tiempoEdicion: string
    actualizaciones: string
  }
  consejos: string[]
}

export interface Category {
  name: string
  slug: string
  description: string
  templateCount: number
}

// Import the original data and generate correct slugs from titles
import originalData from '@/data/plantillas.json'
import { generateSlug } from './utils'

export const getAllTemplates = cache((): Template[] => {
  return originalData.plantillas.map(template => ({
    ...template,
    slug: generateSlug(template.titulo) // Generate correct slug from title
  })).sort((a, b) => b.descargas - a.descargas)
})

export const getTemplateBySlug = cache((slug: string): Template | null => {
  const templates = getAllTemplates()
  return templates.find(template => template.slug === slug) || null
})

export const getTemplatesByCategory = cache((categorySlug: string): Template[] => {
  const allTemplates = getAllTemplates()
  return allTemplates.filter(template => 
    generateSlug(template.categoria) === categorySlug
  )
})

export const getAllCategories = cache((): Category[] => {
  const allTemplates = getAllTemplates()
  const categoriesMap = new Map<string, number>()
  
  allTemplates.forEach(template => {
    const count = categoriesMap.get(template.categoria) || 0
    categoriesMap.set(template.categoria, count + 1)
  })

  return Array.from(categoriesMap.entries()).map(([name, count]) => ({
    name,
    slug: generateSlug(name),
    description: `Descarga ${count} plantillas de ${name} en formato PDF y WORD. Modelos gratuitos actualizados para cumplir con la legislación española en 2025.`,
    templateCount: count
  })).sort((a, b) => a.name.localeCompare(b.name))
})

export const getCategoryBySlug = cache((slug: string): Category | null => {
  const categories = getAllCategories()
  return categories.find(cat => cat.slug === slug) || null
})

export const getRelatedTemplates = cache((template: Template, limit = 4): Template[] => {
  const allTemplates = getAllTemplates()
  return allTemplates
    .filter(t => t.id !== template.id && t.categoria === template.categoria)
    .slice(0, limit)
})

export const getPopularTemplates = cache((limit = 6): Template[] => {
  const allTemplates = getAllTemplates()
  return allTemplates
    .sort((a, b) => b.descargas - a.descargas)
    .slice(0, limit)
})

export const searchTemplates = cache((query: string): Template[] => {
  const allTemplates = getAllTemplates()
  const searchTerm = query.toLowerCase()
  
  return allTemplates.filter(template =>
    template.titulo.toLowerCase().includes(searchTerm) ||
    template.descripcion.toLowerCase().includes(searchTerm) ||
    template.categoria.toLowerCase().includes(searchTerm) ||
    template.caracteristicas.some(c => c.toLowerCase().includes(searchTerm))
  )
})