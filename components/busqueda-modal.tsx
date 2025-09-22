"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import plantillasData from "@/data/plantillas.json"
import { generateSlug } from "@/lib/utils"

interface BusquedaModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BusquedaModal({ isOpen, onClose }: BusquedaModalProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<typeof plantillasData.plantillas>([])
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  // Función para manejar errores de imagen
  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  useEffect(() => {
    if (searchTerm.length > 2) {
      const filteredResults = plantillasData.plantillas.filter(
        (plantilla) =>
          plantilla.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          plantilla.descripcion.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setResults(filteredResults)
    } else {
      setResults([])
    }
  }, [searchTerm])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="p-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Buscar plantillas..."
              className="w-full py-3 pl-10 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        {results.length > 0 && (
          <div className="max-h-[60vh] overflow-y-auto p-4">
            {results.map((plantilla) => (
              <Link
                key={plantilla.id}
                href={`/${generateSlug(plantilla.titulo)}`}
                className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={onClose}
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={
                      imageErrors[plantilla.id]
                        ? "/placeholder.svg?height=64&width=64"
                        : plantilla.imagenUrl || "/placeholder.svg"
                    }
                    alt={plantilla.titulo}
                    fill
                    className="object-cover rounded-md"
                    onError={() => handleImageError(plantilla.id)}
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{plantilla.titulo}</p>
                  <p className="text-sm text-gray-600 line-clamp-1">{plantilla.descripcion}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

