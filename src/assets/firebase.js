import { initializeApp } from "firebase/app";
//Consulta BDD - agregar obj - manejo colleciones
import { getFirestore, addDoc, collection, getDocs, getDoc, doc, updateDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCyQAWkFRJPrQjCJB9SEwmqdS3NKTkJRIw",
  authDomain: "proyecto-ecommerce-f706f.firebaseapp.com",
  projectId: "proyecto-ecommerce-f706f",
  storageBucket: "proyecto-ecommerce-f706f.appspot.com",
  messagingSenderId: "89317050604",
  appId: "1:89317050604:web:af80a57db9a26745f83dc9",
  measurementId: "G-Z2W2XMFZN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore() //Consulta Firestore

// Para cargar el json en el firestore

export const cargarBDD = async () => {
    const promise = await fetch('./json/db.json')
    const productos = await promise.json()
    console.log(productos)
    productos.forEach(async (prod) => {
        await addDoc(collection(db, 'productos'), {
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            idCategoria: prod.idCategoria,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img

        })
    })
}

//Transforma los datos a un array de objetos y los muestra en la pagina.
export const getProductos = async () => {
    const items = await getDocs(collection(db, 'productos'))
    const productos = items.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
        return productos
}

//Me trae solo un producto por el id
export const getProducto = async (id) => {
    const item = await getDoc(doc(db, 'productos', id))
    const producto = {...item.data(), id: item.id}

    return producto
}
//Para actualizar algun producto
export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, 'productos', id), info)
    return "Producto Actualizado"
}