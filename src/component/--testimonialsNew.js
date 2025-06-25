
// core version + navigation, pagination modules:
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { useEffect, useRef } from 'react';

//import Swiper from 'swiper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";


// init Swiper:

register();

const TestimonialsNew = () => {


  return (
    <div className='mx-auto text-center px-10 py-16'>
      <Swiper
        
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <swiper-container  slides-per-view="3" speed="500" loop="true" css-mode="true">
        <SwiperSlide className="py-20">
        <div className="item bg-[#f2f2f2] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Thomson Lucas
          </h5>
          <p className=''>
            Thank you so much, Barnett Ghostwriting, for providing me with the finest book writing services. They have
            provided me with a complete solution and are looking after each and everything.
          </p>

      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item bg-[#f2f2f2] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Lucy Gray
          </h5>
          <p className=''>
            Barnett Ghostwriting has provided me with a high-quality service that I am sure couldn’t be found anywhere
            else at such a reasonable cost. Thank you to the entire team for being so proficient in the work and
            providing me with ease.
          </p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item bg-[#f2f2f2] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Henry John
          </h5>
          <p className=''>
            The entire team at Barnett Ghostwriting is a pleasure to work with. They won't disappoint you at any point
            and will make sure to provide you with their full support till the end.
          </p>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item bg-[#f2f2f2] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Clara Arnold
          </h5>
          <p className=''>
            I have no words to express the services I received from Barnett Ghostwriting. I got their ghostwriting
            service, and they left me amazed. I am very much impressed by their work!
          </p>

        </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        </swiper-container>
        


      </Swiper>
    </div>


  );
};

export default TestimonialsNew;
