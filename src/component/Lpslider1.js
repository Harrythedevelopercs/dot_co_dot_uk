import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';

const LpSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        autoplay: true,
        slidesToScroll: 5,
        nextArrow: <Image src={'/assets/images/newimg/right-arrow.png'} className='img-fluid' width={500} height={500} />,
        prevArrow: <Image src={'/assets/images/newimg/prev-arrow.png'} className='img-fluid' width={500} height={500}/>,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }

        ]
    };


    return (
        <>

            <div className='container max-w-7xl xs:max-w-[320px] justify-center mt-10 testimonial mx-auto md:w-[95%]'>
                <div className='justify-center mx-auto grid grid-rows-1 grid-cols-1 gap-4 items-center md:w-[70%] '>
                    <Slider {...settings} className=''>
                        <div className=''>
                            <div >
                                <Image src='/assets/images/sliderImg/book-cover1.webp' alt="book-cover1" width={240} height={320} />
                                <div className='flex gap-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Romance</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/john-h-winner.webp' alt="john-h-winner" width={240} height={300} />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Fiction</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/brandon-richard.webp' alt="brandon-richard" width={240} height={300} />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Drama</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/matt-udoni.webp' alt="matt-udoni" width={240} height={300} />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Action</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/book51.webp' alt="ebook1" width={240} height={300} />
                                <div className='flex gap-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Romance</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/book1.webp' alt="ebook1" width={240} height={300} />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Romance</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/book2.webp' alt="ebook2" width={240} height={300} />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Comic</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/book3.webp' alt="ebook3" width={240} height={300} />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Fiction</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/book4.webp' alt="ebook4" width={240} height={300} />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Romance</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/book5.webp' alt="ebook5" width={240} height={300} />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Comic</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/book6.webp' alt="ebook6" width={240} height={300} />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#F7931E", }} />
                                </div>
                                <h4 className='font-semibold'>Fiction</h4>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='mx-auto py-8 md:w-[60%]'>
                    <div className='w-[30%] md:w-[90%] sm:w-[90%] xs:w-[100%] mx-auto grid grid-cols-2 grid-rows-1 gap-3 py-5 relative'>
                        <button className='bg-[#00C0E4] py-1 text-white hover:bg-white hover:border-solid hover:border-[3px] hover:text-[#1d1d1f] hover:transition-all'>Get started</button>
                        <button className='bg-[#fff] py-1 text-black border-solid border-[#000] border-[3px] hover:bg-[#00C0E4] hover:text-[#1d1d1f] hover:border-[2px] hover:border-[#00C0E4]'>Live Chat</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default LpSlider
