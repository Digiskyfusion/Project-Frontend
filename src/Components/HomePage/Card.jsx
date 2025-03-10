import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MembershipPlans = () => {
  const URL= import.meta.env.VITE_API_URL

  const plans = [
    { name: "Basic", credit: 10, amount: 19.99 },
    { name: "Standard", credit: 25, amount: 39.99 },
    { name: "Premium", credit: 50, amount: 59.99 },
  ];

  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setMessage("");
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!selectedPlan) {
      setMessage("Please select a membership plan.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Authentication required. Redirecting to login...");
        setTimeout(() => navigate("/registration"), 1500);
        setLoading(false);
        return;
      }

      const response = await fetch(`"${URL}api/plan/create"`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(selectedPlan),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create subscription plan");
      }

      setMessage("Subscription successful!");
      setSelectedPlan(null);
      setTimeout(() => navigate("/freelancerDetails"), 1500);
    } catch (error) {
      setMessage(error.message || "Failed to create subscription plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
      <motion.h1
        className="text-4xl font-bold mb-8 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Pricing Plans For Everyone
        <h2 className="text-xl mt-4 text-gray-600">
          No surprise fees. Cancel anytime.
        </h2>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`border-[#004930] hover:bg-[#004930] hover:text-white px-8 py-12 sm:px-12 lg:px-20 sm:py-16 lg:py-20 rounded-2xl shadow-lg text-center border group 
            transition duration-300 border-t-8 transform hover:scale-105 cursor-pointer
            ${
              selectedPlan?.name === plan.name
                ? "border-[#004930] bg-blue-50 shadow-xl"
                : ""
            }`}
            style={{ boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)" }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover="hover"
            onClick={() => handleSelectPlan(plan)}
          >
            <h2 className="text-xl font-semibold mb-2">{plan.name} Plan</h2>
            <h3 className="text-3xl font-bold mt-4">${plan.amount}/month</h3>
            <p className="text-sm mt-2">
              Get {plan.credit} credits per month. Upgrade anytime.
            </p>
            <motion.button
              className="mt-4 py-2 px-5 bg-[#004930] text-white rounded-full transition duration-300 group-hover:bg-white group-hover:text-black"
              whileHover={{ scale: 1.1 }}
            >
              Select Plan
            </motion.button>
          </motion.div>
        ))}
      </div>

      {selectedPlan && (
        <form
          onSubmit={handleSubscribe}
          className="mt-6 p-6 border rounded-lg shadow-lg bg-white max-w-md w-full"
        >
          <h3 className="text-2xl font-bold mb-4">Confirm Subscription</h3>

          {message && (
            <p
              className={`mb-4 ${
                message.includes("successful")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <p>
            <strong>Plan:</strong> {selectedPlan.name}
          </p>
          <p>
            <strong>Credits:</strong> {selectedPlan.credit}
          </p>
          <p>
            <strong>Amount:</strong> ${selectedPlan.amount}/month
          </p>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Confirm & Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
};

export default MembershipPlans;
