import "./ProductDetailContainer.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
//Firebase
import { getProducto } from "../../assets/firebase";
const ProductDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
            getProducto(id)
            .then(product => {
            setProducto(product)
        })
    },);
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card m-3 container itemDetail border border-0">
                <ProductDetail item = {producto} />
            </div>
        </div>
    );
}

export default ProductDetailContainer;