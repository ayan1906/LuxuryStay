import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { User, UserRound, Menu } from 'lucide-react'

const Navbar = () => {
  const navs = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/' },
    { name: 'Rooms', to: '/' },
    { name: 'Services', to: '/' },
    { name: 'Reviews', to: '/' },
  ]
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed w-full z-20 top-0 start-0  text-amber-100 mx-">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

       
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl text-[var(--navtext)] font-semibold whitespace-nowrap">LuxuryStay</span>
        </NavLink>

        {/* Right side icons & dropdown */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">

          <NavLink
          to={'/'}
            type="button"
            className="flex items-center gap-2 text-base text-[var(--navtext)] rounded-full md:me-0 hover:text-[var(--text-secondary)] transition duration-200"
            id="user-menu-button"
            aria-expanded={isDropdownOpen}
          >
            <UserRound />
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


        <div className={`items-center justify-between ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  border-gray-100 bg-black/70 md:bg-transparent rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navs.map((nav, i) => (
              <div key={i}>
                <NavLink to={nav.to} className="block py-3 px-3 text-[var(--navtext)] rounded md:bg-transparent border-b md:border-none md:p-0 hover:text-[var(--text-secondary)] transition duration-200" aria-current="page">{nav.name}</NavLink>
              </div>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;