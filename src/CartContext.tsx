import { ReactNode, createContext, useState } from "react";
import { Product } from "./data";

interface ContextValue {
  cart: Product[]
  addToCart: (product: Product) => void;
}

interface Props {
  children: ReactNode
}

export const CartContext = createContext<ContextValue>({ cart: [], addToCart: () => { } })

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Array<Product>>([])

  const addToCart = (product: Product) => {
    setCart((prevState) => [...prevState, product])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}