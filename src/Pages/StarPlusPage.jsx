import React from 'react'
<<<<<<< HEAD
import Starplus from '../Components/Starplus'
import Confused from '../Components/Confused'
import Footer from '../Components/Footer'

function StarPlusPage() {
=======

import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Confused from '../Components/StarPlusPage/Confused';
import Starplus from '../Components/StarPlusPage/Starplus';

function StarPlusPage() {
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
    <div>
      <Starplus />
      <Confused />
      <Footer />
    </div>
  )
}

export default StarPlusPage
