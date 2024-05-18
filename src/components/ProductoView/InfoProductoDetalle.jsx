import React from 'react'

const InfoProductoDetalle = ({producto}) => {
  return (
    <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
        <h3 className="text-white uppercase text-lg">{producto.producto}</h3>
        <span className="text-pink-500 mt-3">${producto.precio}</span>
        <hr className="my-3" />
        <div className="mt-2">
        <p className="block font-sans text-sm font-normal leading-normal line-clamp-3 text-white antialiased opacity-45">
            {producto.descripcion}
        </p>
    </div>
    </div>
  )
}

export default InfoProductoDetalle