import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AgregarAlCarritoBtn from './AgregarAlCarritoBtn'
import InfoProducto from './InfoProducto'
import ContadorInput from './ContadorInput'
import ImgProducto from './ImgProducto'

const CardProducto = ({ producto }) => {
    const [contador, setContador] = useState(1);

    return (
        <div className="relative flex flex-col items-center w-80 max-w-sm bg-black/30 bg-clip-border text-gray-700 shadow-md rounded-xl flex-shrink-0">
            <Link to={`/producto/${producto.id}`} className="w-full">
                <div className='absolute z-40 right-5 top-5'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none" stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler bg-pink-500/80 rounded-lg hover:bg-pink-500 text-white transition-all hover:scale-110 focus:scale-105 active:scale-100">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                    </svg>
                </div>
            </Link>
                <ImgProducto producto={producto}/>
                <InfoProducto producto={producto}/>
                <ContadorInput onChange={setContador} />
            <AgregarAlCarritoBtn producto={producto} cantidad={contador} />
        </div>
    )
}

export default CardProducto