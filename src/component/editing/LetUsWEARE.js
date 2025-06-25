import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import TABII from '../marketing/TabNavigation'

const demandingSpecilaist = () => {
    return (
        <>
            <section className="py-[80px] font-secondary">
                <div className='container max-w-7xl'>
                    <div className='flex gap-5 md:grid xs:grid xs:grid-cols-1 md:px-10'>
                        <div className='basis-[40%] items-center md:hidden sm:hidden xs:hidden'>
                            <Image width={600} height={300} alt='Low Upfront Cost'  className=' hover:-translate-y-1 hover:scale-110' src='/assets/images/newimg/OJK93M1321.png' />
                        </div>
                        <div className='basis-[60%] xs:basis-[100%] '>
                            <div className='w-[90%] md:w-[100%]  xs:py-5 xs:px-5 xs:w-[100%]'>
                                <h6 className='text-xl font-semibold'>Bring quality to your book</h6>
                                <h1 className='pt-5 font-semibold leading-[45px] text-5xl xs:text-4xl xs:w-[100%] '>
                                Our immaculate editing and proofreading services
                                </h1>
                                <p className='xs:w-[100%]'>
                                Our editors will ensure that your work is improved, and your story structure is turned into an immaculate work of art. It is the work of our editors that makes your books stand out, the way our editors go over your books is that they first identify whether the plot points in your books make sense, or they don't. Our services consist of:
                                </p>
                                <ul className="grid grid-cols-2 xs:grid-cols-1 md:w-[100%] xs:w-[100%] md:mb-10">
                                    <li className='flex gap-4 border-b-2 border-solid border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block h-5 w-5 hover:invert-75" />
                                        <p>Substantial editing - to improve structure</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block h-5 w-5 hover:invert-75" />
                                       <p>Error Free Text - Grammar & Punctuation</p> 
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block h-5 w-5 hover:invert-75" />
                                       <p>writing critical reviews - filling in the loopholes</p> 
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block h-5 w-5 hover:invert-75" />
                                        <p>Editing - Rewriting or Paraphrasing</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block h-5 w-5 hover:invert-75" />
                                        <p>Manuscript formatting - well organized writing</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image width={25} height={25} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block h-5 w-5 hover:invert-75" />
                                        <p>Publishing - comprehensive publishing services</p>
                                    </li>
                                </ul>
                                <div className='w-[60%] grid  grid-cols-2 grid-rows-1 gap-x-5 py-5 sm:w-[100%] xs:w-[100%]'>
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

export default demandingSpecilaist
