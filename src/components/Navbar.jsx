/* eslint-disable no-unused-vars */
// HAH OM SAI RAM OM BHASKARAAYA NAMAHA OM NAMAHA SIVAAYA 

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-tertiary py-4 shadow-lg bg-tertiary border-none">
      <div className="container  px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-azure font-bold text-[28px] font-montserrat">
          Quickpik
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-azure focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-tertiary text-center md:flex md:static md:w-auto md:bg-transparent md:space-x-6 transition-all duration-300 ease-in-out`}
        >
          <li className="py-2 md:py-0">
            <a
              href="#home"
              className="text-azure text-[20px] font-semibold font-montserrat hover:text-saffron"
            >
              Home
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a
              href="#products"
              className="text-azure text-[20px] font-semibold font-montserrat hover:text-saffron"
            >
              Products
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a
              href="#about"
              className="text-azure text-[20px] font-semibold font-montserrat hover:text-saffron"
            >
              About
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a
              href="#contact"
              className="text-azure text-[20px] font-semibold font-montserrat hover:text-saffron"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
