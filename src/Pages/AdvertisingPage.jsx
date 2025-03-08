import React from 'react'
import Advertising from '../Components/Advertising'
import VideoCarousel from '../Components/VideoCarousel'
import Ads from '../Components/Ads'
import starplus from './../assets/Images/starplus.png';
import Footer from '../Components/Footer';

function AdvertisingPage() {
  return (
    <div>
      <Advertising  image={starplus} first="121.3M" firstone="Monthly Cume Reach" second="80M+" secondone="Daily Active Viewers" about="About Advertising in STAR Plus" para="The motto of maintaining the same relationship but with new thinking has made Star Plus a fan-favorite channel.From daily soaps to religious shows, Star Plus has always kept its audience glued to its content. Every show reflects a human story, making it more engaging. Advertising here strategically creates a lasting impact on audiences."/> 
      <h1 className='text-sm md:text-xl lg:text-3xl font-bold '>Top Choice</h1>
      <VideoCarousel video="Video Ad" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹20,328 Per Second" linkone="https://www.youtube.com/embed/evI0TjpAyHI" linktwo="https://www.youtube.com/embed/Yj1N7oz8pE8" linkthree="https://www.youtube.com/embed/Cp1aFQMYTAY" />
      <Ads />
      <Footer />
    </div>
  )
}

export default AdvertisingPage
