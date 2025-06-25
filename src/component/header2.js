// components/Header.js
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full h-16 shadow-lg">
      <div className="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
        {/* Logo Here */}
       <Link className="text-yellow-400 text-xl font-bold italic" href="/">
        <img src="/assets/images/barnett-logo.webp" alt="Barnett ghostwriting logo" />
        </Link>

        {/* Menu links here */}
        <ul id="menu" className={`${ menuOpen? 'block fixed top-0 w-full h-full right-0 px-10 py-16 bg-gray-800 z-50' : 'hidden'
          } md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6`}>
          <li className="md:hidden xs:z-90 fixed top-4 right-6">
           <Link href="javascript:void(0)" className="text-right text-white text-4xl" onClick={toggleMenu}>
              &times;
            </Link>
          </li>

          <li>
           <Link className="text-white opacity-70 hover:opacity-100 duration-300" href="#">
              Home
            </Link>
          </li>
          <li>
           <Link className="text-white opacity-70 hover:opacity-100 duration-300" href="#">
              Something
            </Link>
          </li>
          <li>
           <Link className="text-white opacity-70 hover:opacity-100 duration-300" href="#">
              Forums
            </Link>
          </li>

          <li>
           <Link className="text-white opacity-70 hover:opacity-100 duration-300" href="#">
              About
            </Link>
          </li>
          <li>
           <Link className="text-white opacity-70 hover:opacity-100 duration-300" href="#">
              Contact
            </Link>
          </li>
        </ul>

        {/* This is used to open the menu on mobile devices */}
        <div className="flex items-center md:hidden">
          <button
            className="text-black text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
