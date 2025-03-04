import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

function Clientformm() {
  const [activeForm, setActiveForm] = useState("client"); // Managing form toggle
  const navigate= useNavigate()
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-center text-xl text-black font-bold md:text-2xl">
        Digisky
      </h1>
      <p className="text-center">Please sign up to continue</p>

      {/* Toggle buttons */}
      <div className="flex justify-center space-x-4">
        <button
          className={`py-2 px-4 font-semibold rounded-md cursor-pointer ${
            activeForm === "freelancer" ? "text-black underline" : "text-gray-700"
          }`}
          onClick={() => navigate("/FreelancreClientPage")}
        >
          Freelancer
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-md cursor-pointer ${
            activeForm === "client" ? "text-black underline" : "text-gray-700"
          }`}
        >
          Client
        </button>
      </div>

      {/* Render ClientForm if 'client' is selected */}
      {activeForm === "client" && <ClientForm />}
    </div>
  );
}

// Separate ClientForm component
function ClientForm() {
  const [clientData, setClientData] = useState({
    clientId: "",
    image: null,
    mobileNumber: "",
    govtIdProof: null,
    govtIdNumber: "",
  });



  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Client Details</h2>

      <div>
        <label className="block font-medium">Client ID hello</label>
        <input
          type="text"
          name="clientId"
          value=""
          onChange=""
          className="w-full p-2 border rounded-md"
          placeholder="Enter Client ID"
        />
      </div>

      <div>
        <label className="block font-medium">Image</label>
        <input
          type="file"
          name="image"
          onChange=""
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div>
        <label className="block font-medium">Mobile Number</label>
        <input
          type="tel"
          name="mobileNumber"
          value=""
          onChange=""
          className="w-full p-2 border rounded-md"
          placeholder="Enter Mobile Number"
        />
      </div>

      <div>
        <label className="block font-medium">Govt-Id-Proof</label>
        <input
          type="file"
          name="govtIdProof"
          onChange=""
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div>
        <label className="block font-medium">Govt-Id-Number</label>
        <input
          type="text"
          name="govtIdNumber"
          value=""
          onChange=""
          className="w-full p-2 border rounded-md"
          placeholder="Enter Govt ID Number"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#004930] text-white py-2 px-5 rounded-full font-semibold"
        >
          Submit Client Details
        </button>
      </div>
    </form>
  );
}

export default Clientformm;
