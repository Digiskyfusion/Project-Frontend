import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./../../assets/Images/digilogo12.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [mobileCategoryDropdown, setMobileCategoryDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

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
    navigate("/login");
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCategoryDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow justify-center items-center space-x-6 text-lg">
          <NavLink to="/EditProfile" className="hover:text-yellow-400">Edit Profile</NavLink>
          <NavLink to="/freelancerSkill" className="hover:text-yellow-400">Add Skills</NavLink>
          <NavLink to="/clientlist" className="hover:text-yellow-400">Clients</NavLink>
          <NavLink to="/MembershipPlans" className="hover:text-yellow-400">Plans</NavLink>
          <NavLink to="/reciept" className="hover:text-yellow-400">reciept</NavLink>
          <NavLink to="/channel" className="hover:text-yellow-400">Tv Channels</NavLink>
          <NavLink to={`/inbox`} className="hover:text-yellow-400">Inbox</NavLink>
          {/* <NavLink to={`/joblist`} className="hover:text-yellow-400">Job List</NavLink> */}

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
        <div className="hidden lg:flex">
          <button
            className="py-2 px-6 border border-white rounded-full cursor-pointer hover:bg-red-500 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col bg-[#004930] text-white py-4 px-6 space-y-4">
          <NavLink to="/EditProfile" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Edit Profile</NavLink>
          <NavLink to="/freelancerSkill" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Add Skills</NavLink>
          <NavLink to="/clientlist" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Client</NavLink>
          <NavLink to="/MembershipPlans" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Plans</NavLink>
          <NavLink to="/reciept" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>reciept</NavLink>
          <NavLink to="/channel" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Tv Channels</NavLink>
          <NavLink to="/inbox" className="hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Inbox</NavLink>
          

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
