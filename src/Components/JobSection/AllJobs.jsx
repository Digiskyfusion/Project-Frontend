import { useEffect, useState } from "react";
import { FaBriefcase, FaMoneyBillWave, FaClipboardList } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const JobSection = () => {
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
      const res = await fetch("http://localhost:3000/api/jobs", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Failed to fetch jobs");
      const data = await res.json();
      setJobs(data);
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
      const res = await fetch(`http://localhost:3000/api/jobs/${jobId}`, {
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
    <div className="mt-10 p-6 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
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

// Edit Job Form
const EditJobForm = ({ job, onClose, updateJobState }) => {
  const [formData, setFormData] = useState({
    title: job.title,
    company: job.company,
    category: job.category,
    skills: job.skills,
    location: job.location,
    salary: job.salary,
    experience: job.experience,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      console.log("Updating job:", formData);

      const res = await fetch(`http://localhost:3000/api/jobs/${job._id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update job");

      // Directly update the job state
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Job</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {Object.keys(formData).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder={key}
              className="w-full p-2 border rounded"
            />
          ))}
          <div className="flex gap-3">
            <button type="submit" className="bg-green-500 text-white p-2 rounded">Save</button>
            <button type="button" className="bg-gray-500 text-white p-2 rounded" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobSection;
