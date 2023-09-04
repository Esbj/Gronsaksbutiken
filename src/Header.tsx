import { useContext } from "react"
import { CartContext } from "./CartContext"

const Header = () => {

  const { cart } = useContext(CartContext)
  return (
    <header style={{
      "height": "4rem",
      "backgroundColor": "green",
      "display": "flex",
      "justifyContent": "space-between",
      "padding": "1rem",
      "alignItems": "center"
    }}>
      <h1>Grönsaksbutiken</h1>
      <p>Kundvagn: {cart.length} </p>
    </header>
  )
}

export default Header
