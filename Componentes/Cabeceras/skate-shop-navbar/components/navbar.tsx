import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, Search } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-[#c59d45] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Logo Tienda de Skate" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="hover:bg-[#d5b165] px-3 py-2 rounded-md text-sm font-medium">
                  Inicio
                </Link>
                <Link href="/productos" className="hover:bg-[#d5b165] px-3 py-2 rounded-md text-sm font-medium">
                  Productos
                </Link>
                <Link href="/sobre-nosotros" className="hover:bg-[#d5b165] px-3 py-2 rounded-md text-sm font-medium">
                  Sobre Nosotros
                </Link>
                <Link href="/contacto" className="hover:bg-[#d5b165] px-3 py-2 rounded-md text-sm font-medium">
                  Contacto
                </Link>
                <Link href="/iniciar-sesion" className="hover:bg-[#d5b165] px-3 py-2 rounded-md text-sm font-medium">
                  Iniciar Sesión
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-600" />
                </div>
                <Input
                  type="text"
                  placeholder="Buscar"
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-[#d5b165] text-gray-800 placeholder-gray-600 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                />
              </div>
              <Button className="ml-4 inline-flex items-center justify-center p-2 rounded-md hover:bg-[#d5b165] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#c59d45] focus:ring-white">
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#d5b165] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#c59d45] focus:ring-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {/* Menú móvil, mostrar/ocultar basado en el estado del menú */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="hover:bg-[#d5b165] block px-3 py-2 rounded-md text-base font-medium">
            Inicio
          </Link>
          <Link href="/productos" className="hover:bg-[#d5b165] block px-3 py-2 rounded-md text-base font-medium">
            Productos
          </Link>
          <Link href="/sobre-nosotros" className="hover:bg-[#d5b165] block px-3 py-2 rounded-md text-base font-medium">
            Sobre Nosotros
          </Link>
          <Link href="/contacto" className="hover:bg-[#d5b165] block px-3 py-2 rounded-md text-base font-medium">
            Contacto
          </Link>
          <Link href="/iniciar-sesion" className="hover:bg-[#d5b165] block px-3 py-2 rounded-md text-base font-medium">
            Iniciar Sesión
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-[#d5b165]">
          <div className="flex items-center px-5">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-600" />
              </div>
              <Input
                type="text"
                placeholder="Buscar"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-[#d5b165] text-gray-800 placeholder-gray-600 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
              />
            </div>
            <Button className="ml-4 inline-flex items-center justify-center p-2 rounded-md hover:bg-[#d5b165] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#c59d45] focus:ring-white">
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

