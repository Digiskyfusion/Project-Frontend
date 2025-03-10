import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <>
      <div className="flex min-h-screen h-screen">
        {/* {/ Sidebar /} */}
        <div className="bg-[#004930] flex flex-col h-full">
          <div className="bg-[#185640] md:px-6 text-center py-3 md:py-6 text-white">
            <h1 className="font-bold text-2xl">LOGO</h1>
          </div>
          <div className="px-3 md:px-6 text-white py-6 flex-1">
            <ul className="flex flex-col gap-3">
            <Link to="/dashboard">
              <li className="cursor-pointer">Dashboard</li>
              </Link>
              <Link to="/">
              <li className="cursor-pointer">Home</li>
              </Link>
              <li className="cursor-pointer"><Link to="/aboutus" >About Us</Link></li>
              <li className="cursor-pointer"><Link to="/ChooseUSPage" >Choose Us</Link></li>
              <li className="cursor-pointer"><Link to="/service" >Service</Link></li>
              <li className="cursor-pointer"><Link to="/contactus" >Contact Us</Link></li>
              {/* <li className="cursor-pointer">Find Work</li>
              <li className="cursor-pointer">Find Freelancer</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
