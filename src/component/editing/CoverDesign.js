import React from 'react'
import Link from 'next/link'



const PublishingWorkMode = () => {
    return (
        <>
            <section className="bg-[#f2f2f2] w-full font-secondary">
                <div className="container max-w-7xl py-24 text-[#1d1d1f]">
                    <div className="text-center mb-10 justify-center">
                        <h6 className='text-xl font-semibold'>
                        High quality editing
                        </h6>
                        <h2 className='text-[34px] font-bold leading-10 mt-2 mb-2 xs:text-[32px]'>
                        Editing Tailored To Your Needs
                        </h2>
                        <p className='w-[80%] mx-auto md:w-[90%] xs:w-[90%]'>
                        We create the ideal editing workflow to suit all your editing needs. Our editors are the best at creating an ideal environment for editing and proofreading. The work we do is of the highest quality. The amount of effort we put into our editing is immense and this is why we get the results that we do. Our outstanding results are a testament to the hard work of the people at Barnett ghostwriting. Our top notch affordable book editing services will make sure that your book stands out.
                        </p>
                    </div>

                    <div className='w-[80%] grid grid-cols-3 gap-4 md:grid-cols-3 xs:grid-cols-1 md:w-[90%] mx-auto xs:w-[90%]'>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl bg-white text-center p-2 text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <img src='/assets/images/newimg/concept-development.png' className='w-[100%]' />
                                <div className='p-5'>
                                    <p className='text-2xl text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Copy-Editing
                                        <span className='block font-normal text-base leading-5 mt-2'>
                                        Is the process of revising the written material to improve the readability of the book, it ensures it is free of grammatical errors. Work with our professional book editing services and you will be provided with all the editing fixes you need.
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl bg-white text-center p-2 text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <img src='/assets/images/newimg/custom-illustration.png' className='w-[100%]' />
                                <div className='p-5'>
                                    <p className='text-2xl text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Line-Editing:
                                        <span className='block font-normal text-base leading-5 mt-2'>
                                        In this form of editing our expert editors help with the flow, the writing style and readability of the manuscript.
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl bg-white text-center p-2 text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <img src='/assets/images/newimg/typography-and-layout.png' className='w-[100%]' />
                                <div className='p-5'>
                                    <p className='text-2xl text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Proof-reading:
                                        <span className='block font-normal text-base leading-5 mt-2'>
                                        Our expert proof readers will check your text for errors before it is shared. We offer the best proofreading services in the industry.
                                        </span>
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
