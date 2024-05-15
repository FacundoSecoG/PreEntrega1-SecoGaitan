import React from 'react'
import LogoNav from './NavbarComponents/LogoNav'
import CartContent from './NavbarComponents/CartContent'


const Navbar = () => {
    return (
        <div className='md:px-md px-x  w-full  h-20    rounded-2xl    fixed -top-1  pt-4   z-40  drop-shadow-md   border-b-4 border-pink-500/75 shadow-lg duration-500 transition  backdrop-blur-[2rem]'>
            <div className='flex justify-between'>
                <LogoNav />
                <CartContent />
            </div>
        </div>
    )
}

export default Navbar