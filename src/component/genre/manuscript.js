import React from 'react'

const manuscript = () => {
    return (
        <>
            <section className='bg-[#f2f2f2]'>
                <div className='container max-w-7xl mx-auto py-28 font-secondary md:px-5 xs:py-10 xs:px-5 sm-px-5'>
                    <div className='grid grid-cols-2 gap-x-20 grid-rows-1 justify-between xs:grid-cols-1 xs:justify-normal xs:gap-10 '>
                        <div>
                            <h6 className='text-xl font-semibold md:w-[80%]'>Our outstanding approach to writing</h6>
                            <h3 className='w-[85%] leading-[50px] font-bold text-[40px] xs:w-[100%] xs:text-3xl md:leading-[45px] md:py-3 xs:py-5'>We will create a manuscript
                                free of errors</h3>
                            <p className='text-justify'>Our writers will work tirelessly to produce a manuscript that is not only devoid of errors but is also something that reads really well and requires a lot less micromanagement in the form of revisions.</p>
                        </div>
                        <div>
                            <h6 className='text-xl font-semibold'>Our outstanding publishing expertise</h6>
                            <h3 className='font-bold text-[40px]  leading-[50px] xs:w-[100%] xs:text-3xl md:leading-[45px] md:py-3 xs:py-5'>Publishing made easy with
                                our services</h3>
                            <p className='text-justify'>Publishing is the hardest aspect of crafting a novel due to the complexities of publishing in this day and age, the older system of having large publishers who are entrenched in the industry and working with them to publish your book is not something that is accessible to everyone, which is why our in house publishing allows for convenience and ease so that you don't have to worry about a single thing.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default manuscript
