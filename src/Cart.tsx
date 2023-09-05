import { useContext } from 'react'
import { CartContext } from './CartContext'

export default function Cart() {
  const { cart } = useContext(CartContext)
  let sum: number = 0
  return (
    <div style={{ "margin": "auto 3rem" }}>
      <h3>Kundvagn</h3>
      {
        cart.map(item => {
          sum += item.price
          return (
            <li>
              {`${item.name}, ${item.price} kr`}
            </li>
          )
        })}
      Totalt: {sum} kr
    </div>
  )
}
