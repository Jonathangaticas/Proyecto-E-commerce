import { useRef } from "react";
import { useCarritoContext } from "../../Context/CarritoContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify' 

const Checkout = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
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
        <div className="container" style={{marginTop: "20px"}}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb3">
                    <label htmlFor="nombreCompleto" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombreCompleto" />
                </div>
                <div className="mb3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb3">
                    <label htmlFor="celular" className="form-label">Celular</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-dark">Finalizar</button>
            </form>
            
        </div>
    );
}

export default Checkout;
