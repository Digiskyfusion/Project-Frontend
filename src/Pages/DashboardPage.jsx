import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Content */}
        <div className="absolute inset-0 z-0 blur-xl">
          <DashboardSecond />
          <MainDashboard />
        </div>

        {/* Centered Message */}
        <div className="absolute inset-0 flex items-center justify-center z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            🌟 Great things take time! 🌟  
          </h1>
        </div>

        {/* Subtext */}
        <div className="absolute inset-0 flex items-center justify-center z-10 flex-col mt-20 text-center px-6">
          <p className="text-lg md:text-2xl text-white bg-black bg-opacity-50 px-6 py-2 rounded-lg">
            We’re crafting something amazing for you. Please stay with us! 💜
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DashboardPage;
