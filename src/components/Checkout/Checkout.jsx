import "./Checkout.css"
import { useRef } from "react";
import { useCarritoContext } from "../../Context/CarritoContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify' 

const Checkout = () => {
    const { totalPrice, emptyCart } = useCarritoContext()
    const datosFormulario = useRef()
    let navigate = useNavigate()
    const consultarFormulario = (e) => {
        e.preventDefault()

        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm) 
        toast.success(`Hola ${cliente.nombreCompleto}, su compra por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} ha sido realizada correctamente`)
        emptyCart()
        e.target.reset()
        navigate("/")
        
    }
    return (
        <div className="container container_checkout">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <h4>Formulario de datos</h4>
                <div className="mb3">
                    {/* <label htmlFor="nombreCompleto" className="form-label">Nombre y Apellido</label> */}
                    <input type="text" className="form-control control" name="nombreCompleto" placeholder="Ingrese su nombre completo"/>
                </div>
                <div className="mb3">
                    {/* <label htmlFor="dni" className="form-label">DNI</label> */}
                    <input type="number" className="form-control control" name="dni" placeholder="DNI" />
                </div>
                <div className="mb3">
                    {/* <label htmlFor="email" className="form-label">Email</label> */}
                    <input type="email" className="form-control control" name="email" placeholder="Ingrese su email" />
                </div>
                <div className="mb3">
                    {/* <label htmlFor="celular" className="form-label">Celular</label> */}
                    <input type="number" className="form-control control" name="celular" placeholder="Celular" />
                </div>
                <div className="mb3">
                    {/* <label htmlFor="direccion" className="form-label">Direccion</label> */}
                    <input type="text" className="form-control control" name="direccion" placeholder="Direccion" />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn btn-dark">Finalizar</button>
                </div>
                
            </form>
            
        </div>
    );
}

export default Checkout;
