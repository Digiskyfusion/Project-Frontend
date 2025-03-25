import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FreelancerClientForm from "../Components/Freelancer/ProfileVerification";
import Footer from "../Components/Footer/Footer";


function FreelancreClientPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]);

  return (
    <div>
      <FreelancerClientForm />
      <Footer />
    </div>
  );
}

export default FreelancreClientPage;
