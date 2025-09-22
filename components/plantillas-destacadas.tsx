import Image from "next/image"
import Link from "next/link"
import { Download, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Plantilla {
  id: string
  titulo: string
  categoria: string
  imagenUrl: string
  descargas: number
  valoracion: number
  premium: boolean
}

const plantillasDestacadas: Plantilla[] = [
  {
    id: "1",
    titulo: "Currículum Moderno",
    categoria: "Currículum",
    imagenUrl: "/placeholder.svg?height=400&width=300",
    descargas: 12500,
    valoracion: 4.8,
    premium: true,
  },
  {
    id: "2",
    titulo: "Presentación Corporativa",
    categoria: "Presentación",
    imagenUrl: "/placeholder.svg?height=400&width=300",
    descargas: 8300,
    valoracion: 4.7,
    premium: true,
  },
  {
    id: "3",
    titulo: "Informe Anual",
    categoria: "Informe",
    imagenUrl: "/placeholder.svg?height=400&width=300",
    descargas: 6200,
    valoracion: 4.9,
    premium: false,
  },
  {
    id: "4",
    titulo: "Propuesta de Proyecto",
    categoria: "Propuesta",
    imagenUrl: "/placeholder.svg?height=400&width=300",
    descargas: 5100,
    valoracion: 4.6,
    premium: true,
  },
]

export default function PlantillasDestacadas() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {plantillasDestacadas.map((plantilla, index) => (
        <div
          key={plantilla.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-30"></div>
          <div className="relative">
            <div className="relative aspect-[3/4]">
              <Image
                src={plantilla.imagenUrl || "/placeholder.svg"}
                alt={plantilla.titulo}
                fill
                className="object-cover"
              />
              {plantilla.premium && (
                <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
                  Premium
                </Badge>
              )}
            </div>

            <div className="p-6">
              <p className="font-bold text-gray-900 text-lg mb-2">{plantilla.titulo}</p>
              <p className="text-sm text-gray-500 mb-4">{plantilla.categoria}</p>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-600">{plantilla.valoracion}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Download className="h-4 w-4 mr-1" />
                  <span>{plantilla.descargas.toLocaleString()}</span>
                </div>
              </div>

              <Link href={`/plantillas/${plantilla.id}`}>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Ver Plantilla
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

