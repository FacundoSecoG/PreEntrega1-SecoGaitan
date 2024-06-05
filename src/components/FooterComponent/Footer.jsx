import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <section className="flex flex-col w-[100vw] margin footer bottom-0 backdrop-blur-[2rem] bt rounded-lg border-pink-500 border-t-4">
            <div className="container mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to={"/"} className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/logoEcommerce.png" alt="Tuki Logo" className='sm:w-[200px] w-[120px]' />
                    </Link>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to={"/"} className={`hover:underline hover:text-pink-500 me-4 md:me-6 ${location.pathname === "/" ? "font-bold text-pink-500" : ""}`}>Inicio</Link>
                        </li>
                        <li>
                            <Link to={"/productos"} className={`hover:underline hover:text-pink-500 me-4 md:me-6 ${location.pathname === "/categoria/productos" ? "font-bold text-pink-500" : ""}`}>Productos</Link>
                        </li>
                        <li>
                            <Link to={"/contacto"} className={`hover:underline hover:text-pink-500 me-4 md:me-6 ${location.pathname === "/categoria/contacto" ? "font-bold text-pink-500" : ""}`}>Contacto</Link>
                        </li>
                        <li>
                            <Link to={"/sobrenosotros"} className={`hover:underline hover:text-pink-500 ${location.pathname === "/categoria/sobrenosotros" ? "font-bold text-pink-500" : ""}`}>Sobre nosotros</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-pink-500 bw sm:mx-[40px] dark:border-pink-500 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center text-center dark:text-gray-400">
                    © 2024 FacusecoDev. Aplicacion web con findes educativos.
                </span>
            </div>
        </section>
    );
};

export default Footer;