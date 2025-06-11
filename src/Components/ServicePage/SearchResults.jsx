import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCode,
  FaUserTie,
} from "react-icons/fa";
import axios from "axios";

const SearchResults = () => {
  const { keyword } = useParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/jobs/searchjobs/${keyword}`
        );
        setJobs(res.data || []);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [keyword]);

  const handleChatNow = (userId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.setItem("redirectAfterLogin", `/search/${keyword}`);
      navigate("/login");
    } else {
      navigate(`/livechat/${userId}`);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-gray-500 text-lg animate-pulse">
          Searching for "{keyword}"...
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 py-5 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#004930]">
        🔍 Search Results for{" "}
        <span className="text-[#F66623]">"{keyword}"</span>
      </h2>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-600">
          No jobs found for "{keyword}".
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#004930] mb-3">
                {job.title}
              </h3>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                {job.skills && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <FaCode className="text-blue-500" />
                    {job.skills.split(",").map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-[#004930] text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {job.budget && (
                  <div className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-green-600" />
                    <span>
                      <strong>{job.currency || "₹"}</strong> {job.budget}
                    </span>
                  </div>
                )}

                {job.experience && (
                  <div className="flex items-center gap-2">
                    <FaUserTie className="text-yellow-600" />
                    <span>{job.experience}</span>
                  </div>
                )}

                {job.location && (
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span>{job.location}</span>
                  </div>
                )}
              </div>

              <p className="text-gray-700 text-sm line-clamp-3 mb-5">
                {job.description}
              </p>

              <button
                className="w-full bg-[#004930] cursor-pointer text-white py-2 rounded-lg hover:bg-[#0B6623] transition"
                onClick={() => handleChatNow(job.postedBy)}
              >
                💬 Chat Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
