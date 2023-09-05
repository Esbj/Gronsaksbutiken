import { ReactNode, createContext, useState } from "react";
import { Product } from "./data";

interface ContextValue {
  cart: Product[]
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

interface Props {
  children: ReactNode
}

export const CartContext = createContext<ContextValue>({ cart: [], addToCart: () => { }, removeFromCart: () => { } })

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Array<Product>>([])
  const removeFromCart = (produt: Product) => {
    setCart(cart => cart.filter(p => p.id !== produt.id))
  }
  const addToCart = (product: Product) => {
    setCart([...cart, new Product(product.name, product.price)])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}