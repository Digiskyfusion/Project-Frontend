import React from 'react'
import Channel from '../Components/Channel'
import Confused from '../Components/Confused'
import Content from '../Components/Content'
import SelectTv from '../Components/SelectTv'
import Footer from '../Components/Footer'

function TvAdvertisingPage() {
  return (
    <div className=''>
    <SelectTv />
      <Channel />
      <Confused />
      <Content />
      <Footer />
    </div>
  )
}

export default TvAdvertisingPage
