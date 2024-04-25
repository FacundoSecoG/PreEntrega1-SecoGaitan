import React from 'react'
import NavCategoria from './NavCategoria'

const NavList = () => {
    return (
        <nav>
            <ul>
                <NavCategoria categoria={"Inicio"}/>
                <NavCategoria categoria={"Sobre Nosotros"}/>
                <NavCategoria categoria={"Contacto"}/>
                <NavCategoria categoria={"Algo"}/>
            </ul>
        </nav>
    )
}

export default NavList