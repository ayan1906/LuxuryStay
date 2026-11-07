import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <div className='flex flex-col gap-6'>
                <h3 className='flex items-center tracking-wider gap-2 uppercase text-base font-bold text-[var(--text-secondary)] '>
                    <div className="w-12 h-[2px] bg-[var(--text-secondary)]"></div>
                    Welcome to Luxury</h3>
                <h1 className='text-6xl text-[var(--navtext)]'>LuxuryStay</h1>
                <p className='w-full lg:w-160'> Experience unparalleled luxury at LuxuryStay Hospitality. Nestled in the heart of the city, our hotel offers world-class amenities, exceptional service, and unforgettable experiences that define the art of hospitality.</p>
                <div className='flex gap-6 items-center'>
                    <NavLink>
                        <button className='bg-[var(--text-secondary)]  rounded-md text-black flex items-center gap-1 px-4 py-3 cursor-pointer group hover:bg-[#c56206] transition duration-200'>
                            Explore Rooms
                            <ArrowRight className='group-hover:translate-x-1 transition duration-200 ' size={20} />
                        </button>
                    </NavLink>

                    <NavLink>
                        <button className='border border-white px-4 py-3 rounded-md cursor-pointer hover:bg-black/20 transition duration-200'>Book Your Stay</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Hero