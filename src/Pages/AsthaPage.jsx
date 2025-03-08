import React from 'react'
import Advertising from '../Components/Advertising'
import VideoCarousel from '../Components/VideoCarousel'
import astha from './../assets/Images/aasta.png';
import Footer from '../Components/Footer';
import Ads from '../Components/Ads';
import Video7 from "../assets/Videos/video7.mp4"
import Video8 from "../assets/Videos/video8.mp4"

import Video10 from "../assets/Videos/video10.mp4"
import Video11 from "../assets/Videos/video11.mp4"

function AsthaPage() {
  return (
    <>
    <Advertising image={astha} first="138M" firstone="MONTHLY CUME REACH" second="HINDI" secondone="LANGUAGE OF ASTHA" about="About Advertising in Astha" para="India’s leading socio-spiritual-cultural TV channel, Aastha TV, has extensive viewership across every age group. It involves spiritual disclosure programs, religious events, Ayurveda, Yoga, and Astrology that keep the audience engaged with the channel. Advertising here strategically creates a lasting impact on audiences and builds awareness for your brand." />

<h1 className='text-sm md:text-xl lg:text-3xl font-bold md:pl-3 '>Top Choice</h1>
  <div className='md:flex'>
  <VideoCarousel video="Video Ad" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹9,438 Per Second" linkone={Video7} linktwo={Video8} linkthree={Video7} />

  <VideoCarousel video="L Band" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹63,480 Per Second" linkone={Video10} linktwo={{Video11}} linkthree={Video10} />


  </div>
  <Ads  />
  <Footer  />
    </>
  )
}

export default AsthaPage
