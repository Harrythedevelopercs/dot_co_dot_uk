import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faQuoteLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";


const testimonials = () => {
  var settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  };

  return (
    <>

      <section className="testimonial bookwriting relative text-[#1d1d1f]">
        <div className="container max-w-7xl py-20  relative ">
          <div className=" text-center">
            <h6>
              Hear The Words Of
            </h6>
            <h2 className='text-4xl font-bold mb-5'>
              Appreciation from Our Clients
            </h2>
            <p className='text-lg mb-5 w-[70%] mx-auto'>
              The appreciation from our clients is what keeps us going. Have a sneak peek of what our satisfied clients have to say about our work.
            </p>
          </div>
          <Slider {...settings}>
            <div className="testimon1 items-center justify-center">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>
            <div className="testimon1">
              <div className="item bg-[#fff] p-5 text-center rounded-lg m-1 items-center">
              <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#f7931e",}} />
                <h5 className='font-medium'>
                  -Thomson Lucas
                </h5>
                <p className=' text-[16px]'>
                  Working with this book writing company was a game-changer for me. Their expertise is unmatched!
                </p>

              </div>
            </div>


          </Slider>

        </div>
      </section>

    </>
  )
}

export default testimonials
