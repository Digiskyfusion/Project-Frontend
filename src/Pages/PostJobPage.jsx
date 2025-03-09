import React from 'react'
import { useNavigate } from 'react-router-dom';
import PostJob from '../Components/PostJobPage/PostJob';

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
    <div>
      <PostJob />
    </div>
  )
}

export default PostJobPage
