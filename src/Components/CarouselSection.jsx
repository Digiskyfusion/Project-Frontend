import React from "react";
import Category from "./Category";
import { Link } from "react-router-dom";

function CarouselSection() {
  return (
    <div className="px-10 py-10">
      <div className="flex justify-between items-center mb-6">
        <div >
          <h1 className="text-2xl font-bold text-gray-900">Popular category </h1>
          <p className="text-black mt-2">2025 jobs live-200+ added  today</p>
        </div>
        <button className="bg-[#004930] text-white px-6 py-2 rounded-3xl hover:bg-opacity-80 transition">
      <Link to="/Subcatagory" >  View all Category</Link>
        </button>
      </div>
      <Category />
    </div>
  );
}

export default CarouselSection;
