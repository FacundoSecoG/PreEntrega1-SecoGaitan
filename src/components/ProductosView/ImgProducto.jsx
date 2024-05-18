import React from 'react'

const ImgProducto = ({producto}) => {
    return (
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
                src={producto.imagen}
                className="h-full w-full object-cover"
            />
        </div>
    )
}

export default ImgProducto