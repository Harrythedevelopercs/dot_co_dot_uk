import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

const topHeader = () => {
  return (
    <>
      <div className='w-full bg-[#2b2460]'>
        <div className='container max-w-7xl mx-auto flex text-white p-2 cursor-pointer space-x-4 items-center justify-between xs:grid xs:grid-cols-1 xs:grid-rows-1 xs:text-center xs:mx-auto xs:space-y-1'>
          <div className='flex space-x-2 basis-8/12 items-center text-[12px] xs:text-center xs:mx-auto '>
            <h3 className=' text-[16px]'>Follow Us:</h3>

            <FontAwesomeIcon icon={faFacebookF} className='rounded-[50%] border-2 p-1 h-3 w-3'/>          
            <FontAwesomeIcon icon={faTwitter} className='rounded-[50%] border-2 p-1 h-3 w-3'/>          
            <FontAwesomeIcon icon={faInstagram} className='rounded-[50%] border-2 p-1 h-3 w-3'/> 
            <FontAwesomeIcon icon={faLinkedinIn}  className='rounded-[50%] border-2 p-1 h-3 w-3'/>         
          </div>
          <div className='flex space-x-2 xs:justify-center xs:text-center xs:mx-auto xs:px-auto '>
            <FontAwesomeIcon icon={faEnvelope} beat style={{color: "#ffffff"}} />            
            <p className='text-[12px] sm:text-[8px] xs:text-[8px]'>support@barnettghostwriting.com</p>
          </div>
          <div className='flex space-x-2 text-center justify-center xs:text-center xs:mx-auto'>
            <FontAwesomeIcon icon={faPhone} fade style={{color: "#ffffff"}} />
            <p className='text-[12px] sm:text-[8px] xs:text-[8px]'>+1 (855) 469-7509</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default topHeader
