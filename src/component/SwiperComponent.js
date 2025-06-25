
import 'swiper/css'; 
import 'swiper/css/navigation'; 
// import "swiper/swiper-bundle.min.css";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//import SwiperCore, { Navigation, Pagination } from 'swiper';
//SwiperCore.use([Navigation, Pagination]);


const TestimonialsSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {

      const handleResize = () => {
        const isMobileView = window.innerWidth < 768; // Adjust the breakpoint as needed
        setSlidesPerView(isMobileView ? 1 : 3);
      }
      handleResize(); 
      window.addEventListener("resize", handleResize);

        const slides = document.getElementsByClassName('swiper-slide');
        for (const slide of slides) {
          slide.addEventListener('click', () => {
            const { className } = slide;
            if (className.includes('swiper-slide-next')) {
              swiper.slideNext();
            } else if (className.includes('swiper-slide-prev')) {
              swiper.slidePrev();
            }
          });
        }
      
        // function resizeTextToFit() {
        //   const quoteEls = document.getElementsByClassName('quote');
        //   for (const el of quoteEls) {
        //     el.style.width = el.offsetWidth;
        //     el.style.height = el.offsetHeight;
        //   }

        // }
      
        // resizeTextToFit();
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

  const slides = [
    {
      avatar: '/assets/images/newimg/stars.png',
      name: '- Michael P.',
      title: 'CTO, Cybertech Solutions',
      quote:
        "I'm so grateful for the amazing book they crafted for me. Truly exceptional work!",
    },
    {
        avatar: '/assets/images/newimg/stars.png',
        name: '- Sarah W.',
        title: 'CTO, Cybertech Solutions',
        quote:
          "Working with this book writing company was a game-changer for me. Their expertise is unmatched!",
      },
      {
        avatar: '/assets/images/newimg/stars.png',
        name: '- John D.',
        title: 'CTO, Cybertech Solutions',
        quote:
          "I can't believe the incredible quality of the book they wrote for me. It exceeded all my expectations!",
      },
      {
        avatar: '/assets/images/newimg/stars.png',
        name: '- Michael P.',
        title: 'CTO, Cybertech Solutions',
        quote:
          "I'm so grateful for the amazing book they crafted for me. Truly exceptional work!",
      },
      {
          avatar: '/assets/images/newimg/stars.png',
          name: '- Sarah W.',
          title: 'CTO, Cybertech Solutions',
          quote:
            "Working with this book writing company was a game-changer for me. Their expertise is unmatched!",
        },
        {
          avatar: '/assets/images/newimg/stars.png',
          name: '- John D.',
          title: 'CTO, Cybertech Solutions',
          quote:
            "I can't believe the incredible quality of the book they wrote for me. It exceeded all my expectations!",
        },
  ];

  return (
<section className='py-28 xs:py-10'>
    <div className="container xs:container">
        <div>
            <div className="text-center">
                <h6 className='font-semibold font-secondary text-[18px] mb-3'>Hear The Words Of</h6>
                <h2 className="text-4xl font-bold mb-5 font-secondary">Appreciation from Our Clients</h2>
                <p className="text-lg mb-5 mx-auto text-[16px] xs:text-[15px]">The appreciation from our clients is what keeps us going. Have a sneak peek of <br/> what our satisfied clients have to say about our work.</p>
            </div>
        </div>
        <Swiper
      slidesPerView={slidesPerView}
      centeredSlides={true}
      spaceBetween={120}
      keyboard={{ enabled: true }}
      loop={true}
      //pagination={{ el: ".swiper-pagination" }}
      //navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      >
      {slides.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="card testimonialscard">
            <img className="" src={testimonial.avatar} alt={testimonial.name} />
            <div className="header">
              <h1 className="name">{testimonial.name}</h1>
            </div>
            <div className="quote-container">
              <p className="quote text-[12px]">{testimonial.quote}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    {/* <div className="swiper-pagination"></div> */}

    </div>
   </section>
  );
};

export default TestimonialsSlider;
