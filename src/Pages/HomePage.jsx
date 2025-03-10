import React from 'react'
<<<<<<< HEAD
import FirstSection from '../Components/FirstSection'
import Secondsection from '../Components/Secondsection'
import Card from "../Components/Card"
import Work from '../Components/Work'
import ReviewSection from '../Components/ReviewSection'
import Category from '../Components/Category'
import MeetFreelancer from '../Components/MeetFreelancer'
import CarouselSection from '../Components/CarouselSection'
import Footer from '../Components/Footer'
import SolarSystem from '../Components/SolarSystem'
=======

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

>>>>>>> 5bdeadc (Fresh start with clean code)
function HomePage() {
  return (
    <>

    <div className=''>
        <FirstSection />
        <Secondsection />
<<<<<<< HEAD
        <Card />
=======
        <MembershipPlans />
>>>>>>> 5bdeadc (Fresh start with clean code)
        <SolarSystem />
        <Work />
        <ReviewSection />
        <CarouselSection />
        <MeetFreelancer />
        <Footer />
    </div>
      
    </>
  )
}

export default HomePage
