import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FEATURED from '../component/editing/featuredSec'
import WEARE from '../component/editing/LetUsWEARE'
import HeaderContactForm from '../component/headerContactformNew';
import WMODE from '../component/workMode1'
import PWMODE from '../component/editing/CoverDesign'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/LogoSlider'






const editing = () => {
  return (
    <>
      <main>
        <FEATURED
          banneraffordable='aboutus'
          title='An Editing Process That Leads To Perfection In Every Page'
          dec={`An ideal editing process that creates perfect work, editing is an important aspect of writing and crafting an amazing book. Our editors are well trained in the art of perfecting a novel or a book.`}
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
        <SwiperComponents />
      </main>
    </>
  )
}

export default editing
