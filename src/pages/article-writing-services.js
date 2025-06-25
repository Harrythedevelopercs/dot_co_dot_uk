import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import FEATURED from '../component/ArticleWritingServices/featuredSec'
import LHArticle from '../component/ArticleWritingServices/LetUsHelpArticle'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'

import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/LogoSlider'



const Ghostwriting = () => {
  return (
    <>
      <main>

      <FEATURED
          banneraffordable='article'
          title='Result-Driven Article-Writing Services That Boost Your Online Image'
          dec={` Drive more customers, convert the existing ones into loyal customers, and create compelling articles that speak to what matters most to your target audience.`}
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
        <LHArticle/>
        <GhostWriting/>
        <CREATIVEGHOSTWRITERS/>
        <CTA/>
        <BTM/>
        <WMODE/>
        <SwiperComponents/>
        
      </main>
    </>
  )
}

export default Ghostwriting;
