import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FEATURED from '../component/AboutUS/featuredSec'
import WEARE from '../component/AboutUS/LetUsWEARE'
import IM from '../component/impressiveWorks1';
import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/LogoSlider'
import DM1 from '../component/demandingSpecilaist1'




const about = () => {
  return (
    <>
      <main>
        <FEATURED
          banneraffordable='aboutus'
          title='About US'
          dec={`Spread your work to the masses and shape your idea into a form of a best-selling book. Our experts work closely with you at every step.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href=" " className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
       <LogoSliders></LogoSliders>
        
        <IM />
        <DM1/>
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents/>
      </main>
    </>
  )
}

export default about
