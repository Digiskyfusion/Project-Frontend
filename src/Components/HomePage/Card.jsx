import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";

const MembershipPlans = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

  const plans = [
    { name: "Basic", credit: 10, amount: 200 },
    { name: "Standard", credit: 25, amount: 400 },
    { name: "Premium", credit: 50, amount: 600 },
  ];

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    contact: "",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setToken(storedToken);
    setUserId(storedUser?._id);
    setUserDetails({
      name: storedUser?.name || "",
      email: storedUser?.email || "",
      contact: storedUser?.contact || "",
    });
  }, []);

  const handleSubscribe = async (plan) => {
    setMessage("");

    if (!token || !userId) {
      setMessage("Authentication required. Redirecting to login...");
      setTimeout(() => navigate("/registration"), 1500);
      return;
    }

    setLoading(true);

    try {
      const orderRes = await fetch(`${API_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: plan.amount }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || "Failed to create order");

      const options = {
        key: RAZORPAY_KEY,
        amount: orderData.amount,
        currency: "INR",
        name: "Matrimony App",
        description: `${plan.name} Plan`,
        order_id: orderData.id,
        handler: async function (response) {
          const verifyRes = await fetch(`${API_URL}/api/payment/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId,
              plan: plan.credit,
              planName: plan.name,
            }),
          });

          const verifyData = await verifyRes.json();
          if (!verifyRes.ok) throw new Error(verifyData.error || "Verification failed");

          setMessage(verifyData.message);
          navigate("/reciept");
        },
        prefill: {
          name: userDetails.name || "User Name",
          email: userDetails.email || "user@example.com",
          contact: userDetails.contact || "9999999999",
        },
        theme: { color: "#004930" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      setMessage(error.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        Pricing Plans For Everyone
        <h2 className="text-xl mt-4 text-gray-600">
          No surprise fees. Cancel anytime.
        </h2>
      </h1>

      {message && (
        <p className="text-red-500 mb-6 font-medium">{message}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border-[#004930] hover:bg-[#004930] hover:text-white px-8 py-12 sm:px-12 lg:px-20 sm:py-16 lg:py-20 rounded-2xl shadow-lg text-center border group 
              transition duration-300 border-t-8 transform hover:scale-105 cursor-pointer"
            style={{ boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)" }}
            onClick={() => handleSubscribe(plan)}
          >
            <h2 className="text-xl font-semibold mb-2">{plan.name} Plan</h2>
            <h3 className="text-3xl font-bold mt-4 flex items-center justify-center">
              <FaIndianRupeeSign className="text-xl mr-1" />
              {plan.amount}/month
            </h3>
            <p className="text-sm mt-2">
              Get {plan.credit} credits per month. Upgrade anytime.
            </p>
            <button className="mt-4 py-2 px-5 cursor-pointer bg-[#004930] text-white rounded-full transition duration-300 group-hover:bg-white group-hover:text-black">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
