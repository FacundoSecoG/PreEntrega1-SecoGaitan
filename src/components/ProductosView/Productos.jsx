import React, { useContext } from 'react';
import CardProducto from './CardProducto';
import { CartContext } from '../../CartContext';

const Productos = () => {
    const { productos } = useContext(CartContext); 

    return (
        <div className="flex flex-wrap justify-center gap-4 py-28">
            {productos.map((producto, index) => (
                <div key={index} className="w-90 max-w-sm">
                    <CardProducto producto={producto} />
                </div>
            ))}
        </div>
    );
};

export default Productos;