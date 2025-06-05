import React from 'react'
import DiscoverHire from '../Components/DiscoverPage/Discoverhire'
import Footer from '../Components/Footer/Footer'
import HeaderGlobal from "../Components/Header"; // Import Global Header
function DiscoverHirePage() {
  return (
    <div>
     <HeaderGlobal />
      <DiscoverHire />
      <Footer />
    </div>
  )
}

export default DiscoverHirePage
