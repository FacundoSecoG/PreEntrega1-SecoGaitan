import React from 'react'

const NavCategoria = ({categoria}) => {
    return (
        <li>
            <a href='#' className='font-semibold px-4 rounded-lg transition duration-300 glob false tracking-widest md:text-[16px] hover:text-main/90 flex gap-3 items-center py-2 text-white'>
                {categoria}
            </a>
        </li>
    )
}

export default NavCategoria