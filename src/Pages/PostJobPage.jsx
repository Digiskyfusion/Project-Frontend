import React from 'react'
<<<<<<< HEAD
import PostJob from '../Components/PostJob'

function PostJobPage() {
=======
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
>>>>>>> 5bdeadc (Fresh start with clean code)
  return (
    <div>
      <PostJob />
    </div>
  )
}

export default PostJobPage
