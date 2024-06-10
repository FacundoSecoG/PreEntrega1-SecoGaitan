import React, { useContext } from 'react';
import CardProducto from './CardProducto';
import { CartContext } from '../../CartContext';

const Productos = () => {
    const { productos } = useContext(CartContext); 

    return (
        <section className='px-x md:px-md py-28 md:scroll-mt-20 m-auto max-w-screen-2xl'>
            <h1 className='sm:text-7xl text-4xl m-auto pb-2 pl-10 font-extrabold tracking-wider text-white'>
                Todos los <span className='text-pink-500 italic'>productos</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 pt-10">
                {productos.map((producto, index) => (
                    <div key={index} className="w-90 max-w-sm">
                        <CardProducto producto={producto} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Productos;