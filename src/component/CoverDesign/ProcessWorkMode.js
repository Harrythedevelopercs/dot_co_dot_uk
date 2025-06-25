import Link from 'next/link'
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';


const ProcessWorkMode = () => {

    var settings = {
        spacing: 50,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay: true,
        slidesToScroll: 5,
        nextArrow: <Image src={'/assets/images/newimg/right-arrow.png'} className='img-fluid' width={500} height={500} />,
        prevArrow: <Image src={'/assets/images/newimg/prev-arrow.png'} className='img-fluid' width={500} height={500}/>,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3, // Display 2 columns at this breakpoint
                    slidesToScroll: 3, // Scroll 2 columns at this breakpoint
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
                }
            }
        ]
    };

    // Initialize state for screen size
    const [isLargeScreen, setIsLargeScreen] = useState(true); // Default to true for larger screens

    // Function to update the screen size state
    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 768); // Customize the breakpoint as needed
    };

    // Add an event listener to update the screen size state on resize
    useEffect(() => {
        updateScreenSize(); // Initial call

        const handleResize = () => {
            updateScreenSize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            // Clean up the event listener
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <section className="w-full pb-20 md:pb-20 xs:pb-5 font-secondary">
                <div className="container max-w-7xl py-5 text-[#1d1d1f] xs:py-16">
                    <div className="text-center mb-20 md:mb-10 xs:mb-5 justify-center">
                        <h6 className='text-[20px] font-semibold'>
                            What We
                        </h6>
                        <h2 className='text-[40px] font-semibold leading-10 xs:text-[26px]'>
                            Work on
                        </h2>
                    </div>

                    <div className={` ${isLargeScreen ? '' : 'hidden'}  grid grid-cols-3 text-center gap-4 md:grid-cols-2 xs:grid-cols-1 md:w-[90%] mx-auto xs:w-[90%]`}>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Printed Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Perfect, long-lasting covers to protect your story and message from impairment
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[80%] mx-auto'>
                                    <img src='/assets/images/newimg/printed-books.png' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Photo Album
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Photographing photo album covers is a critical task that our professionals excel at.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[80%] mx-auto'>
                                    <img src='/assets/images/newimg/photo-album1.png' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Comic Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Colorful and appealing illustrations to entice comic  <br/> readers.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[70%] mx-auto'>
                                    <img src='/assets/images/newimg/COMICBOOK.png' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Magazine
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Cover design that is trendy and fashionable to help you put your best foot forward in terms of glamour.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[70%] mx-auto'>
                                    <img src='/assets/images/newimg/OMYB9R0.png' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Year Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Compilation of your academic achievements in an  <br/> appealing format.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[50%] mx-auto'>
                                    <img src='/assets/images/newimg/your-book.png' className='w-[75%]' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        E Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Digital book cover design that is both creative and high-quality for maximum impact on your online audience
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-20 w-[90%] mx-auto'>
                                    <img src='/assets/images/newimg/e-books.png' />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className={` ${isLargeScreen ? 'hidden' : ''}  grid grid-cols-3 text-center gap-4 md:grid-cols-2 xs:grid-cols-1 md:w-[90%] mx-auto xs:w-[90%]`}>
                        <Slider {...settings}>
                        <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                            <div>
                                <div className="rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Printed Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Perfect, long-lasting covers to protect your story and message from impairment
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[80%] mx-auto'>
                                    <img src='/assets/images/newimg/printed-books.png' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                            <div>
                                <div className="rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Photo Album
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Photographing photo album covers is a critical task that our professionals excel at.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[80%] mx-auto'>
                                    <img src='/assets/images/newimg/photo-album1.png' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Comic Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Colorful and appealing illustrations to entice comic <br/> readers.
                                           
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[70%] mx-auto'>
                                    <img src='/assets/images/newimg/COMICBOOK.png' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Magazine
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Cover design that is trendy and fashionable to help you put your best foot forward in terms of glamour.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[70%] mx-auto'>
                                    <img src='/assets/images/newimg/OMYB9R0.png' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Year Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Compilation of your academic achievements in an appealing format.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[50%] mx-auto'>
                                    <img src='/assets/images/newimg/your-book.png' className='w-[75%]' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-10 px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        E Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Digital book cover design that is both creative and high-quality for maximum impact on your online audience
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-20 w-[90%] mx-auto'>
                                    <img src='/assets/images/newimg/e-books.png' />
                                </div>
                            </div>
                        </div>
                        </Slider>

                    </div>
                </div>
            </section>
            <section>

            </section>
        </>


    )
}

export default ProcessWorkMode
