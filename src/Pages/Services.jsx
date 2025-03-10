
<<<<<<< HEAD
import Platform from '../Components/Platform'
import Employ from '../Components/Employ'
import CarouselSection from '../Components/CarouselSection'
import FullJobCard from '../Components/FullJobCard'
import SecondReviews from '../Components/SecondReviews'
import Footer from '../Components/Footer'
=======
import SecondReviews from "../Components/AboutusPage/SecondReviews"
import Footer from "../Components/Footer/Footer"
import CarouselSection from "../Components/HomePage/CarouselSection"
import Employ from "../Components/ServicePage/Employ"
import FullJobCard from "../Components/ServicePage/FullJobCard"
import Platform from "../Components/ServicePage/Platform"


>>>>>>> 5bdeadc (Fresh start with clean code)

function Services() {
  return (
    <>

    <div>

        <Platform />
        <Employ />
        <CarouselSection />
        <FullJobCard />
        <SecondReviews />
        <Footer />
    </div>
      
    </>
  )
}

export default Services
