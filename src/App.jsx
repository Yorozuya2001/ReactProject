import { useState } from 'react'
import './App.css'
import './components/Navbar/NavBar.css'
import Navbar from './components/Navbar/Navbar'
import Carrito from './components/Carrito/CartWidget'
import ItemListContainer from './components/components-container/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar>
      <Carrito/>
    </Navbar>
    <ItemListContainer/>
    </>
  )
}

export default App
