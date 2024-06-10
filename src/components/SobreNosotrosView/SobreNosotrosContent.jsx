import React from 'react'

const SobreNosotrosContent = () => {
    return (
        <section className='bg-white/20 shadow-md shadow-black/20 rounded-xl max-w-screen-xl px-4 w-[70vw] m-auto'>
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-white/70 sm:text-lg">
                    <h2 class="mb-4 md:text-5xl sm:text-4xl text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">Tuki <span className='text-pink-500'>Ecommerce</span></h2>
                    <p class="mb-4">En Tuki Ecommerce, somos tu puerta de entrada a las últimas innovaciones en tecnología móvil. Como revendedores autorizados de las marcas más prestigiosas a nivel mundial, nos especializamos en traer los teléfonos más avanzados directamente a tus manos, sin importar en qué parte del mundo te encuentres.</p>
                    <p class="mb-4">Nos dedicamos a brindarte la confianza y la seguridad que necesitas en cada compra, respaldados por más de 30 años de experiencia en el sector. Nuestra trayectoria y el compromiso con nuestros clientes han forjado relaciones sólidas y duraderas, demostrando la importancia de la confianza y la satisfacción en cada transacción.</p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img class="w-full rounded-lg" src="/imagenBanner1.jpg" alt="office content 1" />
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="/imagenBanner2.jpg" alt="office content 2" />
                </div>
            </div>
        </section>
    )
}

export default SobreNosotrosContent