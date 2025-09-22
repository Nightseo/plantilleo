// Verificar que la redirección de /plantillas a /nuestras-plantillas sea 301 (permanente)

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname

  // Redirect from /plantillas to /nuestras-plantillas
  if (pathname === "/plantillas") {
    url.pathname = "/nuestras-plantillas"
    return NextResponse.redirect(url, 301) // 301 redirect (permanent)
  }

  // Redirect from /plantillas/[slug] to /[slug]
  if (pathname.startsWith("/plantillas/")) {
    const slug = pathname.replace("/plantillas/", "/")
    url.pathname = slug
    return NextResponse.redirect(url, 301) // 301 redirect (permanent)
  }

  // Redirect from /categorias/[slug] to /[slug]
  if (pathname.startsWith("/categorias/")) {
    const slug = pathname.replace("/categorias/", "/")
    url.pathname = slug
    return NextResponse.redirect(url, 301) // 301 redirect (permanent)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/plantillas", "/plantillas/:path*", "/categorias/:path*"],
}

