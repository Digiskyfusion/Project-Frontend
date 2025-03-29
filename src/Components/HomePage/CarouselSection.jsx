import React from "react";
import { useNavigate } from "react-router-dom";
import Category from "../CategoryPage/Category";

function CarouselSection() {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    } else {
      navigate("/Freelancerprofile"); // Navigate to category page if token exists
    }
  };

  return (
    <div className="px-10 py-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Popular Skills</h1>
          <p className="text-black mt-2">2025 jobs live - 200+ added today</p>
        </div>
      <Category />
    </div>
  );
}

export default CarouselSection;
