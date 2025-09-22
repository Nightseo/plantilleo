import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="text-2xl font-bold text-gray-900">Plantilleo</span>
            </Link>
            <p className="text-gray-600">Transformando ideas en documentos impresionantes.</p>
          </div>
          {[
            {
              title: "Empresa",
              links: [
                { label: "Sobre Nosotros", href: "/sobre-nosotros" },
                { label: "Contacto", href: "/contacto" },
                { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
                { label: "Mapa del sitio", href: "/sitemap.xml" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Términos de Servicio", href: "/terminos-y-privacidad" },
                { label: "Política de Privacidad", href: "/terminos-y-privacidad" },
                { label: "Cookies", href: "/cookies" },
              ],
            },
          ].map((column, index) => (
            <div key={index}>
              <p className="font-bold text-lg mb-4 text-gray-900">{column.title}</p>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="hover:text-orange-500 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex justify-center">
          <p className="text-sm">© {new Date().getFullYear()} Plantilleo.com. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

