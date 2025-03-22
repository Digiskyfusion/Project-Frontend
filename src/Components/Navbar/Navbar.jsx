import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./../../assets/Images/digilogo12.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [roleType, setRoleType] = useState(null);
  const navigate= useNavigate()
  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    
      const userDataString = localStorage.getItem("user");
      let userData = null;
    
      try {
        userData = userDataString ? JSON.parse(userDataString) : null;
        console.log(userData);
        
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user"); // Remove invalid data to prevent future errors
      }
    
      setRoleType(userData?.roleType || null);
    };
    
    
    

    handleAuthChange();
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("roleType");
      window.dispatchEvent(new Event("authChange"));
      navigate("/registration")
    }
  };

  const [categoryDropdown, setCategoryDropdown] = useState(false);
const [selectedCategory, setSelectedCategory] = useState(null);

const categories = [
  { 
    name: "Design", 
    subcategories: ["Logo Design", "UI/UX", "Graphic Design"] 
  },
  { 
    name: "Development", 
    subcategories: ["Web Development", "Mobile Apps", "Backend Development"] 
  },
  { 
    name: "Marketing", 
    subcategories: ["SEO", "Social Media", "Email Marketing"] 
  },
];

const handleCategoryHover = () => {
  setCategoryDropdown(true);
};

const handleCategoryLeave = () => {
  setCategoryDropdown(false);
};

