import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const demandingSpecilaist = () => {
    return (
        <>
            <div>
                <section className='relative w-full bg-demand-section-3 aos-init aos-animate'>

                    <div className='container max-w-7xl mx-auto py-24 grid grid-cols-2 grid-rows-1 md:px-6 xs:grid-cols-1 xs:grid-rows-1 xs:py-10 xs:px-2'>
                        <div
                            className="absolute top-0 left-0 w-[998px] h-[705px] bg-no-repeat xs:hidden"
                            style={{ backgroundImage: "url('/assets/images/newimg/exceptional-patern.png')" }}
                        ></div>
                        <div>
                            <div className='heading m-5 z-10 relative'>
                                <h6>Give Yourself The Experience Of</h6>
                                <h2 className='text-[34px] font-semibold'>"Working With The Most Demanded Specialists"
                                </h2>
                                <p className='text-[17px]'>Have you got a creative story in mind? Share it with the world because we truly believe every story is worth sharing, and to display your story in the finest form to the world, our ghostwriters are definitely worthy of your hire. To achieve the best, there goes a lot of hard work and dedication, which our company doesn’t lack. Our team works effortlessly to deliver you an exciting project. All the ideas and your story are transformed into a masterpiece by our writers who flaunt the work with beautiful words. </p>
                            </div>
                        </div>
                        <div>
                            <Image className='relative z-10 xs:z-0' src="/assets/images/newimg/exceptional-book.png" width={500} height={500} />
                        </div>
                    </div>
                    {/* <div className="bg-cover bg-no-repeat -mt-72 md:-mt-72 sm:-mt-48 p-0 h-96 relative z-10" style={{ backgroundImage: "url('/assets/images/newimg/exceptional-list.png')" }}> */}

                    <div className='exceptional-list md:mt-[0px] xs:mt-[10px] ' >
                        <div className="container-xl max-w-7xl justify-center mx-auto">
                            <h3 className='text-black text-[20px] font-semibold w-80 bg-yellow-400 py-1 px-4 text-center'>
                                Our Demanded Services
                            </h3>
                            <div className="flex w-[55%] md:w-[100%] xs:w-[100%] space-x-10 py-10 md:space-x-5 md:px-10 xs:space-x-5 xs:px-4">
                                <ul className='flex-auto inline-block text-white text-[18px] space-y-3 justify-center items-center xs:text-[16px]'>
                                    <li className='flex space-x-3'><Image src="/assets/images/newimg/color-check.png" width={40} height={40} alt="eBook Writing" />eBook Writing</li>
                                    <li className='flex space-x-3'><Image src="/assets/images/newimg/color-check.png" width={40} height={40} alt="Proofreading Services" />Proofreading Services</li>
                                    <li className='flex space-x-3'><Image src="/assets/images/newimg/color-check.png" width={40} height={40} alt="Book Editing" />Book Editing</li>
                                    <li className='flex space-x-3'><Image src="/assets/images/newimg/color-check.png" width={40} height={40} alt="Book Formatting" />Book Formatting</li>
                                    <li className='flex space-x-3'><Image src="/assets/images/newimg/color-check.png" width={40} height={40} alt="Video Trailer" />Video Trailer</li>
                                </ul>
                                <ul className='flex-auto inline-block text-white text-[18px] space-y-3 justify-center items-center xs:text-[16px]'>
                                    <li className='flex space-x-3'><Image src="/assets/images/newimg/color-check.png" width={40} height={40} alt="" />Audio Book</li>
                                    <li className='flex space-x-3'><Image src="/assets/images/newimg/color-check.png" width={40} height={40} alt="" />Book Cover Designing</li>
                                    <li className='flex space-x-3'><Image src="/assets/images/newimg/color-check.png" width={40} height={40} alt="" />Author's Website</li>
                                    <li className='flex space-x-3'><Image src="/assets/images/newimg/color-check.png" width={40} height={40} alt="" />Book Publishing</li>
                                    <li className='flex space-x-3'><Image src="/assets/images/newimg/color-check.png" width={40} height={40} alt="" />Book Marketing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>

    )
}

export default demandingSpecilaist
