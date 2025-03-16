import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/Images/userimage.png";

function Carousel() {
  const [freelancers, setFreelancers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/freelancer/users")
      .then((response) => response.json())
      .then((data) => setFreelancers(data))
      .catch((error) => console.error("Error fetching freelancers:", error));
  }, []);

  const handleSeeDetails = () => {
    const userRole = localStorage.getItem("user"); // Browser se roleType get karna
    let userData = JSON.parse(userRole);
// console.log(userData.roleType)
    if (userData === "client") {
      navigate("/freelancerDetails");
    } else if (userData === "freelancer") {
      navigate("/clientDetails");
    }
  };

  const settings = {
    dots: true,
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
      <Slider {...settings}>
        {freelancers.map((freelancer, index) => (
          <motion.div
            key={index}
            className="p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-5">
              <img
                src={freelancer.user_image || image}
                alt={freelancer.name}
                className="w-24 h-24 object-cover rounded-full border-2 border-[#004930]"
              />
              <h1 className="text-lg font-semibold text-[#004930] mt-3">{freelancer.name}</h1>
              <p className="text-sm text-gray-500">{freelancer.roleType}</p>
              <motion.button
                className="mt-4 px-4 py-2 bg-[#004930] text-white rounded-full text-sm font-medium shadow-md hover:bg-teal-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                onClick={handleSeeDetails} // Button click pr roleType check karna
              >
                See Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
}

export default Carousel;
