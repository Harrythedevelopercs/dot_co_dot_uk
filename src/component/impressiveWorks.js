import React from 'react'
import Image from 'next/image'
import LpSlider from '../component/Lpslider'
import Link from 'next/link';




const impressiveWorks = () => {


  return (
    <>
      <div>
        <section className='w-full bg-[#f2f2f2]'>
          <div className='container max-w-7xl mx-auto'>
            <div className='py-20 '>
              <div className="heading text-center">
                <h6>
                  Our Impressive Work
                </h6>
                <h2 className='text-[34px] font-semibold text-[#222e41] md:text-[30px] xs:text-[24px]'>
                  From Rough Draft to Successful Publishing<br></br>
                  We Have Made it Possible
                </h2>
                <p className='justify-center w-[50%] md:w-[90%] xs:w-[100%] mx-auto'>
                  We make it possible for you to make your book the next big read for the readers. Bring us your rough drafts, and let our team work magnificently on their execution.
                </p>
              </div>
              <LpSlider />
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default impressiveWorks
