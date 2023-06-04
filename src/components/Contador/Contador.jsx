import './Contador.css'
import { useState } from "react";
import { Link } from 'react-router-dom';

const Contador = ({stock, onAdd}) => {
    const [cont, setCont] = useState (1)
    const disCont = () => cont > 1 && setCont(cont-1)
    const aumCont = () => cont < stock && setCont(cont+1)
    const agregarAlCarrito = () => onAdd(cont)
    return (
        <div className="container col justify-content-center contenedor p-0 m-0">
                <button onClick={() => disCont()} className= "btn btn-dark btn-sm boton_menos">-</button>
                <h4>{cont}</h4>
                <button onClick={() => aumCont()} className="btn btn-dark btn-sm boton_mas">+</button>
                <button onClick={() => agregarAlCarrito()} className="btn btn-dark btn-sm  boton_agregar">Agregar</button>
                <button className="btn btn-dark btn-sm"> <Link className="" to={"/"}>Volver</Link></button>
        </div>
    );
}
export default Contador;