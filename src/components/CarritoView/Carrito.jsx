import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../CartContext';
import CardProductoCarrito from './CardProductoCarrito';

const Carrito = () => {
    const { productosCarrito } = useContext(CartContext);
    return (
        <section className='px-x md:px-md py-28 md:scroll-mt-20'>
            <div className='justify-between items-center md:gap-10'>
                <h1 className='sm:text-7xl text-4xl m-auto pb-2 pl-10 font-extrabold tracking-wider text-pink-500 italic'>
                    Carrito
                </h1>
                <div className="flex flex-col display-middle justify-center pt-10 px-5">
                    {productosCarrito.map((producto, index) => (
                        <div key={index} className="w-90 max-w-sm pb-10">
                            <CardProductoCarrito producto={producto} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carrito