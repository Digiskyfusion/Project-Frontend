import React, { useEffect, useState } from 'react'
import starplus from './../assets/Images/starplus.png';
import { useNavigate } from 'react-router-dom';
import Advertising from '../Components/AdvertisingPage/Advertising';
import VideoCarousel from '../Components/AdvertisingPage/VideoCarousel';
import Ads from '../Components/AdvertisingPage/Ads';
import Footer from '../Components/Footer/Footer';
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
function AdvertisingPage() {
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
    <div>
        {roleType === "freelancer" ? (
      <Header1 />
    ) : roleType === "client" ? (
      <Header2 />
    ) : (
      <HeaderGlobal />
    )}
      <Advertising name="Star Plus"  image={starplus} first="121.3M" firstone="Monthly Cume Reach" second="80M+" secondone="Daily Active Viewers" about="About Advertising in STAR Plus" para="Bring your brand into the spotlight! With DigiSkyFusion, reach millions of families watching Star Plus. From ads to social media – we make your business a household name!."/> 
      <h1 className='text-sm md:text-xl lg:text-3xl font-bold '>Top Choice</h1>
      <VideoCarousel video="Video Ad" contentone="Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds." contenttwo="These ads are displayed on various platforms and can be skippable or non-skippable depending on the ad format. Advertisers use these ads to reach a larger audience and increase brand awareness." rate="₹20,328 Per Second" linkone="https://www.youtube.com/embed/evI0TjpAyHI" linktwo="https://www.youtube.com/embed/Yj1N7oz8pE8" linkthree="https://www.youtube.com/embed/Cp1aFQMYTAY" />
      <Ads />
      <Footer />
    </div>
  )
}

export default AdvertisingPage
