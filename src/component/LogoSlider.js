// import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';

const LogoSlider = (props) => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: false,
    cssEase: 'linear',
    slidesToShow: 5,
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
      
    <section>
        <ul className='max-w-5xl mx-auto items-center justify-center mt-5 mb-5 xs:mt-0 xs:mb-3'>
        <Slider {...settings}>
            <div><Image src='/assets/images/newimg/amazon.png' width={120} height={45} alt="amazon" /></div>
            <div><Image src='/assets/images/newimg/kobo.png' width={120} height={45} alt="kobo" /></div>
            <div><Image src='/assets/images/newimg/google-play.png' width={120} height={45} alt="google-play" /></div>
            <div><Image src='/assets/images/newimg/scribed.png' width={120} height={45} alt="scribed" /></div>
            <div><Image src='/assets/images/newimg/ibook.png' width={120} height={45} alt="ibook" /></div>
            <div><Image src='/assets/images/newimg/Barnes-Noble-Logo.png' width={120} height={45} alt="Barnes-Noble-Logo" /></div>
        </Slider>
        </ul>
    </section>
    </>
  )
}

export default LogoSlider
