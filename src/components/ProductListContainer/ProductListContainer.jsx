import axios from 'axios';
import './ProductListContainer.css'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ProductList from "../ProductList/ProductList";
import Seccion from '../Seccion/Seccion';
import Carrusel from '../Carrusel/Carrusel';
import CarruselInstagram from '../CarruselInstagram/CarruselInstagram';

const ProductListContainer = () => {
    const [ productos, setProductos] = useState([]);
    const {categoria}= useParams()

    useEffect(() => {
        if (categoria) {
            
            //fetch('http://localhost:3004/productos')
            //.then(promise => promise.json())
            axios.get('http://localhost:3004/productos')
            .then(promise => promise.data)
            .then(items => {
                const products = items.filter(producto => 
                producto.idCategoria === parseInt(categoria)) 
                const itemsFiltrados = ProductList({products})
                setProductos(itemsFiltrados)
        })}
        else {
            
            //fetch('http://localhost:3004/productos')
            //.then(promise => promise.json())
            axios.get('http://localhost:3004/productos')
            .then (promise => promise.data)
            .then(products => {
                const items = ProductList({products})
                setProductos(items)
        })}
    }, [categoria])



    return (
            <div className="row cardProducto">
                <Carrusel/>
                {productos} 
                <Seccion/>
                <h4 className='text-center'>Mira nuestras ofertas e ideas de recetas en nuestro instagram.</h4>
                <CarruselInstagram/>
            </div>


    );
}


export default ProductListContainer;
