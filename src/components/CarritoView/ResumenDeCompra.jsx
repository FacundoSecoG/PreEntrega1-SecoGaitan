import React, { useState, useEffect } from 'react'

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
            <div class="bg-black/20 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                <div class="flex items-center justify-between w-full mb-6">
                    <p class="font-normal text-xl leading-8 text-white/60">Sub Total</p>
                    <h6 class="font-semibold text-xl leading-8 text-white">${subtotal}</h6>
                </div>
                <div class="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p class="font-normal text-xl leading-8 text-white/60">Costo de envio</p>
                    <h6 class="font-semibold text-xl leading-8 text-white">${envio}</h6>
                </div>
                <div class="flex items-center justify-between w-full py-6">
                    <p class="font-manrope font-medium text-2xl leading-9 text-white">Total</p>
                    <h6 class="font-manrope font-medium text-2xl leading-9 text-white">${total}</h6>
                </div>
            </div>
        <div class="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <button
                class="rounded-full p-10 w-full max-w-[280px] py-4 text-center justify-center items-center bg-pink-500/55 hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] hover:bg-pink-500 font-semibold text-lg text-white flex transition-all duration-500">
                Checkout
                <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                    fill="none">
                    <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </>
    )
}

export default ResumenDeCompra