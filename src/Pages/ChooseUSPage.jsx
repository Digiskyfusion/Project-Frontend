import React from 'react'
import ThirdSectionFirst from '../Components/ThirdSectionFirst'
import MeetFreelancer from '../Components/MeetFreelancer'
import ProjectSection from '../Components/ProjectSection'
import Fourthsectionfour from '../Components/Fourthsectionfour'
import Thirdsectionfivth from '../Components/Thirdsectionfivth'
import Thirdsectionseven from '../Components/Thirdsectionseven'
import Polo from '../Components/Polo'
import Footer from '../Components/Footer'
import Thirdsection from '../Components/Thirdsection'

function ChooseUSPage() {
  return (
    <div>
    <ThirdSectionFirst />
      <MeetFreelancer />
      <ProjectSection />
      <Thirdsection />
      <Fourthsectionfour />
      <Thirdsectionfivth />
      {/* <Polo /> */}
      {/* <Thirdsectionseven />  */}
      <Footer />
    </div>
  )
}

export default ChooseUSPage
