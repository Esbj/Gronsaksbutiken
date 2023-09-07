import { ReactNode, createContext, useState } from "react";
import { Product } from "./data";

interface ContextValue {
  cart: Product[]
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
}

interface Props {
  children: ReactNode
}

export const CartContext = createContext<ContextValue>({ cart: [], addToCart: () => { }, removeFromCart: () => { } })

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Array<Product>>([])
  const removeFromCart = (id: string) => {
    setCart(cart => cart.filter(p => p.id !== id))
  }
  const addToCart = (product: Product) => {
    // setCart([...cart, new Product(product.name, product.price)])

    //bäst att ändra quantity här istället för i cart. 
    // Se till att inte stöka ner istället för att göra det och behöva städa sedan
    const productInCaart = cart.find(cartProduct => cartProduct.name === product.name)
    if (productInCaart) {
      const updatedCart = cart.map(cartProduct => {
        if (cartProduct.name === product.name) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 }
        } else {
          return cartProduct
        }
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, new Product(product.name, product.price, 1)])
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}