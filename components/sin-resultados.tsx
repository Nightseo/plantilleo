"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SinResultadosProps {
  onReset: () => void
}

export function SinResultados({ onReset }: SinResultadosProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <Search className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No se encontraron plantillas</h3>
      <p className="text-gray-500 mb-6 max-w-md">
        No hemos encontrado plantillas que coincidan con tus criterios de búsqueda. Intenta con otros filtros o
        términos.
      </p>
      <Button onClick={onReset} variant="outline">
        Limpiar filtros
      </Button>
    </div>
  )
}

