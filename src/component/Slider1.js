
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from 'react';

const Slider1 = () => {


    return (
        <>
            <section className='w-full bg-white text-[#1d1d1f] py-4'>
                <div className='max-w-7xl mx-auto text-center items-center justify-center'>
                    <h1 className='font-bold text-6xl mt-12 leading-[60px] xs:text-4xl font-secondary'>
                        Your Source for Superior<br></br> Book Writing!
                    </h1>
                    <p className='w-[40%] mx-auto mt-3 md:w-[80%]  xs:w-[80%]'>
                        Which book writing service is your need? You will find everything you are looking for, from professional writers to top marketers
                    </p>
                    <div className='w-[30%] md:w-[60%] sm:w-[90%] xs:w-[80%] mx-auto grid grid-cols-2 grid-rows-1 gap-6 xs:gap-3 py-5 relative'>
                        <button className='bg-[#00C0E4] py-1 text-white hover:bg-white hover:border-solid hover:border-[3px] hover:text-[#1d1d1f] hover:transition-all'>Get started</button>
                        <button className='bg-[#1d1d1f] py-1 text-white border-[#1d1d1f] border-[3px] hover:bg-[#00C0E4] hover:text-[#1d1d1f] hover:border-[2px] hover:border-[#00C0E4]'>Live Chat</button>
                    </div>
                    <div className='mx-auto w-[70%] justify-center items-center text-center hover:-translate-y-1 hover:scale-105 duration-300'>
                        <img src='/assets/images/newimg/open-book-with-hard-cover-isolated-white.png' />
                    </div>

                </div>

            </section>
        </>
    )
}

export default Slider1
