import { useEffect, useState } from "react";
import { FaBriefcase, FaMoneyBillWave, FaClipboardList } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const JobSection = () => {
  const URL = import.meta.env.VITE_API_URL;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      fetchJobs();
    }
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      // const userId = localStorage.getItem("user"); // ✅ Get user ID from localStorage
      const user = JSON.parse(localStorage.getItem("user")); // Parse the stored user object
      const userId = user?._id; // Safely access _id
      // console.log(userId);

      if (!userId) {
        throw new Error("User ID not found");
      }

      const res = await fetch(`${URL}/api/jobs`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      
      

      if (!res.ok) throw new Error("Failed to fetch jobs");

      const data = await res.json();
console.log("job ", data);
      // ✅ Filter only jobs posted by the logged-in user
      const userJobs = data.filter((job) => job.postedBy === userId);

      setJobs(userJobs);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (job) => {
    setSelectedJob(job);
    setShowEditModal(true);
  };

  const handleDelete = async (jobId) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await fetch(`${URL}/api/jobs/${jobId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Failed to delete job");
      setJobs(jobs.filter((job) => job._id !== jobId));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" p-6 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-3">💼 Job Listings</h2>

      {loading ? (
        <p className="text-center text-gray-500 text-lg animate-pulse">Loading jobs...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No jobs available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="relative bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-300 hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-[#004930]"
            >
              {/* <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <FaBriefcase className="text-[#004930]" /> {job.title} at {job.company}
                </h3>
                <span className="px-3 py-1 text-xs font-semibold text-white bg-[#004930] rounded-full">
                  {job.category}
                </span>
              </div> */}
              <div className="text-gray-700 space-y-2">
              <p className="flex items-center gap-2">
                  <FaClipboardList className="text-green-500" />
                  <strong>Title:</strong> {job.title || "Not specified"}
                </p>
                <p className="flex items-center gap-2">
                  <FaClipboardList className="text-green-500" />
                  <strong>Skills:</strong> {job.skills || "Not specified"}
                </p>
                {/* <p className="flex items-center gap-2">
                  <CiLocationOn className="text-blue-500" />
                  <strong>Location:</strong> {job.location || "Not specified"}
                </p> */}
                <p>
                  <FaMoneyBillWave className="text-yellow-500 inline" />
                  <strong>{job.currency}:</strong> {job.budget || "Not disclosed"}
                </p>
                <p>
                  <strong>Experience:</strong> {job.experience || "Not mentioned"} 
                </p>
                <p>
                  <strong>Description:</strong> {job.description || "Not mentioned"}
                </p>
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  className="py-2 px-4 w-full bg-[#004930] cursor-pointer text-white rounded-lg font-semibold hover:bg-[#2e473e] transition"
                  onClick={() => handleEdit(job)}
                >
                  Edit
                </button>
                <button
                  className="py-2 px-4 w-full bg-red-500 cursor-pointer text-white rounded-lg font-semibold hover:bg-red-700 transition"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showEditModal && selectedJob && (
        <EditJobForm job={selectedJob} onClose={() => setShowEditModal(false)} updateJobState={setJobs} />
      )}
    </div>
  );
};

// Edit Job Form Component
const EditJobForm = ({ job, onClose, updateJobState }) => {
  const [formData, setFormData] = useState({
    title: job.title,
    // company: job.company,
    // category: job.category,
    skills: job.skills,
    // location: job.location,
    currency:job.currency,
    budget: job.budget,
    experience: job.experience,
    description:job.description
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      console.log("Updating job:", formData);

      const res = await fetch(`${URL}/api/jobs/${job._id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update job");

      // Update the job state directly
      updateJobState((prevJobs) =>
        prevJobs.map((j) => (j._id === job._id ? { ...j, ...formData } : j))
      );

      alert("Job updated successfully!");
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Edit Job</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(formData).map((key) => {
        if (key === "currency") {
          return (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-600 capitalize mb-1">Currency</label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Currency</option>
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>
          );
        }

        if (key === "skills") {
          return (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-600 capitalize mb-1">Skills</label>
              <select
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Skill</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Development">Development</option>
                <option value="Content Writing">Content Writing</option>
                <option value="Influencer Marketing">Influencer Marketing</option>
              </select>
            </div>
          );
        }

        return (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-600 capitalize mb-1">{key}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder={`Enter ${key}`}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      })}

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 cursor-pointer text-white font-semibold px-5 py-2 rounded-lg transition"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-400 hover:bg-gray-500 cursor-pointer text-white font-semibold px-5 py-2 rounded-lg transition"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>



  );
};

export default JobSection;
