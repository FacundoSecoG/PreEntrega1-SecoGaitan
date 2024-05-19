import React from 'react'
import CategoriasCard from './CategoriasCard'

const CategoriasContenedor = () => {
    const categorias = [
        {
            categoria: "apple",
            route: "/productos/apple"
        },
        {
            categoria: "samsung",
            route: "/productos/samsung"
        },
        {
            categoria: "xiaomi",
            route: "/productos/xiaomi"
        }
    ]
    return (
        <div className='block text-start'>
            <h1 className='sm:text-7xl text-4xl m-auto pb-10 pl-10 text-white font-extrabold tracking-wider'>
                Explora por <span className='text-pink-500 italic'>marcas</span>
            </h1>
            <div className='flex flex-wrap gap-10 sm:gap-0'>
            {categorias.map((categoria, index)=>{
                return (
                        <CategoriasCard key={index} categoria={categoria.categoria} ruta={categoria.route}/>
                    );
                })}
            </div>
        </div>
    )
}

export default CategoriasContenedor