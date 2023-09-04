import { useContext } from 'react'
import { CartContext } from './CartContext'
import { mockedProducts } from './data'

const MainContent = () => {
  const { addToCart } = useContext(CartContext)
  return (
    <main>
      {mockedProducts.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price} kr</p>
          <button onClick={() => addToCart(product)}>Lägg i kundvagn</button>
        </div>
      ))}
    </main>
  )
}

export default MainContent
