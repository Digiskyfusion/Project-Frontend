import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Components/DashboardPage/Dashboard";
import DashboardSecond from "../Components/DashboardPage/DashboardSecond";
import MainDashboard from "../Components/DashboardPage/MainDashboard";
import Footer from "../Components/Footer/Footer";


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
        {/* <div>
          <Dashboard />
        </div> */}
        <div className="flex-1 ">
          <DashboardSecond />
          <MainDashboard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardPage;
