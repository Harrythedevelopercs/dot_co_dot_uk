import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
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
      <div className='w-full text-[#707070] h-auto border-solid bg-[#f3f3f3] pt-10 m-0 '>
        <div className="container max-w-7xl justify-center mx-auto text-[13px]">
          <div className="grid grid-cols-4 grid-rows-1 md:grid-cols-2 md:px-10 xs:grid-cols-2 xs:p-3 xs:gap-10">
            <div className="space-y-1 items-center">
              <Link href="#" className="logo py-10">
                <Image width={250} height={200} alt='footer logo' src="/assets/images/education-logo.png" />
              </Link>
              <ul className='pt-5 space-y-2'>
                <li>
                  
                    498 Brush St Detroit, MI 48226, USA
                  
                </li>
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
              <h4 className='text-[#707070] text-[20px] font-bold'>
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
              <h4 className='text-[#707070] text-[20px] font-bold'>
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
              <h4 className='text-[#707070] text-[20px] font-bold'>
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

          {/* on mobile */}
          {/* <div className='lg:hidden xl:hidden 2xl:hidden'>
            <div className="xs:pl-3 items-center justify-center mx-auto w-[70%]">
              <Link href="#" className="logo py-10">
              <Image width={200} height={150} alt='footer logo' src="/assets/images/education-logo.png" />
              </Link>

              <ul className='py-2 space-y-2'>
                <li>
                  <p>
                    498 Brush St Detroit, MI 48226, USA
                  </p>
                </li>
                <li >
                  <Link href="tel:+1 (855) 469-7509 ">+1 (855) 469-7509</Link>
                </li>
                <li>
                  <Link href="tel:+1 (734) 409-7256">+1 (734) 409-7256</Link>
                </li>
                <li>
                  <Link href="mailto:support@barnettghostwriting.com">support@barnettghostwriting.com</Link>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 grid-rows-1 md:grid-cols-3 md:px-10 xs:p-3 xs:gap-x-5">
              <div className="">
                <h4 className='text-[#707070] text-[20px] font-bold'>
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
                <h4 className='text-[#707070] text-[20px] font-bold'>
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
                <h4 className='text-[#707070] text-[20px] font-bold'>
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
          </div> */}






        </div>
        <div className=' w-full bg-[#1d1d1f] text-white mt-10 py-1 '>
          <div className='container max-w-7xl mx-auto grid grid-cols-3 grid-rows-1 p-1 xs:grid-cols-1 xs:px-5 xs:text-center xs:items-center'>
            <div className=''>
              <p>
                © 2023 Education Logo - All Rights Reserved
              </p>
            </div>
            <div className='flex space-x-2 items-center text-[12px] justify-center text-center xs:py-2'>
              <FontAwesomeIcon icon={faFacebookF} className='rounded-[50%] border-[#707070] border-2 p-1 h-3 w-3 hover:border-[#00C0E4]' />
              <FontAwesomeIcon icon={faTwitter} className='rounded-[50%] border-[#707070] border-2 p-1 h-3 w-3 hover:border-[#00C0E4]' />
              <FontAwesomeIcon icon={faInstagram} className='rounded-[50%] border-[#707070] border-2 p-1 h-3 w-3 hover:border-[#00C0E4]' />
              <FontAwesomeIcon icon={faLinkedinIn} className='rounded-[50%] border-[#707070] border-2 p-1 h-3 w-3 hover:border-[#00C0E4]' />
            </div>
            <div>
              <ul className='flex space-x-5 xs:hidden'>
                <li><Link href="#">Sitemap</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-and-condition">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Footer
