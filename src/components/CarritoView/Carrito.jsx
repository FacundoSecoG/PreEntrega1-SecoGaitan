import React, { useContext } from 'react'
import { CartContext } from '../../CartContext';
import CardProductoCarrito from './CardProductoCarrito';
import MejoresProductosContenedor from '../InicioView/MejoresProductosContenedor';
import ResumenDeCompra from './ResumenDeCompra';

const Carrito = () => {
    const { productosCarrito } = useContext(CartContext);
    return (
        <section className='px-x md:px-md py-28 md:scroll-mt-20'>
            <div className='items-center md:gap-10'>
                <h1 className='sm:text-7xl  text-4xl m-auto pb-2 pl-10 font-extrabold tracking-wider text-pink-500 italic'>
                    Carrito
                </h1>
                <div className="flex flex-col justify-center items-center pt-10 px-5">
                    {productosCarrito.map((producto, index) => (
                        <div key={index} className="sm:w-[50vw] w-[90vw] pb-10">
                            <CardProductoCarrito producto={producto} />
                        </div>
                    ))}
                    <ResumenDeCompra productosCarrito={productosCarrito}/>
                </div>
                <MejoresProductosContenedor />
            </div>
        </section>
    );
};

export default Carrito