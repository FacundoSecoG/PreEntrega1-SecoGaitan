import React from 'react'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='h-full w-full  overflow-hidden'>
            <section className='px-x md:px-md pt-28 md:scroll-mt-20'>
                <p className='text-white'>{greeting}</p>
            </section>
        </div>
    )
}

export default ItemListContainer