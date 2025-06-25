import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretRight, } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
    <footer>
      <div className='w-full bg-footer-bg bg-cover bg-no-repeat text-white h-auto border-solid bg-[#f0f0f0] pt-10 m-0 '>
        <div className="container max-w-7xl justify-center mx-auto text-[13px]">
          <div className="grid grid-cols-4 grid-rows-1 md:grid-cols-2 md:px-10 xs:grid-cols-2 xs:p-3 xs:space-x-3">
            <div className=" xs:pl-3">
              <Link href="#" className="logo">
                <img src="/assets/images/newimg/logo-gr.png" alt="" />
              </Link>
              <p>
                498 Brush St Detroit, MI 48226, USA
              </p>
              <ul className='py-2 space-y-2'>
                <li>
                  <Link href="tel:+1 (855) 469-7509 ">+1 (855) 469-7509 </Link>
                </li>
                <li>
                  <Link href="tel:+1 (734) 409-7256">+1 (734) 409-7256</Link>
                </li>
                <li>
                  <Link href="mailto:support@barnettghostwriting.com">support@barnettghostwriting.com</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className='text-[#5ccd80] text-[18px] font-medium'>
                GhostWriting
              </h4>
              <ul className='py-2 space-y-2'>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/">Home</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/about-us">About</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/blog">Blog</Link></li>
                  <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className='text-[#5ccd80] text-[18px] font-medium'>
                Services
              </h4>
              <ul className='py-2 space-y-2'>
              <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/affordable-ghostwriting-services">Ghostwriting</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/genre">Genre</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/marketing-services">Marketing</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/book-publishing-services">Publication</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/hardcover-book-printing-services/">Printing</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/book-cover-design-services">Cover Design</Link></li>
                  <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/professional-book-editing-services">Editing</Link></li>

              </ul>
            </div>
            <div className="">
              <h4 className='text-[#5ccd80] text-[18px] font-medium'>
                Marketing
              </h4>
              <ul className='py-2 space-y-2'>
              <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/marketing-services">Video Trailer</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/marketing-services">Audio Book</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/author">Author Website</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/book-publishing-services">Book Publishing</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/">Social Media Marketing</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/">Book Translation</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <Link href="/marketing-services">Marketing Consultation</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=' w-full bg-[#63e28b] text-black mt-10  '>
          <div className='container max-w-7xl mx-auto grid grid-cols-3 grid-rows-1 p-1 xs:grid-cols-1 xs:px-10 xs:items-center'>
            <div>
              <p>
                © 2023 Barnett Ghostwriting - All Rights Reserved
              </p>
            </div>
            <div className='flex space-x-5 items-center text-[12px] justify-center text-center'>

              <FontAwesomeIcon icon={faFacebookF} className='rounded-[50%] border-2 p-1' />
              <FontAwesomeIcon icon={faTwitter} className='rounded-[50%] border-2 p-1' />
              <FontAwesomeIcon icon={faInstagram} className='rounded-[50%] border-2 p-1' />
              <FontAwesomeIcon icon={faLinkedinIn} className='rounded-[50%] border-2 p-1' />
            </div>
            <div>
              <ul className='flex space-x-5'>
                <li><Link href="#">Sitemap</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-and-condition">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
      
    </>

  )
}

export default Footer
