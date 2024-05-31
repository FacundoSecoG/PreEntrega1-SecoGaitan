import React from "react";
import ContactoTitulo from "./ContactoTitulo";
import ContactoForm from "./ContactoForm";

const Contacto = () => {
    return (
        <section className="px-x md:px-md py-28 md:scroll-mt-20">
            <main>
                <ContactoTitulo />
                <ContactoForm />
            </main>
        </section>
    );
};

export default Contacto;
