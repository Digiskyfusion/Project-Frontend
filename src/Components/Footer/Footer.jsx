import React from "react";
import { Link } from "react-router-dom";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#004930] text-white py-10 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Menu Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3 uppercase tracking-wide">Menu</h1>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Choose Us", "Service", "Contact Us"].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`} className="hover:text-yellow-400 transition duration-300">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Follow Us Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3 uppercase tracking-wide">Follow Us</h1>
          <div className="flex gap-5 text-2xl">
            {[
              { href: "https://www.instagram.com/digisky.ai?igsh=d3ExZmlkMjM5Yms4", icon: <CiInstagram />, color: "hover:text-pink-500" },
              { href: "https://www.facebook.com/share/15AWmqvS2x/", icon: <CiFacebook />, color: "hover:text-blue-500" },
              { href: "https://www.linkedin.com/in/digisky-fusion-01a6002b9", icon: <FaLinkedinIn />, color: "hover:text-blue-600" },
              { href: "https://x.com/digiskyfusion", icon: <FaTwitter />, color: "hover:text-blue-400" }
            ].map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`${social.color} transition duration-300`}>{social.icon}</a>
            ))}
          </div>
        </div>
        
        {/* Address Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3 uppercase tracking-wide">Address</h1>
          <p className="text-sm opacity-90">DigiSky Fusion
          Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Chandigarh, Punjab 160055</p>
          <p className="text-sm opacity-90">Email: <a href="mailto:support@digisky.com" className="hover:text-yellow-400 transition duration-300">support@digisky.com</a></p>
        </div>
        
        {/* Subscribe Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-3 uppercase tracking-wide">Subscribe</h1>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="px-3 py-2 text-white border-2 border-black rounded-md w-full" />
            <button className="bg-yellow-500 px-4 py-2 rounded-md text-black hover:bg-yellow-400 transition duration-300">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <hr className="w-full md:w-[95%] border-white border-t-2" />
      </div>
      
      <div className="text-center text-sm mt-4">
        <p className="opacity-80">© 2024 DigiSky Fusion. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;