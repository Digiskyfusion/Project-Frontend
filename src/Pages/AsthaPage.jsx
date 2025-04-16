import React, { useEffect, useState } from 'react'

import astha from './../assets/Images/aasta.png';
import Advertising from '../Components/AdvertisingPage/Advertising';
import VideoCarousel from '../Components/AdvertisingPage/VideoCarousel';
import Footer from '../Components/Footer/Footer';
import Ads from '../Components/AdvertisingPage/Ads';
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
function AsthaPage() {
     const [roleType, setRoleType] = useState(null);
              
                useEffect(() => {
                  const userData = localStorage.getItem("user"); // Get from localStorage
                  if (userData) {
                    try {
                      const parsedData = JSON.parse(userData); // Parse JSON string
                      console.log(parsedData);
                      
                      if (parsedData && parsedData.roleType) {
                        setRoleType(parsedData.roleType); // Set roleType state
                      }
                    } catch (error) {
                      console.error("Error parsing userInfo:", error);
                    }
                  }
                }, []);
  return (
    <>
     {roleType === "freelancer" ? (
          <Header1 />
        ) : roleType === "client" ? (
          <Header2 />
        ) : (
          <HeaderGlobal />
        )}
    <Advertising name="Astha" image={astha} first="138M" firstone="MONTHLY CUME REACH" second="HINDI" secondone="LANGUAGE OF ASTHA" about="About Advertising in Astha" para="Faith meets opportunity! Reach a devoted and spiritual audience through Aastha TV with DigiSkyFusion. Take your brand closer to hearts, minds—and homes. Start your digital journey today!
" />

<h1 className='text-sm md:text-xl lg:text-3xl font-bold md:pl-3 '>Top Choice</h1>
  <div className='md:flex'>
  <VideoCarousel video="Video Ad" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹9,438 Per Second" linkone="https://www.youtube.com/embed/evI0TjpAyHI" linktwo="https://youtu.be/iuXfn1GkiVE?si=qd68GHvdIZvZCgRQ" linkthree="https://youtu.be/iuXfn1GkiVE?si=qd68GHvdIZvZCgRQ" />

  <VideoCarousel video="L Band" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹63,480 Per Second" linkone="https://www.youtube.com/embed/evI0TjpAyHI" linktwo="https://youtu.be/iuXfn1GkiVE?si=qd68GHvdIZvZCgRQ" linkthree="https://youtu.be/iuXfn1GkiVE?si=qd68GHvdIZvZCgRQ" />


  </div>
  <Ads  />
  <Footer  />
    </>
  )
}

export default AsthaPage
