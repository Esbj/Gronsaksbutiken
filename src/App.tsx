import { useState } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Cart from './Cart'

function App() {
  const [cartVisible, setCartVisible] = useState(false)
  const toggleCart = () => {
    setCartVisible(!cartVisible)
  }
  return (
    <>
      <Header toggleCart={toggleCart} />
      <MainContent />
      {cartVisible && <Cart />}
    </>
  )
}

export default App
