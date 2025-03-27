import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Granito Skateboarding</h3>
                <p className="text-gray-400">
                  Tu tienda de confianza para todo lo relacionado con el skateboarding desde 2010.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Enlaces</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/productos" className="text-gray-400 hover:text-white">
                      Productos
                    </a>
                  </li>
                  <li>
                    <a href="/sobre-nosotros" className="text-gray-400 hover:text-white">
                      Sobre Nosotros
                    </a>
                  </li>
                  <li>
                    <a href="/contacto" className="text-gray-400 hover:text-white">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Ayuda</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Envíos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Devoluciones
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contacto</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>info@granitoskateboarding.com</li>
                  <li>+34 900 123 456</li>
                  <li>Calle Skate, 123</li>
                  <li>28001 Madrid</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Granito Skateboarding. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
