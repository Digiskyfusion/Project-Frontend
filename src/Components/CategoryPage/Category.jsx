import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import image from './../../assets/Images/146880.jpg';

const API_URL = import.meta.env.VITE_API_URL;

const categoryImages = {
  "digital-marketing": image,
  "web-development": "/images/web-development.jpg",
  "graphic-design": "/images/graphic-design.jpg",
  "seo": "/images/seo.jpg",
  "content-writing": image,
};

function Category() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/category/categories`);
        setCategories(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <p className="text-center text-white">Loading categories...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="relative px-4 md:px-10 lg:px-20 py-6 md:py-10">
      {/* Left Arrow Button */}
      <button
        className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#D3D3D3] p-2 md:p-4 rounded-full shadow-lg hover:bg-gray-400 flex items-center justify-center transition-all duration-300"
        aria-label="Previous Slide"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <ChevronLeft size={20} className="text-black" />
      </button>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={1}
        breakpoints={{
          360: { slidesPerView: 1.1 },
          540: { slidesPerView: 1.3 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        onSwiper={setSwiperInstance}
        className="w-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center bg-[#004930] shadow-lg p-4 md:p-6 rounded-3xl">
            <div className="flex">
              <div className="border-2  rounded-full border-white flex items-center justify-center w-12 md:w-16 h-12 md:h-16 overflow-hidden bg-white">
                <img
                  loading="lazy"
                  src={categoryImages[category.name.toLowerCase().replace(/\s+/g, "-")] || image}
                  alt={category.name}
                  className="w-8 md:w-16 h-8 md:h-16 object-cover rounded-full flex-shrink-0"
                />
              </div>
            </div>
            <h1 className="text-lg md:text-xl text-white font-bold mt-2 md:mt-4">{category.name}</h1>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Arrow Button */}
      <button
        className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#D3D3D3] p-2 md:p-4 rounded-full shadow-lg hover:bg-gray-400 flex items-center justify-center transition-all duration-300"
        aria-label="Next Slide"
        onClick={() => swiperInstance?.slideNext()}
      >
        <ChevronRight size={20} className="text-black" />
      </button>
    </div>
  );
}

export default Category;
