import './ProductDetail.css'
import Contador from "../Contador/Contador";
import { useCarritoContext } from "../../Context/CarritoContext"
const ProductDetail = ({item}) => {
    const { addProduct } = useCarritoContext()
    const onAdd = (contador) => {
        addProduct(item, contador)
    }
  
    return (
        <div className='contenedor_detalle'>
            <div className="d-flex justify-content-around align-items-center">
                <div>
                    <img src={item.img} alt="" className="img-fluid container justify-content-center" />
                </div>
                <div className="container card-body row producto_descripcion">    
                    <h3 className="card-title">{item.nombre}</h3>
                    <h5 className="card-text">{item.descripcion}</h5>
                    <h6 className="card-text">Precio:${item.precio}</h6>
                    <h6 className="card-text">Stock: {item.stock}</h6>
                </div>       
            </div>
            <div className='container contador'>
                <Contador stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
            
    );
}

export default ProductDetail;

