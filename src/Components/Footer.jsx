import React from "react";
import { Link } from "react-router-dom";

// Icons
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#004930] text-white py-10 px-6 md:px-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* First Section - For Customers */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3">For Customers</h1>
          <ul className="space-y-2 text-sm">
            <li><Link to="/aboutus">How to recruit</Link></li>
            <li><Link to="/Work">Skill Marketplace</Link></li>
            <li><Link to="/service">Service Directory</Link></li>
            <li><Link to="/Subcatagory">Recruit an agency</Link></li>
            <li><Link to="/TermCondition">Terms And Condition</Link></li>
          </ul>
        </div>

        {/* Second Section - For Professionals */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3">For Professionals</h1>
          <ul className="space-y-2 text-sm">
            <li><Link to="/PrivacyNdPolicy">Privacy And Policy</Link></li>
            <li><Link to="/FullJobCard">Apply as an Agency</Link></li>
            <li><Link to="/CancellationNdRefund">Cancellation And Refund</Link></li>
            <li><Link to="/SquareCards">Get Certifications</Link></li>
            <li><Link to="/registration">registration</Link></li>
          </ul>
        </div>

        {/* Third Section - Resources */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3">Menu</h1>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/ChooseUSPage">Choose Us</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        {/* Fourth Section - Follow Us */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3">Follow Us</h1>
          <div className="flex gap-5 text-2xl">
            <a href="https://www.instagram.com/digiskyfusion" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Instagram"
               className="hover:text-blue-400">
              <CiInstagram />
            </a>
            <a href="https://www.facebook.com/share/15AWmqvS2x/" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Facebook"
               className="hover:text-blue-500">
              <CiFacebook />
            </a>
            <a href="https://www.linkedin.com/in/digisky-fusion-01a6002b9" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="LinkedIn"
               className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/digiskyfusion" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Twitter"
               className="hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="flex justify-center mt-6 md:mt-10">
        <hr className="w-full md:w-[99%] border-white border-t-2" />
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm mt-4">
      <p>© 2024 DigiSky Fusion. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
