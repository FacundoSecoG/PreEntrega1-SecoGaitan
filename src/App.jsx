import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const greeting = 'Bienvenidos a mi tienda'
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
