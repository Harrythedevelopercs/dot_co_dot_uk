import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FEATURED from '../component/marketing/featuredSec'
import WEARE from '../component/marketing/LetUsWEARE'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import PWMODE from '../component/marketing/ProcessWorkMode'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/LogoSlider'





const about = () => {
  return (
    <>
      <main>
        <FEATURED
          banneraffordable='aboutus'
          title='Providing Professional Online Book Marketing Services'
          dec={`We will market your books online to ensure that it sells and gains the exposure that you
          so badly deserve.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href=" " className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LogoSliders/>
        <HeaderContactForm/>
        <WEARE/>
        <PWMODE/>
        <CTA />
        <BTM />
        <WMODE />
       <SwiperComponents/>
      </main>
    </>
  )
}

export default about
