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
      <div className='w-full bg-[#F3F3F3]'>
        <div className='container max-w-7xl mx-auto flex text-[#707070] p-2 cursor-pointer space-x-4 items-center justify-between xs:grid xs:grid-cols-1 xs:grid-rows-1 xs:text-center xs:mx-auto xs:space-y-1'>
          <div className='flex space-x-2 basis-8/12  items-center text-[12px] md:basis-6/12 xs:hidden sm:hidden'>
            <h3 className=' text-[16px]'>Follow Us:</h3>

            <FontAwesomeIcon icon={faFacebookF} className='rounded-[50%] border-[#707070] border-2 p-1 h-3 w-3 hover:border-[#00C0E4]'/>          
            <FontAwesomeIcon icon={faTwitter} className='rounded-[50%] border-[#707070] border-2 p-1 h-3 w-3 hover:border-[#00C0E4]' />          
            <FontAwesomeIcon icon={faInstagram} className='rounded-[50%] border-[#707070] border-2 p-1 h-3 w-3 hover:border-[#00C0E4]' /> 
            <FontAwesomeIcon icon={faLinkedinIn}  className='rounded-[50%] border-[#707070] border-2 p-1 h-3 w-3 hover:border-[#00C0E4]' /> 
          </div>
          <div className='flex justify-between'>
          <div className='flex space-x-2 '>
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#707070"}} />            
            <p className='text-[12px] sm:text-[8px] hover:text-[#00c0e4]'>info@bookwritingexpert.com</p>
          </div>
          <div className='flex space-x-2 pl-4'>
            <FontAwesomeIcon icon={faPhone} fade style={{color: "#707070"}} />
            <p className='text-[12px] sm:text-[8px] hover:text-[#00c0e4]'>+1 (855) 469-7509</p>
          </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default topHeader
