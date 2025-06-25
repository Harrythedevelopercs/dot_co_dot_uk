"use client"
// components/Slider.js
import Link from 'next/link'
import Image from 'next/image';

import React, { useEffect } from 'react';
import Typed from 'typed.js';
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretRight, } from "@fortawesome/free-solid-svg-icons";

function Slider() {
    useEffect(() => {
        $.noConflict();

        $(document).ready(function () {
            // Set current tab to Editing
            $('*[data-tab="editing"], #editing').addClass("current");

            var typed = new Typed("#typed", {
                stringsElement: "#typed-strings",
                typeSpeed: 70,
                backSpeed: 50,
                contentType: "text",
                startDelay: 1000,
                backDelay: 3000,
                loop: true,
                preStringTyped: function () {
                    changeImg();
                },
            });

            var currImg = 0;

            function changeImg() {
                currImg++;
                console.log(currImg);
                if (currImg === 1) {
                    $(".slider-home").delay(400).addClass("children-image");
                    $(".slider-home").delay(400).removeClass("adventure-image");
                } else if (currImg === 2) {
                    $(".slider-home").delay(400).addClass("business-image");
                    $(".slider-home").delay(400).removeClass("children-image");
                } else if (currImg === 3) {
                    $(".slider-home").delay(400).addClass("self-image");
                    $(".slider-home").delay(400).removeClass("business-image");
                } else if (currImg === 4) {
                    $(".slider-home").delay(400).addClass("romance-image");
                    $(".slider-home").delay(400).removeClass("self-image");
                } else if (currImg === 5) {
                    $(".slider-home").delay(400).addClass("mystery-image");
                    $(".slider-home").delay(400).removeClass("romance-image");
                }
                else if (currImg === 6) {
                    $(".slider-home").delay(400).addClass("adventure-image");
                    $(".slider-home").delay(400).removeClass("mystery-image");
                    currImg = 0;
                } else {
                    return;
                }
            }
        });
    }, []);

    return (

        <>

            <div className="max-w-7xl text-black mx-auto grid grid-cols-2 grid-rows-1 gap-2 py-24 mg:grid-cols-1 md:grid-rows-1 md:gap-2 md:py-16 md:px-10 sm:grid sm:grid-cols-1 sm:grid-rows-1 sm:gap-2 sm:py-10 sm:px-10 xs:grid xs:grid-cols-1 xs:grid-rows-1 xs:gap-2 xs:py-10 xs:px-10">
                <div>
                    <div>
                        <h2 className='text-[42px] font-extrabold md:text-[42px]  xs:text-[34px]'>Where Beautiful</h2>
                        <h1 className='text-[42px] xs:text-[34px] font-bold'><b>
                            <span id="typed-strings" className="bg-black p-2 text-green-600 uppercase">
                                <span>CHILDREN</span>
                                <span>business</span>
                                <span>Self Help</span>
                                <span>Romance</span>
                                <span>MYSTERY</span>
                                <span>Adventure</span>
                            </span>
                            <span id="typed" className="text-typed"></span>Books <br />
                            are Made</b>
                        </h1>
                        <p>Which book writing service is your need? You will find everything you are looking for, from professional writers to top marketers.</p>

                    </div>

                    <div className="display-block mt-6 cursor-pointer">
                                <Link href=" " data-fancybox="" data-src="#popupform" className="bg-[#62e389] border-[#62e389] text-[#07163f] hover:bg-[#62e389] hover:border-[#62e389] rounded hover:text-white mr-3 btn btn-green">
                                    Get Started <FontAwesomeIcon icon={faCaretRight} />
                                </Link>
                                <Link href=" " className="btn btn-black-border hover:bg-[#0a0c37] hover:text-white rounded-lg">
                                    Live Chat
                                </Link>
                            </div>
                    <div>
                        <ul className='grid grid-cols-4 grid-rows-1 gap-2 pt-5 items-center'>
                            <li><Image src='/assets/images/banner/trustpilot-reviews.png' width={150} height={150} alt="trustpilot-reviews" /></li>
                            <li><Image src='/assets/images/banner/google-customer-reviews.png' width={150} height={150} alt="google-customer-reviews"/></li>
                            <li><Image src='/assets/images/banner/reviews-trust.png' width={150} height={150} alt="reviews-trust"/></li>
                            <li><Image src='/assets/images/banner/writing.svg' width={100} height={100} alt="writing"/></li>
                        </ul>
                    </div>
                </div>
                <div >
                    <div className="svg-container sm:hidden xs:hidden">
                        <img className="img-full image-one image-children" id="svg-children" src="/assets/images/banner/slider-1.png" />
                        <img className="img-full image-two image-business" id="svg-business" src="/assets/images/banner/slider-2.png" />
                        <img className="img-full image-three image-self" id="svg-self" src="/assets/images/banner/slider-3.png" />
                        <img className="img-full image-four image-romance" id="svg-romance" src="/assets/images/banner/slider-4.png" />
                        <img className="img-full image-five image-mystery" id="svg-stery" src="/assets/images/banner/slider-5.png" />
                        <img className="img-full image-six image-adventure" id="svg-adventure" src="/assets/images/banner/slider-6.png" />
                    </div>
                </div>
            </div>




           
        </>

    );
}

export default Slider;
