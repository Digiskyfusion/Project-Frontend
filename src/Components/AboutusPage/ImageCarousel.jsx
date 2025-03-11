import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for navigation
import pic from './../../assets/Images/a-highly-realistic-image-of-a-confident-young-man- 2.png';


function ImageCarousel() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const categories = [
    { title: "Development & IT", jobs: "160 jobs", desc: "Frontend, Backend, Web and App Developer Jobs", img: pic },
    { title: "Design & Creative", jobs: "120 jobs", desc: "Graphic Design, UI/UX, Animation Jobs", img: pic },
    { title: "Marketing & Sales", jobs: "90 jobs", desc: "SEO, Content Marketing, Social Media Jobs", img: pic },
    { title: "Writing & Translation", jobs: "70 jobs", desc: "Copywriting, Blogging, Translation Jobs", img: pic },
    { title: "Development & IT", jobs: "160 jobs", desc: "Frontend, Backend, Web and App Developer Jobs", img: pic },
    { title: "Design & Creative", jobs: "120 jobs", desc: "Graphic Design, UI/UX, Animation Jobs", img: pic },
    { title: "Marketing & Sales", jobs: "90 jobs", desc: "SEO, Content Marketing, Social Media Jobs", img: pic },
    { title: "Writing & Translation", jobs: "70 jobs", desc: "Copywriting, Blogging, Translation Jobs", img: pic }
  ];

  return (
    <div className="relative px-20 py-10">
      {/* {/ Left Navigation Button /} */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#004930] p-3 rounded-full hover:bg-opacity-80"
        aria-label="Previous Slide"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <ChevronLeft size={24} color="white" className="cursor-pointer" />
      </button>

      {/* {/ Swiper Carousel with Autoplay /} */}
      <Swiper
        modules={[Navigation, Autoplay]} // Add Autoplay module
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Change slides every 3 seconds
          disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        onSwiper={setSwiperInstance}
        className="w-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide
            key={index}
            className="relative group flex flex-col items-center max-w-5xl bg-[#004930] shadow-lg rounded-3xl overflow-hidden"
          >
            {/* {/ Image /} */}
            <img loading="lazy"
              src={category.img}
              alt={category.title}
              className="w-full object-cover rounded-xl transition-transform transform duration-700 group-hover:scale-120 group-hover:opacity-30"
            />

            {/* {/ Text Overlay /} */}
            <div className="absolute inset-0 flex flex-col px-5 mt-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">{category.title}</h3>
              <p className="text-sm">{category.jobs}</p>
              <p className="text-xs mt-2">{category.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* {/ Right Navigation Button /} */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#004930] p-3 rounded-full hover:bg-opacity-80"
        aria-label="Next Slide"
        onClick={() => swiperInstance?.slideNext()}
      >
        <ChevronRight size={24} color="white" className="cursor-pointer" />
      </button>
    </div>
  );
}

export default ImageCarousel;
