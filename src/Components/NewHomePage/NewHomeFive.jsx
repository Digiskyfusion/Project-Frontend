import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar, FaRegStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReviewCarouselSection() {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const { ref, inView } = useInView({ triggerOnce: false });
  const animationControls = useAnimation();

  useEffect(() => {
    axios
      .get(`${API_URL}/review/allreview`)
      .then((response) => {
        const latestReviews = response.data.reverse().slice(0, 10);
        setReviews(latestReviews);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      animationControls.start({ opacity: 0, y: 50 });
    }
  }, [inView, animationControls]);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "40px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div
      ref={ref}
      animate={animationControls}
      initial={{ opacity: 0, y: 50 }}
      className="bg-[#003B2F] text-white py-13 px-4 sm:px-6 md:px-10 lg:px-20 eb-garamond"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">What Our Customers Say?</h1>
        <p className="max-w-2xl mx-auto text-sm  md:text-xl text-gray-200 font-medium">
          Your success is our priority! See what our users love about working with us: Seamless and efficient!
          Finding the right projects has never been this easy. Highly recommended!
        </p>
      </div>

      {/* Carousel */}
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review._id} className="px-2 sm:px-4 md:px-6">
            <div className="bg-[#084737] rounded-2xl p-6 border border-[#1c5d4b] text-center card-item transition-all duration-300 ease-in-out h-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{review.name}</h2>
              <div className="flex justify-center mb-2 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < review.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-100">
                “{review.comment}”
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Action Buttons */}
      <div className="mt-10 flex gap-2 justify-end sm:gap-4">
        <button
          onClick={() => navigate("/reviewslist")}
          className="py-2 px-6 bg-white text-[#004930] cursor-pointer font-semibold rounded-full hover:bg-gray-200 transition duration-300"
        >
          See More
        </button>
        <button
          onClick={() => navigate("/createreview")}
          className="py-2 px-6 bg-teal-500 text-white cursor-pointer font-semibold rounded-full hover:bg-teal-700 transition duration-300"
        >
          Write a Review
        </button>
      </div>

      {/* Custom Style */}
      <style jsx>{`
        .card-item {
          opacity: 0.6;
          transform: scale(0.9);
          transition: all 0.4s ease-in-out;
        }
        .slick-center .card-item {
          transform: scale(1.0);
          z-index: 1;
          opacity: 1;
          background-color: #0a5646;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </motion.div>
  );
}

export default ReviewCarouselSection;
