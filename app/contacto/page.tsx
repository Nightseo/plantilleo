import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, HelpCircle, Send, Clock, CheckCircle } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="-mx-4 -mt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-800 w-full mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 opacity-20 rounded-full animate-blob"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-yellow-500 opacity-20 rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-red-500 opacity-20 rounded-full animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Contacta con <span className="text-orange-200">Nuestro Equipo</span>
            </h1>
            <p className="text-xl text-orange-100 mb-6">Estamos aquí para ayudarte con cualquier duda o sugerencia</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 relative">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full opacity-50 -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full opacity-50 -z-10 blur-3xl"></div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            ¿Tienes alguna pregunta, sugerencia o necesitas ayuda con una plantilla? En Plantilleo.com, estamos aquí
            para escucharte. Nuestro equipo revisa y actualiza constantemente nuestras plantillas, pero si necesitas una
            en particular o tienes dudas sobre el uso de algún documento, no dudes en escribirnos.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Puedes ponerte en contacto con nosotros a través del formulario que encontrarás en esta página. Respondemos
            en menos de 24 horas porque sabemos que los documentos importantes no pueden esperar.
          </p>
        </div>

        {/* Ventajas de contactarnos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {[
            {
              icon: <Clock className="h-10 w-10 text-orange-500" />,
              title: "Respuesta Rápida",
              description: "Te respondemos en menos de 24 horas, porque sabemos que tu tiempo es valioso.",
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-orange-500" />,
              title: "Expertos Verificados",
              description: "Nuestro equipo de especialistas legales y diseñadores resolverá tus dudas.",
            },
            {
              icon: <Send className="h-10 w-10 text-orange-500" />,
              title: "Soporte Personalizado",
              description: "Cada consulta recibe atención individualizada según tus necesidades específicas.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-orange-50 p-3 rounded-full w-fit mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
              <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-3">
                <Phone className="h-5 w-5" />
              </span>
              Nuestra información de contacto
            </h2>

            <Card className="mb-8 overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-50 p-2 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Dirección</p>
                      <p className="text-gray-700">Calle Gran Vía, 32, 4º Planta, 28013, Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-50 p-2 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Correo electrónico</p>
                      <a href="mailto:soporte@plantilleo.com" className="text-orange-600 hover:underline">
                        soporte@plantilleo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-50 p-2 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Teléfono</p>
                      <p className="text-gray-700">+34 910 602 745</p>
                      <p className="text-sm text-gray-500">Horario: L-V de 9:00 a 18:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-100 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 opacity-50 rounded-full -mr-16 -mt-16"></div>

              <div className="relative">
                <h3 className="flex items-center text-xl font-bold mb-6 text-gray-900">
                  <HelpCircle className="h-6 w-6 text-orange-500 mr-3" />
                  ¿Necesitas una plantilla específica?
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nos esforzamos por ofrecer plantillas gratuitas actualizadas y revisadas legalmente, pero si hay algún
                  documento que aún no tenemos disponible, dínoslo. Nuestro equipo de redactores y asesores legales
                  trabaja continuamente para ampliar nuestra biblioteca y asegurarse de que todos los documentos cumplan
                  con la normativa vigente en España.
                </p>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-orange-500 mr-3 text-2xl">💡</div>
                  <p className="text-gray-700">
                    <span className="font-medium">Sugerencia:</span> Antes de escribirnos, echa un vistazo a nuestra
                    sección de Preguntas Frecuentes (FAQ). Es posible que ahí encuentres la respuesta que buscas sin
                    necesidad de esperar nuestra respuesta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
              <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-3">
                <Send className="h-5 w-5" />
              </span>
              Envíanos un mensaje
            </h2>

            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-3 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <CardContent className="pt-8">
                <form className="space-y-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <Input
                      id="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      className="border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto
                    </label>
                    <Input
                      id="asunto"
                      type="text"
                      placeholder="Asunto de tu mensaje"
                      required
                      className="border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      placeholder="¿En qué podemos ayudarte?"
                      rows={6}
                      required
                      className="border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar mensaje
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Nos comprometemos a responder en menos de 24 horas
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa de Google Maps */}
        <div className="max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden shadow-lg">
          <div className="w-full h-[450px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4769609011846!2d-3.7034788049359815!3d40.42043636906572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d82b94b69%3A0x639c4331857ca6fe!2sEdificio%20Sociedad%20Madrid-Par%C3%ADs!5e0!3m2!1ses!2ses!4v1741721625002!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Ubicación de Plantilleo en Madrid"
            />
          </div>
          <div className="bg-white p-4 border-t border-gray-100">
            <p className="text-sm text-gray-600 flex items-center">
              <MapPin className="h-4 w-4 text-orange-500 mr-2" />
              Calle Gran Vía, 32, 4º Planta, 28013, Madrid, España
            </p>
          </div>
        </div>

        {/* Mensaje final */}
        <div className="text-center max-w-3xl mx-auto bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Gracias por confiar en Plantilleo.com</h3>
          <p className="text-lg text-gray-700">
            Estamos comprometidos a ofrecerte las mejores plantillas y el mejor servicio. ¡Esperamos tu mensaje!
          </p>
        </div>
      </div>
    </div>
  )
}

