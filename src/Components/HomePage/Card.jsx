import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";

const MembershipPlans = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;


  const plans = [
  { name: "Basic", credit: 10, amount: 200, planId: "plan_Qfqgtp1Gyp2JLn" },
  { name: "Premium", credit: 50, amount: 600, planId: "plan_Qfr2yBBJVHLAZW" },
  { name: "Standard", credit: 25, amount: 400, planId: "plan_Qfr2eVCdI1Vi1w" },
];




  // const plans = [
  //   { name: "Basic", credit: 10, amount: 200, planId: "plan_RFWlozRMl36n2G" },
  //   { name: "Premium", credit: 50, amount: 600, planId: "plan_Qfr2yBBJVHLAZW" },
  //   {
  //     name: "Standard",
  //     credit: 25,
  //     amount: 400,
  //     planId: "plan_Qfr2eVCdI1Vi1w",
  //   },
  // ];


  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);
  const [roleType, setRoleType] = useState(null);
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
    setRoleType(storedUser.roleType);
   
    setUserDetails({
      name: storedUser?.name || "",
      email: storedUser?.email || "",
      contact: storedUser?.contact || "",
    });
  }, []);

// const handleSubscribe = async (plan) => {
//   setMessage("");

//   if (!token || !userId) {
//     setMessage("Authentication required. Redirecting to login...");
//     setTimeout(() => navigate("/registration"), 1500);
//     return;
//   }

//   setLoading(true);

//   try {
//     const subRes = await fetch(`${API_URL}/api/payment/create-subscription`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ planId: plan.planId }),
//     });

//     const subData = await subRes.json();
//     if (!subRes.ok) throw new Error(subData.error || "Failed to create subscription");

//     const options = {
//       key: RAZORPAY_KEY,
//       subscription_id: subData.id,
//       name: "Digisky AI",
//       description: `${plan.name} Plan - Monthly`,
//       handler: async function (response) {
//         try {
//           const verifyRes = await fetch(`${API_URL}/api/payment/verify-subscription`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               razorpay_subscription_id: response.razorpay_subscription_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               userId,
//               plan: plan.name,
//             }),
//           });

//           const verifyData = await verifyRes.json();
//           if (!verifyRes.ok) throw new Error(verifyData.error || "Verification failed");

//           setMessage(verifyData.message);
//           navigate("/reciept");
//         } catch (err) {
//           setMessage(err.message || "Something went wrong.");
//         }
//       }, // 👈 Don't forget this comma here!

//       prefill: {
//         name: userDetails.name,
//         email: userDetails.email,
//         contact: userDetails.contact,
//       },
//       theme: { color: "#004930" },
//     };

//     const razorpay = new window.Razorpay(options);
//     razorpay.open();
//   } catch (error) {
//     setMessage(error.message || "Subscription failed");
//   } finally {
//     setLoading(false);
//   }
// };
const handleSubscribe = async (plan) => {

  setMessage("");

  if (!token || !userId) {
  
    setMessage("Authentication required. Redirecting to login...");
    setTimeout(() => {
 
      navigate("/registration");
    }, 1500);
    return;
  }

  setLoading(true);


  try {
  

    const subRes = await fetch(`${API_URL}/api/payment/create-subscription`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planId: plan.planId }),
    });


    const subData = await subRes.json();
  

    if (!subRes.ok) {
   
      throw new Error(subData.error || "Failed to create subscription");
    }

    const options = {
      key: RAZORPAY_KEY,
      subscription_id: subData.id,
      name: "Digisky AI",
      description: `${plan.name} Plan - Monthly`,
      handler: async function (response) {
       
        try {
        

          const verifyRes = await fetch(`${API_URL}/api/payment/verify-subscription`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_subscription_id: response.razorpay_subscription_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId,
              plan: plan.name,
            }),
          });

        
          const verifyData = await verifyRes.json();
          

          if (!verifyRes.ok) {
            console.error("[DEBUG-HS-013] Verification failed:", verifyData.error);
            throw new Error(verifyData.error || "Verification failed");
          }

        
          setMessage(verifyData.message);
          navigate("/reciept");
        } catch (err) {
          console.error("[DEBUG-HS-015] Error during verification:", err);
          setMessage(err.message || "Something went wrong.");
        }
      },

      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.contact,
      },
      theme: { color: "#004930" },
    };



    const razorpay = new window.Razorpay(options);
   
    razorpay.open();
  } catch (error) {
    console.error("[DEBUG-HS-018] Error during subscription flow:", error);
    setMessage(error.message || "Subscription failed");
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
           className={`relative border-[#004930] px-8 py-12 sm:px-12 lg:px-20 sm:py-16 lg:py-20 rounded-2xl shadow-lg text-center border group transition duration-300 transform cursor-pointer ${
    plan.name === "Premium"
      ? "bg-gradient-to-b from-white via-emerald-100 to-white scale-110 z-10 shadow-2xl"
      : "hover:bg-[#004930] hover:text-white hover:scale-105"
  }`}
            style={{ boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)" }}
            onClick={() => handleSubscribe(plan)}
          >
            <h2 className="text-xl font-semibold mb-2">{plan.name} Plan</h2>
            <h3 className="text-3xl font-bold mt-4 flex items-center justify-center">
              <FaIndianRupeeSign className="text-xl mr-1" />
              {plan.amount}/month
            </h3>
            {plan.name === "Premium" && (
  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
    🔥 Special Offer
  </div>
)}

           {roleType === 'freelancer' && (
  <>
    {plan.name === "Basic" && (
      <ul className="text-sm mt-2 space-y-1">
        <li>✅ Unlimited work and link uploads to showcase your talent.</li>
        <li>✅ Boost your visibility and increase your chances of getting hired.</li>
      </ul>
    )}

    {plan.name === "Standard" && (
      <ul className="text-sm mt-2 space-y-1">
        <li>✅ Everything in <strong>Basic</strong>, plus:</li>
        <li>✅ Access to chat — connect directly with clients or freelancers.</li>
        <li>✅ Featured placement — get your profile and work highlighted at the top.</li>
      </ul>
    )}

    {plan.name === "Premium" && (
      <ul className="text-sm mt-2 space-y-1">
        <li>✅ Everything in <strong>Standard</strong>, plus:</li>
        <li>
  ✅ <span className="italic font-semibold px-2 py-1 rounded">
    Your own personalized portfolio with a custom domain name.
  </span>
</li>

        <li>✅ Stand out and share your work with a professional presence anywhere.</li>
      </ul>
    )}
  </>
)}
{roleType === 'client' && (
  <>
    {plan.name === "Basic" && (
      <ul className="text-sm mt-2 space-y-1">
        <li>✅ Unlimited job uploads.</li>
      </ul>
    )}

    {plan.name === "Standard" && (
      <ul className="text-sm mt-2 space-y-1">
        <li>✅ Everything in <strong>Basic</strong>, plus:</li>
        <li>✅ Access to chat — connect directly with freelancers.</li>
      </ul>
    )}

    {plan.name === "Premium" && (
      <ul className="text-sm mt-2 space-y-1">
        <li>✅ Everything in <strong>Standard</strong>, plus:</li>
        <li>✅ Featured placement — get your profile and job highlighted at the top.</li>
      </ul>
    )}
  </>
)}

            <button className={`mt-4 py-2 px-5 cursor-pointer bg-[#004930] text-white rounded-full transition duration-300 ${
    plan.name === "Premium"
      ? " group-hover:text-white group-hover:bg-black"
      : " group-hover:text-black group-hover:bg-white"
  }`}>
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
