import React from 'react'
import NavList from './NavList'
import CartWidget from './CartWidget'

const CartContent = () => {
    return (
        <div className='flex items-center'>
            <NavList />
            <CartWidget />
        </div>
    )
}

export default CartContent