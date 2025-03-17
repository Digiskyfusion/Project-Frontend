import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const API_URL = import.meta.env.REACT_APP_API_URL;

const categoryImages = {
  "Digital Marketing": "../../assets/Images/digital-marketing.avif",
  "web-development": "/images/web-development.jpg",
  "graphic-design": "/images/graphic-design.jpg",
  "seo": "/images/seo.jpg",
  "content-writing": "/images/content-writing.jpg",
  // Add more categories as needed
};

function Category() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const API_URL = import.meta.env.REACT_APP_API_URL;
      console.log("API_URL");
      console.log(API_URL);
      try {
        const response = await axios.get(`${API_URL}/category/categories`);
        console.log("response");
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        console.log("data", data);
        setCategories(data || []);
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
    <div className="relative px-6 md:px-10 lg:px-20 py-10">
      <button
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#004930] p-3 rounded-full hover:bg-opacity-80 hidden md:flex"
        aria-label="Previous Slide"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <ChevronLeft size={24} color="white" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          540: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        onSwiper={setSwiperInstance}
        className="w-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center bg-[#004930] shadow-lg p-6 rounded-3xl">
            <div className="flex">
              <div className="border-2 p-2 rounded-full border-white flex items-center justify-center w-16 h-16 overflow-hidden bg-white">
                <img
                  loading="lazy"
                  src={categoryImages[category.name.toLowerCase()] || "/images/default.jpg"}
                  alt={category.name}
                  className="w-10 h-10 object-cover rounded-full flex-shrink-0"
                />
              </div>
            </div>
            <h1 className="text-xl text-white font-bold mt-4">{category.name}</h1>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#004930] p-3 rounded-full hover:bg-opacity-80 hidden md:flex"
        aria-label="Next Slide"
        onClick={() => swiperInstance?.slideNext()}
      >
        <ChevronRight size={24} color="white" />
      </button>
    </div>
  );
}

export default Category;
