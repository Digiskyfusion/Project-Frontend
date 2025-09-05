import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/Images/userimage.png";

function Carousel() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/user/all`);
        const data = await response.json();

        if (data && Array.isArray(data)) {
          const storedUser = JSON.parse(localStorage.getItem("user"));
          console.log("Stored User:", storedUser);

          if (storedUser) {
            setCurrentUser(storedUser);

            // Filter users based on logged-in user's role
            const filteredUsers = data.filter(user => 
              storedUser.roleType === "freelancer" ? user.roleType === "client" : user.roleType === "freelancer"
            );
            setUsers(filteredUsers);
          } else {
            // If no user is logged in, show all users
            setUsers(data);
          }
        } else {
          console.error("Invalid user data format", data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [API_URL]);

  const handleSeeDetails = (id) => navigate(`/profile/${id}`);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div
      className="w-full py-10 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Slider ref={sliderRef} {...settings}>
        {users.map(({ _id, name, roleType, user_image }, index) => (
          <motion.div
            key={_id || index}
            className="p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-5">
              <img
                src={user_image || image}
                alt={name}
                className="w-24 h-24 object-cover rounded-full border-2 border-[#004930]"
              />
              <h1 className="text-lg font-semibold text-[#004930] mt-3">{name}</h1>
              <p className="text-sm text-gray-500">{roleType}</p>
              <motion.button
                className="mt-4 px-4 py-2 bg-[#004930] text-white rounded-full text-sm font-medium shadow-md hover:bg-teal-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                onClick={() => handleSeeDetails(_id)}
              >
                See Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </Slider>

      {/* Prev & Next Buttons */}
      <div className="text-center mt-4 flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-[#004930] text-white rounded-full text-sm font-medium shadow-md hover:bg-teal-700 transition duration-300"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-[#004930] text-white rounded-full text-sm font-medium shadow-md hover:bg-teal-700 transition duration-300"
          onClick={() => sliderRef.current?.slickNext()}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}

export default Carousel;
