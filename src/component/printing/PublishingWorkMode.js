import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const PublishingWorkMode = () => {
    return (
        <>
            <section className="our-process bg-cover bg-no-repeat w-full font-secondary">
                <div className="container max-w-7xl  py-24 text-[#1d1d1f]">
                    <div className="text-center mb-10 justify-center md:px-10 sm:px-5 xs:px-5">
                        <h6 className='text-[20px] font-semibold xs:text-base'>
                            Our comprehensive publishing services
                        </h6>
                        <h2 className='text-[40px] font-bold leading-10 mt-2 mb-2 sm:text-[35px] xs:text-[35px]'>
                            Are streamlined to help our clients bring their ideas onto paper
                        </h2>
                        <p className='w-[80%] mx-auto md:w-[90%] xs:w-[100%]'>
                            Our excellence stems from our unique and client-centric approach. We have catered to projects of various genres, formats, and platforms. Let us do the walking and talking on your behalf and see the exceptional results yourself.
                        </p>
                    </div>

                    <div className=' grid grid-cols-4 gap-4 md:grid-cols-2 xs:grid-cols-1 md:w-[95%] md:gap-5 mx-auto sm:w-[90%] xs:w-[90%]'>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 bg-[#f2f2f2] text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image width={200} height={200} alt='Low Upfront Cost'  src='/assets/images/newimg/low-upfront-costs.png' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                        Low Upfront Costs </h4>
                                        <p className=''>
                                            We provide best ghostwriting services without losing quality. There are no hidden fees, and the payment procedure is straightforward. So, without breaking the money, you may now publish your next best-selling book!
                                        </p>
                                   
                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 bg-[#f2f2f2] text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image width={200} height={200} alt='Complete Publishing Solution'  src='/assets/images/newimg/complete-publishing.png' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Complete Publishing Solution</h4>
                                        <p className=''>
                                        From publishing your book on the appropriate platform to creating strategies to generate online exposures for your compositions, we provide a complete package of marketing to ebook publishing services, where our professionals devote their time and expertise to ensure your book is getting the attention and acclaim it deserves.
                                        </p>
                                    
                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 bg-[#f2f2f2] text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image width={200} height={200} alt='Print On Demand'  src='/assets/images/newimg/print-demand.png' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Print On Demand</h4>
                                        <p className=''>
                                        Professional book authors and buyers rely on us to complete high-quality bulk book printing projects on time. We also distribute books without having to buy and store hundreds of books on your own.
                                        </p>
                                    
                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 bg-[#f2f2f2] text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image width={200} height={200} alt='Reach Millions of Readers'  src='/assets/images/newimg/reach-millioner.png' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Reach Millions of Readers</h4>
                                        <p className=''>
                                        We will help you reach millions of readers who enjoy the genre of your book through our book promotion services for authors, ensuring an increase in visibility and sales.
                                        </p>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default PublishingWorkMode
