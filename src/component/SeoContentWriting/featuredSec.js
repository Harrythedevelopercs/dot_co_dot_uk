// import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const GhostwritingBanner = (props) => {



  return (
    <>
      <section className='w-full bg-white text-[#1d1d1f] py-4 font-secondary xs:py-0'>
        <div className='relative'>
          <div
            className="absolute -z-0 md:hidden sm:hidden xs:hidden top-0 right-0 w-[1000px] h-[705px] bg-no-repeat md:bg-right bg-cover"
            style={{ backgroundImage: "url('/assets/images/newimg/seo-featured-banner1.png')" }}
          ></div>
        </div>
        <div className='mx-auto text-left justify-center py-20  md:py-10 xs:py-10 xs:bg-leftr xs:bg-cover' >
          <div className='max-w-7xl grid grid-cols-1 mx-auto md:w-[90%]' >
            <div className='w-[85%]  pt-8 pb-20 xs:py-0 xs:px-5 xs:w-[100%] md:w-[100%] md:py-0'>
              <h1 className='w-[75%] md:w-[100%] font-bold leading-[70px] text-[60px] md:text-[50px] md:leading-[50px] mt-12 xs:text-4xl xs:w-[100%] '>
                {props.title}
              </h1>
              <p className='w-[60%] md:w-[100%] mt-3 xs:w-[90%]'>
                {props.dec}
              </p>
              <div className='w-[30%] md:w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-4 xs:w-[100%]'>
                  <button className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu'>Get Started</button>
                  <button className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4]'>Live Chat</button>
                </div>
            </div>
            <div className='mx-auto w-[100%] xl:hidden 2xl:hidden lg:hidden justify-center items-center text-center pb-20 xs:w-[90%] xs:pb-10 ' >
              <Image src={'/assets/images/newimg/seo-featured-banner1.png'} width={800} height={600} alt='seo-featured-banner'/>
            </div>
            <div className='mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-20 xs:w-[90%] xs:pb-10 ' >
             
            </div>
          </div>
        </div>




      </section>




    </>
  )
}

export default GhostwritingBanner
