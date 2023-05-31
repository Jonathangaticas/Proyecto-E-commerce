import React from 'react';

const CarruselDeInstagram = () => {
    return (
        <div className='container '>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active p-4 " data-bs-interval="5000">
                <div className='row'>
                  <div className='col-4 text-center'>
                    <img src="./img/yogurth.jpg" className="img-fluid rounded-5" alt="yogurth con frutas" />
                  </div>
                  <div className='col-4 text-center'>
                    <img src="./img/pastas.jpg" className="img-fluid rounded-5" alt="pastas" />
                  </div>
                  <div className='col-4 text-center'>
                    <img src="./img/porotos.jpg" className="img-fluid rounded-5" alt="porotos" />
                  </div>
                </div>
              </div>

          <div className="carousel-item p-4" data-bs-interval="5000">
            <div className='row'>
              <div className='col-4 text-center'>
                <img src="./img/coca-cola.jpg" className="img-fluid rounded-5" alt="coca cola" />
              </div>
              <div className='col-4 text-center'>
                <img src="./img/corbatas.jpg" className="img-fluid rounded-5" alt="corbatas" />
              </div>
              <div className='col-4 text-center'>
                <img src="./img/lentejas.jpeg" className="img-fluid rounded-5" alt="lentejas" />
              </div>
            </div>
          </div>

          <div className="carousel-item p-4" data-bs-interval="5000">
            <div className='row'>
              <div className='col-4 text-center'>
                <img src="./img/canasto.jpg" className="img-fluid rounded-5" alt="canasto de compras" />
              </div>
              <div className='col-4 text-center'>
                <img src="./img/verduras.jpg" className="img-fluid rounded-5" alt="verduras congeladas" />
              </div>
              <div className='col-4 text-center'>
                <img src="./img/manteca.jpg" className="img-fluid rounded-5" alt="pan con manteca" />
              </div>
            </div>
          </div>
        </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Siguiente</span>
          </button>
      </div>

    </div>
    );
}

export default CarruselDeInstagram;
