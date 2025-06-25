import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const publishing = () => {
    return (
        <>
            <section className="py-[80px] bg-[#f2f2f2] md:py-20 md:px-5 sm:py-20 sm:px-5 xs:py-20 xs:px-5">
                <div className='container max-w-7xl'>
                    <div className='flex gap-5 xs:grid xs:grid-cols-1 items-center'>
                    <div className='basis-[50%] md:basis-[60%]'>
                            <div className=' xs:py-5'>
                                <h6 className='text-[20px] font-semibold sm:text-base xs:text-base'>Publishing</h6>
                                <h1 className='py-3 font-semibold leading-[45px] text-[40px] md:text-[35px] md:leading-[40px]   sm:text-4xl sm:w-[100%]  xs:text-3xl xs:w-[100%] '>
                                We offer you a chance to expand your books reputation on a global Level
                                </h1>
                                <p className='xs:w-[100%]'>
                                We are a premium ghostwriting services company founded to provide excellent writing services. We provide high-quality content copies and guarantee outstanding results and a massive online reach. At Barnett Ghostwriting, we take a customer-centric approach to assisting you in establishing yourself as a professional writer!
                                </p>
                            </div>
                        </div>
                        <div className='basis-[60%] md:basis-[40%]'>
                           <Image width={500} height={500} alt='Tablist Images' className='mx-auto hover:-translate-y-1 hover:scale-110' src='/assets/images/newimg/graduation-cap-earth-globe.png' />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>

    )
}

export default publishing
