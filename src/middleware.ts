import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { categories } from './routes/categories'

// Extraer las rutas base de las categorías
const categoryBasePaths = categories.map(cat => cat.slug)

// Rutas estáticas permitidas
const staticRoutes = ['/', '/contacto', '/acerca']

// Patrones para rutas dinámicas
const dynamicPatterns = [
  /^\/noticias\/[a-z-]+\/pagina\/\d+$/,  // /noticias/venezuela/pagina/2
  /^\/noticias\/[a-z-]+$/,               // /noticias/venezuela
  /^\/[a-z-]+$/                          // Otras rutas simples
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Permitir archivos estáticos esenciales
  if (pathname.match(/\.(png|jpg|jpeg|gif|css|js|ico|svg|xml|txt)$/)) {
    return NextResponse.next()
  }

  // Verificar rutas estáticas permitidas
  if (staticRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Verificar si es una ruta de categoría base
  if (categoryBasePaths.some(route => pathname === route)) {
    return NextResponse.next()
  }

  // Verificar rutas dinámicas permitidas
  const isDynamicRouteAllowed = dynamicPatterns.some(pattern => 
    pattern.test(pathname)
  )

  if (!isDynamicRouteAllowed) {
    // Redirigir a 404 si la ruta no está permitida
    return NextResponse.rewrite(new URL('/404', request.url), { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}