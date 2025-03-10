import React from 'react'
<<<<<<< HEAD
import Channel from '../Components/Channel'
import Confused from '../Components/Confused'
import Content from '../Components/Content'
import SelectTv from '../Components/SelectTv'
import Footer from '../Components/Footer'

function TvAdvertisingPage() {
=======

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
>>>>>>> 5bdeadc (Fresh start with clean code)
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
