import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TabNavigation = ({ activeTab, setActiveTab }) => {

  return (
    <ul className="flex max-w-7xl gap-x-6 md:gap-2 xs:gap-x-1 mx-auto justify-center xs:justify-start xs:mx-0 xs:overflow-x-scroll xs:py-5" role="tablist">
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's1' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a] focus:text-white'
            }`}
          onClick={() => setActiveTab('s1')}
          role="tab"
          aria-controls="s1"
          aria-selected={activeTab === 's1' ? 'true' : 'false'}
        >
          All&nbsp;Posts
        </a>
      </li>
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's2' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#707070] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s2')}
          role="tab"
          aria-controls="s2"
          aria-selected={activeTab === 's2' ? 'true' : 'false'}
        >
          Book&nbsp;Design
        </a>
      </li>
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's3' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s3')}
          role="tab"
          aria-controls="s3"
          aria-selected={activeTab === 's3' ? 'true' : 'false'}
        >
          Book&nbsp;Editing
        </a>
      </li>
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's4' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s4')}
          role="tab"
          aria-controls="s4"
          aria-selected={activeTab === 's4' ? 'true' : 'false'}
        >
          Book&nbsp;Marketing
        </a>
      </li>
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's5' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s5')}
          role="tab"
          aria-controls="s5"
          aria-selected={activeTab === 's5' ? 'true' : 'false'}
        >
          Book&nbsp;Publishing
        </a>
      </li>
      <li className="">
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's6' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s6')}
          role="tab"
          aria-controls="s6"
          aria-selected={activeTab === 's6' ? 'true' : 'false'}
        >
          From&nbsp;Our&nbsp;Authors
        </a>
      </li>
      <li>
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's7' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s7')}
          role="tab"
          aria-controls="s7"
          aria-selected={activeTab === 's7' ? 'true' : 'false'}
        >
          Ghostwriting&nbsp;Services
        </a>
      </li>
      <li>
        <a
          className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's7' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
            }`}
          onClick={() => setActiveTab('s8')}
          role="tab"
          aria-controls="s7"
          aria-selected={activeTab === 's8' ? 'true' : 'false'}
        >
          Perfecting&nbsp;Your&nbsp;Skills
        </a>
      </li>
    </ul>
  );
};

const ParentComponent = () => {
  const [activeTab, setActiveTab] = useState('s1');

  return (
    <div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />



      {/* Content for each tab */}
      {activeTab === 's1' && (
        <div className='container max-w-7xl text-[#1d1d1f] py-20'>
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-xl'>Fiction</h6>
              <h3 className='font-semibold text-5xl'>Top-ranked fiction writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-2 py-5 xs:w-[60%]'>
                <button className='bg-[#00C0E4] py-2 text-white'>Get Started</button>
                <button className='bg-transparent py-2 border-solid border-[1px] border-[#1d1d1f] text-[#1d1d1f]'>Live Chat</button>
              </div>
            </div>
            <div>
              <Image width={500} height={500} alt='' src='/assets/images/newimg/shalf-book.png'/>
            </div>

          </div>
        </div>
      )}
      {activeTab === 's2' && (
        <div className='container max-w-7xl text-[#1d1d1f] py-20'>
         
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-xl'> Content for Non Fiction</h6>
              <h3 className='font-semibold text-5xl'>Top-ranked fiction writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-2 py-5 xs:w-[60%]'>
                <button className='bg-[#00C0E4] py-2 text-white'>Get Started</button>
                <button className='bg-transparent py-2 border-solid border-[1px] border-[#1d1d1f] text-[#1d1d1f]'>Live Chat</button>
              </div>
            </div>
            <div>
              <Image width={500} height={500} alt='' src='/assets/images/newimg/shalf-book.png'/>
            </div>

          </div>
        </div>
      )}
      {activeTab === 's3' && (
        <div className='container max-w-7xl text-[#1d1d1f] py-20'>
         
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-xl'> Content for Biography</h6>
              <h3 className='font-semibold text-5xl'>Top-ranked fiction writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-2 py-5 xs:w-[60%]'>
                <button className='bg-[#00C0E4] py-2 text-white'>Get Started</button>
                <button className='bg-transparent py-2 border-solid border-[1px] border-[#1d1d1f] text-[#1d1d1f]'>Live Chat</button>
              </div>
            </div>
            <div>
              <Image width={500} height={500} alt='' src='/assets/images/newimg/shalf-book.png'/>
            </div>

          </div>
        </div>
      )}
      {activeTab === 's4' && (
        <div className='container max-w-7xl text-[#1d1d1f] py-20'>
          
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-xl'>Content for Informative</h6>
              <h3 className='font-semibold text-5xl'>Top-ranked fiction writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-2 py-5 xs:w-[60%]'>
                <button className='bg-[#00C0E4] py-2 text-white'>Get Started</button>
                <button className='bg-transparent py-2 border-solid border-[1px] border-[#1d1d1f] text-[#1d1d1f]'>Live Chat</button>
              </div>
            </div>
            <div>
              <Image width={500} height={500} alt='' src='/assets/images/newimg/shalf-book.png'/>
            </div>

          </div>
        </div>
      )}
      {activeTab === 's5' && (
        <div className='container max-w-7xl text-[#1d1d1f] py-20'>
          
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-xl'>Content for Autobiography</h6>
              <h3 className='font-semibold text-5xl'>Top-ranked fiction writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-2 py-5 xs:w-[60%]'>
                <button className='bg-[#00C0E4] py-2 text-white'>Get Started</button>
                <button className='bg-transparent py-2 border-solid border-[1px] border-[#1d1d1f] text-[#1d1d1f]'>Live Chat</button>
              </div>
            </div>
            <div>
              <Image width={500} height={500} alt='' src='/assets/images/newimg/shalf-book.png'/>
            </div>

          </div>
        </div>
      )}
      {activeTab === 's6' && (
        <div className='container max-w-7xl text-[#1d1d1f] py-20'>
         
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-xl'>Content for Memoir</h6>
              <h3 className='font-semibold text-5xl'>Top-ranked fiction writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-2 py-5 xs:w-[60%]'>
                <button className='bg-[#00C0E4] py-2 text-white'>Get Started</button>
                <button className='bg-transparent py-2 border-solid border-[1px] border-[#1d1d1f] text-[#1d1d1f]'>Live Chat</button>
              </div>
            </div>
            <div>
              <Image width={500} height={500} alt='' src='/assets/images/newimg/shalf-book.png'/>
            </div>

          </div>
        </div>
      )}
      {activeTab === 's7' && (
        <div className='container max-w-7xl text-[#1d1d1f] py-20'>
          
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-xl'>Content for Children Book</h6>
              <h3 className='font-semibold text-5xl'>Top-ranked fiction writing services</h3>
              <p>For this genre of compelling stories, engaging character dialogue and emotional story beats. You require the services of a fiction ghostwriter for hire. Our writers are adept at making the worlds of your stories come to life with the usage of story telling elements such as intensive world building, fascinating character motivations, intriguing plotting. This leads to our clients often times becoming best selling authors.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-2 py-5 xs:w-[60%]'>
                <button className='bg-[#00C0E4] py-2 text-white'>Get Started</button>
                <button className='bg-transparent py-2 border-solid border-[1px] border-[#1d1d1f] text-[#1d1d1f]'>Live Chat</button>
              </div>
            </div>
            <div>
              <Image width={500} height={500} alt='' src='/assets/images/newimg/shalf-book.png'/>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
