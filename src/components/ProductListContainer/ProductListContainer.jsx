
import './ProductListContainer.css'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ProductList from "../ProductList/ProductList";
import Seccion from '../Seccion/Seccion';
import Carrusel from '../Carrusel/Carrusel';
import CarruselInstagram from '../CarruselInstagram/CarruselInstagram';
//Firebase
import { getProductos } from '../../assets/firebase'
const ProductListContainer = () => {
    const [ productos, setProductos] = useState([]);
    const {categoria}= useParams()

    useEffect(() => {
        
        if (categoria) {
            getProductos()
            .then(items => {
                const products = items.filter(producto => 
                producto.idCategoria === parseInt(categoria))
                .filter(prod => prod.stock > 0) 
                const itemsFiltrados = ProductList({products})
                setProductos(itemsFiltrados)
        })}
        else {
            getProductos()
            .then(items => { //Aca filtra los productos por stock
                const products = items.filter(prod => prod.stock > 0)
                const itemsFiltrados = ProductList({products})
                setProductos(itemsFiltrados)
        })}
    }, [categoria])



    return (
            <div className="row cardProducto">
                <Carrusel/>
                {productos} 
                <Seccion/>
                <CarruselInstagram/>
            </div>


    );
}


export default ProductListContainer;
