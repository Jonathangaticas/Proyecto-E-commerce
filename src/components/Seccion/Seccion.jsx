import "./Seccion.css"

const Seccion = () => {
    return (
        <div className="container d-flex container_seccion rounded-2 m-2">
            <img src="./img/compras-online-1.jpg" className="img-seccion rounded-5"  alt="compras en carrito"></img>
            <p className='tam-letra parrafo container d-flex align-items-center justify-content-center'>Haces tu pedido y no necesitas acercarte, nosotros lo llevamos a tu puerta. También tienes la opción de pasar a buscar tus compras, luego de 30 minutos tu pedido estará listo.</p>
        </div>
    );
}

export default Seccion;
