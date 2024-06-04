import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [productosCarrito, setProductosCarrito] = useState([])
    const [cartItems, setCartItems] = useState([]);


    const [ productosApple, setProductosApple ] = useState([]);
    const [ productosSamsung, setProductosSamsung ] = useState([]);
    const [ productosXiaomi, setProductosXiaomi ] = useState([]);

    const [mejoresTelefonos, setMejoresTelefonos] = useState([]);
    const [contador, setContador] = useState(0);
    
    const firebaseConfig = {
        apiKey: "AIzaSyDjQajhtQVEpojLGhXm70DUiXrvTe7M0KA",
        authDomain: "ecommerce-a84a9.firebaseapp.com",
        projectId: "ecommerce-a84a9",
        storageBucket: "ecommerce-a84a9.appspot.com",
        messagingSenderId: "2213516177",
        appId: "1:2213516177:web:84a6d60936830b90c78030",
        measurementId: "G-T9BCGNTST9"
    }; 
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);

    const getProductos = async () => {
        try {
            const productosSnapshot = await getDocs(collection(db, 'telefonos'));
            const productosData = productosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(), }));
            return productosData;
        } catch (error) {
            console.error('Error fetching productos:', error);
            return [];
        }
    };

    const cantidadTotalDeProductos = (productosRecibidos) => {
        let total = 0;
        productosRecibidos.forEach((product) => {
            if (!product.cantidad) {
                console.error("Producto sin cantidad:", product);
                return;
            }
                total += product.cantidad;
            });
        return total;
    };
        
    const agregarProductoAlCarrito = (producto, cantidad) => {
        let productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
        const productoIndex = productosEnLocalStorage.findIndex(prod => prod.id === producto.id);
        if (productoIndex === -1) {
            productosEnLocalStorage.push({
                id: producto.id,
                cantidad: cantidad
            });
        } else {
            productosEnLocalStorage[productoIndex].cantidad += cantidad;
        }
        localStorage.setItem("productos", JSON.stringify(productosEnLocalStorage));
        setCartItems(productosEnLocalStorage);
        actualizarCarritoDesdeLocalStorage();
        setContador(cantidadTotalDeProductos(productosEnLocalStorage));
    };
    
    const eliminarProductoDelCarrito = (producotId) => {
        let productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
    
        const producotIndex = productosEnLocalStorage.findIndex(
            (product) => product.id === producotId
        );
    
        if (producotIndex === -1) {
            console.error("Product not found in local storage.");
            return;
        }
    
        if (productosEnLocalStorage[producotIndex].cantidad === 1) {
            productosEnLocalStorage.splice(producotIndex, 1);
        } else {
            productosEnLocalStorage[producotIndex].cantidad--;
        }
    
        localStorage.setItem("productos", JSON.stringify(productosEnLocalStorage));
        setCartItems(productosEnLocalStorage);
        actualizarCarritoDesdeLocalStorage();
        setContador(cantidadTotalDeProductos(productosEnLocalStorage));
    };

    const eliminarProductoDelCarritoPorCompleto = (producto) => {
        let productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
    
        const productoIndex = productosEnLocalStorage.findIndex(
            (product) => product.id === producto.id
        );
    
        if (productoIndex === -1) {
            console.error("Producto no encontrado en el local storage.");
            return;
        }
    
        productosEnLocalStorage.splice(productoIndex, 1);
    
        localStorage.setItem("productos", JSON.stringify(productosEnLocalStorage));
        setCartItems(productosEnLocalStorage);
        actualizarCarritoDesdeLocalStorage();
        setContador(cantidadTotalDeProductos(productosEnLocalStorage));
    };
    
    const getProductosPorCategoria = (categoria, productosRecibidos) => {
        return productosRecibidos.filter((product) => product.categoria === categoria);
    };
    
    const getProductoPorId = async (id) => {
        try {
            const docRef = doc(db, 'telefonos', id);
            console.log("Document Reference:", docRef);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const productoData = { id: docSnap.id,...docSnap.data() };
                return productoData;
            } else {
                console.error('No existe ningún producto con el ID proporcionado.');
                return null;
            }
        } catch (error) {
            console.error('Error fetching producto por ID:', error);
            return null;
        }
    };

    const getProductosPorIds = async (ids) => {
        try {
            const productosPromises = ids.map(id => getProductoPorId(id));
            const productos = await Promise.all(productosPromises);
            return productos.filter(producto => producto !== null);
        } catch (error) {
            console.error('Error fetching productos por IDs:', error);
            return [];
        }
    };

    const actualizarCarritoDesdeLocalStorage = async () => {
        try {
            const productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
            const ids = productosEnLocalStorage.map(producto => producto.id);
        
            const productos = await getProductosPorIds(ids);
        
            const productosCarritoActualizado = productos.map(producto => {
            const productoEnLocalStorage = productosEnLocalStorage.find(p => p.id === producto.id);
            const cantidad = productoEnLocalStorage ? productoEnLocalStorage.cantidad : 0;
            return { ...producto, cantidad };
        });
    
        setProductosCarrito(productosCarritoActualizado);
        } catch (error) {
            console.error("Error al actualizar el carrito desde el localStorage:", error);
        }
    };
    

    const mejoresProductosDeLaCategoria = (productosRecibidos, categoria) => {
        return productosRecibidos
            .filter((product) => product.categoria === categoria)
            .sort((a, b) => b.precio - a.precio)
            .slice(0, 2);
    };
    
    const getMejoresProductos = (productosRecibidos) => {
        const categories = ['apple', 'samsung', 'xiaomi'];
        const mejoresTelefonos = [];
    
        for (const categoria of categories) {
            const topProducts = mejoresProductosDeLaCategoria(productosRecibidos, categoria);
            mejoresTelefonos.push(...topProducts);
        }
    
        setMejoresTelefonos(mejoresTelefonos);
    };
    
    useEffect(() => {
        const fetchProductos = async () => {
            const productosDb = await getProductos();
            setProductos(productosDb);
            const productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
            setContador(cantidadTotalDeProductos(productosEnLocalStorage));
            setProductosApple(getProductosPorCategoria("apple", productosDb));
            setProductosSamsung(getProductosPorCategoria("samsung", productosDb));
            setProductosXiaomi(getProductosPorCategoria("xiaomi", productosDb));
            getMejoresProductos(productosDb);
            actualizarCarritoDesdeLocalStorage();
            console.log(productosCarrito)
        };
    
        fetchProductos();
    }, []);

    return (
        <CartContext.Provider
            value={{
                    db,
                    cartItems,
                    productosCarrito,
                    productos,
                    contador,
                    productosApple,
                    productosSamsung,
                    productosXiaomi,
                    mejoresTelefonos,
                    agregarProductoAlCarrito,
                    eliminarProductoDelCarrito,
                    eliminarProductoDelCarritoPorCompleto,
                    getMejoresProductos,
                    getProductosPorCategoria,
                    getProductoPorId,
                    getProductosPorIds,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };