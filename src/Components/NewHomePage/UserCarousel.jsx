import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const fallbackImage =
  "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740";

function UserCarousel() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null); // for in-view detection
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 }); // triggers when 30% is visible
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/user/all`);
        const data = await response.json();
        if (data && Array.isArray(data)) {
          const storedUser = JSON.parse(localStorage.getItem("user"));
          setCurrentUser(storedUser);

          const filtered = storedUser
            ? data.filter((user) =>
                storedUser.roleType === "freelancer"
                  ? user.roleType === "client"
                  : user.roleType === "freelancer"
              )
            : data;

          setUsers(filtered);
        } else {
          console.error("Invalid user data format", data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [API_URL]);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleSeeDetails = (id) => {
    navigate(`/profile/${id}`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-green-950 to-black py-10 px-4 sm:px-8 md:px-13 lg:px-8 text-white relative eb-garamond"
    >
      <div className="text-center space-y-5 mb-10">
        <h2 className="text-3xl font-bold text-center  tracking-wide">
        🌟 Connect. Collaborate. Create. 🌟
      </h2>
      <p className="text-sm md:text-xl">Your dream team is just a click away! Build your Virtual Talent Bench™ with top-tier freelancers who bring skill, speed, and creativity to your projects.</p>
      </div>

      {/* Carousel */}
      <div ref={scrollRef} className="overflow-x-auto scroll-smooth no-scrollbar">
        <div className="flex gap-8 min-w-max snap-x snap-mandatory px-2">
          {[...users].reverse().map((user, index) => (
            <motion.div
              key={user._id}
              className="relative snap-start shrink-0 w-64 text-center p-6 rounded-3xl border border-green-700 shadow-2xl transition-transform overflow-hidden bg-green-900 flex flex-col items-center"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="w-28 h-28 rounded-xl border-2 border-green-700 flex items-center justify-center overflow-hidden bg-green-800 mb-4">
                <img
                  src={user.image || fallbackImage}
                  alt={user.name}
                  className="w-full h-full object-fill opacity-80"
                />
              </div>
              <h3 className="font-semibold text-xl">{user.name}</h3>
              <p className="text-green-300 mb-6 text-lg">{user.roleType}</p>
              <button
                onClick={() => handleSeeDetails(user._id)}
                className="px-6 py-2 text-sm bg-gradient-to-r from-green-600 to-green-800 cursor-pointer text-white rounded-full hover:from-green-500 hover:to-green-700 transition-all"
              >
                See Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          onClick={() => scroll("left")}
          className="bg-green-800 hover:bg-green-700 cursor-pointer text-white px-4 py-2 rounded-full shadow-md"
        >
          ⬅ Prev
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-green-800 hover:bg-green-700 cursor-pointer text-white px-4 py-2 rounded-full shadow-md"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default UserCarousel;
