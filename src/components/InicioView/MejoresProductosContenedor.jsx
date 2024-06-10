import React, { useContext } from 'react'
import { CartContext } from '../../CartContext'
import CardProducto from '../ProductosView/CardProducto'


const MejoresProductosContenedor = () => {
    const { mejoresTelefonos } = useContext(CartContext)

    return (
        <div className="flex flex-wrap lg:block mt-20 justify-center relative">
            <h1 className='sm:text-7xl text-6xl  text-white font-extrabold tracking-wider text-right w-full'>
                Lo más <span className='text-pink-500 italic'>vendido</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 pt-10">
            {mejoresTelefonos.map((producto, index) => (
                <div key={index} className="w-90 max-w-sm">
                    <CardProducto producto={producto} />
                </div>
            ))}
            </div>
        </div>
    )
}

export default MejoresProductosContenedor