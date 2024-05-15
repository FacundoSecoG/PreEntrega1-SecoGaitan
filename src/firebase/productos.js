import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

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
export const db = getFirestore(app);

/* -----------------------Funciones----------------------- */

export async function getProductos() {
    try {
        const productosCollection = collection(db, 'telefonos');
        const productosSnapshot = await getDocs(productosCollection);
        return productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error fetching productos:', error);
        return [];
    }
}

export async function getProductosPorCategoria(category) {
    try {
        const productosCollection = collection(db, 'telefonos');
        const productosQuery = query(productosCollection, where('categoria', '==', category));
        const querySnapshot = await getDocs(productosQuery);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(`Error fetching productos by category ${category}:`, error);
        return [];
    }
}

export async function getProductoPorId(id) {
    try {
        const docRef = doc(db, 'telefonos', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.error(`No product found with ID ${id}`);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching product by ID ${id}:`, error);
        return null;
    }
}

export async function getProductosPorIds(ids) {
    try {
        const productosPromises = ids.map(async (id) => {
            const docRef = doc(db, 'telefonos', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() };
            } else {
                console.error(`No product found with ID ${id}`);
                return null;
            }
        });
        const productos = await Promise.all(productosPromises);
        return productos.filter(product => product !== null);
    } catch (error) {
        console.error('Error fetching productos by IDs:', error);
        return [];
    }
}

export const agregarProductoAlCarrito = (producotId, cantidad) => {
    let productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];

    const producotIndex = productosEnLocalStorage.findIndex(
        (product) => product.id === producotId
    );

    if (producotIndex === -1) {
        productosEnLocalStorage.push({ id: producotId, cantidad });
    } else {
        productosEnLocalStorage[producotIndex].cantidad += cantidad;
    }

    localStorage.setItem("productos", JSON.stringify(productosEnLocalStorage));
};

export const eliminarProductoDelCarrito = (producotId) => {
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
};

/* -----------------------Tests----------------------- */


/* (async () => {
    // getProductos 
    const productos = await getProductos();
    console.log('Todos los productos:');
    console.table(productos);

    // productosPorCategoria
    const productosPorCategoria = await getProductosPorCategoria('apple');
    console.log('productos by category:');
    console.table(productosPorCategoria);

    // getProductoPorId
    const produtoId = await getProductoPorId('2');
    console.log('Producto por ID:');
    console.table(produtoId);

    // getProductosPorIds
    const productosIds = await getProductosPorIds(['1', '4', '24']);
    console.log('productos by IDs:');
    console.table(productosIds);
})();  
*/
