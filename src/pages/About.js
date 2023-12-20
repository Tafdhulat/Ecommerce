import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import a6 from '../assets/images/about/a6.jpg';

const About = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();


    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <>
    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
              <p className='text-white fs-3'>Apprenez à nous connaître davantage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={a6} alt="" className='img-fluid p-5' />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1><b>Qui sommes nous?</b></h1>
          <p className="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
        </div>
      </div>
    </section>
  </>;
}
export default About;