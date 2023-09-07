import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import MainContent from './MainContent'
import About from './About'
import NotFound from './NotFound'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
