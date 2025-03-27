import { Button } from "@/components/ui/button"

type Product = {
  id: number
  name: string
  price: number
  image: string
}

const products: Product[] = [
  { id: 1, name: "Classic Skateboard", price: 99.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Pro Trucks", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Skate Wheels Set", price: 29.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Grip Tape", price: 9.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Skate Tool", price: 14.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Skate Backpack", price: 39.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#c59d45]">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-[#c59d45] font-bold mb-4">${product.price.toFixed(2)}</p>
              <Button className="w-full bg-[#c59d45] hover:bg-[#d5b165] text-white">Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

