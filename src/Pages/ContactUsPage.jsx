
import ContactUs from "../Components/Contectus"
import Secondsection from '../Components/Secondsection'
import Mapcomponent from '../Components/Mapcomponent'
import Mapsection from '../Components/Mapsection'
import ContactForm from '../Components/ContactForm'
import Support from '../Components/Support'
import Footer from '../Components/Footer'
function ContactUsPages() {
  return (
    <>

    <div className=''>

        <ContactUs />
        <Secondsection />
        <div className='md:flex md:justify-between '>

            <div className='w-full px-5'>
                <Mapcomponent />
                <Mapsection  />
            </div>
            <div className='w-full '>
                <ContactForm />
            </div>
        </div>
        <Support />
    </div>
      <Footer />
    </>
  )
}

export default ContactUsPages
