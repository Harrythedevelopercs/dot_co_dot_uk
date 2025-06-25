import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, } from "@fortawesome/free-solid-svg-icons";

const creativeGhostWriters = () => {
    return (
        <>
             <section className="exceptional py-16 relative">
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-8 heading">
                        <h6 className="font-semibold">
                            MAKE THE
                        </h6>
                        <h2 className='text-4xl font-semibold'>
                           Maganzine Work Best In Your Favor 
                        </h2>
                        <p className="mt-4 max-w-[60%] mx-auto">
                       
               Magazine Writing requires maintaining interest while being creative yet simple. We combine all the content, keeping all the magazine writing requirements in mind. Our content has a high standard of writing and grammar which is high in quality. 
            </p>                    </div>
                    <div className="grid grid-cols-3 grid-rows-1 space-y-5 space-x-5">
                        <div className='flex-rows justify-center items-center text-center pt-5 pl-5'>
                            <img className='' src='/assets/images/newimg/magazine-box-1.jpg'/>
                            <h3 className='text-2xl font-bold'>Essay <br></br>Articles</h3>
                        </div>

                        <div className='flex-rows justify-center items-center text-center'>
                            <img className='' src='/assets/images/newimg/magazine-box-2.jpg'/>
                            <h3 className='text-2xl font-bold'>Historical <br></br> Articles</h3>
                        </div>
                        
                        <div className='flex-rows justify-center items-center text-center'>
                            <img className='' src='/assets/images/newimg/magazine-box-3.jpg'/>
                            <h3 className='text-2xl font-bold'>Profile <br></br> Articles</h3>
                        </div>

                        <div className='flex-rows justify-center items-center text-center'>
                            <img className='' src='/assets/images/newimg/magazine-box-4.jpg'/>
                            <h3 className='text-2xl font-bold'>Service <br></br>Articles</h3>
                        </div>

                        <div className='flex-rows justify-center items-center text-center'>
                            <img className='' src='/assets/images/newimg/magazine-box-5.jpg'/>
                            <h3 className='text-2xl font-bold'>Research <br></br> Articles</h3>
                        </div>

                        <div className='flex-rows justify-center items-center text-center'>
                            <img className='' src='/assets/images/newimg/magazine-box-6.jpg'/>
                            <h3 className='text-2xl font-bold'>Informative <br></br> Articles</h3>
                        </div>

                    </div>
                    
                </div>

            </section>


        </>
    )
}

export default creativeGhostWriters
