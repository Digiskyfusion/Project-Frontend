import React from 'react'

import { useNavigate } from 'react-router-dom'
import Confused from '../Components/StarPlusPage/Confused';
import Footer from '../Components/Footer/Footer';
import Channel from '../Components/TvadvertisingPage/Channel';
import SelectTv from '../Components/TvadvertisingPage/SelectTv';

function TvAdvertisingPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage

  // Redirect to login if no token
  React.useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);
  return (
    <div className=''>
    <SelectTv />
      <Channel />
      <Confused />
      {/* <Content /> */}
      <Footer />
    </div>
  )
}

export default TvAdvertisingPage
