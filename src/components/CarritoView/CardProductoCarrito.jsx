import React from 'react'
import ContadorInputCarrito from './ContadorInputCarrito'
import EliminarDelCarrito from './EliminarDelCarrito'
import InfoProductoCarrito from './InfoProductoCarrito'

const CardProductoCarrito = ({producto}) => {
    return (
        <div className="relative flex md:flex-row m-auto flex-col items-center w-[80vw]  bg-black/30 bg-clip-border text-gray-700 shadow-md rounded-xl flex-shrink-0">
            <div className="relative flex flex-col mx-4 my-4 sm:w-[330px] w-[200px]  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={producto.imagen}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6 sm:pr-20 h-full w-full">
                <InfoProductoCarrito producto={producto}/>
                <div className='lg:flex lg:justify-between block sm:pt-10 mt-5'>
                    <ContadorInputCarrito producto={producto} cantidad={producto.cantidad} />
                    <EliminarDelCarrito producto={producto} />
                </div>
            </div>
        </div>
    )
}

export default CardProductoCarrito