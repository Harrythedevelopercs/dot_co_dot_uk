import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretRight, } from "@fortawesome/free-solid-svg-icons";

const marketBook = () => {
    return (

        <>
            <section className="bg-process-bg22 bg-contain bg-no-repeat relative text-[#05193c]">
                <div className="container mx-auto justify-center items-center py-10">
                    <div className='max-w-7xl mx-auto grid grid-cols-2 grid-rows-1 justify-center items-center xs:grid-cols-1 xs:gap-2'>
                        <div className="col-md-6 pl-5">
                            <div className="heading">
                                <h6 className='text-[20px] font-semibold  mb-3'>
                                    Market Your Book
                                </h6>
                                <h2 className='text-[34px] font-semibold leading-tight xs:leading-tight'>
                                    In The Best Possible Way!
                                </h2>
                                <p className='text-[17px] font-normal'>
                                    Keep yourself up to date with news of our brand in popular outlets and channels, Barnett ghostwriting is frequently featured due to the exceptional work&nbsp;of&nbsp;our&nbsp;writers.
                                </p>
                            </div>
                            <ul className='grid grid-cols-2 grid-rows-1 gap-4 p-2 xs:grid-cols-1 xs:p-0 xs:py-10 '>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>
                                    <img src="/assets/images/newimg/black-check.png" alt="" />Video Trailer</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Audio Book</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Book Cover Designing</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Author Website</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Book Publishing</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Social Media Marketing</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Book Translation</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Marketing Consultation</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Amazon Marketing</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Barnes &amp; Noble Nook Edition</li>
                            </ul>
                            <div className="display-block mt-6 cursor-pointer">
                                <Link href=" " data-fancybox="" data-src="#popupform" className="bg-[#62e389] border-[#62e389] text-[#07163f] hover:bg-[#62e389] hover:border-[#62e389] rounded hover:text-white mr-3 btn btn-green">
                                    Get Started <FontAwesomeIcon icon={faCaretRight} />
                                </Link>
                                <Link href=" " className="btn btn-black-border hover:bg-[#0a0c37] hover:text-white rounded-lg">
                                    Live Chat
                                </Link>
                            </div>
                        </div>
                        <div className="z-10 xs:z-0 xs:py-5">
                            <img src="/assets/images/newimg/editing-img.webp" className="float-left" alt="ghostwriting agency" />
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default marketBook
