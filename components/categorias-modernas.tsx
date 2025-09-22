import type React from "react"
import Link from "next/link"
import { FileText, FileSpreadsheet, FilePieChart, FileImage, Award, Calendar, BookOpen, BarChart } from "lucide-react"
import { generateSlug } from "@/lib/utils"

interface Categoria {
  id: string
  nombre: string
  descripcion: string
  icono: React.ReactNode
}

const categorias: Categoria[] = [
  {
    id: "curriculums",
    nombre: "Currículums",
    descripcion: "Destaca profesionalmente",
    icono: <FileText className="h-6 w-6" />,
  },
  {
    id: "presentaciones",
    nombre: "Presentaciones",
    descripcion: "Impacta a tu audiencia",
    icono: <FilePieChart className="h-6 w-6" />,
  },
  {
    id: "informes",
    nombre: "Informes",
    descripcion: "Datos claros y concisos",
    icono: <FileSpreadsheet className="h-6 w-6" />,
  },
  {
    id: "propuestas",
    nombre: "Propuestas",
    descripcion: "Gana más proyectos",
    icono: <BookOpen className="h-6 w-6" />,
  },
  {
    id: "facturas",
    nombre: "Facturas",
    descripcion: "Cobros profesionales",
    icono: <BarChart className="h-6 w-6" />,
  },
  {
    id: "certificados",
    nombre: "Certificados",
    descripcion: "Reconocimientos elegantes",
    icono: <Award className="h-6 w-6" />,
  },
  {
    id: "calendarios",
    nombre: "Calendarios",
    descripcion: "Organiza tu tiempo",
    icono: <Calendar className="h-6 w-6" />,
  },
  {
    id: "marketing",
    nombre: "Marketing",
    descripcion: "Promociona con estilo",
    icono: <FileImage className="h-6 w-6" />,
  },
]

export default function CategoriasModernas() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categorias.map((categoria) => (
        <Link
          key={categoria.id}
          href={`/categorias/${generateSlug(categoria.nombre)}`}
          className="group bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-orange-300"
        >
          <div className="text-orange-500 mb-4">{categoria.icono}</div>
          <p className="text-lg font-semibold text-gray-900 mb-2">{categoria.nombre}</p>
          <p className="text-sm text-gray-600 group-hover:text-gray-700">{categoria.descripcion}</p>
        </Link>
      ))}
    </div>
  )
}

