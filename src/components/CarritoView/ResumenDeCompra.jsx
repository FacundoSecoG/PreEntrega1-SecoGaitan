import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ResumenDeCompra = ({productosCarrito}) => {
    const [subtotal, setSubtotal]=useState(0);
    const [envio,setEnvios]=useState(80);
    const [total,setTotal]=useState(subtotal+envio)

    useEffect(() => {
        let subtotal = 0;
        productosCarrito.forEach(producto => {
            subtotal += producto.precio * producto.cantidad;
        });
        setSubtotal(subtotal);
        setTotal(subtotal + envio);
    }, [productosCarrito]);

    return (
        <>
            <div className="bg-black/20 shadow-md shadow-black/40 rounded-xl sm:w-[60%] w-[100%] p-6 max-lg:max-w-xl max-lg:mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <p className="font-normal text-xl leading-8 text-white/60">Sub Total</p>
                    <h6 className="font-semibold text-xl leading-8 text-white">${subtotal}</h6>
                </div>
                <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p className="font-normal text-xl leading-8 text-white/60">Costo de envio</p>
                    <h6 className="font-semibold text-xl leading-8 text-white">${envio}</h6>
                </div>
                <div className="flex items-center justify-between w-full py-6">
                    <p className="font-manrope font-medium text-2xl leading-9 text-white">Total</p>
                    <h6 className="font-manrope font-medium text-2xl leading-9 text-white">${total}</h6>
                </div>
            </div>
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <Link to={"/checkout"}
                className="rounded-full p-10 w-full max-w-[280px] py-4 text-center justify-center items-center bg-pink-500/55 hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] hover:bg-pink-500 font-semibold text-lg text-white flex transition-all duration-500">
                Checkout
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                    fill="none">
                    <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
        </div>
    </>
    )
}

export default ResumenDeCompra