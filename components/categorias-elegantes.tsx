import type React from "react"
import Link from "next/link"
import { FileText, FileSpreadsheet, FilePieChart, FileImage, Award, Calendar, BookOpen, BarChart } from "lucide-react"

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
    descripcion: "Destaca tu trayectoria profesional",
    icono: <FileText className="h-6 w-6" />,
  },
  {
    id: "presentaciones",
    nombre: "Presentaciones",
    descripcion: "Impresiona a tu audiencia",
    icono: <FilePieChart className="h-6 w-6" />,
  },
  {
    id: "informes",
    nombre: "Informes",
    descripcion: "Comunica resultados con claridad",
    icono: <FileSpreadsheet className="h-6 w-6" />,
  },
  {
    id: "propuestas",
    nombre: "Propuestas",
    descripcion: "Gana proyectos y clientes",
    icono: <BookOpen className="h-6 w-6" />,
  },
  {
    id: "facturas",
    nombre: "Facturas",
    descripcion: "Profesionaliza tus cobros",
    icono: <BarChart className="h-6 w-6" />,
  },
  {
    id: "certificados",
    nombre: "Certificados",
    descripcion: "Reconocimientos con estilo",
    icono: <Award className="h-6 w-6" />,
  },
  {
    id: "calendarios",
    nombre: "Calendarios",
    descripcion: "Organiza con elegancia",
    icono: <Calendar className="h-6 w-6" />,
  },
  {
    id: "marketing",
    nombre: "Marketing",
    descripcion: "Materiales que destacan",
    icono: <FileImage className="h-6 w-6" />,
  },
]

export default function CategoriasElegantes() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categorias.map((categoria) => (
        <Link
          key={categoria.id}
          href={`/categorias/${categoria.id}`}
          className="group bg-white p-6 rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-md"
        >
          <div className="text-gray-400 group-hover:text-gray-600 mb-4">{categoria.icono}</div>
          <p className="font-serif text-gray-900 text-lg mb-2">{categoria.nombre}</p>
          <p className="text-sm text-gray-500 group-hover:text-gray-600">{categoria.descripcion}</p>
        </Link>
      ))}
    </div>
  )
}

