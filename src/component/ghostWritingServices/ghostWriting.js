import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, } from "@fortawesome/free-solid-svg-icons";


const ghostWriting = () => {
  return (
    <>
      <section className="immaculate achieve bg-cover mb-8 pb-20 bg-[#f2f2f2]">
        <div className="container max-w-7xl pt-16 px-5 font-secondary">
          <div className='grid grid-cols-2 items-center xs:grid-cols-1'>
            <div className=''>
              <div className="text-left mb-0">
                <h6 className='text-[20px] font-semibold'>Our Comprehensive</h6>
                <h2 className='text-[40px] font-bold py-2 md:leading-tight xs:leading-tight'>Ghostwriting services</h2>
                <p className=''>
                  We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties.
                </p>
                <br></br>
                <p className=''>
                  Our process is simple and aims to deliver flawless results for every project.
                </p>
              </div>
            </div>


            <div className=''>
              <img src='/assets/images/newimg/ghostwriting_book.png' className='mx-auto xs:py-10' />
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-x-8 w-[70%] xs:grid-cols-1 md:w-[100%] xs:w-[100%] md:mb-10 text-[18px] font-semibold">
            <li className='border-b-2 border-solid border-[#afafaf] py-4 xs:mr-0 md:mr-5'><img src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2" />Writing Genuine Content based on your idea</li>
            <li className='border-b-2 border-solid border-[#afafaf] py-4 xs:mr-0 md:mr-5'><img src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2" />Critical Review, Editing, and Proofreading</li>
            <li className='border-b-2 border-solid border-[#afafaf] py-4 xs:mr-0 md:mr-5'><img src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2" />Extensive Formatting, Typesetting, &amp; Designing</li>
            <li className='border-b-2 border-solid border-[#afafaf] py-4 xs:mr-0 md:mr-5'><img src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2" />Publishing, Branding, Marketing, and Promotions</li>
            <li className='border-b-2 border-solid border-[#afafaf] py-4 xs:mr-0 md:mr-5'><img src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2" />Critical Review and Analysis</li>
            <li className='border-b-2 border-solid border-[#afafaf] py-4 xs:mr-0 md:mr-5'><img src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2" />Book Coaching</li>
            <li className='border-b-2 border-solid border-[#afafaf] py-4 xs:mr-0 md:mr-5'><img src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2" />Copy Editing</li>
            <li className='border-b-2 border-solid border-[#afafaf] py-4 xs:mr-0 md:mr-5'><img src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2" />Developmental Editing</li>
          </ul>
          <div className='mx-auto py-3'>
            <div className='w-[30%] grid grid-cols-2 grid-rows-1 gap-x-6 py-5 relative md:w-[70%] xs:w-[100%]'>
              <button className='bg-[#00C0E4] py-1 text-white hover:bg-[#1d1d1f] border-[#00C0E4] border-[3px] hover:border-solid hover:border-[3px] hover:border-[#1d1d1f] hover:text-[#fff] '>Get Started</button>
              <button className='bg-transparent py-1 text-[#1d1d1f] border-solid border-[#1d1d1f] border-[3px] hover:bg-[#1d1d1f] hover:text-[#fff] hover:border-[3px] hover:border-[#1d1d1f]'>Live Chat</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ghostWriting
