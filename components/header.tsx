"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, ChevronDown, Sparkles, FileText } from "lucide-react"
import { BusquedaModal } from "@/components/busqueda-modal"
import plantillasData from "@/data/plantillas.json"
import { generateSlug } from "@/lib/utils"
import { getCategoryIcon } from "@/lib/utils"

export function Header() {
  const [isBusquedaAbierta, setIsBusquedaAbierta] = useState(false)
  const [isCategoriasOpen, setIsCategoriasOpen] = useState(false)
  const [isPlantillasOpen, setIsPlantillasOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Cerrar el menú móvil cuando se cambia el tamaño de la ventana a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevenir el scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  const categorias = Array.from(new Set(plantillasData.plantillas.map((p) => p.categoria))).slice(0, 6)
  const plantillasRecientes = [...plantillasData.plantillas].reverse().slice(0, 6)

  // Obtener las 3 últimas plantillas del JSON (empezando desde abajo)
  const ultimasPlantillas = [...plantillasData.plantillas].reverse().slice(0, 3)

  return (
    <>
      {/* Topbar con las 3 últimas plantillas */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
        <div className="max-w-6xl mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <div className="hidden sm:flex items-center text-xs text-gray-600">
              <span className="mr-2 font-medium">Últimas plantillas:</span>
              <div className="flex space-x-4 overflow-x-auto">
                {ultimasPlantillas.map((plantilla, index) => (
                  <Link
                    key={plantilla.id}
                    href={`/${generateSlug(plantilla.titulo)}`}
                    className="flex items-center hover:text-orange-500 transition-colors whitespace-nowrap"
                  >
                    <FileText className="h-3 w-3 mr-1" />
                    <span>{plantilla.titulo}</span>
                    {index < ultimasPlantillas.length - 1 && <span className="mx-2 text-gray-300">•</span>}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full sm:hidden text-xs text-gray-600 overflow-x-auto">
              <div className="flex space-x-4 whitespace-nowrap">
                {ultimasPlantillas.map((plantilla) => (
                  <Link
                    key={plantilla.id}
                    href={`/${generateSlug(plantilla.titulo)}`}
                    className="flex items-center hover:text-orange-500 transition-colors"
                  >
                    <FileText className="h-3 w-3 mr-1" />
                    <span>{plantilla.titulo}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                P
              </div>
              <span className="text-2xl font-bold text-gray-900 transition-colors duration-300">Plantilleo</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button
                  className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center"
                  onMouseEnter={() => setIsCategoriasOpen(true)}
                  onMouseLeave={() => setIsCategoriasOpen(false)}
                >
                  Categorías
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isCategoriasOpen && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64"
                    onMouseEnter={() => setIsCategoriasOpen(true)}
                    onMouseLeave={() => setIsCategoriasOpen(false)}
                  >
                    {categorias.map((categoria) => (
                      <Link
                        key={categoria}
                        href={`/${generateSlug(categoria)}`}
                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                      >
                        <span className="mr-2">{getCategoryIcon(categoria)}</span>
                        <span>{categoria}</span>
                      </Link>
                    ))}
                    <Link href="/categorias" className="block px-4 py-2 text-orange-500 hover:bg-gray-100 font-medium">
                      Ver todas las categorías
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative group">
                <button
                  className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center"
                  onMouseEnter={() => setIsPlantillasOpen(true)}
                  onMouseLeave={() => setIsPlantillasOpen(false)}
                >
                  Plantillas
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isPlantillasOpen && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64"
                    onMouseEnter={() => setIsPlantillasOpen(true)}
                    onMouseLeave={() => setIsPlantillasOpen(false)}
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 flex items-center">
                      <Sparkles className="h-5 w-5 text-orange-500 mr-2" />
                      <span className="font-medium text-orange-700">Últimas plantillas</span>
                    </div>
                    {plantillasRecientes.map((plantilla) => (
                      <Link
                        key={plantilla.id}
                        href={`/${generateSlug(plantilla.titulo)}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {plantilla.titulo}
                      </Link>
                    ))}
                    <Link href="/plantillas" className="block px-4 py-2 text-orange-500 hover:bg-gray-100 font-medium">
                      Ver todas las plantillas
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/sobre-nosotros"
                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors duration-300"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors duration-300"
              >
                Contacto
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Button
                className="bg-transparent hover:bg-gray-100 text-gray-600 rounded-full py-2 px-4 transition-colors duration-300 flex items-center space-x-2 border border-gray-200"
                onClick={() => setIsBusquedaAbierta(true)}
              >
                <Search className="h-5 w-5" />
                <span className="hidden sm:inline">Busca tu plantilla...</span>
              </Button>

              {/* Botón de menú hamburguesa para móvil */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú móvil - Ahora fuera del header para que ocupe toda la pantalla */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 max-w-[300px] w-full bg-white shadow-xl flex flex-col h-full z-[10000]">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="font-bold text-lg text-gray-900">Menú</span>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Cerrar menú</span>
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-white">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-3 text-gray-900">Categorías</h3>
                  <ul className="space-y-2">
                    {categorias.map((categoria) => (
                      <li key={categoria}>
                        <Link
                          href={`/${generateSlug(categoria)}`}
                          className="flex items-center py-2 hover:text-orange-500 text-gray-700"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="mr-2 text-orange-500">{getCategoryIcon(categoria)}</span>
                          <span>{categoria}</span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/categorias"
                        className="flex items-center py-2 text-orange-500 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Ver todas las categorías
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <h3 className="font-medium text-lg mb-3 text-gray-900">Últimas plantillas</h3>
                  <ul className="space-y-2">
                    {plantillasRecientes.map((plantilla) => (
                      <li key={plantilla.id}>
                        <Link
                          href={`/${generateSlug(plantilla.titulo)}`}
                          className="block py-2 hover:text-orange-500 text-gray-700"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {plantilla.titulo}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/plantillas"
                        className="block py-2 text-orange-500 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Ver todas las plantillas
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/sobre-nosotros"
                        className="block py-2 hover:text-orange-500 text-gray-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Sobre Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contacto"
                        className="block py-2 hover:text-orange-500 text-gray-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contacto
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terminos-y-privacidad"
                        className="block py-2 hover:text-orange-500 text-gray-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Términos y Privacidad
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <BusquedaModal isOpen={isBusquedaAbierta} onClose={() => setIsBusquedaAbierta(false)} />
    </>
  )
}

