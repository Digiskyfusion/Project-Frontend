import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import Logo from "./../../assets/Images/digilogo12.png";

const Navbar = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  console.log("API_URL:", API_URL);

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [roleType, setRoleType] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
      const userDataString = localStorage.getItem("user");
      let userData = null;
      try {
        userData = userDataString ? JSON.parse(userDataString) : null;
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      }
      setRoleType(userData?.roleType || null);
    };

    handleAuthChange();
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/category/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("roleType");
      window.dispatchEvent(new Event("authChange"));
      navigate("/registration");
    }
  };

  return (
    <nav className="bg-[#004930] text-white px-2 lg:px-6 py-4 shadow-md sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img loading="lazy" src={Logo} alt="Logo" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm lg:text-lg">
          {isLoggedIn && (
            <>
              <NavLink to="/FreelancerClientPage" className="hover:text-yellow-400">Profile Verification</NavLink>
              <NavLink to="/FreelancerUpadte" className="hover:text-yellow-400">Edit Profile</NavLink>
              <NavLink to="/ClientProfile" className="hover:text-yellow-400">Clients</NavLink>

              {/* Category Dropdown */}
              <div className="relative">
                <button 
                  className=" text-sm lg:text-lg font-semibold text-white focus:outline-none" 
                  onClick={() => setCategoryDropdown(!categoryDropdown)}
                >
                  Categories
                </button>
                {categoryDropdown && (
                  <div className="absolute top-12 left-0 bg-white shadow-md rounded-md p-3 w-56 max-h-[300px] overflow-y-auto">
                    {categories.map((category, index) => (
                      <Link 
                        key={index} 
                        to={`/category/${category.id}`} 
                        className="block px-4 py-2 text-[15px] text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md transition-all duration-200"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 text-sm lg:text-xl">
          {isLoggedIn && (
            <Link to="/chat" className="py-2  px-4 lg:px-6 bg-green-600 rounded-full font-medium hover:bg-green-500 transition duration-300">
              Chat Now
            </Link>
          )}
          {isLoggedIn ? (
            <button 
              className="py-2 px-4 lg:px-6 border border-white rounded-full hover:bg-red-500 transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/registration" className="py-2  px-4 lg:px-6 border-2 border-white rounded-full hover:bg-white hover:text-green-900 transition duration-300">
              Register
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#004930] text-white py-4 px-6 absolute top-[100%] left-0 w-full shadow-md">
          <div className="flex flex-col space-y-4 text-lg">
            {isLoggedIn && (
              <>
                <NavLink to="/FreelancerClientPage" className="hover:text-yellow-400">Profile Verification</NavLink>
                <NavLink to="/FreelancerUpadte" className="hover:text-yellow-400">Edit Profile</NavLink>
                <NavLink to="/ClientProfile" className="hover:text-yellow-400">Clients</NavLink>

                {/* Mobile Category Dropdown */}
                <div className="relative">
                  <button 
                    className="text-lg font-semibold text-white w-full text-left" 
                    onClick={() => setCategoryDropdown(!categoryDropdown)}
                  >
                    Categories
                  </button>
                  {categoryDropdown && (
                    <div className="mt-2 bg-white shadow-md rounded-md p-3 w-full max-h-[300px] overflow-y-auto">
                      {categories.map((category, index) => (
                        <Link 
                          key={index} 
                          to={`/category/${category.id}`} 
                          className="block px-4 py-2 text-[15px] text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md transition-all duration-200"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {isLoggedIn && (
              <Link to="/chat" className="py-2 px-6 bg-green-600 rounded-full font-medium text-center hover:bg-green-500 transition duration-300">
                Chat Now
              </Link>
            )}

            {isLoggedIn ? (
              <button 
                className="py-2 px-6 border border-white rounded-full hover:bg-red-500 transition duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to="/registration" className="py-2 px-6 border-2 border-white rounded-full hover:bg-white hover:text-green-900 transition duration-300 text-center">
                Register
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
