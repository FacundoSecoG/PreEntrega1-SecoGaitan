import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';

const EliminarDelCarrito = ({ producto }) => {
    const { eliminarProductoDelCarritoPorCompleto } = useContext(CartContext);

    const handleClick = () => {
        eliminarProductoDelCarritoPorCompleto(producto);
    };

    return (
        <div className='my-auto lg:h-[40px] h-auto'>
            <button
                className="select-none mt-5 lg:mt-0 rounded-lg text-white bg-pink-500/50 hover:bg-pink-500 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={handleClick}
            >
                Remover del carrito
            </button>
        </div>
    )
}

export default EliminarDelCarrito