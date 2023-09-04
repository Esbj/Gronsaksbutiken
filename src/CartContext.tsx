import { ReactNode, createContext, useState } from "react";
import { Product } from "./data";

interface ContextValue {
  cart: Product[]
}

interface Props {
  children: ReactNode
}

export const CartContext = createContext<ContextValue>({ cart: [] })

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Array<Product>>([])

  const addToCart = (product: Product) => {
    setCart()
  }

  return (
    <CartContext.Provider value={{ cart }}>
      {children}
    </CartContext.Provider>
  )
}