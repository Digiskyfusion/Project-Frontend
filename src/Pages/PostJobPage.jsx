import React from 'react'
import { useNavigate } from 'react-router-dom';
import PostJob from '../Components/PostJobPage/PostJob';
import Header2 from "../Components/Client/Header";
import Footer from "../Components/Footer/Footer";
function PostJobPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage

  // Redirect to login if no token
  React.useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);
  return (
    <>
      <Header2 />
    
    <div className='p-5 sm:p-0'>
     
      <PostJob />
      
    </div>
    <Footer />
    </>
  )
}

export default PostJobPage
