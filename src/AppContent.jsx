import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/FooterComponent/Footer";
import Loader from "./components/LoaderView/Loader.jsx";

import Inicio from "./components/InicioView/Inicio.jsx";
import Productos from "./components/ProductosView/Productos.jsx";
import Contacto from "./components/ContactoView/Contacto.jsx";
import SobreNosotros from "./components/SobreNosotrosView/Sobrenosotros.jsx";
import ProductosCategoria from "./components/ProductosCategoriaView/ProductosCategoria.jsx";
import Producto from "./components/ProductoView/Producto.jsx";
import Carrito from "./components/CarritoView/Carrito.jsx";
import Checkout from "./components/ChekOutView/FormCheckout.jsx";

import { CartContext } from "./CartContext.jsx";
import { useContext } from "react";

const AppContent = () => {
    const {dbLoaded} = useContext(CartContext);
    return (
        <BrowserRouter>
            {!dbLoaded ? (
                <Loader />
            ) : (
            <>
                <Navbar />
                <div className="h-full w-full overflow-hidden">
                    <Routes>
                        <Route exact path="/" element={<Inicio />} />
                        <Route exact path="/productos" element={<Productos />} />
                        <Route exact path="/contacto" element={<Contacto />} />
                        <Route exact path="/sobrenosotros" element={<SobreNosotros />} />

                        <Route
                        exact
                        path="/productos/:categoria"
                        element={<ProductosCategoria />}
                        />
                        <Route exact path="/producto/:productoid" element={<Producto />} />

                        <Route exact path="/carrito" element={<Carrito />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                    </Routes>
                    <Footer />
                </div>
            </>
        )}
    </BrowserRouter>
)}

export default AppContent