import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dynamic from "next/dynamic";
import Head from 'next/head'
import HeaderContactForm from '../component/headerContactform'
import WS from '../component/writingservices';
import Slider1 from '../component/Slider1';
import LogoSliders from '../component/LogoSlider'
import DS1 from '../component/demandingSpecilaist1';
import IM1 from '../component/impressiveWorks1';
import BW1 from '../component/bookWriting1';
import BTM from '../component/bottomLogosNEW';
import WMODE1 from '../component/workMode1'
import MBOOK1 from '../component/marketBook1'
import CTA3 from '../component/cta3';
import CTA4 from '../component/cta4';
import TESTI from '../component/testimonials'
// import QS from '../component/AccordionLayout';
import SwiperComponents from '../component/SwiperComponent'




export default function Home() {
  return (

    <>
      <div className='mx-auto font-secondary'>
        <Slider1 />
        <LogoSliders/>
        
        <WS/>
        <DS1/>
        <IM1/>
        <BW1/>
        <CTA3/>
        <BTM/>
        <WMODE1/>
        <MBOOK1/>
        <CTA4/>
        <SwiperComponents></SwiperComponents>
        
      </div>



    </>


  )
}
