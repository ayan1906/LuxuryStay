import React, { useEffect } from 'react'
import { Star, Clock, Award, UsersRound } from 'lucide-react'
import { useSelector } from 'react-redux';

const Info = () => {
  const rooms = useSelector((state) => state.rooms.rooms);

  useEffect(() => {
    console.log(rooms)
  }, [rooms])

  const info = [
    { icon: <Star />, value: "4.7", title: "Guest Rating" },
    { icon: <Clock />, value: "5+", title: "Luxury Award" },
    { icon: <Award />, value: "24/7", title: "Concierge Service" },
    { icon: <UsersRound />, value: "10k+", title: "Happy Guest" },
  ]
  return (


    <div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-around max-w-6xl px-4 mx-auto my-10'>
        {info.map((inf, i) => (
          <div key={i} className='bg-black/10 rounded-md flex flex-col gap-2 items-center justify-center px-16 py-8 hover:scale-105 transition duration-200'>
            <span className='bg-[var(--text-secondary)] p-2 rounded-full text-black'>{inf.icon}</span>
            <h1 className='font-extrabold text-xl text-[#222222]'>{inf.value}</h1>
            <h3 className='text-sm md:text-base text-[#222222]'>{inf.title}</h3>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Info