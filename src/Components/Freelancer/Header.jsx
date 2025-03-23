import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./../../assets/Images/digilogo12.png";

const Navbar = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    console.log("API_URL");
    console.log(API_URL);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [roleType, setRoleType] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
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
    <nav className="bg-[#004930] text-white px-6 py-4 shadow-md sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img loading="lazy" src={Logo} alt="Logo" className="h-12 md:h-16 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-lg">
          {isLoggedIn && (
            <>
              <NavLink to="/profile-verification" className="hover:text-yellow-400">Profile Verification</NavLink>
              <NavLink to="/edit-profile" className="hover:text-yellow-400">Edit Profile</NavLink>
              <NavLink to="/clients" className="hover:text-yellow-400">Clients</NavLink>
              
              <div className="relative">
                <button 
                  className="text-lg font-semibold text-white" 
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

        <div className="hidden md:flex gap-4">
          {isLoggedIn && (
            <Link to="/chat" className="py-2 px-6 bg-green-600 rounded-full font-medium hover:bg-green-500 transition duration-300">
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
            <Link to="/registration" className="py-2 px-6 border-2 border-white rounded-full hover:bg-white hover:text-green-900 transition duration-300">
              Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
