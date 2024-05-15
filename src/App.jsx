import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Inicio from './components/InicioView/Inicio.jsx'
import Productos from './components/ProductosView/Productos.jsx'
import Contacto from './components/ContactoView/Contacto.jsx'
import SobreNosotros from './components/SobreNosotrosView/Sobrenosotros.jsx'

import Producto from './components/ProductoView/Producto.jsx'

import Carrito from './components/CarritoView/Carrito.jsx'
import Checkout from './components/ChekOutView/Checkout.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/categoria/productos" element={<Productos />} />
        <Route exact path="/categoria/contacto" element={<Contacto />} />
        <Route exact path="/categoria/sobrenosotros" element={<SobreNosotros />} />

        <Route exact path="/product/:productid" element={<Producto />} />

        <Route exact path="/carrito" element={<Carrito />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App