import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pic from './../../assets/Images/145856997_296fe121-5dfa-43f4-98b5-db50019738a7.jpg';

const Profile = () => {
  const { id } = useParams();
  const [freelancer, setFreelancer] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    roleType: "",
    country: "",
    mobileNumber: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/users/user/${id}`)
      .then((res) => res.json())
      .then((data) => setFreelancer(data))
      .catch((error) => console.error("Error fetching freelancer details:", error));
  }, [id]);

  if (!freelancer.name) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <div className="flex flex-col items-center">
          <img
            src={freelancer.user_image || pic}
            alt={freelancer.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-green-500"
          />
          <h1 className="text-2xl font-bold text-center mt-4">{freelancer.name}</h1>
          <p className="text-gray-600 text-center">{freelancer.roleType}</p>
        </div>

        <div className="mt-4 space-y-2 text-center">
          <p className="text-lg"><strong>Email:</strong> <i className="blur-sm">{freelancer.email || "N/A"}</i></p>
          <p className="text-lg"><strong>Country:</strong> {freelancer.country || "N/A"}</p>
          <p className="text-lg"><strong>Mobile Number:</strong> <i className="blur-sm">{freelancer.mobileNumber || "N/A"}</i></p>
          <p className="text-lg"><strong>Skills:</strong> <i className="blur-sm">{freelancer.skill || "N/A"}</i></p>
          <p className="text-lg"><strong>Experience:</strong> <i className="blur-sm">{freelancer.experience || "N/A"}</i></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
