import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { fetchRooms } from "../redux/features/roomSlice"
import { Star , Scan } from "lucide-react"
import { NavLink } from "react-router-dom"
const Roompage = () => {
  const dispatch = useDispatch()
  const { rooms } = useSelector(state => state.rooms)

  useEffect(() => {
   if(rooms.length === 0){
    dispatch (fetchRooms())
   }
  }, [dispatch , rooms.length])
  
  
  return (
    <div className='min-h-screen px-4 md:max-w-6xl mx-auto  '>
      <div>
        <div className='flex flex-col gap-4 mx-auto mt-20 justify-center'>
          <h1 className='text-2xl mt-2 text-[var(--text-secondary)]'>Explore Our rooms</h1>
          <p className='text-base'>Step into a blend of cozy comfort and refined luxury right in the center of Dhaka, Bangladesh. Wake up to peaceful mornings, immerse yourself in the city’s vibrant culture, or unwind in your private retreat after a busy day. With warm hospitality and effortless elegance, we offer a calm sanctuary that truly feels like home. Your perfect city escape awaits—welcome to paradise.</p>
        </div>
        <div>
          <div className="flex flex-col  justify-between mt-10">

            <div className="flex items-center gap-2 mb-6" >
              <div className="w-12 h-[2px] bg-[var(--text-secondary)]"></div>
              <h1 className="text-xl text-[var(--text-secondary)]">Our Rooms</h1>
            </div>
           
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full'>
                {rooms.map((room, i) => (
                    <div key={i} className='bg-white rounded-2xl group'>
                        <div className='relative overflow-hidden rounded-t-2xl'>
                            <img
                                className='h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                src={room.image}
                                alt=""
                            />
                            <div className='absolute w-full top-4 flex items-center justify-around text-xs '>
                                <h2 className='text-green-800 font-bold bg-gray-400/20 rounded-full px-2'>{room.availability}</h2>
                                <h2 className='bg-[var(--text-secondary)] px-2 rounded-full font-black '>{room.type}</h2>
                            </div>
                            {/* console.log(price - (price/dis)) */}
                            <h1 className='absolute w-full bottom-3 left-3 text-white font-bold tracking-wider'><span className='line-through font-normal text-xs text-[var(--navtext)]'>{room.price}</span> ৳{`${Math.round(room.price - (room.price / room.discount))}`}<span className='text-xs text-[var(--navtext)] font-normal'>/night</span></h1>
                        </div>
                        <div className='m-4 '>
                            <div className='flex items-center justify-between mb-2'>
                                <h1 className='text-[#1B1A1B] font-bold'>Room {room.room_number}</h1>
                                <h3 className='flex items-center gap-1 leading-none text-sm'>
                                    <Star className='fill-[var(--text-secondary)] text-[var(--text-secondary)] shrink-0' size={16} />
                                    <span className='font-medium text-[var(--text-secondary)]'>{room.rating}</span>
                                    <span className='text-xs text-gray-500'>({room.reviews_count})</span>
                                </h3>
                            </div>
                            <h2 className='mb-2 text-sm text-gray-500'>{room.bed_type}</h2>
                            <div className='flex mb-2 text-sm text-gray-500 gap-2'>
                                <h3>{room.capacity} Guests</h3>
                                <h3 className='flex items-center gap-1'><Scan size={16}/> {room.size_sqft}m<sup>2</sup></h3>
                            </div>
                            <div className='flex items-center justify-around mt-4'>
                                <NavLink to={`/roomdetail/${room.id}`} className='text-sm border border-gray-500 px-6 py-1 rounded-md cursor-pointer hover:bg-gray-200 transition duration-200'>View Details</NavLink>
                                <NavLink className='text-sm bg-[var(--text-secondary)] px-6 py-1 rounded-md cursor-pointer hover:bg-amber-600 transition duration-200'>Book Now</NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Roompage