import { useContext } from 'react'
import { CartContext } from './CartContext'

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)

  const totalPrice = () => {
    let total = 0
    cart.map(item => {
      const subtotal = item.price * item.quantity
      total += subtotal
    })
    return total
  }
  return (
    <div style={{ "margin": "auto 3rem" }}>
      <h3>Kundvagn</h3>
      {
        cart.map((item, index) => {
          return (
            <div style={{ "display": 'flex', "maxHeight": "2rem", "width": "300px", "justifyContent": 'space-between' }} key={index}>
              <p>{`${item.quantity}x ${item.name}, ${item.price} kr`}</p>
              <button style={{ "marginLeft": "1rem", "padding": "0 10px" }} onClick={() => removeFromCart(item.id)} >X</button>
            </div>
          )
        })}
      <hr />
      <h4>Totalt: {totalPrice()} kr</h4>
    </div>
  )
}
