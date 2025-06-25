import React from 'react'
import Link from 'next/link'



const workMode = () => {
    return (
        <>
            <section className="our-process bg-process-bg bg-cover bg-no-repeat w-full">
                <div className="container max-w-7xl pt-24 pb-24 text-white">
                    <div className="heading text-center mb-20 justify-center">
                        <h6 className='text-[20px] font-semibold mb-3'>
                            Carrying Out
                        </h6>
                        <h2 className='text-[34px] font-semibold leading-10 mt-5 mb-5 xs:text-[26px]'>
                            The Fastest Work Mode, Get<br></br> Your Work in 4 Easy Steps
                        </h2>
                        <p className='w-[70%] mx-auto md:w-[90%] xs:w-[100%]'>
                            Working with us gives you prompt delivery of work because we have set up everything systematically. Here is our 4 step process, which keeps us streamlined from the beginning.
                        </p>
                    </div>
                    <ul className='grid grid-cols-4 grid-rows-1 relative text-center items-center justify-center pb-5 mb-10 uppercase text-white'>
                        <li className='text-[19px] relative inline-block'>
                            step <span className='text-3xl font-bold'> 01</span>
                            <strong className='h-8 w-8 z-auto rounded-full absolute left-0 right-0 bg-[#16295c] m-auto -bottom-8 border-solid border-4 border-white transition-[.5 all]'></strong>
                        </li>
                        <li className='text-[19px] relative inline-block '>
                            step <span className='text-3xl font-bold'> 02</span>
                            <strong className='h-8 w-8 z-auto rounded-full absolute border-solid border-4 left-0 right-0 bg-[#16295c] m-auto -bottom-8 border-white transition-[.5 all]'></strong>
                        </li>
                        <li className='text-[19px] relative inline-block '>
                            step <span className='text-3xl font-bold'> 03</span>
                            <strong className='h-8 w-8 z-auto rounded-full absolute border-solid border-4 left-0 right-0 bg-[#16295c] m-auto -bottom-8 border-white transition-[.5 all]'></strong>
                        </li>
                        <li className='text-[19px] relative inline-block '>
                            step <span className='text-3xl font-bold'> 04</span>
                            <strong className='h-8 w-8 z-auto rounded-full absolute border-solid border-4 left-0 right-0 bg-[#16295c] m-auto -bottom-8 border-white transition-[.5 all]'></strong>
                        </li>
                    </ul>
                    <div className='grid grid-cols-4 grid-rows-1 gap-4 md:grid-cols-1 xs:grid-cols-1 md:w-[70%] mx-auto xs:w-[90%]'>
                        <div className="col-md">
                            <div className="box bg-white text-center h-[100%] pt-5 pb-5 pr-7 pl-7 border-2 border-solid transition-[.5s] hover:bg-[#16295c] hover:border-white">
                                <div className="h-[100px] w-[100px] bg-[#16295c] rounded-full text-center border-4 border-solid border-white m-auto transition-[.5 all] leading-[90px] img hover:bg-[#e5ce4e]">
                                    <img src="/assets/images/newimg/process-1.png" alt="" />
                                </div>
                                <p className='text-[17px] text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>

                                    Place <br></br> Your Order

                                    <span className='block font-normal text-[13px] leading-5 mt-2'>
                                        After making up your mind about working with us, you place your order.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="box bg-white text-center h-[100%] pt-5 pb-5 pr-7 pl-7 border-2 border-solid transition-[.5s] hover:bg-[#16295c] hover:border-white">
                                <div className="h-[100px] w-[100px] bg-[#16295c] rounded-full text-center border-4 border-solid border-white m-auto transition-[.5 all] leading-[90px] img hover:bg-[#e5ce4e]">
                                    <img src="/assets/images/newimg/process-2.png" alt="professional article writing services" />
                                </div>
                                <p className='text-[17px] text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>

                                    Drafting <br></br> Outline
                                    <span className='block font-normal text-[13px] leading-5 mt-2'>
                                        Before beginning with the writing process, our writers draft an outline.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="box bg-white text-center h-[100%] pt-5 pb-5 pr-7 pl-7 border-2 border-solid transition-[.5s] hover:bg-[#16295c] hover:border-white">
                                <div className="h-[100px] w-[100px] bg-[#16295c] rounded-full text-center border-4 border-solid border-white m-auto transition-[.5 all] leading-[90px] img hover:bg-[#e5ce4e]">
                                    <img src="/assets/images/newimg/process-3.png" alt="seo article writing service" />
                                </div>
                                <p className='text-[17px] text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Seeking Your <br></br> Approval
                                    <span className='block font-normal text-[13px] leading-5 mt-2'>
                                        Once we are done with your tasks, we immediately seek your approval.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="box bg-white text-center h-[100%] pt-5 pb-5 pr-7 pl-7 border-2 border-solid transition-[.5s] hover:bg-[#16295c] hover:border-white">
                                <div className="h-[100px] w-[100px] bg-[#16295c] rounded-full text-center border-4 border-solid border-white m-auto transition-[.5 all] leading-[90px] img hover:bg-[#e5ce4e]">
                                    <img src="/assets/images/newimg/process-4.png" alt="" />
                                </div>
                                <p className='text-[17px] text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>

                                    Timely Deliverance <br></br> Of Work
                                    <span className='block font-normal text-[13px] leading-5 mt-2'>
                                        No matter what the deadline is, the work is always delivered timely.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default workMode
