"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { FileText, FileSpreadsheet, FilePieChart, FileImage, Award, Calendar, BookOpen, BarChart } from "lucide-react"

interface Categoria {
  id: string
  nombre: string
  descripcion: string
  icono: React.ReactNode
  color: string
}

const categorias: Categoria[] = [
  {
    id: "curriculums",
    nombre: "Currículums",
    descripcion: "Destaca profesionalmente",
    icono: <FileText className="h-8 w-8" />,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "presentaciones",
    nombre: "Presentaciones",
    descripcion: "Impacta a tu audiencia",
    icono: <FilePieChart className="h-8 w-8" />,
    color: "from-green-400 to-green-600",
  },
  {
    id: "informes",
    nombre: "Informes",
    descripcion: "Datos claros y concisos",
    icono: <FileSpreadsheet className="h-8 w-8" />,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "propuestas",
    nombre: "Propuestas",
    descripcion: "Gana más proyectos",
    icono: <BookOpen className="h-8 w-8" />,
    color: "from-red-400 to-red-600",
  },
  {
    id: "facturas",
    nombre: "Facturas",
    descripcion: "Cobros profesionales",
    icono: <BarChart className="h-8 w-8" />,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    id: "certificados",
    nombre: "Certificados",
    descripcion: "Reconocimientos elegantes",
    icono: <Award className="h-8 w-8" />,
    color: "from-pink-400 to-pink-600",
  },
  {
    id: "calendarios",
    nombre: "Calendarios",
    descripcion: "Organiza tu tiempo",
    icono: <Calendar className="h-8 w-8" />,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    id: "marketing",
    nombre: "Marketing",
    descripcion: "Promociona con estilo",
    icono: <FileImage className="h-8 w-8" />,
    color: "from-teal-400 to-teal-600",
  },
]

export default function CategoriasCarrusel() {
  const carruselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carrusel = carruselRef.current
    if (!carrusel) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    carrusel.addEventListener("mousedown", (e) => {
      isDown = true
      carrusel.classList.add("active")
      startX = e.pageX - carrusel.offsetLeft
      scrollLeft = carrusel.scrollLeft
    })

    carrusel.addEventListener("mouseleave", () => {
      isDown = false
      carrusel.classList.remove("active")
    })

    carrusel.addEventListener("mouseup", () => {
      isDown = false
      carrusel.classList.remove("active")
    })

    carrusel.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - carrusel.offsetLeft
      const walk = (x - startX) * 2
      carrusel.scrollLeft = scrollLeft - walk
    })
  }, [])

  return (
    <div
      ref={carruselRef}
      className="flex overflow-x-auto space-x-6 pb-8 cursor-grab active:cursor-grabbing scrollbar-hide"
    >
      {categorias.map((categoria) => (
        <Link
          key={categoria.id}
          href={`/categorias/${categoria.id}`}
          className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
        >
          <div className={`bg-gradient-to-br ${categoria.color} p-6 text-white h-40 flex flex-col justify-between`}>
            <div className="mb-4">{categoria.icono}</div>
            <div>
              <p className="text-lg font-semibold mb-1">{categoria.nombre}</p>
              <p className="text-sm opacity-90">{categoria.descripcion}</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50">
            <span className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Explorar Plantillas
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

