import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/Images/digilogo12.png";

const NavbarAlt = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [skillsDropdown, setSkillsDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const skills = [
    "Digital Marketing",
    "Graphic Designing",
    "Video Editing",
    "Development",
    "Content Writing",
    "Influencer Marketing",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Toggle class after scrolling 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition-all duration-300 elsie-regular  ${
        isScrolled ? "bg-[#004930] shadow-md" : "bg-black/40"
      } text-white  py-4 backdrop-blur-md`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img loading="lazy" src={Logo} alt="Logo" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow justify-center items-center space-x-6 text-lg">
          <NavLink to="/aboutus" className="hover:text-yellow-400">About Us</NavLink>
          <NavLink to="/ChooseUSPage" className="hover:text-yellow-400">Choose Us</NavLink>
          <NavLink to="/service" className="hover:text-yellow-400">Services</NavLink>
          <NavLink to="/blog" className="hover:text-yellow-400">Blog</NavLink>
          <NavLink to="/contactus" className="hover:text-yellow-400">Contact Us</NavLink>

          <div className="relative">
            <button
              className="text-lg text-white"
              onClick={() => setSkillsDropdown(!skillsDropdown)}
            >
              Skills
            </button>
            {skillsDropdown && (
              <div className="absolute top-12 left-0 bg-white shadow-md rounded-md p-3 w-56 max-h-[300px] overflow-y-auto">
                {skills.map((skill, index) => (
                  <Link
                    key={index}
                    to={`/skills/${encodeURIComponent(skill)}`}
                    className="block px-4 py-2 text-[15px] text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md transition-all duration-200"
                    onClick={() => setSkillsDropdown(false)}
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Register & Login */}
        <div className="hidden lg:flex space-x-4">
          <NavLink to="/registration" className="py-2 px-4 border cursor-pointer border-white rounded-full hover:bg-green-500 transition duration-300">
            Register
          </NavLink>
          <NavLink to="/login" className="py-2 px-4 border cursor-pointer border-white rounded-full hover:bg-green-500 transition duration-300">
            Login
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
  className={`lg:hidden  w-full flex flex-col ${
    isScrolled ? "bg-[#004930]" : "bg-black/10 backdrop-blur-sm"
  } text-white py-4 px-6 space-y-4 transition-all duration-300`}
>

          <NavLink to="/aboutus" className="hover:text-yellow-400">About Us</NavLink>
          <NavLink to="/ChooseUSPage" className="hover:text-yellow-400">Choose Us</NavLink>
          <NavLink to="/service" className="hover:text-yellow-400">Services</NavLink>
          <NavLink to="/blog" className="hover:text-yellow-400">Blog</NavLink>
          <NavLink to="/contactus" className="hover:text-yellow-400">Contact Us</NavLink>
          
          <div className="relative">
            <button
              className="text-lg font-semibold text-white"
              onClick={() => setSkillsDropdown(!skillsDropdown)}
            >
              Skills
            </button>
            {skillsDropdown && (
              <div className="bg-white shadow-md rounded-md p-3 mt-2">
                {skills.map((skill, index) => (
                  <Link
                    key={index}
                    to={`/skills/${encodeURIComponent(skill)}`}
                    className="block px-4 py-2 text-[15px] text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md transition-all duration-200"
                    onClick={() => setSkillsDropdown(false)}
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/registration" className="py-2 px-4 border border-white rounded-full hover:bg-green-500 transition duration-300">
            Register
          </NavLink>
          <NavLink to="/login" className="py-2 px-4 border border-white rounded-full hover:text-yellow-400 transition duration-300">
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavbarAlt;
