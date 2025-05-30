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
      text:"In today’s world, you don’t need a fancy degree to start earning. Whether you're a 10th or 12th pass student, a college-goer, or just someone looking for a flexible income, online jobs are a game-changer. And the best part? Platforms like DIGISKY.ai make it easier than ever to find genuine work from home opportunities and freelance projects in India."
    },
    {
      picture: 'https://img.freepik.com/free-photo/blog-website-development-data-network-concept_53876-125055.jpg',
      title: 'Building Better Tech Teams',
      date: 'May 21, 2025',
      tag: 'Team Building',
      text:"Gone are the days when you had to rely on traditional jobs. Now, with just a phone or laptop and internet connection, you can start earning by doing tasks like data entry, content writing, digital marketing, customer support, and more. DIGISKY.ai is designed especially for beginners and students—those who want to work on real projects, build experience, and get paid on time."
    },
    {
      picture: 'https://www.shutterstock.com/image-photo/blog-website-article-lifestyle-online-600nw-605950769.jpg',
      title: 'Trends in AI Recruitment',
      date: 'May 14, 2025',
      tag: 'AI Hiring',
      text:"Unlike crowded platforms where beginners struggle to get noticed, DIGISKY.ai focuses on connecting fresh talent with businesses that value skill over degrees. So whether you’re searching for 12th pass jobs, jobs for 10th pass, or simple work from home for students, you’ll find tailored listings that match your level and interest."
    },
  ];

  return (
    <>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-r from-[#d1fae5] to-[#f0fdfa] px-2 md:px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#065f46] mb-4">
            Unlock the Power of Smart Hiring
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          No Degree? No Problem! Start Earning with Online Jobs & Freelancing on DIGISKY.ai

          </p>
          <Link to="/">
            <button className="mt-8 bg-[#065f46] text-white cursor-pointer  px-8 py-3 rounded-full text-lg font-medium hover:bg-[#047857] transition">
            Read Our Insights
          </button>
          </Link>
        </section>

        {/* Blog Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-3 py-5 sm:p-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={blog.picture}
                  alt="Blog"
                  className="w-full h-56 object-cover  transition-transform duration-300 group-hover:scale-105"
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
                  {blog.text }
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default BlogPage;
