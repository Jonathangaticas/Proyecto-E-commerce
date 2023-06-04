import "./Secciones.css"
import React from 'react';
import Categorias from '../Categorias/Categorias'  
import {Link} from 'react-router-dom';
const Secciones = () => {
    return (
        <ul className="navbar-nav me-auto">
          <li className="nav-item"></li>
          <li className="nav-item dropdown">
            <Link className="link nav-link dropdown-toggle p-5" data-bs-toggle="dropdown" element="#" role="button" aria-haspopup="true" aria-expanded="false">Productos por Categoría</Link>
              <div className="dropdown-menu">
                <Categorias/>
              </div>
        </li>
      </ul>
    );
}

export default Secciones;
