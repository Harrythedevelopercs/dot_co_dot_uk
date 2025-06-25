import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import FEATURED from '../component/WebCopywritingServices/featuredSec'
import LHArticle from '../component/WebCopywritingServices/LetUsHelpWeb'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import LogoSliders from '../component/LogoSlider'


const WebCopywritingServices = () => {
  return (
    <>
      <main>

      <FEATURED
          banneraffordable='article'
          title='Develop your business with the outstanding skills and expertise of our web copywriters'
          dec={` Welcome to Barnett ghostwriting we offer professional web copywriting services, our web will work on taking your website to the next level with the help of our expert copy writers.`}
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

export default WebCopywritingServices;
