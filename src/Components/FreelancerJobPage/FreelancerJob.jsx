import { useEffect, useState } from "react";
import { FaBriefcase, FaMoneyBillWave, FaClipboardList } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const FreelancerJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Assuming user object is stored
    if (!user || user.roleType !== "freelancer") {
      console.error("Access Denied: Only freelancers can view this page.");
      navigate("/login"); // Redirect if not a freelancer
      return;
    }
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found, redirecting...");
      navigate("/login");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/jobs", {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error(`Failed to fetch jobs: ${res.statusText}`);
    //   setLoading(false)
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to apply for a job
  const handleApply = async (jobId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to apply for jobs.");
      navigate("/login");
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/api/jobs/apply/${jobId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to apply for job");

      alert("Successfully applied for the job!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="mt-10 p-6 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-3">
        💼 Available Jobs
      </h2>

      {loading ? (
        <p className="text-center text-gray-500 text-lg animate-pulse">Loading jobs...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No jobs available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-300 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <FaBriefcase className="text-[#004930]" /> {job.title} at {job.company}
                </h3>
                <span className="px-3 py-1 text-xs font-semibold text-white bg-[#004930] rounded-full">
                  {job.category}
                </span>
              </div>
              <div className="text-gray-700 space-y-2">
                <p className="flex items-center gap-2">
                  <FaClipboardList className="text-green-500" />
                  <strong>Skills:</strong> {job.skills || "Not specified"}
                </p>
                <p className="flex items-center gap-2">
                  <CiLocationOn className="text-blue-500" />
                  <strong>Location:</strong> {job.location || "Not specified"}
                </p>
                <p>
                  <FaMoneyBillWave className="text-yellow-500 inline" />
                  <strong> Salary:</strong> {job.salary || "Not disclosed"}
                </p>
                <p>
                  <strong>Experience:</strong> {job.experience || "Not mentioned"}
                </p>
              </div>
              {/* Apply Button */}
              <button
                onClick={() =>navigate("/livechat")}
                className="mt-4 w-full bg-[#004930] text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FreelancerJobs;
