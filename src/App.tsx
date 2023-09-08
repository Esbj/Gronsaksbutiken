import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import About from './About'
import NotFound from './NotFound'

function App() {
  const [cartVisible, setCartVisible] = useState(false)
  const toggleCart = () => {
    setCartVisible(!cartVisible)
  }
  return (
    <>
      <Header toggleCart={toggleCart} />
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