const handleCategoryClick = (category) => {
  setSelectedCategory(category === selectedCategory ? null : category);
};


  return (
    <nav className="bg-[#004930] text-white px-6 py-4 shadow-md sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img loading="lazy" src={Logo} alt="Logo" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
          {!isLoggedIn ? (
            <>
              <NavLink to="/" className="hover:text-yellow-400">Home</NavLink>
              <NavLink to="/aboutus" className="hover:text-yellow-400">About Us</NavLink>
              <NavLink to="/ChooseUSPage" className="hover:text-yellow-400">Choose Us</NavLink>
              <NavLink to="/service" className="hover:text-yellow-400">Service</NavLink>
              <NavLink to="/contactus" className="hover:text-yellow-400">Contact Us</NavLink>
            </>
          ) : (
            <>
              {roleType === "freelancer" && (
                <>
                <NavLink to="/FreelancerClientPage" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Profile Verification</NavLink>
                 <NavLink to="/FreelancerUpadte" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Edit Profile</NavLink>
                    <NavLink to="/ClientProfile" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Client Profile</NavLink>
                    {/* <NavLink to="/Subcatagory" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Categories</NavLink> */}
                    <div 
  className="relative group" 
  onClick={handleCategoryHover} 
  onDoubleClick={handleCategoryLeave}
>
  {/* Main Button */}
  <button className="text-lg font-semibold text-white ">
    Categories
  </button>

  {/* Dropdown */}
  {categoryDropdown && (
    <div className="absolute top-12 left- flex  bg-white  overflow-hidden ">
      {categories.map((category, index) => (
        <div key={index} className="border-b last:border-0 w-48">
          {/* Category Item */}
          <button 
            className="w-full text-left px-5 py-3 text-gray-900 font-medium flex justify-between items-center hover:bg-gray-100 transition-all duration-200"
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
            <span className="text-gray-400 text-sm">▶</span>
          </button>

          {/* Subcategory Dropdown */}
          {selectedCategory === category.name && (
            <div className="bg-gray-50 p-3 shadow-md rounded-md flex flex-col">
              {category.subcategories.map((sub, i) => (
                <Link 
                  key={i} 
                  to={`/subcategory/${sub.replace(/\s+/g, "-").toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md transition-all duration-200"
                >
                  {sub}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>
                    
 </>
              )}
              {roleType === "client" && (
                <>
                  <NavLink to="/client">Profile Verification</NavLink>
                  <NavLink to="/ClientForm">Edit Profile</NavLink>
                  {/* <NavLink to="/Subcatagory">Subcategory</NavLink> */}
                
                  <div 
  className="relative group" 
  onClick={handleCategoryHover} 
  onDoubleClick={handleCategoryLeave}
>
  {/* Main Button */}
  <button className="text-lg font-semibold text-white ">
    Categories
  </button>

  {/* Dropdown */}
  {categoryDropdown && (
    <div className="absolute top-12 left-0 flex bg-white  overflow-hidden ">
      {categories.map((category, index) => (
        <div key={index} className="border-b last:border-0 w-48">
          {/* Category Item */}
          <button 
            className="w-full text-left px-5 py-3 text-gray-900 font-medium flex justify-between items-center hover:bg-gray-100 transition-all duration-200"
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
            <span className="text-gray-400 text-sm">▶</span>
          </button>

          {/* Subcategory Dropdown */}
          {selectedCategory === category.name && (
            <div className="bg-gray-50 p-3 shadow-md rounded-md flex flex-col">
              {category.subcategories.map((sub, i) => (
                <Link 
                  key={i} 
                  to={`/subcategory/${sub.replace(/\s+/g, "-").toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md transition-all duration-200"
                >
                  {sub}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>

<NavLink to="/allfreelancer">Freelancer Profile</NavLink>
                 
                </>
              )}
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          {isLoggedIn && (
            <Link to="/Subcatagory" className="py-2 px-6 bg-green-600 rounded-full font-medium hover:bg-green-500 transition duration-300">
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

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#004930] text-white p-6 shadow-lg">
          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            {!isLoggedIn ? (
              <>
                <NavLink to="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink to="/aboutus" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About Us</NavLink>
                <NavLink to="/ChooseUSPage" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Choose Us</NavLink>
                <NavLink to="/service" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Service</NavLink>
                <NavLink to="/contactus" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
              </>
            ) : (
              <>
                {roleType === "freelancer" && (
                  <>
                     <NavLink to="/FreelancerUpadte" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Edit Profile</NavLink>
                    <NavLink to="/FreelancerClientPage" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Profile Verification</NavLink>
                    <NavLink to="/ClientProfile" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Client Profiles</NavLink>
                    {/* <NavLink to="/Subcatagory" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Categories</NavLink> */}
                    <div 
  className="relative group" 
  onMouseEnter={handleCategoryHover} 
  onMouseLeave={handleCategoryLeave}
>
  {/* Main Button */}
  <button className=" text-lg font-semibold text-white ">
    Categories
  </button>

  {/* Dropdown */}
  {categoryDropdown && (
    <div className="absolute top-12 left-0  bg-white  overflow-hidden ">
      {categories.map((category, index) => (
        <div key={index} className="border-b last:border-0 w-48">
          {/* Category Item */}
          <button 
            className="w-full text-left px-5 py-3 text-gray-900 font-medium flex justify-between items-center hover:bg-gray-100 transition-all duration-200"
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
            <span className="text-gray-400 text-sm">▶</span>
          </button>

          {/* Subcategory Dropdown */}
          {selectedCategory === category.name && (
            <div className="bg-gray-50 p-3 shadow-md rounded-md flex flex-col">
              {category.subcategories.map((sub, i) => (
                <Link 
                  key={i} 
                  to={`/subcategory/${sub.replace(/\s+/g, "-").toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md transition-all duration-200"
                >
                  {sub}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>
                  </>
                )}
                {roleType === "client" && (
                  <>
                   <NavLink to="/ClientForm" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Edit Profile</NavLink>
                    <NavLink to="/client" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Profile Verification</NavLink>
                    <NavLink to="/allfreelancer" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Freelancer Profiles</NavLink>
                    {/* <NavLink to="/Subcatagory" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Categories</NavLink> */}
                    <div 
  className="relative group" 
  onMouseEnter={handleCategoryHover} 
  onMouseLeave={handleCategoryLeave}
>
  {/* Main Button */}
  <button className="text-lg font-semibold text-white ">
    Categories
  </button>

  {/* Dropdown */}
  {categoryDropdown && (
    <div className="absolute top-12 left-0  bg-white  overflow-hidden ">
      {categories.map((category, index) => (
        <div key={index} className="border-b last:border-0 w-48">
          {/* Category Item */}
          <button 
            className="w-full text-left px-5 py-3 text-gray-900 font-medium flex justify-between items-center hover:bg-gray-100 transition-all duration-200"
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
            <span className="text-gray-400 text-sm">▶</span>
          </button>

          {/* Subcategory Dropdown */}
          {selectedCategory === category.name && (
            <div className="bg-gray-50 p-3 shadow-md rounded-md flex flex-col">
              {category.subcategories.map((sub, i) => (
                <Link 
                  key={i} 
                  to={`/subcategory/${sub.replace(/\s+/g, "-").toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md transition-all duration-200"
                >
                  {sub}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>
                    
 </>
                )}
              </>
            )}
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            {isLoggedIn && (
              <Link to="/Subcatagory" className="py-2 px-6 bg-green-600 rounded-full text-center font-medium hover:bg-green-500 transition duration-300">
                Chat Now
              </Link>
            )}
            {isLoggedIn ? (
              <button 
                className="py-2 px-6 border border-white rounded-full hover:bg-red-500 transition duration-300"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
              >
                Logout
              </button>
            ) : (
              <Link to="/registration" className="py-2 px-6 border-2 border-white rounded-full text-center hover:bg-white hover:text-green-900 transition duration-300">
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
