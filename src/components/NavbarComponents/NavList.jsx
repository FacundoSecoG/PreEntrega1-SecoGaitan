import React from 'react'
import NavCategoria from './NavCategoria'

const NavList = () => {
    return (
        <nav className='flex'>
            <ul className='flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
                <NavCategoria categoria={"Inicio"}/>
                <NavCategoria categoria={"Sobre Nosotros"}/>
                <NavCategoria categoria={"Contacto"}/>
                <NavCategoria categoria={"Algo+"}/>
            </ul>
        </nav>
    )
}

export default NavList