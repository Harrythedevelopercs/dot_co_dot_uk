import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const bookWriting = () => {
    return (
        <>
            <section className=" py-20 xs:py-10 text-[#1d1d1f] font-secondary">
            <div className='relative'>
          <div
            className="absolute xs:hidden md:top-[500px] top-0 right-0 xl:right-0 2xl:right-56 w-[800px] md:w-[750px] h-[630px] bg-no-repeat md:bg-center bg-right"
            style={{ backgroundImage: "url('/assets/images/newimg/industry-section.png')" }}
          ></div>
        </div>
                <div className="justify-center items-center z-20 relative py-20 md:pt-5 md:pb-[500px] xs:py-5 md:z-20 md:relative" >
                    <div className='max-w-7xl container mx-auto flex items-center justify-center xs:grid-cols-1 md:py-0 md:px-5 xs:px-4 xs:w-[100%]'>
                        <div className='basis-[50%] md:basis-[100%] sm:basis-[100%] xs:basis-[100%]'>
                        <div className="">
                            <h6 className='text-[20px] font-semibold mb-3'>
                                Are you in pursuit of
                            </h6>
                            <h2 className='text-[40px] font-semibold xs:font-semibold xs:text-[40px] capitalize leading-tight mb-3'>
                                Getting Your Book Written By<br></br>
                                the Top Industry Experts?
                            </h2>
                        </div>
                        <p className=' text-[16px] text-[#000] mb-2 leading-6	'>
                            Your million-dollar story is worth bringing alive. And for that, our ghostwriters are dedicated to the execution of your book and work tirelessly to mold the story into the form of a picture-perfect book. We guarantee that the services you take from us are truly unmatchable, and you are sure to meet your desired results.
                        </p>
                        
                        <p className=' text-[16px] text-[#000] mb-4 leading-6	'>
                            To give our customers a high-end result, we have hired professional experts with years of experience that are the most demanded. Therefore, don’t worry while choosing Barnett Ghostwriting for your service because working with us means getting the best.
                        </p>
                        <ul className='space-y-3'>
                            <li className='flex space-x-4 '>
                                <Image src="/assets/images/newimg/color-check1.png" alt="color-check" width={25} height={25} className='h-5 w-5' />
                                <h5 className='font-medium text-[18px] xs:text-[14px]'>
                                    Being published on all online platforms.
                                </h5>
                            </li>

                            <li className='flex space-x-4'>
                                <Image src="/assets/images/newimg/color-check1.png" alt="color-check" width={25} height={25} className='h-5 w-5'/>
                                <h5  className='font-medium text-[18px] xs:text-[14px]'>An eye-catching cover design.</h5>
                            </li>
                            <li className='flex space-x-4'>
                                <Image src="/assets/images/newimg/color-check1.png" alt="color-check" width={25} height={25}  className='h-5 w-5'/>
                                <h5  className='font-medium text-[18px] xs:text-[14px]'>Fast and affordable self-publishing.</h5>
                            </li>
                            <li className='flex space-x-4'>
                                <Image src="/assets/images/newimg/color-check1.png" alt="color-check" width={25} height={25} className='h-5 w-5'/>
                                <h5  className='font-medium text-[18px] xs:text-[14px]'>Additions, revisions, and re-editions!</h5>
                            </li>
                        </ul>
                    </div>
                    <div className="basis-[50%] xs:hidden md:hidden">
                        {/* <Image width={1000} height={500} alt='' src="/assets/images/newimg/industry-section.png" className=" top-10 right-0 xs:relative xs:float-none xs:w-[100%] xs:left-0"  /> */}
                    </div>
                    </div>
                    

                </div>
            </section>
        </>

    )
}

export default bookWriting
