import React from 'react'
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className="container-xxl">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
          <h2 className='footer-title mb-3'><b>Contact</b></h2>
          <div className='mb-3'><p><b>Address:</b>  Guelmim Maroc</p> </div>
          <div className='mb-3'><p><b>Phone:</b>  <a className='footer-tel' href="tel:+1234567890">Nous appeler dans +212000000</a></p> </div>
          
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>About</b></h2>
          <div className='mb-3'> <Link to='/about' id='footer-links'>About Us</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Terms & Conditions</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Fee Policy</Link>  </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>Account</b></h2>
          <div className='mb-3'> <Link to='/login' id='footer-links'>Profile</Link>  </div>
          <div className='mb-3'> <Link to='/cart' id='footer-links'>View Cart</Link>  </div>
          <div className='mb-3'> <Link to='/contact' id='footer-links'>Help</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Payments</Link>  </div>
        </div>
      
      </div>
      <hr className='my-4' />
      
    </div>
  </footer>
  </>;
}

export default footer