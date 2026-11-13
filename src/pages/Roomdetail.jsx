import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { fetchRooms } from '../redux/features/roomSlice'
import { UserRound, MapPin, EyeOff, ArrowLeft, ChevronDown, CheckCircle2, } from 'lucide-react'
import DatePicker from '../components/DatePicker'
import { useForm } from 'react-hook-form'


const Roomdetail = () => {
    const { user } = useSelector((state) => state.auth)
    const username = user?.user_metadata?.firstname || user?.email?.split('@')[0][0]

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    })
    const { id } = useParams()
    const dispatch = useDispatch()
    const { rooms, loading, error } = useSelector((state) => state.rooms)

    useEffect(() => {
        if (rooms.length === 0) {
            dispatch(fetchRooms())
        }
    }, [dispatch, rooms.length])

    const room = rooms.find(item => String(item.id) === String(id))
    const [ismodalopen, setismodalopen] = useState(false)
    const [dates, setDates] = useState({ checkIn: '', checkOut: '' })
    const [dateError, setDateError] = useState('')
const navigate = useNavigate()

    const handleonsubmit = (e) => {

        e.preventDefault()

        if (!dates.checkIn || !dates.checkOut) {
            setDateError('Please select both Check-in and Check-out dates.')
            return
        }

        setTimeout(() => {
            navigate('/guestarea/guestreserv')
        }, 2000);
        setDateError('')

        const bookingData = {
            bookingId: `RES-${Date.now()}`,
            roomId: room.id,
            roomNumber: room.room_number,
            roomName: room.name || `Room ${room.room_number}`,
            roomImage: room.image,
            roomPrice: room.price,
            discountPrice: Math.round(room.price - (room.price / (room.discount || 1))),
            checkIn: dates.checkIn,
            checkOut: dates.checkOut,
            guests: e.target.guest?.value || 1,
            notes: e.target.des?.value || '',
            userEmail: user?.email || '',
            userName: username || 'Guest',
            bookedAt: new Date().toISOString()
        }

        localStorage.setItem('currentBooking', JSON.stringify(bookingData) )

        const previousBookings = JSON.parse(localStorage.getItem('user_reservations') || '[]')
        localStorage.setItem('user_reservations', JSON.stringify([bookingData, ...previousBookings]))

        console.log('Saved booking to localStorage:', bookingData)

        setismodalopen(true)
        setTimeout(() => {
            setismodalopen(false)
            reset()
        }, 2000);
    }


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

    if (!room) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center gap-4 pt-24 px-4 text-center'>
                <h2 className='text-2xl font-bold text-gray-800'>Room Not Found</h2>
                <p className='text-gray-500'>The room you are looking for does not exist or has been removed.</p>
                <NavLink
                    to='/rooms'
                    className='inline-flex items-center gap-2 bg-[var(--text-secondary)] text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-amber-600 group transition'
                >
                    <ArrowLeft size={18} />
                    Back to Rooms
                </NavLink>
            </div>
        )
    }

    return (
        <div className=''>
            <div className='pt-24 pl-6 -mb-10  md:left-38 group'>
                <NavLink
                    to='/rooms'
                    className='inline-flex items-center gap-2 text-black font-semibold px-5 py-2.5 rounded-lg '
                >
                    <ArrowLeft size={18} />
                    Back to Rooms
                </NavLink>
            </div>

            <div className='min-h-screen -mt-20 flex flex-col md:flex-row my-6 items-center justify-center gap-12 md:gap-20 px-6'>
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


                </div>
            </div>
            <div className="min-h-screen px-4 py-12 max-w-5xl mx-auto">
                <h1 className="text-2xl sm:text-4xl text-[var(--text-secondary)] font-bold text-center">
                    Reserve Room {room.room_number} Today
                </h1>

                <form onSubmit={handleonsubmit}

                    className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start bg-white dark:bg-[#132039] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
                    <div className="flex flex-col justify-between h-full gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                Select Check-in & Check-out
                            </h3>
                            <DatePicker
                                onDateChange={(selectedDates) => {
                                    setDates(selectedDates)
                                    if (selectedDates.checkIn && selectedDates.checkOut) {
                                        setDateError('')
                                    }
                                }}
                            />
                            {dateError && (
                                <p className="text-xs text-red-500 mt-2 font-medium">{dateError}</p>
                            )}
                        </div>

                        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                                Room Rate
                            </span>
                            <div>
                                <span className="text-2xl font-bold text-amber-600">৳{room.price}</span>
                                <span className="text-xs text-gray-500"> / night</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-800 pt-6 lg:pt-0 lg:pl-8">
                        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2.5 rounded-lg text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Logged in as</span>
                            <span className="text-[var(--text-secondary)] font-bold">{username}</span>
                        </div>

                        {/* Guests Dropdown */}
                        <div>
                            <label
                                htmlFor="guest"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                            >
                                How many guests?
                            </label>
                            <div className="relative">
                                <select
                                    id="guest"
                                    defaultValue=""
                                    required
                                    {...register('guests', { required: 'Please select number of guests' })}
                                    className={`w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border rounded-lg text-gray-800 dark:text-gray-100 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-600 transition cursor-pointer ${errors.guests ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                                        }`}
                                >
                                    <option value="" disabled>
                                        Select number of guests...
                                    </option>
                                    {Array.from({ length: Number(room.capacity) || 1 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.guests && (
                                <p className="text-xs text-red-500 mt-1">{errors.guests.message}</p>
                            )}
                        </div>

                        {/* Special Notes Textarea */}
                        <div>
                            <label
                                htmlFor="des"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                            >
                                Anything we should know about your stay?
                            </label>
                            <textarea
                                id="des"
                                rows={3}
                                required
                                {...register('notes')}
                                placeholder="Any pets, allergies, special requirements, etc.?"
                                className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600 transition resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button

                            type="submit"
                            className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition cursor-pointer shadow-md"
                        >
                            Confirm Reservation
                        </button>
                    </div>
                </form>
            </div>

            {ismodalopen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 px-4 transition-opacity duration-300">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 size={36} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Confirmed</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Your booking of room {room.room_number} is <span className='font-bold text-green-600'>Confirmed</span>
                        </p>
                        <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full w-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Roomdetail
