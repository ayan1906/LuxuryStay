import { NavLink } from "react-router-dom"
import { ArrowRight } from 'lucide-react'

const Exploreservice = () => {

    const lists = [
        {title : "Michelin-starred resturant & rooftop bar"},
        {title : "Full-service spa with infinity pool"},
        {title : "24-hour butter & concierge service"},
        {title : "Private airport transfers in luxury vehicle"}

    ]
    return (
        <div className="bg-[#132039] flex flex-col md:flex-row min-h-screen items-center my-10 justify-around">
            <div className='flex flex-col gap-6 p-6 items-start md:items-baseline'>
                <h3 className='flex items-center tracking-wider gap-2 uppercase text-base font-bold text-[var(--text-secondary)] '>
                    <div className="w-12 h-[2px] bg-[var(--text-secondary)]"></div>
                    The Experience</h3>
                <h1 className='text-4xl text-[var(--navtext)]'>Unparalleled Luxury <br /> <span className="text-[var(--text-secondary)]">Awaits</span></h1>
                <p className='w-full lg:w-160 text-[var(--navtext)]'>From the moment you stop through our doors. you'll be enveloped in an atmosphere of refined elegence. Our world-class amenties exceptional dining. and personalized service ensure every moment of your stay is extraordinary.</p>
                <div className='flex flex-col gap-6 items-start '>
                    <ul className="flex flex-col gap-4 mx-4">
                        {lists.map(list=>(
                            <li className="list-disc text-[var(--text-secondary)]"><h3 className="text-[var(--navtext)]">{list.title}</h3></li>
                        ))}
                    </ul>
                <NavLink to={'/services'} className="text-[var(--text-secondary)] flex gap-1 items-center border rounded-sm border-[var(--text-secondary)] px-3 py-1 group">Explore Services <ArrowRight className="group-hover:translate-x-1.5 transition duration-200" size={18}/></NavLink>
                </div>
            </div>
            <div>
                <img className="w-100 h-100 md:h-120 md:w-120 mb-6 rounded-xl" src="https://images.unsplash.com/photo-1787059717832-a8f7d527d9a5?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            </div>
        </div>
    )
}

export default Exploreservice