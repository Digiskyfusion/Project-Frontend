import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// Images
import digtlBg from "./../../assets/Images/Rectangle 361 (1).png";
import digtlIcon from "./../../assets/Images/a-realistic-digital-illustration-of-a-professional 1.png";
import grphBg from "./../../assets/Images/graphic-designing.png";
import grphIcon from "./../../assets/Images/a-realistic-close-up-image-of-a-woman-sitting-at-a 1.png";
import webDevBg from "./../../assets/Images/Rectangle 365.png";
import webDevIcon from "./../../assets/Images/a-realistic-office-scene-with-two-women-collaborat 1.png";
import conwrtBg from "./../../assets/Images/Rectangle 367.png";
import conwrtIcon from "./../../assets/Images/content-writing.png";
import infcrmrkitngBg from "./../../assets/Images/a-realistic-digital-illustration-of-a-young-woman- (1) 1.png";
import infcrmrktingIcon from "./../../assets/Images/a-realistic-digital-illustration-of-a-young-woman- (1) 1.png";
import devBg from "./../../assets/Images/a-realistic-digital-illustration-of-two-profession (1) 1.png";
import devIcon from "./../../assets/Images/a-realistic-digital-illustration-of-two-profession (1) 1.png";

const skills = [
  {
    title: "Digital Marketing",
    background: digtlBg,
    image: digtlIcon,
  },
  {
    title: "Graphic Designing",
    background: grphBg,
    image: grphIcon,
  },
  {
    title: "Video Editing",
    background: webDevBg,
    image: webDevIcon,
  },
  {
    title: "Content Writing",
    background: conwrtBg,
    image: conwrtIcon,
  },
  {
    title: "Influencer Marketing",
    background: infcrmrkitngBg,
    image: infcrmrktingIcon,
  },
  {
    title: "Development",
    background: devBg,
    image: devIcon,
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const NewHomeThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-12 px-6 bg-white eb-garamond"
    >
      <h2 className="text-3xl font-semibold text-green-900 mb-2">Popular Skills</h2>
      <p className="text-black mb-8 font-medium text-xl">2025 jobs live - 200+ added today</p>

      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <Link to={`/skills/${encodeURIComponent(skill.title)}`}>
              <div
                className="relative overflow-hidden rounded-xl shadow-md group w-64 h-[296px]
                           transition-transform duration-500 ease-in-out hover:scale-[1.05]"
              >
                {/* Background Image */}
                <img
                  src={skill.background}
                  alt={`${skill.title} background`}
                  className="absolute inset-0 w-full h-full object-cover z-0 
                             transition-transform duration-700 ease-in-out 
                             group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Foreground Image */}
                <div
                  className="relative z-20 mx-auto mt-4 mb-4 ml-9 inline-block
                             border-1 border-white rounded-lg
                             transition-transform duration-500 ease-in-out group-hover:scale-110"
                >
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-auto max-h-64 object-contain block rounded-lg"
                  />
                </div>

                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                  <h3
                    className="text-white text-xl font-semibold text-center px-4 py-2 rounded-md
                               opacity-90 transition-all duration-500 ease-in-out
                               group-hover:opacity-100 group-hover:-translate-y-1"
                  >
                    {skill.title}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="custom-pagination mt-10 gap-3 flex justify-center" aria-label="Carousel Pagination"></div>
    </motion.section>
  );
};

export default NewHomeThree;
