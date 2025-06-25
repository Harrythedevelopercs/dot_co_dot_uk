import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const creativeGhostWriters = () => {
    return (
        <>
            <section className="py-[100px] font-secondary xs:py-16">
                <div className='container max-w-7xl md:max-w-2xl'>
                    <div className='flex  gap-5 xs:grid xs:grid-cols-1'>
                        <div className='basis-[35%] md:py-12 xs:hidden sm:hidden md:hidden'>
                            <Image width={1000} height={200} className=' hover:-translate-y-1 hover:scale-105' src='/assets/images/newimg/press-newspapers-magazines.png' />
                        </div>
                        <div className='basis-[65%] md:basis-[100%] sm:w-[90%] sm:mx-auto xs:w-[90%] xs:mx-auto md:mx-auto '>
                            <div className=' xs:py-5'>
                                <h6 className='text-xl font-semibold'>Get Your</h6>
                                <h1 className='  font-bold leading-[60px] text-[40px] md:text-4xl xs:text-4xl xs:w-[100%] '>
                                    Press releases covered by the right sites
                                </h1>
                                <p className='w-[90%] xs:w-[100%] xs:py-5'>
                                    Press Release gives you maximum acquaintance, which is done by selecting your target audience through media and the targeted niche.
                                </p>
                                <ul className="grid grid-cols-2 mt-5 gap-x-3 w-[60%] xs:grid-cols-1 md:w-[90%] xs:w-[100%] md:mb-5  text-[17px] font-semibold ">
                                    <li className='flex border-b-2 border-solid border-[#989898] py-3'><Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="h-4 w-4 mr-2 hover:invert-75" />EIN Presswire</li>
                                    <li className='flex border-b-2 border-solid border-[#989898] py-3'><Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="h-4 w-4 first-letter mr-2 hover:invert-75" />eReleases</li>
                                    <li className='flex border-b-2 border-solid border-[#989898] py-3'><Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="h-4 w-4 mr-2 hover:invert-75" />issueWire</li>
                                    <li className='flex border-b-2 border-solid border-[#989898] py-3'><Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="h-4 w-4 mr-2 hover:invert-75" />Linking news</li>
                                    <li className='flex border-b-2 border-solid border-[#989898] py-3'><Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="h-4 w-4 mr-2 hover:invert-75" />Newswire</li>
                                    <li className='flex border-b-2 border-solid border-[#989898] py-3'><Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="h-4 w-4 mr-2 hover:invert-75" />PR Distribution</li>
                                </ul>
                                <div className='w-[50%] md:w-[50%] gap-x-5 grid grid-cols-2 grid-rows-1 py-5 md:py-1 xs:w-[100%]'>
                                    <button className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu'>Get Started</button>
                                    <button className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4]'>Live Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default creativeGhostWriters
