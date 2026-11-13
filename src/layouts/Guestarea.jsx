import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/guestarea/Sidebar'

const Guestarea = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 bg-[#F6F2ED]">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  )
}

export default Guestarea