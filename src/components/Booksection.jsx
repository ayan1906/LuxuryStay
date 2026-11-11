import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"
const Booksection = () => {
    return (
        <div>
            <div className="flex flex-col items-center min-h-70 gap-8 ">
                <h1 className="text-2xl md:text-4xl">Ready for an <span className="text-[var(--text-secondary)]">Unforgettable Stay</span>?</h1>
                <p className="w-90 md:w-150 flex mx-auto text-center">Book your room today and experience the finest in luxury hospitality. Our team is ready to make you stay extraordinary.</p>
                <div className='flex gap-6 items-center'>
                    <NavLink>
                        <button className='bg-[var(--text-secondary)]  rounded-md text-black flex items-center gap-1 px-4 py-3 cursor-pointer group hover:bg-[#c56206] transition duration-200'>
                            Book Now
                            <ArrowRight className='group-hover:translate-x-1 transition duration-200 ' size={20} />
                        </button>
                    </NavLink>

                    <NavLink>
                        <button className='border border-gray-300 px-4 py-3 rounded-md cursor-pointer hover:bg-black/20 transition duration-200'>Check Availability</button>
                    </NavLink>
                </div>


            </div>
        </div>
    )
}

export default Booksection