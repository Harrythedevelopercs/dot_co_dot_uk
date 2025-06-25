import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, } from "@fortawesome/free-solid-svg-icons";


const ghostWriting = () => {
  return (
    <>
       <section className="immaculate achieve bg-cover mb-8 pb-20 bg-custom1" style={{ backgroundImage: "url('/assets/images/newimg/immaculate.png')" }}>
      <div className="container max-w-7xl text-white py-16 px-5">
        <div className="heading text-left mb-5">
          <h6>Our Comprehensive</h6>
          <h2 className='text-4xl font-bold'>Ghostwriting Services</h2>
          <p className='text-lg'>
            We have a vast pool of ghostwriters and will work with you to find the best match for your needs. You will receive a PR and media campaign, an audiobook with a professional voice actor, and high-quality studio production. Finally, distribution and retailer accounts will be established in your name, ensuring you own all rights and royalties.
          </p>
          <p className='text-lg'>
            Our process is simple and aims to deliver flawless results for every project.
          </p>
        </div>
        <ul className="grid grid-cols-2 space-y-3">
          <li><img src="/assets/images/newimg/color-check.png" alt="Checkmark" className="inline-block mr-2" />Writing Genuine Content based on your idea</li>
          <li><img src="/assets/images/newimg/color-check.png" alt="Checkmark" className="inline-block mr-2" />Critical Review, Editing, and Proofreading</li>
          <li><img src="/assets/images/newimg/color-check.png" alt="Checkmark" className="inline-block mr-2" />Extensive Formatting, Typesetting, &amp; Designing</li>
          <li><img src="/assets/images/newimg/color-check.png" alt="Checkmark" className="inline-block mr-2" />Publishing, Branding, Marketing, and Promotions</li>
          <li><img src="/assets/images/newimg/color-check.png" alt="Checkmark" className="inline-block mr-2" />Critical Review and Analysis</li>
          <li><img src="/assets/images/newimg/color-check.png" alt="Checkmark" className="inline-block mr-2" />Book Coaching</li>
          <li><img src="/assets/images/newimg/color-check.png" alt="Checkmark" className="inline-block mr-2" />Copy Editing</li>
          <li><img src="/assets/images/newimg/color-check.png" alt="Checkmark" className="inline-block mr-2" />Developmental Editing</li>
        </ul>
        <div className="display-block mt-6 cursor-pointer text-center">
            <Link href=" " data-fancybox="" data-src="#popupform" className="bg-[#62e389] border-white text-[#07163f] hover:bg-transparent hover:border-[#62e389] rounded-lg hover:text-white mr-3 btn btn-green">
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

export default ghostWriting
