import React, { useEffect, useState } from 'react'
import Advertising from '../Components/AdvertisingPage/Advertising'
import VideoCarousel from '../Components/AdvertisingPage/VideoCarousel'
import colors from './../assets/Images/colors_logo.png';
import Footer from '../Components/Footer/Footer';
import Ads from '../Components/AdvertisingPage/Ads';
import { useNavigate } from 'react-router-dom';
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header

function ColorPages() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage

  // Redirect to login if no token
  React.useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);
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
      <Advertising name="Colors" image={colors} first="138M" firstone="MONTHLY CUME REACH" second="HINDI" secondone="LANGUAGE OF COLORS" about="About Advertising in Colors" para="Lights, camera, customers! With DigiSkyFusion, turn TV views into real value. Run your ads on Colors and connect with entertainment-loving audiences ready to explore your brand." />

      <h1 className='text-sm md:text-xl lg:text-3xl font-bold md:pl-3 '>Top Choice</h1>
        <div className='md:flex'>
        <VideoCarousel video="Video Ad" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹9,438 Per Second" linkone="https://www.youtube.com/embed/evI0TjpAyHI" linktwo="https://youtu.be/iuXfn1GkiVE?si=qd68GHvdIZvZCgRQ" linkthree="https://youtu.be/iuXfn1GkiVE?si=qd68GHvdIZvZCgRQ" />

        <VideoCarousel video="L Band" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹63,480 Per Second" linkone="https://www.youtube.com/embed/evI0TjpAyHI" linktwo="https://www.youtube.com/embed/evI0TjpAyHI" linkthree="https://youtu.be/iuXfn1GkiVE?si=qd68GHvdIZvZCgRQ" />
   
        </div>
        <Ads />
        <Footer />
    </>
  )
}

export default ColorPages
