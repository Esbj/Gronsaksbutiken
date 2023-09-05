import { useState } from 'react'
import Header from './Header'
import MainContent from './MainContent'

function App() {
  const [cartVisible, setCartVisible] = useState(false)
  const toggleCart = () => {
    setCartVisible(!cartVisible)
  }
  return (
    <>
      <Header toggleCart={toggleCart} />
      <MainContent />
    </>
  )
}

export default App
