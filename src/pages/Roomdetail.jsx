import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { fetchRooms } from '../redux/features/roomSlice'
import { UserRound, MapPin, EyeOff, ArrowLeft, ArrowRight } from 'lucide-react'

const Roomdetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { rooms, loading, error } = useSelector((state) => state.rooms)

    useEffect(() => {
        if (rooms.length === 0) {
            dispatch(fetchRooms())
        }
    }, [dispatch, rooms.length])

    const room = rooms.find(item => String(item.id) === String(id))

    // যখন পেজ রিলোড হবে এবং ডেটা ফেচ হতে থাকবে তখন লোডিং দেখাবে (ক্র্যাশ করবে না)
    if (loading || (rooms.length === 0 && !error)) {
        return (
            <div className='min-h-screen flex items-center justify-center pt-24'>
                <div className='text-center'>
                    <div className='w-12 h-12 border-4 border-[var(--text-secondary)] border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
                    <p className='text-gray-600 font-medium'>Loading room details...</p>
                </div>
            </div>
        )
    }

    // যদি রুম না পাওয়া যায়
    if (!room) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center gap-4 pt-24 px-4 text-center'>
                <h2 className='text-2xl font-bold text-gray-800'>Room Not Found</h2>
                <p className='text-gray-500'>The room you are looking for does not exist or has been removed.</p>
                <NavLink
                    to='/rooms'
                    className='inline-flex items-center gap-2 bg-[var(--text-secondary)] text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-amber-600  transition'
                >
                    <ArrowLeft size={18} />
                    Back to Rooms
                </NavLink>
            </div>
        )
    }

    return (
        <div className=''>
            <div className='absolute top-24 left-6 md:left-38 group'>
                <NavLink
                    to='/rooms'
                    className='inline-flex items-center gap-2 bg-[var(--text-secondary)] text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-amber-600 transition'
                >
                    <ArrowLeft size={18} />
                    Back to Rooms
                </NavLink>
            </div>

            <div className='min-h-screen flex flex-col md:flex-row my-6 items-center justify-center gap-12 md:gap-20 px-6'>
                <div className='flex justify-start '>

                </div>
                <img
                    className='w-full max-w-[480px] h-80 md:h-[400px] object-cover rounded-xl shadow-lg'
                    src={room.image}
                    alt={room.name || 'Room image'}
                />

                <div className='flex flex-col gap-6 max-w-xl'>
                    <h1 className='text-3xl font-bold'>Room No {room.room_number}</h1>
                    <p className='w-full text-gray-700 leading-relaxed'>{room.description}</p>
                    <h1 className='text-2xl text-[var(--text-secondary)] font-bold tracking-wider'>
                        <span className='line-through font-normal text-xs text-black mr-2'>{room.price}</span>
                        ৳{`${Math.round(room.price - (room.price / (room.discount || 1)))}`}
                        <span className='text-xs text-black font-normal'>/night</span>
                    </h1>
                    <h4 className='flex items-center gap-2 text-gray-700'><UserRound size={18} />For up to {room.capacity} people</h4>
                    <h5 className='flex items-center gap-2 text-gray-700'><MapPin size={18} /> Located in <span>Dhaka, Bangladesh</span></h5>
                    <h3 className='flex items-center gap-2 text-gray-700'><EyeOff size={18} /> Privacy <span>100%</span> guaranteed</h3>
                     <NavLink
                        to='/rooms'
                        className='inline-flex w-38 items-center gap-2 bg-[var(--text-secondary)] text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-amber-600 group'
                    >
                        Book Now
                        <ArrowRight className='group-hover:translate-x-1.5 duration-200 transition ' size={18} />
                    </NavLink>
                </div>

            </div>

        </div>
    )
}

export default Roomdetail
