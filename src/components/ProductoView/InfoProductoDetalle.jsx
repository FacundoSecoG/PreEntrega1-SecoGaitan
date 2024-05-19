import React from 'react'

const InfoProductoDetalle = ({producto}) => {
  return (
    <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
        <h3 className="text-white uppercase text-2xl md:text-5xl sm:text-3xl pb-4">{producto.producto}</h3>
        <span className="text-pink-500 mt-3 md:text-xl text-2xl">${producto.precio}</span>
        <hr className="my-3" />
        <div className="mt-2">
        <p className="block font-sans font-normal leading-normal line-clamp-3 text-white md:text-xl text-2xl antialiased opacity-45">
            {producto.descripcion}
        </p>
    </div>
    </div>
  )
}

export default InfoProductoDetalle