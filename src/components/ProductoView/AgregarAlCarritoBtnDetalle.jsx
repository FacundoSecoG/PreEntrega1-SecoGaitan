import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';

const AgregarAlCarritoBtnDetalle = ({ producto, cantidad }) => {
    const { agregarProductoAlCarrito } = useContext(CartContext);

    const handleClick = () => {
        agregarProductoAlCarrito(producto, cantidad);
    };

    return (
        <div className="relative p-6 pt-12  w-[300px]">
            <button
                className="block w-full select-none rounded-lg text-white bg-pink-500/50 hover:bg-pink-500 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={handleClick}
            >
                Agregar al carrito
            </button>
        </div>
    )
}

export default AgregarAlCarritoBtnDetalle