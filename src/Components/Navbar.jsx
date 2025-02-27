import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink to="/" >Home</NavLink>
            {/* <select className="border-none outline-0 cursor-pointer">
              <option>Find Freelancer</option>
            </select> */}
          </li>
          <li className="flex justify-center items-center ">
          <NavLink to="/aboutus" >About Us</NavLink>
            {/* <select className="border-none outline-0 cursor-pointer">
              <option>Find Work</option>
            </select> */}
          </li>
          <li className="flex justify-center items-center">
            <NavLink to="/ChooseUSPage" >ChooseUSPage</NavLink>
          </li>
          <li className="flex justify-center items-center">
            <NavLink to="/allfreelancer" >All Freelancer</NavLink>
          </li>
          <li className="flex justify-center items-center">
            <NavLink to="/service" >Service</NavLink>
          </li>
          <li className="flex justify-center items-center">
            <NavLink to="/FreelancreClientPage" >  FreelancreClientPage</NavLink>
          </li>
          <li className="flex justify-center items-center">
            <NavLink to="/ClientForm" >  ClientForm</NavLink>
          </li>
          <li className="flex justify-center items-center">
            <NavLink to="Subcatagory" >  Subcatagory</NavLink>
          </li>
          <li className="flex justify-center items-center">
          <NavLink to="/contactus" >Contact Us</NavLink>
          </li>
        </ul>

        {/* {/ Button /} */}
        <div className="hidden md:block">
          <button className="py-2 px-8 border-2 rounded-full"><NavLink to="/registration" >Registration </NavLink></button>
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
            <li><NavLink to="/" className="block hover:text-gray-300">Home</NavLink></li>
            <li><NavLink to="/aboutus" className="block hover:text-gray-300">About Us</NavLink></li>
            <li><NavLink to="/ChooseUSPage" className="block hover:text-gray-300">ChooseUSPage</NavLink></li>
            <li><NavLink to="/livechat" className="block hover:text-gray-300">Live Chat</NavLink></li>
            <li><NavLink to="/service" className="block hover:text-gray-300">Serive</NavLink></li>
            <li><NavLink to="/FreelancerNoUpadte" className="block hover:text-gray-300">FreelancerNoUpadte</NavLink></li>
            <li><NavLink to="/FreelancerUpadte" className="block hover:text-gray-300">FreelancerUpadte</NavLink></li>
            <li><NavLink to="/FreelancreClientPage" className="block hover:text-gray-300">FreelancreClientPage</NavLink></li>
            <li><NavLink to="/ClientForm" className="block hover:text-gray-300">ClientForm</NavLink></li>
            <li><NavLink to="/Subcatagory" className="block hover:text-gray-300">Subcatagory</NavLink></li>
            <li><NavLink to="/contactus" className="block hover:text-gray-300">Contact Us</NavLink></li>
          </ul>
          <button className="mt-4 py-2 px-5 border-2 rounded-full cursor-pointer"> <NavLink to="/registration" >Registration </NavLink></button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
