import  { useState } from "react";
// import {  useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const URL= import.meta.env.VITE_API_URL
// auth remove form the api url 
// deployed on this commit 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/api/forget-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Something went wrong.", error);
    }
  };

  return (
    <div className="flex items-center justify-center pt-9 pb-10 bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-500 cursor-pointer text-white p-2 rounded">
            Submit
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-green-700">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;