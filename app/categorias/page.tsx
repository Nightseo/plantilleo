import Link from "next/link"
import { FileText, FileSpreadsheet, FilePieChart, FileImage, Award, Calendar, BookOpen, BarChart } from "lucide-react"
import plantillasData from "@/data/plantillas.json"
import { generateSlug } from "@/lib/utils"

// Función para obtener un icono basado en el nombre de la categoría
function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "curriculums":
      return <FileText className="h-6 w-6" />
    case "presentaciones":
      return <FilePieChart className="h-6 w-6" />
    case "informes":
      return <FileSpreadsheet className="h-6 w-6" />
    case "propuestas":
      return <BookOpen className="h-6 w-6" />
    case "facturas":
      return <BarChart className="h-6 w-6" />
    case "certificados":
      return <Award className="h-6 w-6" />
    case "calendarios":
      return <Calendar className="h-6 w-6" />
    case "marketing":
      return <FileImage className="h-6 w-6" />
    default:
      return <FileText className="h-6 w-6" />
  }
}

export default function CategoriasPage() {
  // Extraer categorías únicas del JSON
  const categorias = Array.from(new Set(plantillasData.plantillas.map((p) => p.categoria)))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Categorías de Plantillas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria) => {
          const plantillasEnCategoria = plantillasData.plantillas.filter((p) => p.categoria === categoria)
          return (
            <Link
              key={categoria}
              href={`/${generateSlug(categoria)}`}
              className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-orange-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="text-orange-500 mr-3">{getCategoryIcon(categoria)}</div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                  {categoria}
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                {plantillasEnCategoria.length} plantilla{plantillasEnCategoria.length !== 1 ? "s" : ""} disponible
                {plantillasEnCategoria.length !== 1 ? "s" : ""}
              </p>
              <ul className="text-sm text-gray-500">
                {plantillasEnCategoria.slice(0, 3).map((plantilla) => (
                  <li key={plantilla.id} className="mb-1">
                    • {plantilla.titulo}
                  </li>
                ))}
                {plantillasEnCategoria.length > 3 && <li className="text-orange-500">• Y más...</li>}
              </ul>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

