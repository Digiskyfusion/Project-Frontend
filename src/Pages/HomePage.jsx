import React from 'react'
import FirstSection from '../Components/FirstSection'
import Secondsection from '../Components/Secondsection'
import Card from "../Components/Card"
import Work from '../Components/Work'
import ReviewSection from '../Components/ReviewSection'
import Category from '../Components/Category'
import MeetFreelancer from '../Components/MeetFreelancer'
import CarouselSection from '../Components/CarouselSection'
function HomePage() {
  return (
    <>

    <div>
        <FirstSection />
        <Secondsection />
        <Card />
        <Work />
        <ReviewSection />
        <CarouselSection />
        <MeetFreelancer />
    </div>
      
    </>
  )
}

export default HomePage
