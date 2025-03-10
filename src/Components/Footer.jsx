import React from "react";
import { Link } from "react-router-dom";

// Icons
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#004930] text-white py-10 px-6 md:px-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* First Section - For Customers */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3">For Customers</h1>
          <ul className="space-y-2 text-sm">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-24 text-center md:text-left">

      <div className="mx-auto grid grid-cols-1 md:grid-cols-4  gap-8 text-center  md:text-left">

        {/* First Section - For customers */}
        <div className="flex flex-col items-start md:justify-start">
          <h1 className="text-lg  mb-3 poppins-thin">For customers</h1>
          <ul className="space-y-2 text-sm text-start">
            <li><Link to="/">How to recruit</Link></li>
            <li><Link to="/Subcategory">Skill Marketplace</Link></li>
            <li><Link to="/service">Service Directory</Link></li>
            <li><Link to="/portfolio">Recruit an agency</Link></li>
            <li><Link to="/corporation">Corporation</Link></li>
            <li><Link to="/business">Advanced Business</Link></li>
            <li><Link to="/recruitment">Any recruitment</Link></li>
            <li><Link to="/hire">Reach out to hire</Link></li>
            <li><Link to="/global-recruitment">Recruit globally</Link></li>
          </ul>
        </div>

        {/* Second Section - For Professionals */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3">For Professionals</h1>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">How to recruit</Link></li>
            <li><Link to="/Subcategory">Skill Marketplace</Link></li>
            <li><Link to="/service">Service Directory</Link></li>
            <li><Link to="/portfolio">Recruit an agency</Link></li>
            <li><Link to="/corporation">Corporation</Link></li>
            <li><Link to="/business">Advanced Business</Link></li>
            <li><Link to="/recruitment">Any recruitment</Link></li>
            <li><Link to="/hire">Reach out to hire</Link></li>
            <li><Link to="/global-recruitment">Recruit globally</Link></li>
          </ul>
        </div>

        {/* Third Section - Resources */}
        {/* <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3">Resources</h1>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">How to recruit</Link></li>
            <li><Link to="/Subcategory">Skill Marketplace</Link></li>
            <li><Link to="/services">Service Directory</Link></li>
            <li><Link to="/portfolio">Recruit an agency</Link></li>
            <li><Link to="/corporation">Corporation</Link></li>
            <li><Link to="/business">Advanced Business</Link></li>
            <li><Link to="/recruitment">Any recruitment</Link></li>
            <li><Link to="/hire">Reach out to hire</Link></li>
            <li><Link to="/global-recruitment">Recruit globally</Link></li>

        {/* <div className="flex flex-col items-start md:justify-start">
          <h1 className="text-lg font-semibold mb-3">Resources</h1>
          <ul className="space-y-2 text-sm text-start">
            <li><Link to="/">How to recruit</Link></li>
            <li><Link to="/about">Skill Marketplace</Link></li>
            <li><Link to="/services">Service Directory</Link></li>
            <li><Link to="/portfolio">Recruit an agency</Link></li>
            <li><Link to="/ContactUs">Corporation</Link></li>
            <li><Link to="/ContactUs">Advanced Business</Link></li>
            <li><Link to="/ContactUs">Any recruitment</Link></li>
            <li><Link to="/ContactUs">Reach out to hire</Link></li>
            <li><Link to="/ContactUs">Recruit globally</Link></li>
          </ul>
        </div> */}

        {/* Fourth Section - Menu
        <div className="flex flex-col items-start md:justify-start">
          <h1 className="text-lg font-semibold mb-3">Pages</h1>
          <ul className="space-y-2 text-sm text-start">
            <li><Link to="/allfreelancer">ALL Freelancer</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/FreelancreClientPage">Freelancre Client Page</Link></li>
            <li><Link to="/FreelancerUpadte">Freelancer Upadte</Link></li>
            <li><Link to="/ClientForm">Client Form</Link></li>
            <li><Link to="/Subcatagory">Sub Catagory</Link></li>
            <li><Link to="/freelancerDetails">Freelancer Details</Link></li>
            <li><Link to="/clientDetails">Client Details</Link></li>
            <li><Link to="/channel">Tv Advertising</Link></li>
          </ul>
        </div> */}

        {/* Fourth Section - Follow Us */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3">Follow Us</h1>
          <div className="flex gap-5 text-2xl">
            <a href="https://www.instagram.com/digiskyfusion" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <CiInstagram />
            </a>
            <a href="https://www.facebook.com/share/15AWmqvS2x/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <CiFacebook />
            </a>
            <a href="https://www.linkedin.com/in/digisky-fusion-01a6002b9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/digiskyfusion" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
=======
          <div className="text-2xl">
            <h1>Follow Us</h1>
            <div className="flex gap-5 mt-3">
              <a href="https://www.instagram.com/digiskyfusion?igsh=d242aTBrNGQzZDR6" target="_blank" className="hover:text-blue-400"><CiInstagram /></a>
              <a href="https://www.facebook.com/share/15AWmqvS2x/" target="_blank" className="hover:text-blue-500"><CiFacebook /></a>
              <a href="https://www.linkedin.com/in/digisky-fusion-01a6002b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-blue-600"><FaLinkedinIn /></a>
              <a href="https://x.com/digiskyfusion?t=tLHE_G31tsLiB6QpX_XA8Q&s=09" target="_blank" className="hover:text-blue-400"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="flex justify-center mt-6 md:mt-10">
        <hr className="w-full md:w-[99%] border-white border-t-2" />
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm mt-4">
      <p>This is a sample website – cmsmasters ©2024 – All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
