import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#004930] text-white p-4 shadow-md sticky top-0 z-20">
      <div className="container px-12 flex justify-between items-center">
        {/* {/ Logo /} */}
        <a href="#" className="text-2xl font-bold">LOGO</a>
        
        {/* {/ Desktop Menu /} */}
        <ul className="hidden md:flex space-x-6">
          <li className="flex justify-center items-center">
          <Link to="/" >Home</Link>
            {/* <select className="border-none outline-0 cursor-pointer">
              <option>Find Freelancer</option>
            </select> */}
          </li>
          <li className="flex justify-center items-center ">
          <Link to="/aboutus" >About US</Link>
            {/* <select className="border-none outline-0 cursor-pointer">
              <option>Find Work</option>
            </select> */}
          </li>
          <li className="flex justify-center items-center">
            <Link to="/livechat" >Live Chat</Link>
          </li>
          <li className="flex justify-center items-center">
          <Link to="/contactus" >Contact Us</Link>
          </li>
        </ul>

        {/* {/ Button /} */}
        <div className="hidden md:block">
          <button className="py-2 px-8 border-2 rounded-full">Login</button>
          {/* <button className="py-2 px-8 border-2 rounded-full">Register</button> */}
        </div>

        {/* {/ Mobile Menu Button /} */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      
      {/* {/ Mobile Menu /} */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 text-center">
          <ul className="space-y-4">
            <li><a href="#" className="block hover:text-gray-300">Home</a></li>
            <li><a href="#" className="block hover:text-gray-300">About</a></li>
            <li><a href="#" className="block hover:text-gray-300">Services</a></li>
            <li><a href="#" className="block hover:text-gray-300">Contact</a></li>
          </ul>
          <button className="mt-4 py-2 px-5 border-2 rounded-full">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
