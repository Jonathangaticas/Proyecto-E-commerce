import React from 'react';
import { Link } from 'react-router-dom';


const Categorias = () => {
    return (
      
        <div>
         <ul className='list-unstyled'>
           <li>  <Link className="dropdown-item" to={"/categoria/7"}>Aceites, otros</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/8"}>Arroz, Legumbres</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/1"}>Bebidas</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/5"}>Churrascos, Lomitos</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/3"}>Leches</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/2"}>Margarinas, Mantequillas</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/9"}>Pastas</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/6"}>Verduras Congeladas</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/4"}>Yoghurt</Link></li>
          </ul>            
        </div>
    );
}

export default Categorias;
