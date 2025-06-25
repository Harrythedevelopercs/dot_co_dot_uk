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
                            Our Creative Ghostwriters,
                        </h6>
                        <h2 className='text-4xl font-bold'>
                            Bringing Your <br /> Imagination To Life.
                        </h2>
                        <p className="mt-4 max-w-[70%] mx-auto">
                            You may have an idea for the next best-seller, but you may not have the time or expertise to write it yourself. Our platform meets all of the requirements and offers a diverse range of writing styles, including:
                        </p>
                    </div>
                    <div className="flex">
                        <div className='w-8/12 px-8'>
                            <ul className="grid grid-cols-3 grid-rows-1 md:grid-cols-3 pl-4 space-x-5">
                                <li className="mb-6 pl-4">
                                    <h4 className="text-xl font-semibold bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 py-1">
                                        Fiction
                                    </h4>
                                    <p className="mt-2">
                                        Our fiction ghostwriters will assist you in creatively expressing your ideas into enticing literacy that will captivate your audience. All aspects of a story are considered, particularly the author's original major plot and characters.
                                    </p>
                                </li>
                                <li className="mb-6 mt-8">
                                    <h4 className="text-xl font-semibold bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 py-1">
                                        Informative
                                    </h4>
                                    <p className="mt-2">
                                        Our ghostwriters comprehend the nuance of your text. They ensure that the information they produce is reliable and well-acknowledged worldwide, under the available data and facts.
                                    </p>
                                </li>
                                <li className="mb-6">
                                    <h4 className="text-xl font-semibold bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 py-1">
                                        Memoir
                                    </h4>
                                    <p className="mt-2">
                                        Our ghostwriters have been trained to write memoirs, not to confuse them with autobiographies. Furthermore, they cherish your sentiments and emotions and go to great lengths to turn your precious memories into a book.
                                    </p>
                                </li>
                                <li className="mb-6">
                                    <h4 className="text-xl font-semibold bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 py-1">
                                        Children's Book
                                    </h4>
                                    <p className="mt-2">
                                        Our well-trained and experienced writers are well-versed in all aspects of children's books. They use their ingenuity to write classic subjects that young minds can understand, with vibrant graphics that keep them hooked.
                                    </p>
                                </li>
                                <li className="mb-6 mt-8">
                                    <h4 className="text-xl font-semibold bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 py-1">
                                        Self Help Book
                                    </h4>
                                    <p className="mt-2">
                                        Let people like you and learn from your experience in the industry with our self-help book.
                                    </p>
                                </li>
                                <li className="mb-6">
                                    <h4 className="text-xl font-semibold bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 py-1">
                                        Biography
                                    </h4>
                                    <p className="mt-2">
                                        Our expert writers are generally interested in learning about your subjects' stories and have the skills and expertise to provide you with well-written content for whoever you want to write about. They also conduct extensive research through various channels such as newspapers, blogs, and interviews to ensure they use correct facts and figures.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-4/12 py-10">
                            <img src="/assets/images/newimg/bring-book.png" alt="fiction ghostwriting services" />
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
            <section className="compose bg-[#e1b433] py-[30px]">
                <div className="container max-w-7xl mx-auto text-left">
                    <p className="text-lg font-medium">
                        Call us or send us an email, and our experts will walk you through the entire process, requirements, and packages for ghostwriting services for your book! Please contact us by phone or start a live chat. <span><Link href="tel:+1 (855) 469-7509" className="hover:text-black font-bold">+1 (855) 469-7509</Link>, or start a <Link href="#" className="hover:text-black font-bold">live chat.</Link></span>
                    </p>
                </div>
            </section>

        </>
    )
}

export default creativeGhostWriters
