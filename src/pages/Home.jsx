import React from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Rooms from '../components/Rooms'
import Exploreservice from '../components/Exploreservice'
import Booksection from '../components/Booksection'
const Home = () => {
  return (
    <div>
      <div className="w-full h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/home.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-start justify-center text-start text-white px-10 lg:px-30 ">
          <Hero />
        </div>
      </div>

      <Info />
      <Rooms/>
      <Exploreservice/>
      <Booksection/>
    </div>
  )
}

export default Home