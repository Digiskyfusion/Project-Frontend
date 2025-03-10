<<<<<<< HEAD

import Dashboard from '../Components/Dashboard'
import DashboardSecond from '../Components/DashboardSecond'
import MainDashboard from '../Components/MainDashboard'
import Footer from '../Components/Footer'


function DashboardPage() {
  return (
    <>

   <div className='flex w-full'>
  <div className=''>
    <Dashboard />
  </div>
  <div className='flex-1'>
    <DashboardSecond />
    <MainDashboard />
  </div>
</div>
<Footer />
      
    </>
  )
}

export default DashboardPage
=======
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Components/DashboardPage/Dashboard";
import DashboardSecond from "../Components/DashboardPage/DashboardSecond";
import MainDashboard from "../Components/DashboardPage/MainDashboard";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


function DashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]);

  return (
    <>
      <div className="flex w-full">
        <div>
          <Dashboard />
        </div>
        <div className="flex-1">
          <DashboardSecond />
          <MainDashboard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardPage;
>>>>>>> 5bdeadc (Fresh start with clean code)
