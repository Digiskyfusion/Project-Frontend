import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../assets/Images/digilogo12.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [roleType, setRoleType] = useState(null);

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
      const userData = JSON.parse(localStorage.getItem("user"));
      setRoleType(userData.roleType || null);
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
    }
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
                 <NavLink to="/edit-profile" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Edit Profile</NavLink>
                    <NavLink to="/profile-verification" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Profile Verification</NavLink>
                    <NavLink to="/profile-verification" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Profile Verification</NavLink>
                    <NavLink to="/categories" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Categories</NavLink>
 </>
              )}
              {roleType === "client" && (
                <>
                  <NavLink to="/freelancer-profiles" className="hover:text-yellow-400">Freelancer Profiles</NavLink>
                  <NavLink to="/client-profiles" className="hover:text-yellow-400">Client Profiles</NavLink>
                  <NavLink to="/categories" className="hover:text-yellow-400">Categories</NavLink>
                </>
              )}
            </>
          )}
        </div>

        {/* Buttons */}
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
                     <NavLink to="/edit-profile" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Edit Profile</NavLink>
                    <NavLink to="/profile-verification" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Profile Verification</NavLink>
                    <NavLink to="/freelancer-profiles" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Freelancer Profiles</NavLink>
                    <NavLink to="/categories" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Categories</NavLink>
                  </>
                )}
                {roleType === "client" && (
                  <>
                   <NavLink to="/edit-profile" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Edit Profile</NavLink>
                    <NavLink to="/profile-verification" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Profile Verification</NavLink>
                    <NavLink to="/freelancer-profiles" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Freelancer Profiles</NavLink>
                    <NavLink to="/categories" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Categories</NavLink>
 </>
                )}
              </>
            )}
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            {isLoggedIn && (
              <Link to="/chat" className="py-2 px-6 bg-green-600 rounded-full text-center font-medium hover:bg-green-500 transition duration-300">
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
