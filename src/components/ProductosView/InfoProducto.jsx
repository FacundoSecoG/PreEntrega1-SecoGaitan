import React from 'react'

const InfoProducto = ({producto}) => {
    return (
        <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-white antialiased">
                    {producto.producto}
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed  text-pink-500/85 antialiased">
                    ${producto.precio}
                </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal line-clamp-3 text-white/70 antialiased opacity-75">
                {producto.descripcion.substring(0, 100)}...
            </p>
        </div>
    )
}

export default InfoProducto