import React from 'react'
import { Link } from 'react-router-dom'

const CategoriasCard = ({ categoria, ruta}) => {
    return (
        
            <div className='w-full hover:z-40 md:w-1/3 p-2'>
                <div className='relative w-full hover:border-4 hover:border-pink-500 rounded-3xl transform hover:scale-110 scale-100 text-white hover:text-pink-500 transition duration-300 ease-in-out'>
                    <Link to={ruta}>
                        <img src="/bannerCategoria.jpg" alt="Banner categoria" className='w-full h-[400px] rounded-3xl'/>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <h2 className=' italic text-3xl font-bold tracking-wider'>{categoria.toUpperCase()}</h2>
                        </div>
                    </Link>
                </div>
            </div>
    )
}

export default CategoriasCard