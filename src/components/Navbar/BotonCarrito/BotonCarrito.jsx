import {useCarritoContext} from "../../../Context/CarritoContext"
import { Link } from "react-router-dom";
const BotonCarrito = () => { 
  const { getItemQuantity } = useCarritoContext()
  return( 
      <div className="d-flex">
         <button className='btn btn-dark m-0'>
            <Link to={"/carrito"} className="nav-link" >Carrito </Link>
         </button> 
         <span className='btn btn-light m-0'>{getItemQuantity()}</span>
      </div>
   ); 
} 

export default BotonCarrito 