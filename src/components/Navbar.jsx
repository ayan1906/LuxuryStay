import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { User, UserRound, Menu } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../redux/features/authSlice';

const Navbar = () => {
  const navs = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Rooms', to: '/rooms' },
    { name: 'Services', to: '/services' },
    { name: 'Reviews', to: '/reviews' },
  ]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const username = user?.user_metadata?.firstname || user?.email?.split('@')[0][0]
  
  const handlelogout = () => {
    dispatch(signOut())
  }

  return (
    <nav className="bg-transparent fixed w-full z-20 top-0 start-0 text-amber-100">
      <div className="bg-gray-900/40 rounded-b-2xl max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl text-[var(--navtext)] font-semibold whitespace-nowrap">LuxuryStay</span>
        </NavLink>

        <div className="flex items-center md:order-2 gap-6 space-x-3 md:space-x-0 rtl:space-x-reverse relative">

          {user ? <NavLink onClick={handlelogout} className={'text-base text-[var(--navtext)] rounded-full md:me-0 hover:text-[var(--text-secondary)] transition duration-200'}>
            LogOut
          </NavLink>
            :
            <NavLink to={'/signup'} className={'text-base text-[var(--navtext)] rounded-full md:me-0 hover:text-[var(--text-secondary)] transition duration-200'}>
              Signup
            </NavLink>}

          <NavLink
            to={'/guestarea'}
            type="button"
            className="flex items-center gap-2 text-base text-[var(--navtext)] rounded-full md:me-0 hover:text-[var(--text-secondary)] transition duration-200"
            id="user-menu-button"

          >
            {user ? (
              <div>
                <span className='bg-[var(--text-secondary)]  rounded-full px-2 py-1 text-black font-bold'>{username}</span>
              </div>
            ) : (

              <div><UserRound /></div>
            )}
            Guest Area
          </NavLink>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 cursor-pointer rounded-lg md:hidden bg-black hover:bg-black/70 transition duration-200 hover:outline-none"
            aria-controls="navbar-user"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu />
            <span className="sr-only">Open main menu</span>

          </button>
        </div>

        <div className={`items-center justify-between ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 `} id="navbar-user">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  border-gray-100 bg-black/70 md:bg-transparent rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navs.map((nav, i) => (
              <div key={i}>
                <NavLink
                  to={nav.to}
                  className={({ isActive }) =>
                    `block py-3 px-3 rounded md:bg-transparent md:p-1 transition duration-200 ${isActive
                      ? 'font-semibold border-b-2 text-[var(--text-secondary)] border-[var(--text-secondary)]'
                      : 'text-[var(--navtext)] hover:text-[var(--text-secondary)] border-b-2 border-transparent'
                    }`
                  }
                  aria-current="page"
                >
                  {nav.name}
                </NavLink>
              </div>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;