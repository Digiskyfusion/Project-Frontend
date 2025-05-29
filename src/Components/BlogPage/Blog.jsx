import React from 'react';
import Footer from '../Footer/Footer';
import NavbarAlt from '../Header';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogs = [
    {
      picture: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg',
      title: 'The Future of Remote Hiring',
      date: 'May 29, 2025',
      tag: 'Remote Work',
    },
    {
      picture: 'https://img.freepik.com/free-photo/blog-website-development-data-network-concept_53876-125055.jpg',
      title: 'Building Better Tech Teams',
      date: 'May 21, 2025',
      tag: 'Team Building',
    },
    {
      picture: 'https://www.shutterstock.com/image-photo/blog-website-article-lifestyle-online-600nw-605950769.jpg',
      title: 'Trends in AI Recruitment',
      date: 'May 14, 2025',
      tag: 'AI Hiring',
    },
  ];

  return (
    <>
      <NavbarAlt />
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-r from-[#d1fae5] to-[#f0fdfa] px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#065f46] mb-4">
            Unlock the Power of Smart Hiring
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Discover the latest insights, stories, and strategies shaping the future of work.
          </p>
          <Link to="/">
            <button className="mt-8 bg-[#065f46] text-white cursor-pointer  px-8 py-3 rounded-full text-lg font-medium hover:bg-[#047857] transition">
            Read Our Insights
          </button>
          </Link>
        </section>

        {/* Blog Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={blog.picture}
                  alt="Blog"
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white text-[#065f46] font-semibold px-3 py-1 rounded-full text-xs shadow">
                  {blog.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
                <h3 className="text-2xl font-bold text-[#065f46] mb-2 group-hover:underline">
                  {blog.title}
                </h3>
                <p className="text-gray-600">
                  Learn how companies are reshaping recruitment with automation, culture-first hiring, and innovation.
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
