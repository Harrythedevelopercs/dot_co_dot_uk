import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FEATURED from '../component/contactus/featuredSec'
import WEARE from '../component/blogs/LetUsWEARE'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import TAbNAVIGATION from '../component/blogs/TabNavigateCovers'
import LogoSliders from '../component/LogoSlider'
import Bloginners from '../component/Bloginner'
import ContactModel from '../component/ContactModel'
const blog = () => {
  return (
    <>
      <main>
      <FEATURED
          banneraffordable='aboutus'
          title='Witness Excellence By Working With The Top Industry
          Specialists'
          dec={`Your dream of becoming a successful author is our mission. Therefore, don't stay back; get ahold of us today.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href=" " className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <ContactModel></ContactModel>
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents/>
       
      </main>
    </>
  )
}

export default blog
