import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Mainlayouts = () => {
  return (
    <div className='flex flex-col min-h-screen bg-[#F6F2ED]'>
      <Navbar />

      <main className='flex-1 flex flex-col'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Mainlayouts