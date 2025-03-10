<<<<<<< HEAD
import React from 'react'
import ProfileCard from '../Components/ProfileCard'
import Footer from '../Components/Footer'


function AllFreelancerPage() {
  return (
    <>
    <div>
      <ProfileCard />
    </div>
    <Footer />
    </>
  )
}

export default AllFreelancerPage
=======
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../Components/AllFreelancerPage/ProfileCard";
import Footer from "../Components/Footer/Footer";


function AllFreelancerPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]);

  return (
    <>
      <div>
        <ProfileCard />
      </div>
      <Footer />
    </>
  );
}

export default AllFreelancerPage;
>>>>>>> 5bdeadc (Fresh start with clean code)
