"use client"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface FiltrosPlantillasProps {
  categorias: string[]
  onFiltrosChange: (filtros: FiltrosPlantillas) => void
  className?: string
}

export interface FiltrosPlantillas {
  busqueda: string
  categoria: string
  ordenarPor: "recientes" | "populares" | "valoracion" | "alfabetico"
}

export function FiltrosPlantillas({ categorias, onFiltrosChange, className }: FiltrosPlantillasProps) {
  const [filtros, setFiltros] = useState<FiltrosPlantillas>({
    busqueda: "",
    categoria: "todas",
    ordenarPor: "recientes",
  })

  const [mostrarFiltrosMovil, setMostrarFiltrosMovil] = useState(false)

  // Actualizar los filtros y notificar al componente padre
  const actualizarFiltros = (nuevosFiltros: Partial<FiltrosPlantillas>) => {
    const filtrosActualizados = { ...filtros, ...nuevosFiltros }
    setFiltros(filtrosActualizados)
    onFiltrosChange(filtrosActualizados)
  }

  // Limpiar todos los filtros
  const limpiarFiltros = () => {
    const filtrosIniciales: FiltrosPlantillas = {
      busqueda: "",
      categoria: "todas",
      ordenarPor: "recientes",
    }
    setFiltros(filtrosIniciales)
    onFiltrosChange(filtrosIniciales)
  }

  // Contar filtros activos
  const contarFiltrosActivos = () => {
    let contador = 0
    if (filtros.busqueda) contador++
    if (filtros.categoria !== "todas") contador++
    if (filtros.ordenarPor !== "recientes") contador++
    return contador
  }

  const filtrosActivos = contarFiltrosActivos()

  return (
    <div className={cn("mb-8", className)}>
      {/* Barra de búsqueda y botón de filtros para móvil */}
      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-grow">
          <Input
            type="search"
            placeholder="Buscar plantillas..."
            className="pl-10 pr-4 py-2 w-full"
            value={filtros.busqueda}
            onChange={(e) => actualizarFiltros({ busqueda: e.target.value })}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        <Button
          variant="outline"
          className="md:hidden relative"
          onClick={() => setMostrarFiltrosMovil(!mostrarFiltrosMovil)}
        >
          <Filter className="h-4 w-4" />
          {filtrosActivos > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {filtrosActivos}
            </span>
          )}
        </Button>
      </div>

      {/* Filtros para escritorio */}
      <div className="hidden md:flex flex-wrap gap-4 items-center">
        <div className="flex-grow">
          <Select value={filtros.categoria} onValueChange={(valor) => actualizarFiltros({ categoria: valor })}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas las categorías</SelectItem>
              {categorias.map((categoria) => (
                <SelectItem key={categoria} value={categoria}>
                  {categoria}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={filtros.ordenarPor} onValueChange={(valor: any) => actualizarFiltros({ ordenarPor: valor })}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recientes">Más recientes</SelectItem>
              <SelectItem value="populares">Más populares</SelectItem>
              <SelectItem value="valoracion">Mejor valoradas</SelectItem>
              <SelectItem value="alfabetico">Alfabéticamente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filtrosActivos > 0 && (
          <Button variant="ghost" size="sm" onClick={limpiarFiltros} className="ml-auto">
            <X className="h-4 w-4 mr-1" /> Limpiar filtros
          </Button>
        )}
      </div>

      {/* Filtros activos (etiquetas) */}
      {filtrosActivos > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {filtros.busqueda && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Búsqueda: {filtros.busqueda}
              <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => actualizarFiltros({ busqueda: "" })} />
            </Badge>
          )}
          {filtros.categoria !== "todas" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Categoría: {filtros.categoria}
              <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => actualizarFiltros({ categoria: "todas" })} />
            </Badge>
          )}
          {filtros.ordenarPor !== "recientes" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Ordenar por:{" "}
              {filtros.ordenarPor === "populares"
                ? "Más populares"
                : filtros.ordenarPor === "valoracion"
                  ? "Mejor valoradas"
                  : "Alfabéticamente"}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => actualizarFiltros({ ordenarPor: "recientes" })}
              />
            </Badge>
          )}
        </div>
      )}

      {/* Panel de filtros para móvil */}
      {mostrarFiltrosMovil && (
        <div className="md:hidden mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-medium mb-3">Filtros</h3>

          <div className="space-y-4">
            <div>
              <Label htmlFor="categoria-movil" className="block mb-1">
                Categoría
              </Label>
              <Select value={filtros.categoria} onValueChange={(valor) => actualizarFiltros({ categoria: valor })}>
                <SelectTrigger id="categoria-movil" className="w-full">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas las categorías</SelectItem>
                  {categorias.map((categoria) => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="ordenar-movil" className="block mb-1">
                Ordenar por
              </Label>
              <Select
                value={filtros.ordenarPor}
                onValueChange={(valor: any) => actualizarFiltros({ ordenarPor: valor })}
              >
                <SelectTrigger id="ordenar-movil" className="w-full">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recientes">Más recientes</SelectItem>
                  <SelectItem value="populares">Más populares</SelectItem>
                  <SelectItem value="valoracion">Mejor valoradas</SelectItem>
                  <SelectItem value="alfabetico">Alfabéticamente</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between pt-2">
              <Button variant="outline" size="sm" onClick={limpiarFiltros}>
                Limpiar filtros
              </Button>
              <Button size="sm" onClick={() => setMostrarFiltrosMovil(false)}>
                Aplicar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

