import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FEATURED from '../component/CoverDesign/featuredSec'
import WEARE from '../component/CoverDesign/LetUsWEARE'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import PWMODE from '../component/CoverDesign/CoverDesign'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';

import BOOKCOVERS from '../component/CoverDesign/BookCovers'
import TAbNAVIGATION from '../component/CoverDesign/TabNavigateCovers'
import WORKON from '../component/CoverDesign/ProcessWorkMode'
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/LogoSlider'


const about = () => {
  return (
    <>
      <main>
        <FEATURED
          banneraffordable='aboutus'
          title='The Most Attractive Cover Designs To Gain The Attention
          Of Potential Readers.'
          dec={`Our creative designers understand the importance of creating attractive cover designs that compel the readers who might potentially want to see your book to purchase it.`}
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
        <BOOKCOVERS/>
        <TAbNAVIGATION/>
        <WORKON/>
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents/>
      </main>
    </>
  )
}

export default about
