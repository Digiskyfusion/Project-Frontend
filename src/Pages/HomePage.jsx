import React from 'react'

import Footer from '../Components/Footer/Footer'
import FirstSection from '../Components/HomePage/FirstSection'
import Secondsection from '../Components/HomePage/Secondsection'
import MembershipPlans from '../Components/HomePage/Card'
import SolarSystem from '../Components/HomePage/SolarSystem'
import Work from '../Components/HomePage/Work'
import ReviewSection from '../Components/HomePage/ReviewSection'
import CarouselSection from '../Components/HomePage/CarouselSection'
import MeetFreelancer from '../Components/HomePage/MeetFreelancer'
import Navbar from '../Components/Navbar/Navbar'

function HomePage() {
  return (
    <>

    <div className=''>
        <FirstSection />
        <Secondsection />
        {/* <Card /> */}
        <SolarSystem />
        <Work />
        {/* <ReviewSection /> */}
        <CarouselSection />
        <MeetFreelancer />
        <Footer />
    </div>
      
    </>
  )
}

export default HomePage
