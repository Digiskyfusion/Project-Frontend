import React from 'react'
import Advertising from '../Components/AdvertisingPage/Advertising'
import VideoCarousel from '../Components/AdvertisingPage/VideoCarousel'
import colors from './../assets/Images/colors_logo.png';
import Footer from '../Components/Footer/Footer';
import Ads from '../Components/AdvertisingPage/Ads';
import { useNavigate } from 'react-router-dom';

function ColorPages() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage

  // Redirect to login if no token
  React.useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);
  return (
    <>
      <Advertising image={colors} first="138M" firstone="MONTHLY CUME REACH" second="HINDI" secondone="LANGUAGE OF COLORS" about="About Advertising in Colors" para="The channel which celebrates the color of every relationship, Colors TV is the go-to name for entertainment. Every show is made to inspire, from serials to reality shows each and every show on this channel is massively famous and has a very high engagement. Advertising with them powers up your brand by boosting brand visibility" />

      <h1 className='text-sm md:text-xl lg:text-3xl font-bold md:pl-3 '>Top Choice</h1>
        <div className='md:flex'>
        <VideoCarousel video="Video Ad" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹9,438 Per Second" linkone="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" linktwo="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" linkthree="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" />

        <VideoCarousel video="L Band" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹63,480 Per Second" linkone="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" linktwo="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" linkthree="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" />
   
        </div>
        <Ads />
        <Footer />
    </>
  )
}

export default ColorPages
