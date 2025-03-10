<<<<<<< HEAD

import FreelancerNoUpadte from '../Components/FreelancerNoUpdate'
import Footer from '../Components/Footer'

function FreelancerProfilePage() {
=======
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import FreelancerNoUpadte from "../Components/FreelancerProfilePage/FreelancerNoUpdate";


function FreelancerProfilePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]);

>>>>>>> 5bdeadc (Fresh start with clean code)
  return (
    <div>
      <FreelancerNoUpadte />
      <Footer />
    </div>
<<<<<<< HEAD
  )
}

export default FreelancerProfilePage
=======
  );
}

export default FreelancerProfilePage;
>>>>>>> 5bdeadc (Fresh start with clean code)
