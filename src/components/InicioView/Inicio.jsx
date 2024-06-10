import React from 'react'
import CategoriasContenedor from './CategoriasContenedor'
import MejoresProductosContenedor from './MejoresProductosContenedor'

const Inicio = () => {
    return (
        <section className='px-x md:px-md py-28 md:scroll-mt-20 m-auto max-w-screen-2xl'>
            <div className='justify-between items-center md:flex-row block md:gap-10'>
                <CategoriasContenedor />
                <MejoresProductosContenedor />
            </div>
        </section>
    )
}

export default Inicio