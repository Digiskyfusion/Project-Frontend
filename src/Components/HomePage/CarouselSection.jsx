import React from "react";
import Category from "../CategoryPage/Category";

function CarouselSection() {
  
  return (
    <div className="px-10 py-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Popular Skills</h1>
          <p className="text-black mt-2">2025 jobs live - 200+ added today</p>
        </div>
      <Category />
    </div>
  );
}

export default CarouselSection;
