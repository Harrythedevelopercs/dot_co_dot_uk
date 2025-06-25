import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const bookWriting = () => {
    return (
        <>
            <section className="relative pt-20 pb-20 text-[#05193c]">
            <div className="absolute top-0 right-0 w-[910px] h-[705px] bg-no-repeat"
                 style={{ backgroundImage: "url('/assets/images/newimg/pattern-2.png')" }}>
            </div>
                <div className="container mx-auto justify-center items-center relative z-10 py-20 xs:py-5">
                    <div className='max-w-7xl mx-auto grid grid-cols-2 grid-rows-1 items-center justify-center right-80 xs:grid-cols-1 ]'>
                        <div>
                        <div className="heading">
                            <h6>
                                Are you in Pursuit of
                            </h6>
                            <h2 className='text-[34px] xs:text-[30px] font-bold capitalize leading-10'>
                                Getting Your Book Written By<br></br>
                                the Top Industry Experts?
                            </h2>
                        </div>
                        <p className='text-[16px] text-[#05193c] mb-2 leading-6	'>
                            Your million-dollar story is worth bringing alive. And for that, our ghostwriters are dedicated to the execution of your book and work tirelessly to mold the story into the form of a picture-perfect book. We guarantee that the services you take from us are truly unmatchable, and you are sure to meet your desired results.
                        </p>
                        
                        <p className='text-[16px] text-[#05193c] mb-4 leading-6	'>
                            To give our customers a high-end result, we have hired professional experts with years of experience that are the most demanded. Therefore, don’t worry while choosing Barnett Ghostwriting for your service because working with us means getting the best.
                        </p>
                        <ul className=''>
                            <li className='flex xs:py-5 xs:justify-between '>
                                <img src="/assets/images/newimg/black-check.png" alt="" />Being published on all online platforms, such as Kindle.
                            </li>
                            <li className='flex'>
                                <img src="/assets/images/newimg/black-check.png" alt="" />An eye-catching cover design.
                            </li>
                            <li className='flex'>
                                <img src="/assets/images/newimg/black-check.png" alt="" />Fast and affordable self-publishing.
                            </li>
                            <li className='flex'>
                                <img src="/assets/images/newimg/black-check.png" alt="" />Additions, revisions, and re-editions!
                            </li>
                        </ul>
                    </div>
                    <div className="z-10 xs:z-0">
                        <img src="/assets/images/newimg/pursuit-img.webp" className="float-left max-w-[unset] absolute top-10 right-0 xs:relative xs:float-none xs:w-[100%] xs:left-0" alt="ghostwriting agency" />
                    </div>
                    </div>
                    

                </div>
            </section>
        </>

    )
}

export default bookWriting
