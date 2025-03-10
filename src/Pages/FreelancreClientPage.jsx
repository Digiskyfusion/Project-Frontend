<<<<<<< HEAD

import FreelancerClientForm from '../Components/FreelancerClientForm'
import Footer from '../Components/Footer'

function FreelancreClientPage() {
=======
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FreelancerClientForm from "../Components/FreelancerClientPage/FreelancerClientForm";
import Footer from "../Components/Footer/Footer";


function FreelancreClientPage() {
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
      <FreelancerClientForm />
      <Footer />
    </div>
<<<<<<< HEAD
  )
}

export default FreelancreClientPage
=======
  );
}

export default FreelancreClientPage;
>>>>>>> 5bdeadc (Fresh start with clean code)
