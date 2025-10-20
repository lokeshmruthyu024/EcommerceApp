import React from 'react'
import { BiSend } from 'react-icons/bi'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-dark text-light'>
      <div className="container">
        <div className="row p-5 d-flex">
          <div className="col-md d-flex flex-column align-items-start small">
            <h5 className='mb-3'>Exclusive</h5>
            <h5>Subscribe</h5>
            <p></p>
            <p>Get 10% off your first order</p>
            <div className='d-flex row col-md-10 flex-row border border-light m-1 justify-content-center align-items-start'>
              <input type="text" className='bg-transparent border-0 col-md-9' placeholder='Enter your email' />
              <BiSend className='fs-2 col-md-3' />
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-start">
            <h5 className='mb-3'>Support</h5>
            <p>111 Bijoy sarani, Dhaka,DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-99999</p>
          </div>
          <div className="col-md d-flex flex-column align-items-start">
            <h5 className='mb-3'>Account</h5>
            <p>My Account</p>
            <p>Login / register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div className="col-md d-flex flex-column align-items-start">
            <h5 className='mb-3'>Quick Link</h5>
            <p>Privacy policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="col-md row d-flex flex-column align-items-start small">
            <h5 className='mb-3'>Download App</h5>
            <p>Save $3 with new app user only</p>
            <div className="row d-flex flex-row">
              <div className="col-md-6">
                <img src={image1} className='w-100' />
              </div>
              <div className="col-md-6">
                <div className="row d-flex flex-column">
                  <div className="col-md" >
                    <img src={image2} className='w-100' style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="col-md">
                    <img src={image3} className='w-100' style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div className='row mt-3 d-flex flex-row justify-content-evenly align-items-center'>
                <div className="col-md-3">
                  <FaFacebook />
                </div>
                <div className="col-md-3">
                  <FaTwitter />
                </div>
                <div className="col-md-3">
                  <FaInstagram />
                </div>
                <div className="col-md-3">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-top opacity-25'>
        <p className='text-center p-2 small'>Copyright Rimel 2022. All right reseverd</p>
      </div>
    </div>
  )
}

export default Footer
