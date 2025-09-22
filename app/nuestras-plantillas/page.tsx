import type { Metadata } from "next"
import { PlantillasConFiltros } from "@/components/plantillas-con-filtros"
import plantillasData from "@/data/plantillas.json"

export const metadata: Metadata = {
  title: "Nuestras Plantillas | Plantilleo",
  description: "Explora nuestra colección de plantillas profesionales para todo tipo de documentos.",
  alternates: {
    canonical: "https://www.plantilleo.com/nuestras-plantillas",
  },
}

export default function PlantillasPage() {
  // Extraer categorías únicas
  const categorias = Array.from(new Set(plantillasData.plantillas.map((p) => p.categoria)))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nuestras Plantillas</h1>
      <PlantillasConFiltros plantillas={plantillasData.plantillas} categorias={categorias} />
    </div>
  )
}

