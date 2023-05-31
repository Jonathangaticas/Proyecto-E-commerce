import "./Navbar.css"
import { Link } from 'react-router-dom';
import BotonCarrito from './BotonCarrito/BotonCarrito';
import Secciones from './Secciones/Secciones';

const Navbar = () => {
    return (
      
        <nav className="navbar navbar-expand-md fixed-top">
          
            <Link className="navbar-brand logo" to={"/"}><img src='./img/logo.png' alt='logo-mercado-vecinal' className='logo'/></Link>
            <h2 className="titulo">Bienvenidos a tu Mercado Vecino</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          
          <div className="collapse navbar-collapse" id="navbarColor01">
            <Secciones/>
          </div>
          <div className="boton-carrito">
            <BotonCarrito/> 
          </div>
          
        </nav>
       
    );
}

export default Navbar;
