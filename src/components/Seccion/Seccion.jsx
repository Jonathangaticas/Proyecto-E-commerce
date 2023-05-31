import "./Seccion.css"

const Seccion = () => {
    return (
        <div className="container container-seccion">
            <img src="./img/compras-online-1.jpg" className="img-seccion"  alt="compras en carrito"></img>
            <p className='tam-letra'>Haces tu pedido y no necesitas acercarte, nosotros lo llevamos a tu puerta. También tienes la opción de pasar a buscar tus compras, luego de 30 minutos tu pedido estará listo.</p>
        </div>
    );
}

export default Seccion;
