import './Product.css';
import { Link } from "react-router-dom"
const Product = ({prod}) => {
    return (
        <div className="card" style={{width: '12rem'}}>
          <img src={prod.img} className="card-img-top" alt="..." />
          <div className="card-body text-start pt-1 pb-1">
            <h5 className="card-title text-center mb-1">{prod.nombre}</h5>
            <p className="card-text prodDescrip">{prod.descripcion}</p>
            <p className="card-text prodPrecio precio">Precio: ${prod.precio}</p>
            <p className="card-text prodStock">Stock: {prod.stock}</p>
          </div>
          <Link className="btn btn-dark boton_compra" to={`/producto/${prod.id}`}>Comprar</Link>
      </div>
    );
}

export default Product;
