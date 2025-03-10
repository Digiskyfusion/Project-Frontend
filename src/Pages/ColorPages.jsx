import React from 'react'
import Advertising from '../Components/Advertising'
import VideoCarousel from '../Components/VideoCarousel'
import colors from './../assets/Images/colors_logo.png';
import Footer from '../Components/Footer';
import Ads from '../Components/Ads';

import Video13 from "../assets/Videos/video13.mp4"
// import Video14 from "../assets/Videos/video14.mp4"
import Video15 from "../assets/Videos/video15.mp4"

// import Video16 from "../assets/Videos/video16.mp4"

function ColorPages() {
  return (
    <>
      <Advertising image={colors} first="138M" firstone="MONTHLY CUME REACH" second="HINDI" secondone="LANGUAGE OF COLORS" about="About Advertising in Colors" para="The channel which celebrates the color of every relationship, Colors TV is the go-to name for entertainment. Every show is made to inspire, from serials to reality shows each and every show on this channel is massively famous and has a very high engagement. Advertising with them powers up your brand by boosting brand visibility" />

      <h1 className='text-sm md:text-xl lg:text-3xl font-bold md:pl-3 '>Top Choice</h1>
        <div className='md:flex'>

        <VideoCarousel video="Video Ad" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹9,438 Per Second" linkone="https://youtu.be/4AxnLXdqRDI?si=r7vfNgexTmUPdD_a" linktwo="https://youtu.be/4AxnLXdqRDI?si=r7vfNgexTmUPdD_a" linkthree="https://youtu.be/4AxnLXdqRDI?si=r7vfNgexTmUPdD_a" />

        <VideoCarousel video="L Band" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹63,480 Per Second" linkone="https://youtu.be/4AxnLXdqRDI?si=r7vfNgexTmUPdD_a" linktwo="https://youtu.be/4AxnLXdqRDI?si=r7vfNgexTmUPdD_a" linkthree="https://youtu.be/4AxnLXdqRDI?si=r7vfNgexTmUPdD_a" />

        <VideoCarousel video="Video Ad" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹9,438 Per Second" linkone={Video13} linktwo={Video15} linkthree={Video13} />

        <VideoCarousel video="L Band" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹63,480 Per Second" linkone={Video13} linktwo={Video15} linkthree={Video13} />

   
        </div>
        <Ads />
        <Footer />
    </>
  )
}

export default ColorPages
