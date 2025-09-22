import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes (FAQ) | Plantilleo",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre nuestras plantillas gratuitas, su uso y descarga.",
  alternates: {
    canonical: "https://www.plantilleo.com/preguntas-frecuentes",
  },
}

export default function PreguntasFrecuentesPage() {
  const faqs = [
    {
      pregunta: "¿Las plantillas de Plantilleo.com son realmente gratuitas?",
      respuesta:
        "Sí. Todas las plantillas que encuentras en Plantilleo.com son completamente gratuitas, sin registros obligatorios ni costos ocultos. Creemos en el acceso libre a documentos bien estructurados y actualizados.",
    },
    {
      pregunta: "¿Las plantillas están revisadas legalmente?",
      respuesta:
        "Absolutamente. Contamos con un equipo de expertos en derecho que revisa cada plantilla para garantizar que cumpla con la normativa vigente en España. Sin embargo, te recomendamos que, si tienes un caso específico o complejo, consultes con un abogado.",
    },
    {
      pregunta: "¿En qué formatos puedo descargar las plantillas?",
      respuesta:
        "Todas nuestras plantillas están disponibles en formatos PDF y Word (DOCX), para que puedas editarlas fácilmente o imprimirlas directamente según tu necesidad.",
    },
    {
      pregunta: "¿Cómo puedo descargar una plantilla?",
      respuesta:
        "Simplemente accede a la página de la plantilla que necesitas, elige el formato (PDF o Word) y haz clic en el botón de descarga. No necesitas registrarte ni proporcionar datos personales.",
    },
    {
      pregunta: "¿Puedo modificar las plantillas?",
      respuesta:
        "Sí. Si descargas el formato Word (DOCX), puedes editarlo libremente para adaptarlo a tu situación específica. Las versiones en PDF pueden imprimirse y completarse a mano.",
    },
    {
      pregunta: "¿Puedo utilizar las plantillas para fines comerciales?",
      respuesta:
        "Depende del tipo de documento. Algunas plantillas pueden usarse para uso personal y profesional sin restricciones, mientras que otras pueden estar sujetas a ciertas condiciones. Siempre recomendamos revisar el contenido y, si tienes dudas, consultarnos.",
    },
    {
      pregunta: "¿Cómo sé que una plantilla está actualizada?",
      respuesta:
        "Nuestro equipo revisa periódicamente las plantillas para asegurarse de que estén al día con la legislación española. En cada documento encontrarás la fecha de su última revisión.",
    },
    {
      pregunta: "No encuentro la plantilla que necesito, ¿pueden crearla?",
      respuesta:
        "Estamos constantemente ampliando nuestro catálogo. Si necesitas una plantilla específica que aún no tenemos disponible, envíanos una solicitud a soporte@plantilleo.com y la tendremos en cuenta para futuras actualizaciones.",
    },
    {
      pregunta: "¿Tienen soporte si tengo dudas sobre cómo usar una plantilla?",
      respuesta:
        "Sí. Si tienes problemas para descargar, editar o utilizar una plantilla, puedes escribirnos a través de nuestro formulario de contacto o enviarnos un correo a soporte@plantilleo.com.",
    },
    {
      pregunta: "¿Cómo puedo estar al tanto de nuevas plantillas o actualizaciones?",
      respuesta:
        "Puedes suscribirte a nuestra newsletter o seguirnos en redes sociales para enterarte de nuevas plantillas y actualizaciones importantes.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-6">
          <HelpCircle className="h-8 w-8 text-orange-600" />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Preguntas Frecuentes (FAQ)</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sabemos que pueden surgir dudas al descargar y usar nuestras plantillas gratuitas. Por eso, hemos recopilado
          las preguntas más comunes para ayudarte de forma rápida y clara. Si no encuentras la respuesta que buscas,
          siempre puedes escribirnos a través de nuestro formulario de contacto.
        </p>
      </div>

      {/* FAQs Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-orange-600 transition-colors">
                {index + 1}. {faq.pregunta}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-2 pb-4 leading-relaxed">{faq.respuesta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿No encuentras la respuesta que buscas?</h2>
        <p className="text-gray-700 mb-6">
          Nuestro equipo está listo para ayudarte con cualquier duda adicional que puedas tener.
        </p>
        <a
          href="/contacto"
          className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
        >
          Contáctanos
        </a>
      </div>
    </div>
  )
}

