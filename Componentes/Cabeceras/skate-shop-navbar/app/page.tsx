import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WPHtvTlFuh6kF9X1Lc3bsTFz3IhD3r.png"
          alt="Skater realizando un truco"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <Image
            src="/placeholder.svg?height=100&width=300"
            alt="Granito Skateboarding"
            width={300}
            height={100}
            className="mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenidos a Granito Skateboarding</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Tu destino para todo lo relacionado con el skateboarding. Equipamiento de calidad, ropa y accesorios.
          </p>
          <Button size="lg" className="bg-[#c59d45] hover:bg-[#d5b165] text-white">
            Ver Productos <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="flex flex-col items-center p-6">
                <ShoppingBag className="w-12 h-12 text-[#c59d45] mb-4" />
                <h3 className="text-xl font-bold mb-2">Productos Premium</h3>
                <p className="text-center text-gray-600">Las mejores marcas y productos seleccionados para ti</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="flex flex-col items-center p-6">
                <Truck className="w-12 h-12 text-[#c59d45] mb-4" />
                <h3 className="text-xl font-bold mb-2">Envío Rápido</h3>
                <p className="text-center text-gray-600">Entrega a toda España en 24/48 horas</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="flex flex-col items-center p-6">
                <Award className="w-12 h-12 text-[#c59d45] mb-4" />
                <h3 className="text-xl font-bold mb-2">Garantía de Calidad</h3>
                <p className="text-center text-gray-600">Todos nuestros productos tienen garantía</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden group">
                <Link href="/productos" className="block">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt={`Zapatilla ${item}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Zapatillas Skate Pro</h3>
                    <p className="text-[#c59d45] font-bold">89.99 €</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#c59d45] hover:bg-[#d5b165] text-white">Ver Todos los Productos</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#c59d45]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¡Únete a nuestra comunidad!</h2>
            <p className="mb-6">
              Suscríbete para recibir las últimas novedades, ofertas exclusivas y contenido sobre skateboarding
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input type="email" placeholder="Tu email" className="px-4 py-2 rounded-md flex-1 max-w-sm text-black" />
              <Button variant="secondary">Suscribirse</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Síguenos en Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt={`Instagram post ${item}`}
                  fill
                  className="object-cover hover:opacity-75 transition-opacity cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">@granitoskateboarding</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

