import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../CartContext'
import { useParams } from 'react-router-dom'
import CardProducto from '../ProductosView/CardProducto'

const ProductosCategoria = () => {
    const { categoria } = useParams()
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const { productos } = useContext(CartContext)

    useEffect(() => {
        setProductosFiltrados(productos.filter((producto) => producto.categoria === categoria))
    }, [categoria, productos])

    return (
        <section className='px-x md:px-md py-28 md:scroll-mt-20 m-auto max-w-screen-2xl'>
            <div className='justify-between items-center md:flex-row block md:gap-10'>
                <h1 className='sm:text-7xl text-4xl m-auto pb-2 pl-10 font-extrabold tracking-wider text-pink-500 italic'>
                    {categoria}
                </h1>
                <div className="flex flex-wrap justify-center gap-4 mt-20">
                    {productosFiltrados.map((producto, index) => (
                        <CardProducto key={index} producto={producto}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductosCategoria