import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import banner from '../../src/assets/banner.png'
import { IoLogoApple, IoPhoneLandscape } from 'react-icons/io5'
const Home = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-2 border-end">
          <Sidebar />
        </div>
        <div className="col-md">
          <div className="row py-4 px-4">
            <img src={banner} alt="" style={{ width: '892px', height: '344px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
