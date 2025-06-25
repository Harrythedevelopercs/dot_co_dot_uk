import React from 'react'
import Link from 'next/link'

const VideoSection = () => {
  return (
    <>
      <section className="video-test py-8">
    <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 xs:grid-cols-1 xs:p-2">
            <div className="col-span-1 md:col-span-1">
                <div className="rclient-item text-center relative">
                    <Link className="rc_play" data-fancybox="" href="https://www.youtube.com/watch?v=HvkOTriCo7U">
                        <span className="play_btn"></span>
                        <img src="/assets/images/newimg/vid1.png" alt="Pope Henrry" />
                    </Link>
                    <h3 className="mt-0 text-[22px] clear-both font-bold text-white mb-0 absolute w-[100%] text-center bottom-0 left-0 py-2 px-0 bg-[#56c9819e]">Pope Henrry</h3>                                                                   
                </div>
            </div>
            <div className="col-span-1 md:col-span-1">
                <div className="rclient-item text-center relative">
                    <Link className="rc_play" data-fancybox="" href="https://www.youtube.com/watch?v=kVYf-5b0LPw">
                        <span className="play_btn"></span>
                        <img src="/assets/images/newimg/vid2.png" alt="Mila Willow" />
                    </Link>
                    <h3 className="mt-0 text-[22px] clear-both font-bold text-white mb-0 absolute w-[100%] text-center bottom-0 left-0 py-2 px-0 bg-[#56c9819e]">Mila Willow</h3>
                </div>
            </div>
            <div className="col-span-1 md:col-span-1">
                <div className="rclient-item text-center relative">
                    <Link className="rc_play" data-fancybox="" href="https://www.youtube.com/watch?v=XommMsgfQHk">
                        <span className="play_btn"></span>
                        <img src="/assets/images/newimg/vid3.png" alt="Ella Alice" />
                    </Link>
                    <h3 className="mt-0 text-[22px] clear-both font-bold text-white mb-0 absolute w-[100%] text-center bottom-0 left-0 py-2 px-0 bg-[#56c9819e]">Ella Alice</h3>
                </div>
            </div>
        </div>
    </div>
</section>


    </>
  )
}

export default VideoSection
