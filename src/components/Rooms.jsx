import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRooms } from '../redux/features/roomSlice'
import { Sparkles, Star, Users, Scan, ArrowRight } from 'lucide-react'

const Rooms = () => {
    const dispatch = useDispatch()
    const { rooms } = useSelector(state => state.rooms)
    const sliceroom = rooms.slice(0, 6)

    useEffect(() => {
        if (rooms.length === 0) {
            dispatch(fetchRooms())
        }
    }, [dispatch, rooms.length])

    return (
        <div className='max-w-6xl mx-auto px-4  w-full flex flex-col'>
            <h3 className='text-[var(--text-secondary)] my-4 text-sm flex items-center gap-2 uppercase tracking-wider'><Sparkles size={18} /> our collection</h3>
            <div className='flex items-center justify-between mb-10'>
                <h1 className='text-3xl tracking-wider'>Featured Rooms & Suites</h1>
                <NavLink to={'/rooms'} className={'text-[var(--text-secondary)] text-sm flex items-center gap-2 group'}>View All Rooms <ArrowRight className='group-hover:translate-x-1.5 transition duration-200' size={18} /></NavLink>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full'>
                {sliceroom.map((room, i) => (
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
                                <NavLink to={`/roomdetail/${room.id}`} className='text-sm border border-gray-500 px-6 py-1 rounded-md cursor-pointer hover:bg-gray-200 transition duration-200'>Details & Reservation</NavLink>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rooms