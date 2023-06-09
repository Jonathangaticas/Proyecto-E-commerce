import {useContext, createContext, useState} from 'react'   
import { toast } from 'react-toastify'
const CarritoContext = createContext()
export const useCarritoContext = () => useContext(CarritoContext) 

export const CarritoProvider = (props) => { 
    const [carrito, setCarrito] = useState([])
    
    const isInCart = (id) => { 
        return carrito.find(producto => producto.id === id)
    } 
  
    const addProduct = (producto, cantidad) => { 
      if(isInCart(producto.id)){ 
          const indice = carrito.findIndex(prod => prod.id === producto.id ) 
          const aux = [...carrito] 
          aux[indice].cant = cantidad 
          setCarrito(aux) 
      } else { 
          const nuevoProducto = { 
                ...producto, 
                cant: cantidad 
          } 
          setCarrito([...carrito, nuevoProducto]) 
      } 
    } 
    const emptyCart = () =>{ 
        setCarrito([]) 
        toast.info("Carrito Vacio")
    } 

    const removeItem = (id) => { 
      setCarrito(carrito.filter(producto => producto.id != id)) 
    } 

    const getItemQuantity = () => { 
      return carrito.reduce((acum,prod) => acum += prod.cant, 0) 
    } 

    const totalPrice = () => { 
      return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0) 
    } 

    return ( 
        <CarritoContext.Provider value={{ carrito, isInCart, addProduct, emptyCart, removeItem, getItemQuantity, totalPrice }}> 
            {props.children} 
        </CarritoContext.Provider> 
    ) 
 }
 