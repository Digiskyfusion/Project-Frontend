import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Subcategory from '../Components/SubCategoryPage/Subcategory';


function SubCategoryPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Assuming authentication token is stored in localStorage

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div>
      <Subcategory />
      <Footer />
    </div>
  );
}

export default SubCategoryPage;
