"use client"

import { useState, useEffect } from "react"
import { PlantillaCard } from "@/components/plantilla-card"
import { FiltrosPlantillas, type FiltrosPlantillas as FiltrosPlantillasType } from "@/components/filtros-plantillas"
import { SinResultados } from "@/components/sin-resultados"

interface PlantillasConFiltrosProps {
  plantillas: any[]
  categorias: string[]
}

export function PlantillasConFiltros({ plantillas, categorias }: PlantillasConFiltrosProps) {
  const [plantillasFiltradas, setPlantillasFiltradas] = useState(plantillas)
  const [filtros, setFiltros] = useState<Omit<FiltrosPlantillasType, "valoracionMinima" | "soloGratuitas">>({
    busqueda: "",
    categoria: "todas",
    ordenarPor: "recientes",
  })

  // Aplicar filtros cuando cambien
  useEffect(() => {
    let resultado = [...plantillas]

    // Filtrar por búsqueda
    if (filtros.busqueda) {
      const terminoBusqueda = filtros.busqueda.toLowerCase()
      resultado = resultado.filter(
        (plantilla) =>
          plantilla.titulo.toLowerCase().includes(terminoBusqueda) ||
          plantilla.descripcion.toLowerCase().includes(terminoBusqueda),
      )
    }

    // Filtrar por categoría
    if (filtros.categoria !== "todas") {
      resultado = resultado.filter((plantilla) => plantilla.categoria === filtros.categoria)
    }

    // Ordenar resultados
    switch (filtros.ordenarPor) {
      case "recientes":
        // Simulamos que las plantillas están ordenadas por fecha de actualización (más recientes primero)
        resultado = resultado.sort((a, b) => {
          const fechaA = a.detalles.fechaActualizacion || ""
          const fechaB = b.detalles.fechaActualizacion || ""
          return fechaB.localeCompare(fechaA)
        })
        break
      case "populares":
        // Ordenar por número de descargas (más descargas primero)
        resultado = resultado.sort((a, b) => b.descargas - a.descargas)
        break
      case "valoracion":
        // Ordenar por valoración (mejor valoración primero)
        resultado = resultado.sort((a, b) => b.valoracion - a.valoracion)
        break
      case "alfabetico":
        // Ordenar alfabéticamente por título
        resultado = resultado.sort((a, b) => a.titulo.localeCompare(b.titulo))
        break
    }

    setPlantillasFiltradas(resultado)
  }, [filtros, plantillas])

  // Manejar cambios en los filtros
  const handleFiltrosChange = (nuevosFiltros: FiltrosPlantillasType) => {
    setFiltros(nuevosFiltros)
  }

  // Resetear filtros
  const resetearFiltros = () => {
    setFiltros({
      busqueda: "",
      categoria: "todas",
      ordenarPor: "recientes",
    })
  }

  return (
    <>
      <FiltrosPlantillas categorias={categorias} onFiltrosChange={handleFiltrosChange} />

      {plantillasFiltradas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plantillasFiltradas.map((plantilla) => (
            <PlantillaCard key={plantilla.id} plantilla={plantilla} />
          ))}
        </div>
      ) : (
        <SinResultados onReset={resetearFiltros} />
      )}

      {plantillasFiltradas.length > 0 && (
        <div className="mt-8 text-center text-gray-500">
          Mostrando {plantillasFiltradas.length} de {plantillas.length} plantillas
        </div>
      )}
    </>
  )
}

