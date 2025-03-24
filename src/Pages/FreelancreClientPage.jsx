import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FreelancerClientForm from "../Components/FreelancerClientPage/FreelancerClientForm";
import Footer from "../Components/Footer/Footer";
import Header1 from "../Components/Freelancer/Header";

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
    <Header1 />
      <FreelancerClientForm />
      <Footer />
    </div>
  );
}

export default FreelancreClientPage;
