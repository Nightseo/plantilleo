import Link from "next/link"
import { ArrowRight, CheckCircle, Download, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlantillaCard } from "@/components/plantilla-card"
import { getAllTemplates, getAllCategories, getPopularTemplates } from "@/lib/template-data"
import { getCategoryIcon } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plantilleo - Plantillas Gratuitas en PDF y Word | Documentos Profesionales 2025",
  description:
    "Descarga plantillas gratuitas en PDF y Word: contratos, facturas, currículums y más. Documentos actualizados y con validez legal para España.",
  keywords: [
    "Plantilleo",
    "plantillas gratis",
    "documentos profesionales",
    "plantillas PDF",
    "plantillas Word",
    "documentos legales",
  ],
  authors: [{ name: "Plantilleo" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.plantilleo.com",
  },
}

export default function PaginaInicio() {
  const plantillasDestacadas = getPopularTemplates(4)
  const categorias = getAllCategories()

  return (
    <div className="-mx-4 -mt-8">
      {/* Hero Section - Ancho completo */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-orange-600 to-orange-800 w-full">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 opacity-20 rounded-full animate-blob"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-yellow-500 opacity-20 rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-red-500 opacity-20 rounded-full animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Plantillas Gratis para <span className="text-orange-200">Todo lo que Necesitas</span>
            </h1>
            <p className="text-base md:text-xl text-orange-100 mb-6 md:mb-10">
              Descarga plantillas gratuitas de calidad, revisadas y actualizadas por nuestro equipo de expertos.
            </p>
            <div className="flex justify-center mt-6">
              <Link href="/nuestras-plantillas">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-100 rounded-full px-6 py-3 font-medium shadow-md"
                >
                  Explorar plantillas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Plantillas Gratuitas con Validez Legal
              </h2>
              <p className="text-gray-600 mb-4">
                En Plantilleo.com, sabemos lo frustrante que puede ser buscar plantillas gratuitas y terminar con
                archivos desactualizados, mal estructurados o, peor aún, sin validez legal. Por eso, hemos creado una
                plataforma donde puedes descargar plantillas gratis de calidad, revisadas y actualizadas por nuestro
                equipo de expertos.
              </p>
              <p className="text-gray-600 mb-6">
                Ya sea que necesites un contrato de alquiler, una factura profesional, un currículum impecable o
                cualquier otro documento, aquí encontrarás plantillas en formatos como PDF, Word (DOCX) y más, listas
                para usar sin complicaciones.
              </p>
              <Link href="/nuestras-plantillas">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  Ver todas las plantillas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-2xl transform rotate-3"></div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {plantillasDestacadas.map((plantilla, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 border border-gray-100 rounded-lg hover:border-orange-200 transition-colors"
                      >
                        <div className="mr-3 text-orange-500">{getCategoryIcon(plantilla.categoria)}</div>
                        <div className="text-sm font-medium text-gray-700 truncate">
                          {plantilla.titulo.split(" ").slice(0, 3).join(" ")}...
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de valor Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Descarga sin sorpresas, 100% gratis y actualizadas
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              No más registros innecesarios ni descargas llenas de publicidad engañosa. En Plantilleo.com, cada
              plantilla es gratuita y accesible en un solo clic. Además, nos aseguramos de que cumplan con la
              legislación vigente en España, para que puedas usarlas con total tranquilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Download className="h-10 w-10 text-orange-500" />,
                title: "Descarga Inmediata",
                description:
                  "Accede a todas nuestras plantillas sin registros ni pagos ocultos. Descarga directamente lo que necesitas.",
              },
              {
                icon: <Shield className="h-10 w-10 text-orange-500" />,
                title: "Validez Legal",
                description:
                  "Documentos revisados por expertos para garantizar su cumplimiento con la legislación española vigente.",
              },
              {
                icon: <Clock className="h-10 w-10 text-orange-500" />,
                title: "Siempre Actualizadas",
                description:
                  "Mantenemos nuestras plantillas al día con los cambios legales y las mejores prácticas profesionales.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="bg-orange-50 p-3 rounded-full w-fit mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">¿Por qué elegir Plantilleo.com?</h2>
              <ul className="space-y-4">
                {[
                  "Revisión legal: Nuestro equipo verifica que cada plantilla cumpla con la normativa actual.",
                  "Variedad de formatos: PDF, Word (DOCX) y otros formatos editables según lo que necesites.",
                  "Sin coste, sin trucos: No pedimos registros ni pagos ocultos. Descarga y usa libremente.",
                  "Siempre actualizadas: Nos encargamos de mantener nuestros documentos al día.",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/categorias">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    Explorar categorías
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform -rotate-2"></div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">plantilleo.com</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-100 rounded w-4/5"></div>
                    <div className="flex space-x-2 mt-4">
                      <div className="h-8 bg-blue-100 rounded w-1/3 flex items-center justify-center text-xs text-blue-500 font-medium">
                        DOCX
                      </div>
                      <div className="h-8 bg-red-100 rounded w-1/3 flex items-center justify-center text-xs text-red-500 font-medium">
                        PDF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Encuentra la plantilla que necesitas en segundos
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Usar Plantilleo.com es fácil: busca la plantilla que necesitas, descárgala y úsala al instante. Sin
              complicaciones, sin letra pequeña.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categorias.map((categoria) => (
              <Link
                key={categoria.slug}
                href={`/${categoria.slug}`}
                className="group bg-white p-4 md:p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-orange-300"
              >
                <div className="text-orange-500 mb-3 md:mb-4">{getCategoryIcon(categoria.name)}</div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2 group-hover:text-orange-500 transition-colors">
                  {categoria.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-700">
                  {categoria.templateCount} plantillas
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Plantillas Destacadas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">Plantillas Destacadas</h2>
            <Link
              href="/nuestras-plantillas"
              className="group flex items-center text-orange-600 hover:text-orange-700 transition-colors"
            >
              <span className="font-medium text-sm md:text-base">Ver todas las plantillas</span>
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {plantillasDestacadas.map((plantilla) => (
              <PlantillaCard key={plantilla.id} plantilla={plantilla} showImage={false} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ancho completo */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Descubre la diferencia de trabajar con plantillas profesionales
            </h2>
            <p className="text-base md:text-xl mb-6 md:mb-10 opacity-90">
              Plantillas revisadas, actualizadas y listas para usar. Descarga ahora y ahorra tiempo con Plantilleo.com.
            </p>
            <Link href="/nuestras-plantillas">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-6 md:px-10 py-2 md:py-3 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Descargar Plantillas Gratis
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

