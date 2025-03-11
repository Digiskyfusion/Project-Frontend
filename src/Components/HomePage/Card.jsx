import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MembershipPlans = () => {
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

  return (
    <div className="relative flex flex-col items-center p-8 min-h-screen bg-gray-900">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1600x900/?technology')] bg-cover bg-center blur-xl opacity-40"></div>

      <motion.h1
        className="relative text-5xl font-extrabold mb-8 text-white text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Pricing Plans For Everyone
        <motion.h2
          className="text-2xl mt-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          No surprise fees. Cancel anytime.
        </motion.h2>
      </motion.h1>

      {/* Coming Soon Effect */}
      <motion.div
        className="relative text-6xl font-bold text-white uppercase tracking-widest mt-4 mb-12 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, yoyo: Infinity }}
      >
        Coming Soon...
      </motion.div>
    </div>
  );
};

export default MembershipPlans;
