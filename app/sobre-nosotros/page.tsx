import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Download, ArrowRight } from "lucide-react"

export default function SobreNosotrosPage() {
  return (
    <div className="-mx-4 -mt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-800 w-full mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 opacity-20 rounded-full animate-blob"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-yellow-500 opacity-20 rounded-full animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Sobre Nosotros</h1>
            <p className="text-xl text-orange-100 mb-6">
              Conoce al equipo detrás de las plantillas que simplifican tu vida
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Introducción */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 opacity-50 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <p className="text-xl text-gray-700 leading-relaxed">
                En un mundo donde el tiempo es oro y la burocracia no perdona, tener a mano documentos bien
                estructurados, actualizados y listos para usar es más que una comodidad: es una necesidad. En{" "}
                <span className="font-semibold text-orange-600">Plantilleo.com</span>, nos propusimos eliminar las
                complicaciones y ofrecer plantillas gratuitas que realmente sirvan, sin atajos ni letra pequeña.
              </p>
            </div>
          </div>
        </section>

        {/* Nuestro propósito */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-2xl transform rotate-3"></div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Equipo de Plantilleo trabajando"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-3">
                  <Award className="h-6 w-6" />
                </span>
                Nuestro propósito: hacerte la vida más fácil
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sabemos lo frustrante que es perder tiempo buscando una plantilla decente solo para descubrir que está
                desactualizada, mal redactada o llena de errores legales. Por eso, creamos una plataforma donde cada
                plantilla pasa por un proceso de revisión exhaustivo antes de estar disponible para descarga.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nuestro equipo está formado por expertos en derecho, diseñadores de documentos y redactores
                especializados, que trabajan para ofrecerte plantillas legales, profesionales y 100% funcionales. Ya sea
                que necesites un contrato de alquiler, un currículum bien estructurado o una factura profesional, aquí
                lo encontrarás en formatos editables como PDF y Word (DOCX).
              </p>
            </div>
          </div>
        </section>

        {/* Quiénes somos */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 inline-flex items-center">
              <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-3">
                <Users className="h-6 w-6" />
              </span>
              ¿Quiénes somos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detrás de Plantilleo.com hay un equipo de profesionales apasionados por la eficiencia y el acceso libre a
              recursos de calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Marina López",
                role: "Abogada especializada",
                description: "Supervisa la validez legal de cada documento, especializada en derecho civil y laboral.",
                emoji: "📝",
                bgColor: "from-blue-400 to-blue-600",
              },
              {
                name: "Andrés Fernández",
                role: "Redactor técnico",
                description: "Con más de 10 años de experiencia en documentación empresarial y administrativa.",
                emoji: "📂",
                bgColor: "from-green-400 to-green-600",
              },
              {
                name: "Lucía Herrera",
                role: "Diseñadora de documentos",
                description: "Encargada de que cada plantilla tenga un formato limpio, intuitivo y profesional.",
                emoji: "🎨",
                bgColor: "from-purple-400 to-purple-600",
              },
              {
                name: "Carlos Méndez",
                role: "Responsable de normativa",
                description: "Asegura que nuestros modelos cumplan con la legislación vigente en España.",
                emoji: "🔍",
                bgColor: "from-orange-400 to-orange-600",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 group"
              >
                <div className={`h-24 bg-gradient-to-r ${member.bgColor} flex items-center justify-center`}>
                  <span className="text-4xl">{member.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Juntos, trabajamos para que no tengas que preocuparte por si el contrato que descargas es válido o si la
              plantilla de factura cumple con los requisitos fiscales.
            </p>
          </div>
        </section>

        {/* Lo que nos hace diferentes */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 opacity-30 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 opacity-30 rounded-full -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 inline-flex items-center">
                <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-3">
                  <Award className="h-6 w-6" />
                </span>
                Lo que nos hace diferentes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestro compromiso con la calidad y la transparencia nos distingue
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Plantillas revisadas y actualizadas",
                  description:
                    "No publicamos nada que no haya pasado por el filtro de nuestro equipo legal y de contenido.",
                },
                {
                  title: "Gratis y sin trucos",
                  description: "No pedimos registros, ni pagos ocultos. Lo que ves es lo que obtienes.",
                },
                {
                  title: "Formatos editables y listos para usar",
                  description: "Descarga en PDF o Word (DOCX), según lo que necesites.",
                },
                {
                  title: "Compromiso con la calidad",
                  description:
                    "Porque entendemos que un simple documento puede marcar la diferencia entre un trámite rápido o un problema innecesario.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex"
                >
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nuestra promesa */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Nuestra promesa</h2>
              <p className="text-xl mb-8 leading-relaxed">
                En Plantilleo.com, no vendemos humo ni te hacemos perder el tiempo. Si descargas una plantilla aquí,
                puedes estar seguro de que ha sido verificada, actualizada y diseñada para ser realmente útil.
              </p>
              <p className="text-2xl font-medium mb-8">
                Descubre la diferencia de trabajar con documentos hechos con rigor y profesionalismo.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-100 rounded-full px-8">
                  <Link href="/nuestras-plantillas">
                    Explorar plantillas
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="mb-12 bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Listo para simplificar tu trabajo?</h3>
            <p className="text-gray-600">Descarga nuestras plantillas gratuitas y ahorra tiempo valioso.</p>
          </div>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/nuestras-plantillas">
              <Download className="mr-2 h-5 w-5" />
              Ver todas las plantillas
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}

