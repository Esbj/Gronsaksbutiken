import { useContext } from 'react'
import { CartContext } from './CartContext'

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)
  let sum: number = 0
  return (
    <div style={{ "margin": "auto 3rem" }}>
      <h3>Kundvagn</h3>
      {
        cart.map(item => {
          sum += item.price
          return (
            <div>
              {`${item.name}, ${item.price} kr`}
              <button style={{ "marginLeft": "1rem" }} onClick={() => removeFromCart(item)} >X</button>
            </div>
          )
        })}
      Totalt: {sum} kr
    </div>
  )
}
