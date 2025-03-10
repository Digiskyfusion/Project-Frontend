

import ContactUs from '../Components/ContactusPage/ContactUs'
import Mapcomponent from '../Components/ContactusPage/Mapcomponent'
import Mapsection from '../Components/ContactusPage/mapsection'
import ContactForm from '../Components/ContactusPage/ContactForm'
import Support from '../Components/ContactusPage/Support'
import Footer from '../Components/Footer/Footer'
import Secondsection from '../Components/HomePage/Secondsection'
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
