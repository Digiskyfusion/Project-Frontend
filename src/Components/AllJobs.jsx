import { useEffect, useState } from "react";
import { FaBriefcase, FaMoneyBillWave, FaClipboardList } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Jobsection = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); // ✅ useNavigate Hook

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  // 🛠 Edit Button Click Handler
  const handleEdit = (job) => {
    navigate("/postjob", { state: { job } }); // ✅ Job Data Pass Karein
    console.log(job);
    
  };
 
  

  return (
    <div className="mt-10 p-6 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        💼 Job Listings
      </h2>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No jobs available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-300 
                         hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-[#004930]"
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
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <FaMoneyBillWave className="text-yellow-500 inline" />
                  <strong> Salary:</strong> {job.salary || "Not disclosed"}
                </p>
                <p>
                  <strong>Experience:</strong> {job.experience || "Not mentioned"}
                </p>
              </div>

              {/* ✅ Edit Button with Data Passing */}
              <button
                onClick={() => handleEdit(job)}
                className="mt-4 w-full py-2 rounded-lg bg-[#004930] text-white font-semibold hover:bg-green-700 transition"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobsection;
