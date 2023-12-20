
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import banner from '../assets/images/banner/b17.jpg'
import banner1 from '../assets/images/banner/b10.jpg'



const home = () => {
  return <>
  <section className="banner">
    <div className="container-xxl">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  <h1>Bonne offre et bonne prix</h1>
                  <h2>Sur tous les produits</h2>
                  <Link to='/shop' className='btn btn-primary' id='button-link'>Shop Now</Link>
                  </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>

  <section className="featured-products p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Produits populaires</h1>
          <p>Tous les nouveau model</p>
        </div>
       <Featuredproducts />
      </div>
    </div>
  </section>
  <section className="new-arrivals p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1>New Arrivals</h1>
        </div>
        <Newarrivals />
      </div>
    </div>
  </section>
  <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 d-flex">
                  <div className="card m-auto mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Bonnes affaires</h5>
                  <h2 className="card-text mb-2">Acheter un en obtenir un gratuitement.</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">La dernière meilleure collection de notre placard <br />Sentez-vous mignonne avec nos tenues</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex">
                  <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Saison entrante</h5>
                  <h2 className="card-text mb-2">Tenue toutes saisons</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">Peu importe la saison <br />Nous avons ce qu'il vous faut</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </>;
}

export default home