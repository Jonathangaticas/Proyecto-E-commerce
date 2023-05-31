import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import Carrito from './Carrito/Carrito'
import Checkout from './Checkout/Checkout'
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
import { CarritoProvider } from '../Context/CarritoContext';
//React Toastify
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <CarritoProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<ProductListContainer/>}/>
              <Route path='/categoria/:categoria' element={<ProductListContainer/>}/>
              <Route path='/producto/:id' element={<ProductDetailContainer/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/carrito' element={<Carrito/>}/>
            </Routes>   
            <ToastContainer />     
            <Footer/>
            </BrowserRouter>
      </CarritoProvider>
    </>
  );
}

export default App;
