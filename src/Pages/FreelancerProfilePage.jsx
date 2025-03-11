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

  return (
    <div>
      <FreelancerNoUpadte />
      <Footer />
    </div>
  );
}

export default FreelancerProfilePage;
