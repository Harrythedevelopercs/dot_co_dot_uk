import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FEATURED from '../component/printing/featuredSec'
import WEARE from '../component/printing/LetUsWEARE'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import PWMODE from '../component/printing/PublishingWorkMode'
import PUBLISHING from '../component/printing/publishing'
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
          title='Take your book where your audience is'
          dec={`With thousands of publishing options to consider, our team helps you identify the right platform for your book and guides you along the way as you publish your first bestseller.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link  href=" " className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LogoSliders></LogoSliders>
        <HeaderContactForm/>
        <PWMODE/>
        <PUBLISHING/>
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents/>
      </main>
    </>
  )
}

export default about
