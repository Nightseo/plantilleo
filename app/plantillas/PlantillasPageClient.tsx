"use client"

import { useState, useEffect } from "react"
import { PlantillaCard } from "@/components/plantilla-card"
import { FiltrosPlantillas, type FiltrosPlantillas as FiltrosPlantillasType } from "@/components/filtros-plantillas"
import { SinResultados } from "@/components/sin-resultados"
import plantillasData from "@/data/plantillas.json"

export default function PlantillasPageClient() {
  const [plantillasFiltradas, setPlantillasFiltradas] = useState(plantillasData.plantillas)
  const [filtros, setFiltros] = useState<FiltrosPlantillasType>({
    busqueda: "",
    categoria: "todas",
    ordenarPor: "recientes",
    valoracionMinima: 0,
    soloGratuitas: false,
  })

  // Extraer categorías únicas
  const categorias = Array.from(new Set(plantillasData.plantillas.map((p) => p.categoria)))

  // Aplicar filtros cuando cambien
  useEffect(() => {
    let resultado = [...plantillasData.plantillas]

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

    // Filtrar por valoración mínima
    if (filtros.valoracionMinima > 0) {
      resultado = resultado.filter((plantilla) => plantilla.valoracion >= filtros.valoracionMinima)
    }

    // Filtrar por gratuitas (simulado, ya que no tenemos ese campo en los datos)
    if (filtros.soloGratuitas) {
      // Simulamos que las plantillas con ID par son gratuitas
      resultado = resultado.filter((plantilla) => plantilla.id.length % 2 === 0)
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
  }, [filtros])

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
      valoracionMinima: 0,
      soloGratuitas: false,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nuestras Plantillas</h1>

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
          Mostrando {plantillasFiltradas.length} de {plantillasData.plantillas.length} plantillas
        </div>
      )}
    </div>
  )
}

