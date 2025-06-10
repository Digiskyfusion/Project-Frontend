import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobSection from "../Components/JobSection/AllJobs";
import Header2 from "../Components/Client/Header";
import Footer from "../Components/Footer/Footer";

function AllJobsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]);

  return (
    <div>
    <Header2 />
    <JobSection />
    <Footer />
    </div>
  );
}

export default AllJobsPage;
