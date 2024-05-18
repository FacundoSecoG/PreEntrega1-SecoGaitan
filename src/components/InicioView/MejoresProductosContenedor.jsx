import React, { useContext } from 'react'
import { CartContext } from '../../CartContext'
import CardProducto from '../ProductosView/CardProducto'


const MejoresProductosContenedor = () => {
    const { mejoresTelefonos } = useContext(CartContext)

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-[7rem]">
            {mejoresTelefonos.map((producto, index) => (
                <div key={index} className="w-80 max-w-sm">
                    <CardProducto producto={producto} />
                </div>
            ))}
        </div>
    )
}

export default MejoresProductosContenedor