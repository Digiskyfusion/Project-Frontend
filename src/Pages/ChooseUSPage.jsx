
import Footer from '../Components/Footer/Footer'
import ThirdSectionFirst from "../Components/ChoosePage/ThirdSectionFirst"
import Thirdsection from "../Components/ChoosePage/Thirdsection"
import Thirdsectionfivth from "../Components/ChoosePage/Thirdsectionfivth"
import ProjectSection from "../Components/ChoosePage/ProjectSection"
import MeetFreelancer from '../Components/HomePage/MeetFreelancer'
import Fourthsectionfour from '../Components/AboutusPage/Fourthsectionfour'
function ChooseUSPage() {
  return (
    <div>
    <ThirdSectionFirst />
      <MeetFreelancer />
      <ProjectSection />
      <Thirdsection />
      <Fourthsectionfour />
      <Thirdsectionfivth />
      <Footer />
    </div>
  )
}

export default ChooseUSPage
