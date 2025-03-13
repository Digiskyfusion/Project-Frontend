import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer';
import first from './../../assets/Images/first.png';
import secondimage from './../../assets/Images/a-modern-and-elegant-portfolio-website-homepage-fo 2.png';
import thiredimage from './../../assets/Images/a-modern-and-stylish-e-commerce-fashion-website-ho 1.png';
import fourthimage from './../../assets/Images/a-modern-and-luxurious-cosmetics-brand-website-hom 2.png';

function CardsProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect if not authenticated
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser._id) {
      fetchUserData(storedUser._id);
    }
  }, []);

  // Fetch user data from the backend
  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/getclientprofile/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const projects = [
    { img: secondimage, title: 'Project 1' },
    { img: thiredimage, title: 'Project 2' },
    { img: fourthimage, title: 'Project 3' }
  ];

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-4 mb-4">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pb-4 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img src={first} alt="Profile" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#004930]" />
              <div className="text-center sm:text-left">
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">{user.name}</h1>
                <p className="text-sm text-gray-600">{user.address || "Address not available"}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            <Link to="/livechat">
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#004930] to-[#006f4a] text-white font-semibold rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-[#004930] cursor-pointer">
                Chat Now
              </button>
            </Link>
          </div>

          {/* Bio Section */}
          <h1 className="text-lg font-semibold text-gray-900 mt-4">Bio</h1>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            {user.bio || "No bio available"}
          </p>

          {/* Client's Past Projects */}
          <div className="mt-6 py-5">
            <h1 className="text-lg font-semibold text-gray-900">Client’s Past Projects</h1>
          </div>

          {/* Project Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg">
                <img src={project.img} alt={project.title} className="w-full h-auto object-cover rounded-t-lg" />
                <div className="flex justify-center py-3 bg-[#004930] rounded-b-xl">
                  <button className="px-5 py-2 bg-gradient-to-r from-[#004930] to-[#006f4a] text-white font-medium rounded-lg shadow-md hover:bg-[#006f4a] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />  
    </>
  );
}

export default CardsProfile;
