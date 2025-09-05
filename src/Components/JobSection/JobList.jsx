import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaMoneyBillWave, FaCode, FaUserTie } from "react-icons/fa";

const JobList = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_URL}/api/jobs`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await res.json();
        // const reversedData = [...data].reverse(); // clone and reverse
        setJobs(data || []);
        // console.log("data",data);
        // console.log("data reverse",reversedData);
        
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [token]);
console.log("hihi",jobs);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-gray-500 text-lg animate-pulse">Loading jobs...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#004930]">📄 Job Listings</h2>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-600">No jobs found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job,index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#004930] mb-3">{job.title}</h3>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <FaCode className="text-blue-500" />
                  <div className="flex gap-2 flex-wrap">
                    {job.skills.split(',').map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-[#004930] text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-green-600" />
                  <span>
                    <strong>{job.currency}</strong> {job.budget}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FaUserTie className="text-yellow-600" />
                  <span>{job.experience}</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm line-clamp-3 mb-5">{job.description}</p>

              <Link to={`/livechat/${job.postedBy}`}>
                <button className="w-full bg-[#004930] cursor-pointer text-white py-2 rounded-lg hover:bg-[#0B6623] transition">
                  💬 Chat Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
