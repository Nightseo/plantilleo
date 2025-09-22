export default function TerminosYPrivacidadPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Términos de Servicio y Política de Privacidad
      </h1>

      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Términos de Servicio</h2>
          <p className="text-gray-600 mb-4">
            Al utilizar Plantilleo, aceptas cumplir con nuestros términos de servicio. Estos términos incluyen, pero no
            se limitan a:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Uso apropiado y legal de nuestras plantillas y servicios.</li>
            <li>Respeto a los derechos de propiedad intelectual.</li>
            <li>Prohibición de redistribución no autorizada de nuestros productos.</li>
            <li>Aceptación de las limitaciones de responsabilidad.</li>
          </ul>
          <p className="text-gray-600">Para más detalles, por favor lee nuestros términos de servicio completos.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Política de Privacidad</h2>
          <p className="text-gray-600 mb-4">
            Tu privacidad es importante para nosotros. Nuestra política de privacidad describe cómo recopilamos, usamos
            y protegemos tu información personal. Algunos puntos clave incluyen:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Tipos de información que recopilamos.</li>
            <li>Cómo utilizamos tu información.</li>
            <li>Medidas de seguridad para proteger tus datos.</li>
            <li>Tus derechos respecto a tu información personal.</li>
          </ul>
          <p className="text-gray-600">
            Te invitamos a leer nuestra política de privacidad completa para entender mejor cómo manejamos tu
            información.
          </p>
        </section>
      </div>
    </div>
  )
}

