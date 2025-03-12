import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from './../../assets/Images/digilogo12.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [roleType, setRoleType] = useState(null);

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
      const userData = JSON.parse(localStorage.getItem("user"));
      setRoleType(userData?.roleType || null);
    };

    handleAuthChange(); // Initial check
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("roleType");
    // Dispatch custom event to notify navbar
    window.dispatchEvent(new Event("authChange"));
  };

  const freelancerNav = (
    <>
      <li><NavLink to="/FreelancreClientPage">Profile Verification</NavLink></li>
      <li><NavLink to="/ClientProfile">Client Profile</NavLink></li>
      <li><NavLink to="/MembershipPlans">Plan Info</NavLink></li>
      <li><NavLink to="/FreelancerUpadte">Edit Profile</NavLink></li>
    </>
  );

  const clientNav = (
    <>
      <li><NavLink to="/client">Profile Verification</NavLink></li>
      <li><NavLink to="/ClientForm">Edit Profile</NavLink></li>
      <li><NavLink to="/Subcatagory">Subcategory</NavLink></li>
      <li><NavLink to="/allfreelancer">Freelancer Profile</NavLink></li>
    </>
  );

  return (
    <nav className="bg-[#004930] text-white px-6 py-4 shadow-md sticky top-0 z-20">
      <div className="container px-1 xl:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={Logo} alt="Logo" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        <ul className="hidden md:flex space-x-6">
          {!isLoggedIn || (roleType !== "client" && roleType !== "freelancer") ? (
            <>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/aboutus">About Us</NavLink></li>
              <li><NavLink to="/ChooseUSPage">Choose Us</NavLink></li>
              <li><NavLink to="/service">Service</NavLink></li>
              <li><NavLink to="/contactus">Contact Us</NavLink></li>
            </>
          ) : null}

          {isLoggedIn && roleType === "freelancer" && freelancerNav}
          {isLoggedIn && roleType === "client" && clientNav}
        </ul>

        <div className="hidden md:block">
          {!isLoggedIn ? (
            <button className="py-2 px-8 border-2 rounded-full">
              <Link to="/registration"><a href="/registration">Registration</a></Link>
            </button>
          ) : (
            <button className="py-2 px-8 border-2 rounded-full" onClick={handleLogout}>
             <a href="/login"> Logout</a>
            </button>
          )}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-green-900 p-4 text-center">
          <ul className="space-y-4">
            {!isLoggedIn || (roleType !== "client" && roleType !== "freelancer") ? (
              <>
                <li><NavLink to="/" className="block hover:text-gray-300">Home</NavLink></li>
                <li><NavLink to="/aboutus" className="block hover:text-gray-300">About Us</NavLink></li>
                <li><NavLink to="/ChooseUSPage" className="block hover:text-gray-300">Choose Us</NavLink></li>
                <li><NavLink to="/service" className="block hover:text-gray-300">Service</NavLink></li>
                <li><NavLink to="/contactus" className="block hover:text-gray-300">Contact Us</NavLink></li>
              </>
            ) : null}

            {isLoggedIn && roleType === "freelancer" && freelancerNav}
            {isLoggedIn && roleType === "client" && clientNav}
          </ul>

          <div className="mt-4">
            {!isLoggedIn ? (
              <button className="py-2 px-5 border-2 rounded-full">
                <NavLink to="/registration">Registration</NavLink>
              </button>
            ) : (
              <button className="py-2 px-5 border-2 rounded-full" onClick={handleLogout}>
                <a href="/login">Logout</a>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
