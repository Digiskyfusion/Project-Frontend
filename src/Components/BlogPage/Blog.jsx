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
      text: "In today’s world, you don’t need a fancy degree to start earning. Whether you're a 10th or 12th pass student, a college-goer, or just someone looking for a flexible income, online jobs are a game-changer. And the best part? Platforms like DIGISKY.ai make it easier than ever to find genuine work from home opportunities and freelance projects in India.",
      link: '/blog/top-online-jobs-2025'
    },
    {
      picture: 'https://img.freepik.com/free-photo/blog-website-development-data-network-concept_53876-125055.jpg',
      title: 'Building Better Tech Teams',
      date: 'May 21, 2025',
      tag: 'Team Building',
      text: "Gone are the days when you had to rely on traditional jobs. Now, with just a phone or laptop and internet connection, you can start earning by doing tasks like data entry, content writing, digital marketing, customer support, and more. DIGISKY.ai is designed especially for beginners and students—those who want to work on real projects, build experience, and get paid on time.",
        link: '/blog/online-jobs-12th-pass',
    },
    {
      picture: 'https://www.shutterstock.com/image-photo/blog-website-article-lifestyle-online-600nw-605950769.jpg',
      title: 'Trends in AI Recruitment',
      date: 'May 14, 2025',
      tag: 'AI Hiring',
      text: "Unlike crowded platforms where beginners struggle to get noticed, DIGISKY.ai focuses on connecting fresh talent with businesses that value skill over degrees. So whether you’re searching for 12th pass jobs, jobs for 10th pass, or simple work from home for students, you’ll find tailored listings that match your level and interest.",
        link: '/blog/freelance-platforms-2025'
    },
    {
      picture: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      title: 'How Freelancers Are Shaping the Gig Economy',
      date: 'May 10, 2025',
      tag: 'Freelancing',
      text: "Freelancing is not just a side hustle anymore—it's a career. DIGISKY.ai provides a platform where new freelancers can find projects that suit their skills and grow their portfolio while earning fair pay.",
         link: '/blog/online-jobs-10th-pass'
    },
   {
  picture: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg',
  title: 'Build Your Portfolio and Get Hired: DIGISKY.ai for New Freelancers',
  date: 'May 15, 2025',
  tag: 'Freelancing',
  text: "Starting as a freelancer can be overwhelming, but with DIGISKY.ai, beginners can showcase their talents, land meaningful gigs, and develop a strong online presence.",
  link: '/blog/trusted-freelancing-platform-for-beginners'
},
{
  picture: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
  title: 'Earn From Home After 12th: Start Your Freelance Journey Today',
  date: 'May 18, 2025',
  tag: 'Freelancing',
  text: "No college degree",
  link: '/blog/how-to-earn-online-after-12th'
}


  ];

  return (
    <>
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">

        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-r from-[#d1fae5] to-[#f0fdfa] px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#065f46] mb-4">
            Unlock the Power of Smart Hiring
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            No Degree? No Problem! Start Earning with Online Jobs & Freelancing on DIGISKY.ai
          </p>
          <Link to="/">
            <button className="mt-8 bg-[#065f46] text-white px-8 cursor-pointer py-3 rounded-full text-lg font-medium hover:bg-[#047857] transition">
              Read Our Insights
            </button>
          </Link>
        </section>

        {/* Blog Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 py-10 max-w-[1280px] mx-auto flex-grow">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              <div className="relative flex-shrink-0 h-48 sm:h-56 lg:h-40 xl:h-48">
                <img
                  src={blog.picture}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-3xl"
                />
                <span className="absolute top-4 left-4 bg-white text-[#065f46] font-semibold px-3 py-1 rounded-full text-xs shadow">
                  {blog.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                  <h3 className="text-xl font-bold text-[#065f46] group-hover:underline mt-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mt-3 line-clamp-4">{blog.text}</p>
                </div>
                <div className="mt-5">
                  <Link to={blog.link}>
                    <button className="w-full bg-[#065f46] cursor-pointer text-white px-5 py-2 rounded-full font-medium hover:bg-[#047857] transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

      </div>
    </>
  );
};

export default BlogPage;
