import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';

const ContadorInputCarrito = ({ producto, cantidad }) => {
    const { agregarProductoAlCarrito, eliminarProductoDelCarrito } = useContext(CartContext);

    return (
            <div className="flex h-[40px] my-auto">
                <span 
                    className="cursor-pointer w-10 text-center rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-pink-500 bg-gray-500/70 text-white"
                    onClick={() => eliminarProductoDelCarrito(producto.id)}
                > 
                    -
                </span>
                <div className="w-10 bg-gray-500/70 flex items-center justify-center text-center text-white text-xs">
                    {cantidad}
                </div>
                <span 
                    className="cursor-pointer w-10 text-center rounded-r bg-gray-500/70 text-white hover:bg-pink-500 py-1 px-3 duration-100"
                    onClick={() => agregarProductoAlCarrito(producto, 1)}
                >
                    + 
                </span>
            </div>
    );
};

export default ContadorInputCarrito;
