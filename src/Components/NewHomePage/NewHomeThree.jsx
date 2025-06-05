import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";



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

const NewHomeThree = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-green-900 mb-2">
        Popular Skills
      </h2>
      <p className="text-black mb-8">2025 jobs live - 200+ added today</p>

      <Swiper
  slidesPerView={4}
  spaceBetween={20}
  loop={true} // Important for continuous autoplay
  autoplay={{
    delay: 3000, // 2 seconds
    disableOnInteraction: false, // Continue autoplay even after user interaction
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
            <div
              className="relative overflow-hidden rounded-xl shadow-md group w-64 h-74
                         transition-transform duration-500 ease-in-out
                         hover:scale-[1.05]"
            >
              {/* Background Image */}
              {skill.background && (
                <img
                  src={skill.background}
                  alt="background"
                  className="absolute inset-0 w-full h-full object-cover z-0 
                             transition-transform duration-700 ease-in-out 
                             group-hover:scale-110
                             filter backdrop-blur-sm"
                />
              )}

              {/* Foreground Image */}
              <div
                className="relative z-10 mx-auto mt-4 mb-4 ml-9 inline-block
             border-1 border-white rounded-lg
             transition-transform duration-500 ease-in-out group-hover:scale-110"
              >
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-auto max-h-64 object-contain block rounded-lg"
                />
              </div>

              {/* Title Over Image (Center) */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <h3
                  className="text-white text-xl font-semibold text-center px-4 py-2 rounded-md
                             opacity-90 transition-all duration-500 ease-in-out
                             group-hover:opacity-100 group-hover:-translate-y-1"
                >
                  {skill.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots below */}
      <div className="custom-pagination mt-10 gap-3 flex justify-center"></div>
    </section>
  );
};

export default NewHomeThree; 
