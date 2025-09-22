import { PlantillaCard } from "@/components/plantilla-card"
import { getTemplatesByCategory } from "@/lib/template-data"
import Link from "next/link"

interface PlantillasRelacionadasProps {
  categoriaActual: string
  plantillaActualId: string
}

export function PlantillasRelacionadas({ categoriaActual, plantillaActualId }: PlantillasRelacionadasProps) {
  const plantillasCategoria = getTemplatesByCategory(categoriaActual.toLowerCase().replace(/\s+/g, '-'))
  const plantillasRelacionadas = plantillasCategoria
    .filter((p) => p.id !== plantillaActualId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Plantillas Relacionadas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plantillasRelacionadas.map((plantilla) => (
          <PlantillaCard key={plantilla.id} plantilla={plantilla} showImage={false} isSimplified={true} />
        ))}
      </div>
      <Link href="/nuestras-plantillas" className="text-orange-500 hover:underline mt-4 block">
        Ver todas las plantillas
      </Link>
    </div>
  )
}

