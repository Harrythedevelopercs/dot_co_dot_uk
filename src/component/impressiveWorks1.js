import React from 'react'
import LpSlider1 from './Lpslider1'
import Link from 'next/link';




const impressiveWorks = () => {


  return (
    <>
      <div>
        <section className='w-full bg-[#f2f2f2]'>
          <div className='container max-w-7xl mx-auto'>
            <div className='py-20 xs:py-10'>
              <div className="text-center">
                <h6 className='text-[20px] font-semibold mb-3 sm:text-base xs:text-base xs:mb-1'>
                  Our impressive work
                </h6>
                <h2 className='mx-auto w-[60%] text-[40px] leading-tight font-bold text-[#1d1d1f] md:text-[30px] xs:text-[30px] pb-3 xs:w-[100%]'>
                From rough draft to successful publishing we have made it possible
                </h2>
                <p className='justify-center w-[55%] md:w-[90%] xs:w-[100%] mx-auto'>
                  We make it possible for you to make your book the next big read for the readers. Bring us your rough drafts, and let our team work magnificently on their execution.
                </p>
              </div>
              <LpSlider1 />
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default impressiveWorks
