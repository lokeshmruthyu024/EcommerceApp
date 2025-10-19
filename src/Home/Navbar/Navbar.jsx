import React from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    <>
      <div className="bg-dark text-white py-1 px-3">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 d-flex justify-content-center">
              <div className="text-nowrap">
                Summer Sale for All Swim Suits and Free Express Delivery - Off 50%!
                <a href="#" className="text-white text-decoration ms-2 fw-bold">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="dropdown ms-3">
              <button
                className="btn btn-dark dropdown-toggle text-white px-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">English</a></li>
                <li><a className="dropdown-item" href="#">Français</a></li>
                <li><a className="dropdown-item" href="#">Español</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom">
        <div className="container">
          <div className="row mt-3 mb-2 row d-flex flex-row justify-content-between">
            <div className="col-md-6 row d-flex flex-row justify-content-between align-items-center">
              <div className='col-md-4 align-items-center'>
                <h3 className='fw-bold'> Exclusive</h3>
              </div>
              <nav className='col-md-7'>
                <ul className='d-flex flex-row list-unstyled justify-content-between align-items-center my-1'>
                  <li><a href="" className='text-decoration-none text-dark'>Home</a></li>
                  <li><a href="" className='text-decoration-none text-dark'>Contact</a></li>
                  <li><a href="" className='text-decoration-none text-dark'>About</a></li>
                  <li><a href="" className='text-decoration-none text-dark'>Sign up</a></li></ul>
              </nav>
            </div>
            <div className='col-md-6 row d-flex flex-row justify-content-end '>
              <div className="col-md-6 form-group d-flex flex-row justify-content-between align-items-center">
                <input type="text" className='form-control w-100 rounded-0 border-0 p-1' placeholder='What are you looking for?' aria-label='readdonly input example' />
                <CiSearch className='fs-3' />
              </div>
              <div className="col-md-2 d-flex flex-row align-items-center justify-content-between fs-3">
                <CiHeart />
                <IoCartOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
