import React from 'react'
import NavList from './NavList'
import CartWidget from './CartWidget'

const CartContent = () => {
    return (
        <div className='flex'>
            <NavList />
            <CartWidget />
        </div>
    )
}

export default CartContent