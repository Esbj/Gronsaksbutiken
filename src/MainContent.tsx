import { useContext } from 'react'
import { CartContext } from './CartContext'
import { mockedProducts } from './data'
import Cart from './Cart'

const MainContent = () => {
  const { addToCart, isCartVisible } = useContext(CartContext)
  return (
    <main style={{ "display": "flex", "justifyContent": "center", "gap": "5rem" }}>
      <div style={{ "display": "flex", "maxWidth": "40%", "gap": "2rem" }}>
        {mockedProducts.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price} kr</p>
            <button onClick={() => addToCart(product)}>Lägg i kundvagn</button>
          </div>
        ))}
      </div>
      {isCartVisible && <Cart />}
    </main>
  )
}

export default MainContent
