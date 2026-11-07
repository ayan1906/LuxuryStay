import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Mainlayouts = () => {
  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex flex-1 flex-col'>
          <Outlet />
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Mainlayouts