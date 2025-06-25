import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import TOPHEADER from '../component/topHeader'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";




const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  // Function to toggle submenu visibility
  const toggleSubMenu = () => {
    setShowSubMenu((prevShowSubMenu) => !prevShowSubMenu);
  };

  return (

    <>


      <TOPHEADER />
      <div className='w-full'>
        <header className="bg-white shadow-md">
          <div className="container mx-auto py-4 max-w-7xl">
            <div className="items-center justify-between flex grid-cols-2 grid-rows-1">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-indigo-500">
                  <img src="/assets/images/barnett-logo.webp" alt="Barnett ghostwriting logo" />
                </Link>
              </div>
              <nav className="flex md:hidden sm:hidden xs:hidden  space-x-4  text-[16px] text-[#000] font-semibold">
                <ul className="flex space-x-6 text-[#000]">
                  <li><Link href="/" className=" hover:text-indigo-500">Home</Link></li>
                  <li><Link href="/aboutus/" className="hover:text-indigo-500">About</Link></li>
                  <li className="group relative">
                    <Link href=" " className=" hover:text-indigo-500">Writing Services  </Link><FontAwesomeIcon icon={faCaretDown} />
                    <ul className="absolute space-y-4 hidden items-center mx-auto py-3 px-10 text-center justify-center w-[240px] bg-[#000] text-white z-10 border border-gray-200 group-hover:block hover:text-[#00c040]">
                      <li className=''><Link href="/affordable-ghostwriting-services/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Ghostwriting</Link></li>
                      <li className=''><Link href="/seo-content-writing-services/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> SEO Writing</Link></li>
                      <li className=''><Link href="/article-writing-services/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Article Writing</Link></li>
                      <li className=''><Link href="/web-copywriting-services/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Web Copy Writing</Link></li>
                      <li className=''><Link href="/press-release-writing-services/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Press Release</Link></li>
                      <li className=''><Link href="/script-writing-services"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Script Writing</Link></li>
                      <li className=''><Link href="/magazine-writing/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Magazine Writing</Link></li>
                    </ul>


                  </li>
                  <li><Link href="/genre/" className="hover:text-indigo-500">Genre</Link></li>
                  <li><Link href="/ebook-marketing-services/" className="hover:text-indigo-500">Marketing</Link></li>
                  <li><Link href="/book-publishing-services/" className="hover:text-indigo-500">Publication</Link></li>
                  <li><Link href="/hardcover-book-printing-services/" className="hover:text-indigo-500">Printing</Link></li>
                  <li><Link href="/book-cover-design-services/" className="hover:text-indigo-500">Cover Design</Link></li>
                  <li><Link href="/professional-book-editing-services/" className="hover:text-indigo-500">Editing</Link></li>
                  <li><Link href="/blog/" className="hover:text-indigo-500">Blog</Link></li>
                  <li><Link href="/contact-us/" className="hover:text-indigo-500">Contact Us</Link></li>
                </ul>
              </nav>
              <Link href=" " className="hidden">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 mt-1 bg-gray-600"></span>
                <span className="block w-6 h-0.5 mt-1 bg-gray-600"></span>
              </Link>
            </div>
          </div>
        </header>

      </div>
    </>
  )
}

export default Header
