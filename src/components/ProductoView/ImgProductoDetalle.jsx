import React from 'react'

const ImgProductoDetalle = ({producto}) => {
  return (
      <img 
          className="h-full w-full rounded-[2rem] object-cover max-w-lg mx-auto max-h-full" 
          src={producto.imagen} 
          alt={producto.producto} 
      />
  )
}

export default ImgProductoDetalle