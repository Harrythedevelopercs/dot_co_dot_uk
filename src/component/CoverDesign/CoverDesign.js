import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const PublishingWorkMode = () => {
    return (
        <>
            <section className="bg-[#f2f2f2] w-full font-secondary">
                <div className="container max-w-7xl py-24 text-[#1d1d1f]">
                    <div className="text-center mb-10 justify-center">
                        <h6 className='text-[20px] font-semibold'>
                        We offer bespoke graphics
                        </h6>
                        <h2 className='text-[40px] font-bold leading-10 mt-2 mb-2 xs:text-[26px]'>
                        A design that's unique to you
                        </h2>
                        <p className='w-[80%] mx-auto md:w-[75%] xs:w-[100%]'>
                        Our creative designers will work on providing you with a book cover design that's not only unique to you and your brand but also able to market your product with its beautifully and well crafted design.
                        </p>
                    </div>

                    <div className=' grid grid-cols-4 gap-4 md:grid-cols-2 xs:grid-cols-1 md:w-[95%] md:gap-5 mx-auto sm:w-[90%] xs:w-[90%] xs:gap-4'>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 bg-[#f2f2f2] text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image width={200} height={200} alt='concept-development'  src='/assets/images/newimg/concept-development.png' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Concept development: </h4>
                                        <p className=''>
                                        Our team at Barnett is among the best in developing concepts. We work closely with authors to understand their book's theme, genre, and essence. From this foundation, we develop unique and captivating concepts for the book cover that resonate with the story's core. This eventually leads to our creative designers working on making an ideal cover that fits the atmosphere of the book and its story.
                                        </p>
                                   
                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 bg-[#f2f2f2] text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image width={200} height={200} alt='Custom illustration and artwork'  src='/assets/images/newimg/custom-illustration.png' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Custom illustration and artwork</h4>
                                        <p className=''>
                                        For authors seeking a one-of-a-kind cover, our artists can create original illustrations and artwork tailored to the book's content These handcrafted visuals infuse the cover with the author's vision and creativity. These visuals will be among the best cover designs that the industry will get to grace their eyes with. Such visuals will attract all sorts of readers. To your book.
                                        </p>
                                    
                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 bg-[#f2f2f2] text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image width={200} height={200} alt='Print On Demand'  src='/assets/images/newimg/typography-and-layout.png' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Typography and layout:</h4>
                                        <p className=''>
                                        Our designers expertly handle typography and layout to ensure that the cover is not only visually appealing but also conveys the book's genre and mood effectively. Fonts, colors, and the arrangement of elements are meticulously chosen to enhance the reader's experience. Every reader of your book will enjoy the beautifully typography utilized by our creative designers.
                                        </p>
                                    
                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 bg-[#f2f2f2] text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image width={200} height={200} alt='Reach Millions of Readers'  src='/assets/images/newimg/print-and-digital.png' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                    Print and digital optimization:</h4>
                                        <p className=''>
                                        We design covers that shine both in print and digital formats. Whether it's an eye-catching paperback cover or a pixel-perfect e-book design, we optimize for every medium. Our Print and digital optimization designers will work to craft your book to excellence. We will go on to make it ideal for the appropriate package. Whether it's a print paperback or if its an eBook involving the pixel precision that's needed to make an eBook stand out.
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
