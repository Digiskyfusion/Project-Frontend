import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./../../assets/Images/digilogo12.png";
import { FaBriefcase, FaPlus } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [mobileCategoryDropdown, setMobileCategoryDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
const [activeDropdown, setActiveDropdown] = useState(null); // values: "skills", "jobs", null
const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); // "skills", "jobs", null


  const skills = [
    "Digital Marketing",
    "Graphic Designing",
    "Video Editing",
    "Development",
    "Content Writing",
    "Influencer Marketing",
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("You are logged out");
    setIsMobileMenuOpen(false);
    navigate("/login");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCategoryDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`text-white px-4 lg:px-6 py-4 shadow-md sticky top-0  z-30 transition-all duration-300 ${
        isScrolled ? "bg-[#004930]" : "bg-[#004930]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img loading="lazy" src={Logo} alt="Logo" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow justify-center items-center space-x-6 text-lg">
          <NavLink to="/EditProfile" className="hover:text-yellow-400">Edit Profile</NavLink>
          <NavLink to="/freelancerlist" className="hover:text-yellow-400">Freelancers</NavLink>
          <NavLink to="/UserSkills" className="hover:text-yellow-400">Add Requirement</NavLink>
          <NavLink to="/MembershipPlans" className="hover:text-yellow-400">Plans</NavLink>
          <NavLink to="/reciept" className="hover:text-yellow-400">Receipt</NavLink>
          <NavLink to="/channel" className="hover:text-yellow-400">TV Channels</NavLink>
          <NavLink to="/inbox" className="hover:text-yellow-400">Inbox</NavLink>
          {/* Jobs Dropdown (Desktop) */}

<div className="relative " ref={dropdownRef}>
  <button
    className="flex items-center gap-1 cursor-pointer text-lg font-semibold text-white hover:text-yellow-400 transition"
    onClick={() => setActiveDropdown(activeDropdown === "jobs" ? null : "jobs")}
  >
    Jobs
    <FiChevronDown
      className={`transition-transform duration-300 ${
        activeDropdown === "jobs" ? "rotate-180" : ""
      }`}
    />
  </button>

  {activeDropdown === "jobs" && (
    <div className="absolute top-12 left-0 bg-white shadow-lg rounded-xl p-3 w-56 z-50 border border-gray-100">
      <NavLink
        to="/all-jobs"
        className="flex items-center gap-3 px-4 py-2 text-sm lg:text-[18px] text-gray-700  rounded-md hover:bg-gray-100  transition"
        onClick={() => setActiveDropdown(null)}
      >
        <FaBriefcase className="text-gray-700" />
        Posted Jobs
      </NavLink>
      <NavLink
        to="/postjob"
        className="flex items-center gap-3 px-4 py-2 mt-2 text-sm lg:text-[18px] text-gray-700 rounded-lg hover:bg-gray-100 transition"
        onClick={() => setActiveDropdown(null)}
      >
        <FaPlus className="text-gray-700" />
        Post a Job
      </NavLink>
    </div>
  )}
</div>


          {/* Skills Dropdown (Desktop) */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-lg font-semibold text-white"
              onClick={() => setCategoryDropdown(!categoryDropdown)}
            >
              Skills
            </button>
            {categoryDropdown && (
              <div className="absolute top-12 left-0 bg-white shadow-md rounded-md p-3 w-56 max-h-[300px] overflow-y-auto z-50">
                {skills.map((skill, index) => (
                  <Link
                    key={index}
                    to={`/skills/${encodeURIComponent(skill)}`}
                    className="block px-4 py-2 text-[15px] text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md transition-all duration-200"
                    onClick={() => setCategoryDropdown(false)}
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Logout Button (Desktop) */}
        <button
          className="hidden lg:block py-2 px-6 border cursor-pointer border-white rounded-full hover:bg-red-500 transition duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col bg-[#004930] text-white py-4 px-6 space-y-4">
          <NavLink to="/EditProfile" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Edit Profile</NavLink>
          <NavLink to="/freelancerlist" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Freelancers</NavLink>
          <NavLink to="/UserSkills" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>User Skills</NavLink>
          <NavLink to="/MembershipPlans" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Plans</NavLink>
          <NavLink to="/reciept" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Receipt</NavLink>
          <NavLink to="/channel" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>TV Channels</NavLink>
          <NavLink to="/inbox" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Inbox</NavLink>
          {/* Jobs Dropdown (Mobile) */}
<div className="relative">
  <button
    className="flex items-center gap-1 text-lg font-semibold text-white hover:text-yellow-400 transition"
    onClick={() => setActiveMobileDropdown(activeMobileDropdown === "jobs" ? null : "jobs")}
  >
    Jobs
    <FiChevronDown
      className={`transition-transform duration-300 ${
        activeMobileDropdown === "jobs" ? "rotate-180" : ""
      }`}
    />
  </button>

  {activeMobileDropdown === "jobs" && (
    <div className="bg-white shadow-lg rounded-xl p-3 mt-2 z-50 border border-gray-100">
      <NavLink
        to="/all-jobs"
        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 hover:text-green-700 transition"
        onClick={() => {
          setActiveMobileDropdown(null);
          setIsMobileMenuOpen(false);
        }}
      >
        <FaBriefcase className="text-gray-700" />
        Posted Jobs
      </NavLink>

      <NavLink
        to="/postjob"
        className="flex items-center gap-3 px-4 py-2 mt-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 hover:text-green-700 transition"
        onClick={() => {
          setActiveMobileDropdown(null);
          setIsMobileMenuOpen(false);
        }}
      >
        <FaPlus className="text-gray-700" />
        Post a Job
      </NavLink>
    </div>
  )}
</div>


          {/* Skills Dropdown for Mobile */}
          <div className="relative">
            <button
              className="text-lg font-semibold text-white"
              onClick={() => setMobileCategoryDropdown(!mobileCategoryDropdown)}
            >
              Skills
            </button>
            {mobileCategoryDropdown && (
              <div className="bg-white shadow-md rounded-md p-3 mt-2 z-50">
                {skills.map((skill, index) => (
                  <Link
                    key={index}
                    to={`/skills/${encodeURIComponent(skill)}`}
                    className="block px-4 py-2 text-[15px] text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md transition-all duration-200"
                    onClick={() => {
                      setMobileCategoryDropdown(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            className="py-2 px-4 border border-white rounded-full hover:bg-red-500 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
