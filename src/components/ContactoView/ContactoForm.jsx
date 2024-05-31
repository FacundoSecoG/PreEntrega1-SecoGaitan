import React from 'react'

const ContactoForm = () => {
    return (
        <div className="mx-auto mt-10 flex md:justify-between justify-center md:p-10 p-4 items-start md:flex-row flex-col-reverse bg-white/20 rounded-xl relative" style={{opacity: 1, transform: 'none'}}>
            <div className="md:w-2/4 max-w-[500px] pr-5 m-auto" style={{opacity: 1, transform: 'none'}}>
                <img alt="imagen enviar" loading="lazy" width="471" height="622" decoding="async" data-nimg="1" style={{color:'transparent'}} srcSet="svg/contactoFrom.svg" />
            </div>
            <form className="md:w-2/4 w-full flex flex-col gap-10" style={{opacity: 1, transform: 'none'}}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="useName" className="text-white">Nombre de usuario</label>
                    <input type="text" placeholder="Ingrese su nombre" className="input focus:outline-none focus:ring focus:ring-pink-400 bg-gray-700/55 rounded-xl py-2 pl-3 focus:border-pink-500" id="userName" name="userName" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white">Email</label>
                    <input placeholder="Ingrese su Email" className="input focus:outline-none focus:ring focus:ring-pink-400 bg-gray-700/55 rounded-xl py-2 pl-3 focus:border-pink-500" type="email" id="email" name="email" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-white">Mensaje</label>
                    <textarea placeholder="Ingrese su mensaje" className="input focus:outline-none focus:ring focus:ring-pink-400 h-32 resize-none bg-gray-700/55 rounded-xl pt-2 pl-3 focus:border-pink-500" id="message" name="message"></textarea>
                </div>
                <button className="rounded-xl w-[70%] m-auto px-3 py-2 bg-pink-500/55 text-white hover:bg-pink-500">Enviar</button>
            </form>
            <div className="absolute -top-[9rem] right-0" style={{opacity: 1, transform: 'none'}}>
                <img alt="imagen chat" loading="lazy" width="426" height="417" decoding="async" data-nimg="1" className="md:w-[200px] w-[180px]" style={{color:'transparent'}} srcSet="/avatarSVG/chat(contacto).svg" />
            </div>
        </div>
    )
}

export default ContactoForm
