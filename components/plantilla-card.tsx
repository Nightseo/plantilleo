"use client"
import Link from "next/link"
import { Eye, Download, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { generateSlug } from "@/lib/utils"
import { useState } from "react"

interface PlantillaCardProps {
  plantilla: {
    id: string
    titulo: string
    categoria: string
    descripcion: string
    imagenUrl: string
    descargas: number
    valoracion?: number
  }
  showImage?: boolean
  isSimplified?: boolean
  isHomePage?: boolean
}

export function PlantillaCard({
  plantilla,
  showImage = false,
  isSimplified = false,
  isHomePage = false,
}: PlantillaCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 flex flex-col h-full">
      {/* {showImage && (
        <div className="relative aspect-[3/4]">
          <Image
            src={imageError ? "/placeholder.svg?height=400&width=300" : plantilla.imagenUrl || "/placeholder.svg"}
            alt={plantilla.titulo}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
          <Badge className="absolute top-2 right-2 bg-orange-500">{plantilla.categoria}</Badge>
        </div>
      )} */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-gray-900 text-lg mb-2">
          <Link href={`/${generateSlug(plantilla.titulo)}`} className="hover:text-orange-500 transition-colors">
            {plantilla.titulo}
          </Link>
        </h3>
        <Badge className="mb-2 bg-orange-100 text-orange-800 text-sm font-medium px-2 py-1 rounded-full">
          {plantilla.categoria}
        </Badge>

        {!isSimplified && <p className="text-gray-600 text-sm mb-4 line-clamp-2">{plantilla.descripcion}</p>}

        <div className="flex items-center justify-between mb-4 mt-auto">
          <div className="flex items-center text-gray-500 text-sm">
            <Download className="h-4 w-4 mr-1" />
            <span>{plantilla.descargas.toLocaleString()} descargas</span>
          </div>

          {plantilla.valoracion && (
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium text-gray-600">{plantilla.valoracion.toFixed(1)}</span>
            </div>
          )}
        </div>

        <div className="flex space-x-2">
          <Button
            asChild
            className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-200"
          >
            <Link href={`/${generateSlug(plantilla.titulo)}`}>
              <Eye className="h-4 w-4 mr-2" />
              Ver plantilla
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

