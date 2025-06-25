import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import TABII from '../genre/TabNavigation'

const TabNavigationGenre = () => {
    return (
        <>
            <section className="pt-[100px] md:py-20 sm:py-10 xs:py-10 font-secondary">
                <div className="container max-w-7xl ">
                    <div className="text-center justify-content-center ">
                        <h6 className='text-[20px] font-semibold'>Why we are exceptional </h6>
                        <h2 className='text-[40px] font-semibold mb-2 md:text-4xl xs:text-4xl'>The greatness of our team cannot be understated</h2>
                        <p className='w-[80%] mx-auto md:w-[90%] xs:w-[90%] xs:text-justify'>
                        The fact of the matter is our team has worked on every single genre in existence and even helped in custom tailored genres that are not easily able to fit into one box, it's the adaptability, persistence and perseverance of our team that has made it what it is today. For example our fiction ghostwriter for hire has writer some of the best written stories and books that have compelled people to even make movies based on their story. Our writers are atight knit team of strong minded and educated people who know how to bring about great results in short to long deadlines depending on the scope of the project.                        </p>
                    </div>
                </div>
                <div className="relative mb-10 text-white " >
                    <div className='max-w-7xl mx-auto py-8 sm:px-5 xs:px-5'>
                        <TABII/>

                    </div>

                </div>
            </section>
        </>

    )
}

export default TabNavigationGenre
