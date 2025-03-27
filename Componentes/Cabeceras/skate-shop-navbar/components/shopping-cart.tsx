import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Minus, Plus } from "lucide-react"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Skateboard Deck", price: 59.99, quantity: 1 },
    { id: 2, name: "Trucks", price: 29.99, quantity: 2 },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[#c59d45]">Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4 pb-4 border-b">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center">
            <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
              className="w-16 mx-2 text-center"
            />
            <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 text-red-500"
              onClick={() => updateQuantity(item.id, 0)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center mt-6">
        <span className="font-bold">Total:</span>
        <span className="font-bold text-[#c59d45]">${total.toFixed(2)}</span>
      </div>
      <Button className="w-full mt-6 bg-[#c59d45] hover:bg-[#d5b165] text-white">Checkout</Button>
    </div>
  )
}

