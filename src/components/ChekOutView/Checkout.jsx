import React, { useContext } from 'react'
import { CartContext } from '../../CartContext';
import { Timestamp } from 'firebase-admin/firestore';
import { addDoc, collection } from 'firebase/firestore';

const Chekout = () => {
    /* const { productosCarrito } = useContext(CartContext);
    const { db } = useContext(CartContext)
 */
/*     const totalCompra = (productosCarrito) =>{
        const total=0
        productosCarrito.forEach((producto)=>{
            total += parseInt(producto.cantidad) * parseInt(producto.precio)
        })
        return total
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const orden = {
            comprador: {...datosFormulario},
            productos:[...productosCarrito],
            fecha: Timestamp.fromDate(new Date()),
            total: totalCompra()
        }
    }

    const generarOrden = (orden) => {
        const ordenDb = collection(db,"ordenes");
        addDoc(ordenDb, orden)
            .then((res)=>setIdOrden(res.id))
            .catch((err)=>console.log(err))
            .finally(()=>{
                vaciarCarrito
            })
    } */

    return (
        <section className="px-x md:px-md py-28 md:scroll-mt-20">
            <div className="md:flex justify-between items-center md:flex-row flex flex-col md:gap-10">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />

                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Correo Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="confirmarEmail">Confirmar Email:</label>
                    <input
                        type="email"
                        id="confirmarEmail"
                        value={confirmarEmail}
                        onChange={(e) => setConfirmarEmail(e.target.value)}
                        required
                    />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default Chekout