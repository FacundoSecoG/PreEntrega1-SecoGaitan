import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../CartContext';

import InfoProductoDetalle from './InfoProductoDetalle';
import ContadorInputDetalle from './ContadorInputDetalle';
import ImgProductoDetalle from './ImgProductoDetalle';
import MejoresProductosContenedor from '../InicioView/MejoresProductosContenedor';
import AgregarAlCarritoBtn from '../ProductosView/AgregarAlCarritoBtn';

const Producto = () => {
    const id=""
    const { productoid } = useParams();
    const [producto, setProducto] = useState([]);
    const [contador, setContador] = useState(1);
    const { mejoresTelefonos } = useContext(CartContext)

    const { getProductoPorId } = useContext(CartContext);

    useEffect(() => {
        const fetchProducto = async () => {
            const productoData = await getProductoPorId(String(productoid));
            setProducto(productoData);
        };

        fetchProducto();
    }, [id, getProductoPorId]);

    return (
        <section className="px-x md:px-md py-28 md:scroll-mt-20">
            <div className="justify-between items-center md:flex-row block md:gap-10">
                <div className="container mx-auto px-6">
                    <div className="md:flex md:items-center">
                            <ImgProductoDetalle producto={producto}/>
                            <div>
                            <InfoProductoDetalle producto={producto}/>
                            <div className='block'>
                                <ContadorInputDetalle onChange={setContador}/>
                                <AgregarAlCarritoBtn producto={producto} cantidad={contador}/>
                            </div>
                            </div>
                        </div>
                    </div>
                <MejoresProductosContenedor productos={mejoresTelefonos}/>
            </div>
        </section>
    );
};

export default Producto;