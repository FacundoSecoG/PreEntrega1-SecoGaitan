import React from 'react'

const InfoProductoCarrito = ({producto}) => {
    return (
        <div className="mb-2 block items-center justify-between">
            <div className='lg:flex justify-between items-center w-[80%] pb-10'>
                <p className="font-sans my-4 lg:my-0  text-2xl font-bold leading-relaxed text-white antialiased">
                    {producto.producto}
                </p>
                <p className="font-sans text-2xl font-medium leading-relaxed  text-pink-500/85 antialiased">
                    ${producto.precio}
                </p>
            </div>
            <p className="font-sans text-lg hidden sm:block font-normal leading-normal text-white/70 antialiased opacity-75">
                    {producto.descripcion}
            </p>
        </div>
    )
}

export default InfoProductoCarrito