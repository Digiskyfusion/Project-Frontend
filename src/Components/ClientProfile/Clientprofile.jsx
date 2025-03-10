import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Ellipse from './../../assets/Images/Ellipse 122.png';


function ClientProfile() {
  const [rating, setRating] = useState(0);
  const cards = [...Array(15)];

  return (
    <div>
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {cards.reduce((sections, _, index) => {
        if (index % 3 === 0) sections.push(cards.slice(index, index + 3));
        return sections;
      }, []).map((section, sectionIndex) => (
        <div key={sectionIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 max-w-6xl">
          {section.map((_, cardIndex) => (
            <div key={cardIndex} className="bg-white p-6 rounded-2xl shadow-xl text-center">
              <img src={Ellipse} alt="Profile" className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300" />
              <h1 className="text-xl font-semibold mt-4">Name: -----</h1>
              <hr className="border-gray-300 my-2 mt-6" />

              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-700">Review</h2>
                <div className="flex justify-center mt-2">
                  {[...Array(6)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-xl cursor-pointer ${
                        index < rating ? "text-yellow-500" : "text-gray-400"
                      }`}
                      onClick={() => setRating(index + 1)}
                    >
                      {index < rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </p>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <button className="bg-[#004930] text-white px-4 py-2 rounded-2xl border-2 border-white shadow-md hover:bg-opacity-80 transition">
                 <Link to="/livechat">Chat Now</Link> 
                </button>
                <button className="bg-[#004930] text-white px-4 py-2 rounded-2xl border-2 border-white shadow-md hover:bg-opacity-80 transition">
                  <Link to="/clientDetails">Detail</Link> 
                </button>
              </div>
            </div>
          ))}
        </div>  
      ))}
    </div>
<Footer />
    </div>
  );
}

export default ClientProfile;
