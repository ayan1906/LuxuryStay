import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRooms } from '../redux/features/roomSlice'
import { ConciergeBell, Send, ChevronDown, CheckCircle2 } from 'lucide-react'

const Services = () => {
  const dispatch = useDispatch()
  const { rooms } = useSelector((state) => state.rooms)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (rooms.length === 0) {
      dispatch(fetchRooms())
    }
  }, [dispatch, rooms.length])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      room: '',
      serviceType: 'Room Service',
      description: ''
    }
  })

  const onSubmit = (data) => {
    console.log('Service Request Data:', data)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      reset()
    }, 2500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 bg-[#F6F2ED]">
      <div className="bg-white max-w-lg w-full rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
        
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5">
            <ConciergeBell className="text-gray-900" size={26} />
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              Request Service
            </h1>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            How can we help you today?
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          
          {/* Room Selection Dropdown */}
          <div>
            <label htmlFor="room" className="block text-sm font-medium text-gray-800 mb-1.5">
              Room
            </label>
            <div className="relative">
              <select
                id="room"
                {...register('room', { required: 'Please select your room' })}
                defaultValue=""
                className={`w-full px-4 py-2.5 bg-white border rounded-lg text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0B1528] transition pr-10 cursor-pointer ${
                  errors.room ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="" disabled>
                  Select your room
                </option>
                {rooms.length > 0 ? (
                  rooms.map((r) => (
                    <option key={r.id} value={r.room_number}>
                      Room {r.room_number} — {r.name || r.type}
                    </option>
                  ))
                ) : (
                  <>
                    <option value="101">Room 101 — Ocean View Deluxe</option>
                    <option value="102">Room 102 — Classic Comfort</option>
                    <option value="201">Room 201 — Executive Suite</option>
                    <option value="202">Room 202 — Presidential Suite</option>
                  </>
                )}
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
            {errors.room && (
              <span className="text-xs text-red-500 mt-1 block">
                {errors.room.message}
              </span>
            )}
          </div>

          {/* Service Type Dropdown */}
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-800 mb-1.5">
              Service Type
            </label>
            <div className="relative">
              <select
                id="serviceType"
                {...register('serviceType', { required: 'Please select a service type' })}
                defaultValue="Room Service"
                className={`w-full px-4 py-2.5 bg-white border rounded-lg text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0B1528] transition pr-10 cursor-pointer ${
                  errors.serviceType ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="Room Service">Room Service</option>
                <option value="Housekeeping & Laundry">Housekeeping & Laundry</option>
                <option value="Spa & Massage">Spa & Massage</option>
                <option value="Concierge & Luggage">Concierge & Luggage</option>
                <option value="Airport Transfer & Taxi">Airport Transfer & Taxi</option>
                <option value="Maintenance & Repair">Maintenance & Repair</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
            {errors.serviceType && (
              <span className="text-xs text-red-500 mt-1 block">
                {errors.serviceType.message}
              </span>
            )}
          </div>

          {/* Description / Details Textarea */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-800 mb-1.5">
              Description / Details
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="E.g. Extra towels, Taxi at 5 AM..."
              {...register('description')}
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B1528] transition resize-none"
            />
          </div>

          {/* Send Request Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[var(--text-secondary)]  hover:bg-amber-600 text-black font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition duration-200 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-70 mt-1"
          >
            <Send size={16} />
            <span>Send Request</span>
          </button>
        </form>
      </div>

      {/* Auto-closing Success Feedback Modal */}
      {isSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 px-4 transition-opacity duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
            <p className="text-gray-500 text-sm mb-4">
              Our concierge team has received your request and will attend to it promptly.
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

export default Services
