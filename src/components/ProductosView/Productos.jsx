import React, { useEffect, useState } from "react";
import { getProductos } from "../../firebase/productos";
import CardProducto from "./CardProducto";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        async function fetchProductos() {
            try {
                const productosData = await getProductos();
                setProductos(productosData);
            } catch (error) {
                console.error("Error fetching productos:", error);
            }
        }
        fetchProductos();
    }, []);

    return (
        <div>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>
                        <CardProducto producto={producto} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;
