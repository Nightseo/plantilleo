export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Política de Cookies</h1>

      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">¿Qué son las cookies?</h2>
          <p className="text-gray-600 mb-4">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
            Sirven para recordar tus preferencias y mejorar tu experiencia de navegación.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cómo utilizamos las cookies</h2>
          <p className="text-gray-600 mb-4">En Plantilleo, utilizamos cookies para:</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Recordar tus preferencias de inicio de sesión.</li>
            <li>Entender cómo interactúas con nuestro sitio.</li>
            <li>Mejorar la velocidad y seguridad del sitio.</li>
            <li>Proporcionar funcionalidades personalizadas.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tipos de cookies que utilizamos</h2>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Cookies esenciales: necesarias para el funcionamiento básico del sitio.</li>
            <li>Cookies de rendimiento: nos ayudan a mejorar el rendimiento del sitio.</li>
            <li>Cookies de funcionalidad: recuerdan tus preferencias y elecciones.</li>
            <li>Cookies de publicidad: pueden ser utilizadas para mostrarte anuncios relevantes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Control de cookies</h2>
          <p className="text-gray-600 mb-4">
            Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu
            dispositivo y puedes configurar la mayoría de los navegadores para que no las acepten. Sin embargo, si haces
            esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites el sitio y que
            algunos servicios y funcionalidades no funcionen.
          </p>
        </section>
      </div>
    </div>
  )
}

