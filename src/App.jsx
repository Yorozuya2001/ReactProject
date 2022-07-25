import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/components-container/ItemListContainer'
import ItemDetailContainer from './components/components-container/itemDetailContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting = {'Bienvenido a la tienda'}/>
    <ItemDetailContainer id = {"A2"}/>
    </>
  )
}

export default App
