import "./Footer.css";
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
<div className="footer row navbar navbar-expand-lg navbar-dark align-items-start justify-content-around">
      <div className="col-md-2 enlaces">
        <Link className="navbar-brand" to={"/"}><img src='./img/logo.png' alt='logo-mercado-vecinal' className='logo'/></Link>
      </div>
      <div className="col-md-2 enlaces">
        <h5>NOSOTROS</h5>
        <img className="icon" src="./img/people.png" alt="us" />
        <p>Somos el almacén de barrio dispuesto a llevar las compras a tu puerta.</p>
      </div>
      <div className= "col-md-2 enlaces">
        <h5>UBICACION</h5> 
        <a className="footerA" href="https://www.google.com/maps/place/Loreto+352,+Recoleta,+Regi%C3%B3n+Metropolitana,+Chile/@-33.4294977,-75.1244515,6z/data=!4m5!3m4!1s0x9662c596f2585bef:0x3c71e5001d16e65f!8m2!3d-33.4295022!4d-70.6420295 " target="_blank" rel="noopener noreferrer">
          <img className="icon" src="./img/gps.png" alt="gps" /></a>
        <p>Nos ubicamos en la calle Loreto 352 del barrio Bellavista, Santiago de Chile.</p>
      </div>
      <div className="col-md-2 enlaces">
        <h5>WHATSAPP</h5> 
        <a href="https://api.whatsapp.com/send?phone=+56956098529&text=Quiero%20mas%20informacion%20"><img className="icon" src="./img/whatsapp.png" alt="whatsapp" target="_blank" rel="noopener noreferrer" /></a>
        <p>Escribenos al +56956098529, de lunes a sábado de 8 a 20 hrs y domingo de 8 a 13 hrs.</p>
      </div>
      <div className="col-md-2 enlaces">
        <h5>REDES SOCIALES</h5>      
        <a className="footerA" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img className="icon" src="./img/instagram.png" alt="instagram" /></a>
        <a className="footerA" href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer"><img className="icon" src="./img/facebook.png" alt="facebook" /></a>
        <a className= "footerA" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"> <img className="icon" src="./img/twitter.png" alt="twitter" /></a>
      </div>
</div>


        
    );
}

export default Footer;
