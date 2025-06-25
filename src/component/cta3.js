import React, { useEffect } from 'react';
import Image from 'next/image';
const YourComponent = () => {
  useEffect(() => {
    // const applyRandomAnimations = () => {
    //   const layers = document.querySelectorAll('.layer1, .layer2, .layer3');
    //   layers.forEach((layer, index) => {
    //     // Randomize the initial animation delay for each layer
    //     const delay = Math.random() * 10; // Adjust the range as needed
    //     layer.style.animation = `layer${index + 1} 20s linear infinite`;
    //     layer.style.animationDelay = `${delay}s`;
    //   });
    // };

    // applyRandomAnimations(); // Apply initial random animations

    // // Reapply random animations periodically (e.g., every 10 seconds)
    // const interval = setInterval(applyRandomAnimations, 10000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return (
    <>
      <section className='section-container11 relative w-[100%] overflow-hidden focus:scroll-auto'>
        <div className='w-full font-secondary bg-cover bg-no-repeat ' style={{ backgroundImage: "url('/assets/images/newimg/blue-background.png')" }}>
          <div className='container max-w-7xl grid grid-cols-2  md:grid-cols-1 grid-rows-1 md:text-center text-left justify-center text-white xs:grid-cols-1 xs:px-2'>
            <div className='py-56 md:py-16 md:px-10 md:text-center items-center relative xs:py-16 pr-15 '>
              <h3 className='text-[40px] xs:text-center font-secondary font-bold xs:text-[30px] leading-tight mb-3'>Don’t hesitate to contact us! <br/>
We are working round the clock </h3>
              <p className='xs:text-center w-[90%] xs:w-[100%]'>
                If you need to contact us at any time of the day, don’t hesitate to contact our representatives.
              </p>
              <div className='mx-auto py-4 '>
                <div className='w-[60%] md:mx-auto gap-x-5 grid grid-cols-2 grid-rows-1 py-5 relative xs:w-[100%]'>
                  <button className='bg-[#00C0E4] py-1 text-white hover:bg-white hover:border-solid hover:border-[1px] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu'>Get Started</button>
                  <button className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[2px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[2px] hover:border-[#00C0E4]'>Live Chat</button>
                </div>
              </div>
            </div>
            <div className='md:hidden'>
              <div className='grid grid-cols-3 relative md:gap-5 md:hidden'>
              <div className="absolute top-0 left-0 w-full h-full z-50 ">
                  <div className="block-33 display--inline-top md:gap-2" >
                        <div className="gutter ">
                            <div className="gallery-h">
                                <div className="gallery-image ">
                                    <div className="gallery-image__img ">
                                        <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/02.png'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                    <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/03.png'/>
                                        </div>                   
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/06.png'/>
                                      </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/11.png'/>
                                      </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/02.png'/>
                                      </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/06.png'/>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-33 display--inline-top">
                        <div className="gutter">
                        <div className="gallery-h gallery-h--tb">
                                <div className="gallery-image ">
                                    <div className="gallery-image__img ">
                                        <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/12.png'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                    <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/08.png'/>
                                        </div>                   
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/07.png'/>
                                      </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/10.png'/>
                                      </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/06.png'/>
                                      </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/12.png'/>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-33 display--inline-top">
                        <div className="gutter ">
                        <div className="gallery-h">
                                <div className="gallery-image ">
                                    <div className="gallery-image__img ">
                                        <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/04.png'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                    <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/05.png'/>
                                        </div>                   
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/09.png'/>
                                      </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/04.png'/>
                                      </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/06.png'/>
                                      </div>
                                    </div>
                                </div>
                                <div className="gallery-image">
                                    <div className="gallery-image__img ">
                                      <div className="fill-dimensions cover-img">
                                        <Image width={200} height={200} alt="Call of action" className='' src='/assets/images/newimg/05.png'/>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
  
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default YourComponent;
