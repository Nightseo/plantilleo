"use client"

import type React from "react"
import Link from "next/link"
import { useState, useRef } from "react"
import {
  Download,
  Star,
  Check,
  FileText,
  HelpCircle,
  Lightbulb,
  Calendar,
  FileType,
  Languages,
  Clock,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PlantillasRelacionadas } from "@/components/plantillas-relacionadas"
import { generateSlug } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface PlantillaDetalleProps {
  plantilla: {
    id: string
    titulo: string
    slug: string
    categoria: string
    descripcion: string
    descargas: number
    caracteristicas: string[]
    formatos: {
      tipo: string
      url: string
    }[]
    valoracion: number
    faqs: { pregunta: string; respuesta: string }[]
    informacionLegal: string
    detalles: {
      fechaActualizacion?: string
      tamanoArchivo?: string
      idiomas?: string[]
      softwareRecomendado?: string[]
      tiempoEdicion?: string
      actualizaciones?: string
    }
    consejos: string[]
    imagenUrl?: string
    comoUsar: string[]
  }
}

export default function PlantillaDetalle({ plantilla }: PlantillaDetalleProps) {
  const guiaRef = useRef<HTMLDivElement>(null)
  const consejosRef = useRef<HTMLDivElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const isMobile = useMobile()

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const breadcrumbItems = [
    { label: plantilla.categoria, href: `/${generateSlug(plantilla.categoria)}` },
    { label: plantilla.titulo, href: `/${generateSlug(plantilla.titulo)}` },
  ]

  const plantillaSlug = generateSlug(plantilla.titulo)

  // Mejorado el schema con estructura @graph y tipos WebPage y Product
  // URLs corregidas sin el prefijo "/plantillas/"
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.plantilleo.com/${plantillaSlug}`,
        url: `https://www.plantilleo.com/${plantillaSlug}`,
        name: plantilla.titulo,
        description: `Descarga gratis ${plantilla.titulo} en formatos PDF y Word. Compatible con la normativa vigente en España.`,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.plantilleo.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Plantilleo",
          logo: {
            "@type": "ImageObject",
            url: "https://www.plantilleo.com/images/logo.png",
          },
        },
        mainEntity: {
          "@type": "Product",
          "@id": `https://www.plantilleo.com/${plantillaSlug}#product`,
          name: plantilla.titulo,
          url: `https://www.plantilleo.com/${plantillaSlug}`,
          description: `Plantilla en formato ${plantilla.formatos.map((f) => f.tipo).join(" y ")} para ${plantilla.titulo.toLowerCase()} en España.`,
          image: plantilla.imagenUrl || "https://www.plantilleo.com/placeholder.svg",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: `https://www.plantilleo.com/${plantillaSlug}`,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: plantilla.valoracion.toFixed(1),
            reviewCount: plantilla.descargas.toString(),
          },
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        <div className="lg:w-2/3">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div className="md:pr-8 flex-grow">
              <h1 className="text-3xl font-bold mb-2 text-gray-900">{plantilla.titulo}</h1>
              <p className="text-lg text-gray-600">{plantilla.descripcion}</p>
            </div>
          </div>

          {/* Nuevos CTAs en dos columnas - SIEMPRE VISIBLES y COMPLETAMENTE CAPADOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
            {/* CTA para WORD */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">WORD</h2>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 flex items-center justify-center font-semibold py-3 rounded-lg shadow-sm hover:shadow-md"
                asChild
              >
                <a
                  href={plantilla.formatos.find((f) => f.tipo === "DOCX")?.url || "#"}
                  download
                  rel="noreferrer nofollow noopener"
                  target="_blank"
                  aria-label="Descargar plantilla en formato WORD"
                  data-no-track="true"
                  tabIndex={0}
                  referrerPolicy="no-referrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <span className="text-base font-semibold">Descargar WORD (DOCX)</span>
                </a>
              </Button>
            </div>

            {/* CTA para PDF */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4 text-center text-red-600">PDF</h2>
              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 flex items-center justify-center font-semibold py-3 rounded-lg shadow-sm hover:shadow-md"
                asChild
              >
                <a
                  href={plantilla.formatos.find((f) => f.tipo === "PDF")?.url || "#"}
                  download
                  rel="noreferrer nofollow noopener"
                  target="_blank"
                  aria-label="Descargar plantilla en formato PDF"
                  data-no-track="true"
                  tabIndex={0}
                  referrerPolicy="no-referrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <span className="text-base font-semibold">Descargar PDF</span>
                </a>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="detalles" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="detalles">Detalles</TabsTrigger>
              <TabsTrigger value="caracteristicas">Características</TabsTrigger>
              <TabsTrigger value="informacion-legal">Legal</TabsTrigger>
            </TabsList>
            <TabsContent value="detalles" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {plantilla.detalles.fechaActualizacion && (
                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Última actualización</p>
                      <p className="text-gray-700">{plantilla.detalles.fechaActualizacion}</p>
                    </div>
                  </div>
                )}
                {plantilla.detalles.tamanoArchivo && (
                  <div className="flex items-start">
                    <FileType className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Tamaño del archivo</p>
                      <p className="text-gray-700">{plantilla.detalles.tamanoArchivo}</p>
                    </div>
                  </div>
                )}
                {plantilla.detalles.idiomas && plantilla.detalles.idiomas.length > 0 && (
                  <div className="flex items-start">
                    <Languages className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Idiomas disponibles</p>
                      <p className="text-gray-700">{plantilla.detalles.idiomas.join(", ")}</p>
                    </div>
                  </div>
                )}
                {plantilla.detalles.softwareRecomendado && plantilla.detalles.softwareRecomendado.length > 0 && (
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Software recomendado</p>
                      <p className="text-gray-700">{plantilla.detalles.softwareRecomendado.join(", ")}</p>
                    </div>
                  </div>
                )}
                {plantilla.detalles.tiempoEdicion && (
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Tiempo estimado de edición</p>
                      <p className="text-gray-700">{plantilla.detalles.tiempoEdicion}</p>
                    </div>
                  </div>
                )}
                {plantilla.detalles.actualizaciones && (
                  <div className="flex items-start">
                    <RefreshCw className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Actualizaciones</p>
                      <p className="text-gray-700">{plantilla.detalles.actualizaciones}</p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="caracteristicas" className="mt-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plantilla.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="informacion-legal" className="mt-4">
              <p className="text-gray-700">{plantilla.informacionLegal}</p>
            </TabsContent>
          </Tabs>

          <div ref={guiaRef} className="mb-8 border-t border-gray-200 pt-8">
            <p className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-gray-600" />
              Cómo usar esta plantilla
            </p>
            <ol className="space-y-3 list-decimal list-inside">
              {plantilla.comoUsar.map((paso, index) => (
                <li key={index} className="text-gray-700">
                  {paso}
                </li>
              ))}
            </ol>
          </div>

          {plantilla.consejos && plantilla.consejos.length > 0 && (
            <div ref={consejosRef} className="mb-8 border-t border-gray-200 pt-8">
              <p className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                <Lightbulb className="w-6 h-6 mr-2 text-gray-600" />
                Consejos
              </p>
              <ul className="space-y-3 list-disc list-inside">
                {plantilla.consejos.map((consejo, index) => (
                  <li key={index} className="text-gray-700">
                    {consejo}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div ref={faqsRef} className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Preguntas Frecuentes</h2>

            {/* Reemplazado el Accordion por una lista simple de preguntas y respuestas siempre visibles */}
            <div className="space-y-6">
              {plantilla.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-800 mb-2 text-lg">{faq.pregunta}</h3>
                  <p className="text-gray-600">{faq.respuesta}</p>
                </div>
              ))}
            </div>
          </div>

          <PlantillasRelacionadas categoriaActual={plantilla.categoria} plantillaActualId={plantilla.id} />
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                  {plantilla.categoria}
                </Badge>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold text-gray-800">{plantilla.valoracion.toFixed(1)}</span>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-6">{plantilla.descargas.toLocaleString()} descargas</div>
              <div className="mb-6">
                <div className="font-semibold text-gray-900 mb-2">Formatos disponibles:</div>
                <div className="flex flex-wrap gap-2">
                  {plantilla.formatos.map((formato) => (
                    <Badge key={formato.tipo} variant="secondary" className="text-sm">
                      {formato.tipo}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {plantilla.formatos.map((formato) => (
                  <Button
                    key={formato.tipo}
                    className={`w-full ${
                      formato.tipo === "DOCX" ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700"
                    } text-white transition-all duration-300 flex items-center justify-center font-semibold py-3 rounded-lg shadow-sm hover:shadow-md`}
                    asChild
                  >
                    <a
                      href={formato.url}
                      download
                      rel="noreferrer nofollow noopener"
                      target="_blank"
                      aria-label={`Descargar plantilla en formato ${formato.tipo}`}
                      data-no-track="true"
                      tabIndex={0}
                      referrerPolicy="no-referrer"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      <span className="text-base font-semibold">
                        Descargar {formato.tipo === "DOCX" ? "WORD (DOCX)" : formato.tipo}
                      </span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <p className="text-xl font-semibold mb-4 text-gray-800">Recursos</p>
              <ul className="space-y-3">
                <li>
                  <Button
                    onClick={() => scrollToSection(guiaRef)}
                    variant="ghost"
                    className="w-full justify-start text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Guía de uso detallada
                  </Button>
                </li>
                {plantilla.consejos && plantilla.consejos.length > 0 && (
                  <li>
                    <Button
                      onClick={() => scrollToSection(consejosRef)}
                      variant="ghost"
                      className="w-full justify-start text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    >
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Consejos de uso
                    </Button>
                  </li>
                )}
                <li>
                  <Button
                    onClick={() => scrollToSection(faqsRef)}
                    variant="ghost"
                    className="w-full justify-start text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                  >
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Preguntas frecuentes
                  </Button>
                </li>
                <li>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                  >
                    <Link href="/contacto">
                      <HelpCircle className="w-5 h-5 mr-2" />
                      Soporte técnico
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Barra fija de descarga para móvil - TAMBIÉN CAPADA */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-50 shadow-lg">
          <div className="flex gap-2">
            {plantilla.formatos.map((formato) => (
              <Button
                key={formato.tipo}
                className={`flex-1 ${
                  formato.tipo === "DOCX" ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700"
                } text-white transition-all duration-300 flex items-center justify-center font-semibold py-2 rounded-lg shadow-sm hover:shadow-md`}
                asChild
              >
                <a
                  href={formato.url}
                  download
                  rel="noreferrer nofollow noopener"
                  target="_blank"
                  aria-label={`Descargar plantilla en formato ${formato.tipo}`}
                  data-no-track="true"
                  tabIndex={0}
                  referrerPolicy="no-referrer"
                >
                  <Download className="w-4 h-4 mr-1" />
                  <span>Descargar {formato.tipo}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

