import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { FileText, FileSpreadsheet, FilePieChart, FileImage, Award, Calendar, BookOpen, BarChart } from "lucide-react"
import React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const slugCache = new Map<string, string>()

export function generateSlug(text: string): string {
  if (slugCache.has(text)) {
    return slugCache.get(text)!
  }
  
  const slug = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim()
    .replace(/^-+|-+$/g, "")
  
  slugCache.set(text, slug)
  return slug
}

const iconCache = new Map<string, React.ReactElement>()

export function getCategoryIcon(category: string) {
  const cacheKey = category.toLowerCase()
  
  if (iconCache.has(cacheKey)) {
    return iconCache.get(cacheKey)!
  }
  
  const props = { className: "h-6 w-6" }
  let icon: React.ReactElement
  
  switch (cacheKey) {
    case "curriculums":
    case "laboral":
      icon = React.createElement(FileText, props)
      break
    case "presentaciones":
      icon = React.createElement(FilePieChart, props)
      break
    case "informes":
    case "documentacion-tecnica":
      icon = React.createElement(FileSpreadsheet, props)
      break
    case "propuestas":
    case "legal":
      icon = React.createElement(BookOpen, props)
      break
    case "facturas":
      icon = React.createElement(BarChart, props)
      break
    case "certificados":
    case "recursos-humanos":
      icon = React.createElement(Award, props)
      break
    case "calendarios":
    case "educacion":
      icon = React.createElement(Calendar, props)
      break
    case "marketing":
      icon = React.createElement(FileImage, props)
      break
    case "seguros":
    case "urbanismo":
    case "religion":
    default:
      icon = React.createElement(FileText, props)
      break
  }
  
  iconCache.set(cacheKey, icon)
  return icon
}

