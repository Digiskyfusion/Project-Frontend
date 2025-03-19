import React from "react";
import { CiSearch, CiBellOff } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import pic from './../../assets/Images/Ellipse 121.png';
import { Link } from "react-router-dom";

function DashboardSecond() {
  return (
    <div className="w-full">
      {/* {/ Main Content /} */}
      <div className="flex-1 flex flex-col">
        {/* {/ Navbar /} */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-3 px-1 md:px-5 py-3 ">
          
          {/* {/ Search Bar /} */}
          <div className="flex items-center border-2 border-gray-300 bg-gray-100 rounded-lg py-1 px-1 md:px-5 md:py-2 ">
            <input
              type="text"
              placeholder="Search"
              className="outline-none flex-1 bg-transparent text-sm md:text-base"
            />
            <CiSearch className="text-sm md:text-2xl text-gray-600 cursor-pointer" />
          </div>

          {/* {/ Right Section /} */}
          <div className="flex items-center justify-between flex-wrap gap-2 md:gap-5">
            {/* {/ Profile Section /} */}
            <div className="flex items-center gap-2 bg-gray-100 py-2 px-1 md:px-4 rounded-full cursor-pointer">
              <img loading="lazy" src={pic} alt="Profile" className="h-4 w-4 md:h-8 md:w-8 rounded-full" />
              <p className="text-gray-700 text-[10px] md:text-base">Profile</p>
              <IoIosArrowDown className="text-gray-600 text-sm md:text-base" />
            </div>

            {/* {/ Icons /} */}
            <div className="text-[15px] md:text-2xl p-1 md:p-3 bg-gray-100 rounded-full cursor-pointer">
              <CiBellOff className="text-gray-600 " />
            </div>

            {/* <div className="text-[15px] md:text-2xl p-2 md:p-3 bg-gray-100 rounded-full cursor-pointer">
            <Link to=''>
              <GiHamburgerMenu className="text-gray-600" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSecond;
