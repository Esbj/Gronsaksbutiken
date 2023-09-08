import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"


const Header = () => {

  const { cart } = useContext(CartContext)
  const { toggleCart } = useContext(CartContext)
  return (
    <header style={{ "height": "6rem", "backgroundColor": "green", "display": "flex", "flexDirection": "column", "padding": "1rem", }}>
      <div style={{
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-between",
        "alignItems": "center"
      }}>
        <Link to={"/"}><h1>Grönsaksbutiken</h1></Link>
        <p onClick={toggleCart}>Kundvagn: {cart.length} </p>
      </div>
      <nav>
        <Link to={"/"}>Hem</Link>
        <Link to={"/about"}>Om oss</Link>
      </nav>
    </header>
  )
}

export default Header
