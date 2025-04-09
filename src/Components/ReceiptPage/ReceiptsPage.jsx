import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ReceiptsPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchReceipts = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const res = await axios.get(`${API_URL}/api/payment/receipts/${user._id}`);
      setReceipts(res.data);
    } catch (error) {
      console.error("Error fetching receipts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReceipts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 md:px-16">
      <div className="mb-6">
        <Link to="/" className="cursor-pointer">
          <button className="px-4 py-2 bg-[#004930] cursor-pointer text-white rounded hover:bg-[#006a4e] transition">
            ← Back to Home
          </button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center text-[#004930]">
        Your Payment Receipts
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : receipts.length === 0 ? (
        <p className="text-center text-gray-500">No receipts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {receipts.map((receipt, index) => (
            // 🟩 OPTION 1: Glassmorphism
            // <div key={index} className="backdrop-blur-md bg-white/60 border border-white/30 shadow-lg rounded-xl p-6 transition hover:scale-[1.02]">

            // 🟩 OPTION 2: Gradient Glow
            // <div key={index} className="bg-gradient-to-br from-green-50 to-white border border-green-200 shadow-xl rounded-2xl p-6 hover:ring-2 hover:ring-green-400 transition">

            // 🟩 OPTION 3: Neo-Brutalism
            // <div key={index} className="bg-[#f8f9fa] border-4 border-[#004930] rounded-xl p-5 shadow-lg hover:translate-y-[-3px] transition">

            // 🟩 OPTION 4: Dark Mode Elevation
            // <div key={index} className="bg-[#1f2937] text-gray-100 border border-gray-700 shadow-lg rounded-xl p-6 hover:shadow-2xl transition">

            // 🟩 OPTION 5: Receipt Paper Look
            <div key={index} className="bg-white border-2 border-dashed border-green-400 rounded-lg p-5 shadow-md font-[Courier] transition hover:shadow-xl">

              <h2 className="text-lg font-bold text-green-700 mb-2">
                📄 {receipt.planName}
              </h2>
              <div className="text-sm space-y-1 text-gray-700 tracking-wide">
                <p><strong>Name:</strong> {receipt.name}</p>
                <p><strong>Email:</strong> {receipt.email}</p>
                <p><strong>Contact:</strong> {receipt.mobileNumber}</p>
                <p><strong>Plan:</strong> {receipt.planName}</p>
                <p><strong>Credits Added:</strong> {receipt.creditsAdded}</p>
                {/* <p><strong>Total Credits:</strong> {receipt.totalCredits}</p> */}
                <p><strong>Payment ID:</strong> <span className="break-all">{receipt.paymentId}</span></p>
                <p><strong>Date:</strong> {new Date(receipt.paymentDate).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReceiptsPage;
