import Link from 'next/link'
import Image from 'next/image';
// import Typed from 'typed.js';
// import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';

//import Slider from '././Slider';
const LpSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay: true,
        slidesToScroll: 1,
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
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                }
            }

        ]
    };
    

    return (
        <>

            <div className='container max-w-7xl justify-center mt-10 testimonial'>
                <div className='justify-center w-[85%] mx-auto grid grid-rows-1 grid-cols-1 space-x-2 items-center '>
                    <Slider {...settings}>

                        <div className=''>
                            <div>
                                <Image src='/assets/images/sliderImg/book1.webp' width={200} height={350} alt="ebook1.webp" />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                </div>
                                <h4 className='font-semibold'>Romance</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src='/assets/images/sliderImg/book2.webp' width={200} height={350} alt="ebook2.webp" />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                </div>
                                <h4 className='font-semibold'>Comic</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src='/assets/images/sliderImg/book3.webp' width={200} height={350} alt="ebook3.webp" />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                </div>
                                <h4 className='font-semibold'>Fiction</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src='/assets/images/sliderImg/book4.webp' width={200} height={350} alt="ebook4.webp" />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                </div>
                                <h4 className='font-semibold'>Romance</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src='/assets/images/sliderImg/book5.webp' width={200} height={350} alt="ebook5.webp" />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                </div>
                                <h4 className='font-semibold'>Comic</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src='/assets/images/sliderImg/book6.webp' width={200} height={350} alt="ebook6.webp" />
                                <div className='flex space-x-1 py-2'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#fff700", }} />
                                </div>
                                <h4 className='font-semibold'>Fiction</h4>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </>

    )
}

export default LpSlider
