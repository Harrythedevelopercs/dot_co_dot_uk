import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const HeaderContactForm = () => {
  return (
    <section className=" bg-white w-full font-secondary md:p-5 xs:px-4">
      <div className='container max-w-7xl bg-[#F2F2F2] rounded-3xl py-14 px-20 font-secondary md:py-10 md:px-8 xs:p-5 hover:shadow-lg hover:shadow-[#707070] md:items-center '>
        <div className="grid grid-cols-3 gap-4 xs:grid-cols-1  md:items-center">
          <div className="... xs:pt-5">
            <h3 className='font-semibold text-[40px] leading-[50px] xs:text-3xl mt-3 mb-5 md:text-[32px] md:leading-[40px]'>Unlock your literary success today</h3>
            <p className='text-[17px] font-semibold'>Get captivating ghostwriting & book <br/> writing services with up to 70% savings!</p>
          </div>
          <div className="col-span-2 ... border-l-2 border-solid border-[#989898] xs:border-l-0" >
            <div className='px-10 md:px-5 xs:px-0 '>
              <div className='grid grid-cols-3 gap-5 xs:flex-col md:grid md:grid-cols-1 xs:grid-cols-1 mb-8 xs:mb-5'>
                <input className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2 " placeholder='Full Name' />
                <input className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2" placeholder='Email Address' />
                <input className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2 " placeholder='Phone No' />
              </div>
              <div className='w-full'>
                <input className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2 w-full" placeholder='Enter a brief description about your book' />

              </div>

              <div className='w-full flex items-center font-secondary xs:flex-none xs:grid-cols-1 xs:grid '>
                <div className="basis-[70%] items-center justify-center xs:7/7" >
                  
                  <div className="flex-shrink-0 text-[12px] items-center mt-10 leading-6 ">
                    <div className="flex gap-3 items-start mb-3  md:space-x-0 md:gap-x-2 xs:grid xs:grid-cols-2  md:grid md:grid-cols-2  ">
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700" required />
                        <label for="remember" className="ml-2 text-[12px] xs:text-[14px] font-medium">GhostWriting</label>
                      </div>
                     
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700" required />
                        <label for="remember" className="ml-2 text-[12px] xs:text-[14px] font-medium">SEO Writing</label>
                      </div>
                      
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700" required />
                        <label for="remember" className="ml-2 text-[12px] xs:text-[14px] font-medium">Article Writing</label>
                      </div>
                      
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700" required />
                        <label for="remember" className="ml-2 text-[12px] xs:text-[14px] font-medium">Web Copy Writing</label>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start mb-6  xs:grid xs:grid-cols-2 md:grid md:grid-cols-2">
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700" required />
                        <label for="remember" className="ml-2 text-[12px] xs:text-[14px] font-medium">Press Release</label>
                      </div>
                     
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700" required />
                        <label for="remember" className="ml-2 text-[12px] xs:text-[14px] font-medium">Script Writing</label>
                      </div>
                      
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700" required />
                        <label for="remember" className="ml-2 text-[12px] xs:text-[14px] font-medium">Magazine Writing</label>
                      </div>
                    </div>

                  
                  </div>
                </div>
                <div className="basis-[30%] mt-10 flex items-stretch justify-end md:mt-28 xs:mt-0 xs:mb-10 xs:justify-center ">
                  <Link href='#' className='bg-black text-white px-8 py-1 md:px-4 hover:bg-[#00c0e4] xs:px-20 hover:text-[#1d1d1f]'>Submit Now</Link>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderContactForm;
