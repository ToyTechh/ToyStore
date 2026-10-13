import React from 'react'
import Header from './components/Header'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import { Router } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div>
        <header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
          </Routes>
        <Footer/>
      </div>
      
    </Router>
  )
}

export default App
