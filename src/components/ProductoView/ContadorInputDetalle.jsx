import React, { useState } from 'react'

const ContadorInputDetalle = ({ onChange }) => {
  const [contadorInput, setContadorInput] = useState(1);

  const incrementarContador = () => {
      setContadorInput(contadorInput + 1);
      onChange(contadorInput + 1);
  }

  const decrementarContador = () => {
      if (contadorInput > 1) {
          setContadorInput(contadorInput - 1);
          onChange(contadorInput - 1);
      }
  }
  return (
    <div className="z-40 pt-5 ml-6">
        <div className='flex  border-gray-100 mb-3 justify-start'>
            <span 
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-pink-500 bg-gray-500/70 text-white"
                onClick={()=>decrementarContador()}
            > 
                -
            </span>
            <div className="h-8 w-8 bg-gray-500/70 flex items-center justify-center text-center text-white text-xs">{contadorInput}</div>
            <span 
                className="cursor-pointer rounded-r bg-gray-500/70 text-white  hover:bg-pink-500 py-1 px-3 duration-100"
                onClick={()=>incrementarContador()}
            >
                + 
            </span>
        </div>
    </div>
  )
}

export default ContadorInputDetalle