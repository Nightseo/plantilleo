import { PlantillasConFiltros } from "@/components/plantillas-con-filtros"
import { getAllTemplates, getAllCategories } from "@/lib/template-data"

export default function PlantillasPage() {
  const plantillas = getAllTemplates()
  const categorias = getAllCategories().map(cat => cat.name)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nuestras Plantillas</h1>
      <PlantillasConFiltros plantillas={plantillas} categorias={categorias} />
    </div>
  )
}

