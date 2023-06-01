import './Carrito.css'
import { Link } from "react-router-dom" 
import { useCarritoContext } from "../../Context/CarritoContext" 

const Carrito = () => { 
   const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext() 
   
   return ( 
           <div> 
                {carrito.length === 0 
                ? 
                    <> 
                        <h1>Carrito vacío</h1> 
                        <button className = "btn btn-dark">
                            <Link to={"/"} className="nav-link">Ir al inicio</Link>
                        </button>
                    </> 
                : 
                    <div className="container-fluid row justify-content-center carrito_container"> 
                        {carrito.map(prod => 
                            <div className="card mb-3 productoCarrito" key={prod.id} > 
                                <div className="row g-0"> 
                                    <img src={prod.img} className="img-fluid rounded-start" alt='imagen' /> 
                                </div> 
                                <div className="card-body m-0 p-1"> 
                                    <h5 className="card-title">{prod.nombre} {prod.descripcion}</h5> 
                                    <p className="card-text p-0 m-0">Cantidad: {prod.cant}</p> 
                                    <p className="card-text p-0 m-0">Precio unitario: ${new Intl.NumberFormat('de-DE').format(prod.precio) }</p> 
                                    <p className="card-text p-0 m-0">Subtotal : ${new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant) }</p> 
                                </div> 
                                <button className="btn btn-info boton_compra " onClick = {() => removeItem(prod.id)}>Eliminar Producto</button> 
                            </div> 
                        )} 
                        <div className="divButtons row justify-content-center "> 
                            <h2 className='d-flex justify-content-center resumen_compra'>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</h2> 
                                
                            <button className="btn btn-dark button"><Link className="nav-link" to={"/"} onClick={emptyCart}>Vaciar Carrito</Link></button> 
                            <button className="btn btn-dark button"><Link className="nav-link" to={"/"} >Continuar comprando</Link></button> 
                            <button className="btn btn-dark button"><Link className="nav-link" to={"/checkout"}>Finalizar Compra</Link></button> 
                        </div> 
                    </div> 
                } 
            </div> 
    ); 
 } 
  
 export default Carrito;