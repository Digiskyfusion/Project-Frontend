import React from "react";
import {
  FaPenNib,
  FaPaintBrush,
  FaBullhorn,
  FaCode,
  FaUserTie,
  FaChalkboardTeacher,
} from "react-icons/fa";

const jobIcons = [
  <FaPenNib className="text-[#10B981] text-xl mr-3" />,
  <FaPaintBrush className="text-[#10B981] text-xl mr-3" />,
  <FaBullhorn className="text-[#10B981] text-xl mr-3" />,
  <FaCode className="text-[#10B981] text-xl mr-3" />,
  <FaUserTie className="text-[#10B981] text-xl mr-3" />,
  <FaChalkboardTeacher className="text-[#10B981] text-xl mr-3" />,
];

const jobSections = [
  {
    title: "1.Freelance Writing – Start with Words",
    content:
      "Companies are always searching for talented writers to create blogs, ads, and product descriptions. At DigiSky.ai, clients post writing projects daily—perfect for beginners looking to build a portfolio.",
  },
  {
    title: "2. Graphic Designing – Creativity Meets Opportunity",
    content:
      "Freelance designers are in high demand as brands shift to digital. From logo design to social media graphics, DigiSky.ai connects creative minds with real clients.",
  },
  {
    title: "3. Digital Marketing – Promote & Profit",
    content:
      "Know how to grow Instagram pages or run Facebook ads? With DigiSky.ai, you can offer your marketing skills to businesses and get paid for driving results.",
  },
  {
    title: "4. Web Development – Code from Home",
    content:
      "Whether you know HTML, WordPress, or React, companies need developers for websites and apps. Start small on DigiSky.ai and grow your freelancing income over time.",
  },
  {
    title: "5. Virtual Assistant – Help Remotely",
    content:
      "From managing emails to scheduling meetings, virtual assistant jobs are ideal for 10th or 12th pass candidates looking for stable online work.",
  },
  {
    title: "6. Online Tutoring – Teach and Earn",
    content:
      "If you're good at academics, languages, or even hobbies like photography or design, online tutoring is a great option. DigiSky.ai offers flexible tutoring gigs you can do from home.",
  },
];

const BlogsPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#ecfdf5] via-[#f0fdfa] to-[#fefce8] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-14">
          <h1 className="text-xl lg:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#065f46] via-[#059669] to-[#10b981] bg-clip-text text-transparent leading-tight mb-5">
            📝 Best Online Jobs & Freelance Platforms in 2025 – Start Earning on DigiSky.ai

          </h1>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            <strong>Meta Title:</strong> Best Online Jobs & Freelancing in 2025 <br />
            <strong>Meta Description:</strong>Explore top online jobs & freelance platforms for 2025. Work from home and earn with DigiSky.ai—perfect for students, freshers, and beginners.

          </p>
        </header>

        {/* Intro Section */}
        <section className="mb-12 px-4">
          <h2 className="text-2xl font-bold text-[#065f46] mb-4">
            🚀 Why Online Jobs Are Booming in 2025

          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
  Online jobs have become the go-to career path for students, freshers, and professionals seeking flexibility and real income. Whether you’re a 10th or 12th pass student, in college, or simply looking for remote work, freelancing is now a trusted way to earn. Platforms like <a href="https://www.digisky.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">DigiSky.ai</a> make it easy to get started—even with zero experience.
</p>

        </section>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
          {jobSections.map(({ title, content }, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md hover:shadow-lg p-6 transition-all duration-300"
            >
              <div className="flex items-center text-lg font-semibold text-[#065f46] mb-2">
                {jobIcons[index]}
                {title}
              </div>
              <p className="text-gray-700">{content}</p>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <section className="mt-16 px-4">
          <h2 className="text-2xl font-bold text-[#047857] mb-3">
            🌟 Start Your Online Career with DigiSky.ai
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Online jobs offer flexibility, freedom, and real income. Platforms like{" "}
            <a
              href="https://digisky.ai"
              className="text-blue-600 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              DigiSky.ai
            </a>{" "}
            make it easy to find genuine work-from-home opportunities. Register today and kickstart your digital journey in just a few clicks.
          </p>
        </section>

        {/* Tips Section */}
        <section className="mt-14 bg-white rounded-2xl shadow-inner p-8 border border-dashed border-green-200">
          <h2 className="text-xl font-semibold text-[#065f46] mb-4">
            💡Launch Your Online Career with DigiSky.ai

          </h2>
          <p>
            The future of work is online—and it's here to stay. Whether you're a student, beginner, or small business owner, DigiSky.ai helps you find legit work-from-home jobs and freelance projects easily. Sign up today, create your profile, and take your first step toward a flexible, fulfilling career.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BlogsPage;
