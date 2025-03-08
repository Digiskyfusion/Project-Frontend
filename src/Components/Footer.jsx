import React from "react";
import { Link } from "react-router-dom";

// Icons
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#004930] text-white py-10 px-6 md:px-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-24 text-center md:text-left">
        {/* First Section - For customers */}
        <div className="flex flex-col items-start md:justify-start">
          <h1 className="text-lg  mb-3 poppins-thin">For customers</h1>
          <ul className="space-y-2 text-sm text-start">
            <li><Link to="/">How to recruit</Link></li>
            <li><Link to="/Subcatagory">Skill Marketplace</Link></li>
            <li><Link to="/service">Service Directory</Link></li>
            <li><Link to="/portfolio">Recruit an agency</Link></li>
            <li><Link to="/ContactUs">Corporation</Link></li>
            <li><Link to="/ContactUs">Advanced Business</Link></li>
            <li><Link to="/ContactUs">Any recruitment</Link></li>
            <li><Link to="/ContactUs">Reach out to hire</Link></li>
            <li><Link to="/ContactUs">Recruit globally</Link></li>
          </ul>
        </div>

        {/* Second Section - For professionals */}
        <div className="flex flex-col items-start md:justify-start">
          <h1 className="text-lg font-semibold mb-3">For professionals</h1>
          <ul className="space-y-2 text-sm text-start">
            <li><Link to="/">How to recruit</Link></li>
            <li><Link to="/about">Skill Marketplace</Link></li>
            <li><Link to="/service">Service Directory</Link></li>
            <li><Link to="/portfolio">Recruit an agency</Link></li>
            <li><Link to="/ContactUs">Corporation</Link></li>
            <li><Link to="/ContactUs">Advanced Business</Link></li>
            <li><Link to="/ContactUs">Any recruitment</Link></li>
            <li><Link to="/ContactUs">Reach out to hire</Link></li>
            <li><Link to="/ContactUs">Recruit globally</Link></li>
          </ul>
        </div>

        {/* Third Section - Resources */}
        <div className="flex flex-col items-start md:justify-start">
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
        </div>

        {/* Fourth Section - Menu
        <div className="flex flex-col items-start md:justify-start">
          <h1 className="text-lg font-semibold mb-3">Menu</h1>
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

        {/* Fifth Section - Follow Us */}
        <div className="flex flex-col items-start">
          <div className="text-2xl">
            <h1>Follow Us</h1>
            <div className="flex gap-5 mt-3">
              <a href="https://www.instagram.com/digiskyfusion?igsh=d242aTBrNGQzZDR6" target="_blank" className="hover:text-orange-400"><CiInstagram /></a>
              <a href="https://www.facebook.com/share/15AWmqvS2x/" target="_blank" className="hover:text-blue-500"><CiFacebook /></a>
              <a href="https://www.linkedin.com/in/digisky-fusion-01a6002b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-blue-600"><FaLinkedinIn /></a>
              <a href="https://x.com/digiskyfusion?t=tLHE_G31tsLiB6QpX_XA8Q&s=09" target="_blank" className="hover:text-blue-400"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="flex justify-center mt-2 md:mt-4 pt-6 md:pt-10">
        <hr className="w-full md:w-[99.9%] border-white border-t-2" />
      </div>

      {/* Bottom Footer */}
      <div className="text-center md:flex md:justify-center mt-2 text-sm md:px-16">
        <p>This is a sample website – cmsmasters ©2024 – All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;