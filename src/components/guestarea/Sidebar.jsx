import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Home, CalendarCheck, User, LogOut } from 'lucide-react'
import { signOut } from '../../redux/features/authSlice'

const Sidebar = () => {
const dispatch = useDispatch()
  const sidebarLinks = [
    { name: 'Home', to: '/guestarea/guesthome', icon: Home },
    { name: 'Reservations', to: '/guestarea/guestreserv', icon: CalendarCheck },
    { name: 'Profile', to: '/guestarea/guestprofile', icon: User },
  ]
const handlesignout = () => {
  dispatch(signOut())
}

  return (
    <aside className="w-full  md:w-64 md:min-h-screen bg-white dark:bg-[#0A1528] border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between px-4 py-4 md:py-8">
      <nav className="flex mt-14 md:flex-col justify-around md:justify-start gap-2">
        {sidebarLinks.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${isActive
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-800 hover:text-amber-600'
                }`
              }
            >
              <Icon size={18} className="shrink-0" />
              <span>{item.name}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="hidden md:block pt-6 border-t border-gray-200 dark:border-gray-800">
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 transition cursor-pointer"
        onClick={handlesignout}
        >
          <LogOut size={18} className="shrink-0" />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar