import React from 'react'
import Advertising from '../Components/AdvertisingPage/Advertising'
import ajtak from './../assets/Images/ajtak.png';
import VideoCarousel from '../Components/AdvertisingPage/VideoCarousel';
import Footer from '../Components/Footer/Footer';
import Ads from '../Components/AdvertisingPage/Ads';
import { useNavigate } from 'react-router-dom';



function AjTakPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage

  // Redirect to login if no token
  React.useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);
  return (
    <div>
      <Advertising image={ajtak} first="186.1M " firstone="MONTHLY CUME REACH" second="HINDI" secondone="LANGUAGE OF AAJ TAK" about="About Advertising in Aaj Tak" para="The channel of every household, Aaj Tak is considered one of the first choice news channels by the viewer for getting accurate information regarding any event. It covers the latest news in Politics, Entertainment, Bollywood, Business, and Sports. Advertising with them powers up your brand by boosting brand visibility and creating awareness." />
      <h1 className='text-sm md:text-xl lg:text-3xl font-bold md:pl-3 '>Top Choice</h1>
        <div className='md:flex'>
        <VideoCarousel video="Video Ad" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹20,328 Per Second" linkone="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" linktwo="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" linkthree="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" />

        <VideoCarousel video="L Band" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹20,700 Per Second" linkone="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" linktwo="https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8" linkthree='https://youtu.be/uEgbb5VyNmk?si=11_SDCC-Klezjxr8' />
   
        </div>
        <Ads />
        <Footer />
    </div>
  )
}

export default AjTakPage
