"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

type Producto = {
  id: number
  nombre: string
  precio: number
  imagen: string
  descripcion: string
  categoria: string
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Skate Clásico",
    precio: 89.99,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Skateboard completo perfecto para principiantes",
    categoria: "Skates",
  },
  {
    id: 2,
    nombre: "Trucks Pro",
    precio: 54.99,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Trucks de alta calidad para un mejor control",
    categoria: "Partes",
  },
  {
    id: 3,
    nombre: "Set de Ruedas",
    precio: 34.99,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Set de 4 ruedas de alto rendimiento",
    categoria: "Partes",
  },
  {
    id: 4,
    nombre: "Lija Antideslizante",
    precio: 9.99,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Lija de alta adherencia para mayor estabilidad",
    categoria: "Accesorios",
  },
  {
    id: 5,
    nombre: "Herramienta Multiusos",
    precio: 19.99,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Herramienta todo en uno para tu skate",
    categoria: "Accesorios",
  },
  {
    id: 6,
    nombre: "Mochila Skater",
    precio: 49.99,
    imagen: "/placeholder.svg?height=200&width=200",
    descripcion: "Mochila espaciosa con correas para tu skate",
    categoria: "Accesorios",
  },
]

export default function PaginaProductos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todos")
  const { toast } = useToast()

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((producto) => producto.categoria === categoriaSeleccionada)

  const añadirAlCarrito = (producto: Producto) => {
    toast({
      title: "Producto añadido",
      description: `${producto.nombre} ha sido añadido a tu carrito.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#c59d45]">Nuestros Productos</h1>

      <div className="mb-6">
        <Select onValueChange={(value) => setCategoriaSeleccionada(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todos</SelectItem>
            <SelectItem value="Skates">Skates</SelectItem>
            <SelectItem value="Partes">Partes</SelectItem>
            <SelectItem value="Accesorios">Accesorios</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productosFiltrados.map((producto) => (
          <Card key={producto.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={producto.imagen || "/placeholder.svg"}
                alt={producto.nombre}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold mb-2">{producto.nombre}</CardTitle>
              <Badge className="mb-2">{producto.categoria}</Badge>
              <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p>
              <p className="text-[#c59d45] font-bold">{producto.precio.toFixed(2)} €</p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-[#c59d45] hover:bg-[#d5b165] text-white"
                onClick={() => añadirAlCarrito(producto)}
              >
                Añadir al Carrito
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

