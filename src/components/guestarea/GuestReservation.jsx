import React from 'react'

const GuestReservation = () => {
  // ১. সঠিক key নাম ('currentBooking') এবং বাইরে '|| []' বসানো হয়েছে[cite: 5]
  const rawData = JSON.parse(localStorage.getItem('user_reservations')) || []
  const booking = Array.isArray(rawData) ? rawData : [rawData]

  if (booking.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No reservations found!
      </div>
    )
  }

  return (
    <div className="mt-14 space-y-4">
      <h1 className="text-[var(--text-secondary)] text-xl font-bold">
        Your Bookings
      </h1>

      <div className="grid gap-4">
        {booking.map((book, i) => (
          <div
            key={book.bookingId || i}
            className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm flex items-center justify-between"
          >
            <div className='flex items-center gap-4'>
            <img className='w-30 h-30' src={book.roomImage} alt="" />
             <div>
              <h2 className="text-lg font-bold">
                Room {book.roomNumber}</h2>
               <p className="text-xs text-amber-600 font-semibold">
                {book.bookingId}
              </p>
            <p><span></span></p>
             </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-amber-600">
                ৳{book.discountPrice || book.roomPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GuestReservation