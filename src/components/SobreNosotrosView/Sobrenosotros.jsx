import React from 'react'
import SobreNosotrosContent from './SobreNosotrosContent'
import MejoresProductosContenedor from '../InicioView/MejoresProductosContenedor';

const Sobrenosotros = () => {
    return (
        <section className="px-x md:px-md py-36 md:scroll-mt-20 m-auto max-w-screen-2xl">
            <div className="justify-between items-center">
                <SobreNosotrosContent />
                <MejoresProductosContenedor />
            </div>
        </section>
    );
};

export default Sobrenosotros