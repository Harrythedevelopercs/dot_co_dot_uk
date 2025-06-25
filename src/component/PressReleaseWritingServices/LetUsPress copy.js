import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, } from "@fortawesome/free-solid-svg-icons";

const creativeGhostWriters = () => {
    return (
        <>
            <section className="our-bringing py-16">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-8 heading">
                        <h6 className="font-semibold">
                            GET YOUR
                        </h6>
                        <h2 className='text-4xl font-semibold'>
                            Press Releases Covered <br />  By The Right Sites 
                        </h2>
                        <p className="mt-4 max-w-[60%] mx-auto">
                        Press Release gives you maximum acquaintance, which is done by selecting your target audience through media and the targeted niche.
                        </p>
                    </div>
                    <div className="flex">
                        <div className='w-8/12 p-8 items-center'>
                            <ul className="grid grid-cols-2 grid-rows-1 md:grid-cols-2  space-x-5  ">
                                <li></li><li></li>
                                <li className="mb-6 bg-[#edeff3] px-3 py-3 flex space-x-2 rounded-lg">
                                    <img src='/assets/images/newimg/ebook-check.png'/>
                                    <h4 className="text-lg font-semibold items-center">
                                        EIN Presswire
                                    </h4>
                                    
                                </li>
                                <li className="mb-6 bg-[#edeff3] px-3 py-3 flex space-x-2">
                                <img src='/assets/images/newimg/ebook-check.png'/>
                                    <h4 className="text-lg font-semibold items-center">
                                        eReleases
                                    </h4>
                                    
                                </li>
                                <li className="mb-6 bg-[#edeff3] px-3 py-3 flex space-x-2">
                                <img src='/assets/images/newimg/ebook-check.png'/>
                                    <h4 className="text-lg font-semibold items-center">
                                        IssueWire
                                    </h4>
                                    
                                </li>
                                <li className="mb-6 bg-[#edeff3] px-3 py-3 flex space-x-2">
                                <img src='/assets/images/newimg/ebook-check.png'/>
                                    <h4 className="text-lg font-semibold items-center">
                                        Linking News
                                    </h4>
                                    
                                </li>
                                <li className="mb-6 bg-[#edeff3] px-3 py-3 flex space-x-2">
                                <img src='/assets/images/newimg/ebook-check.png'/>
                                    <h4 className="text-lg font-semibold items-center">
                                        Newswire
                                    </h4>
                                    
                                </li>
                                <li className="mb-6 bg-[#edeff3] px-3 py-3 flex space-x-2">
                                <img src='/assets/images/newimg/ebook-check.png'/>
                                    <h4 className="text-lg font-semibold items-center">
                                        PR Distribution
                                    </h4>
                                    
                                </li>
                            </ul>
                        </div>
                        <div className="w-4/12 py-5">
                            <img src="/assets/images/newimg/newspaper-press-release.png" alt="Newspaper Press Release" />
                        </div>

                    </div>
                    <div className="display-block mt-6 cursor-pointer px-8">
                        <Link href=" " data-fancybox="" data-src="#popupform" className="bg-[#62e389] border-[#62e389] text-[#07163f] hover:bg-transparent hover:border-[#62e389] rounded-lg hover:text-white mr-3 btn btn-green">
                            Get Started <FontAwesomeIcon icon={faCaretRight} />
                        </Link>
                        <Link href=" " className="btn btn-black-border hover:bg-[#0a0c37] hover:text-white rounded-lg">
                            Live Chat
                        </Link>
                    </div>
                </div>

            </section>


        </>
    )
}

export default creativeGhostWriters
