import React from 'react'
import { Link } from 'react-router-dom'

const LogoNav = () => {
    return (
        <div>
            <Link to='/'>
                <img alt="logo" loading="lazy" width="189" height="62" decoding="async" data-nimg="1" className="middle sm:w-[120px] sm:block  hidden  md:w-[150px] " style={{ color: 'transparent' }} srcSet="/logoEcommerce.png" />
            </Link>
        </div>
    )
}

export default LogoNav