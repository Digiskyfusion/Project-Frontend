import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; // Import framer-motion
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiInstagram, CiFacebook, CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import first from './../../assets/Images/first.png';
import secondMale from './../../assets/Images/male.png';
import female from './../../assets/Images/female.png';


function Carousel() {
  const slides = [
    { image: first, name: "Manish", role: "Backend Developer" },
    { image: female, name: "Manisha", role: "Frontend Developer" },
    { image: secondMale, name: "Aman", role: "UI/UX Designer" },
    { image: female, name: "Priya Soni", role: "Full Stack Developer" },
    { image: first, name: "Karan Sharma", role: "Project Manager" },
    { image: female, name: "Parmeet Kaur", role: "Graphic Designer" },
    { image: female, name: "Jasmeen Kaur", role: "Content Writer" },
    { image: first, name: "Akash", role: "DevOps Engineer" },
    { image: female, name: "Ishita", role: "QA Engineer" },
  ];

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
      initial={{ opacity: 0, y: 50 }} // Page scroll animation
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="p-4"
            initial={{ opacity: 0, scale: 0.9 }} // Fade-in & scale-up effect
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }} // Scale up the entire slide on hover
          >
            {/* {/ Image Card with z-index -1 /} */}
            <div
              className="relative bg-cover bg-center h-72 rounded-t-2xl shadow-lg z-[-1] transition-transform transform group"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* {/ Hover effect for the image (tilt on hover) /} */}
              <motion.div
                className="absolute top-4 right-4 flex flex-col gap-3 z-10"
                whileHover={{ rotate: -10 }} // Tilt icons on hover
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-[#004930] p-2 rounded-full text-white text-2xl cursor-pointer hover:bg-teal-700 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <CiInstagram />
                </motion.div>
                <motion.div
                  className="bg-[#004930] p-2 rounded-full text-white text-2xl cursor-pointer hover:bg-teal-700 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <CiFacebook />
                </motion.div>
                <motion.div
                  className="bg-[#004930] p-2 rounded-full text-white text-2xl cursor-pointer hover:bg-teal-700 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <CiTwitter />
                </motion.div>
                <motion.div
                  className="bg-[#004930] p-2 rounded-full text-white text-2xl cursor-pointer hover:bg-teal-700 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaLinkedin />
                </motion.div>
              </motion.div>
            </div>

            {/* {/ Name & Role /} */}
            <div className="text-center bg-[#004930] rounded-b-md py-5 z-10">
              <h1 className="text-xl font-semibold text-white">{slide.name}</h1>
              <p className="text-gray-300">{slide.role}</p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
}

export default Carousel;
