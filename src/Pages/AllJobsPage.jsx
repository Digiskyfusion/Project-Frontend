import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobSection from "../Components/JobSection/AllJobs";


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
    <JobSection />
    </div>
  );
}

export default AllJobsPage;
