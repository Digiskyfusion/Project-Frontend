import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBriefcase, FaDollarSign, FaEye, FaMapMarkerAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const PostJob = () => {
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const location = useLocation();

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [jobData, setJobData] = useState({
    title: "",
    skills: "",
    budget: "",
    currency: "",
    description: "",
    experience: "",
  });

  useEffect(() => {
    
    if (location.state?.job) {
      setJobData(location.state.job);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first!");
      return;
    }

    if (jobData.description.length < 200) {
      toast.error("Job description must be at least 200 characters long.");
      return;
    }
     setIsLoading(true); // Start loading

    const formData = new FormData();
    Object.entries(jobData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await fetch(`${URL}/api/jobs/`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(jobData),
});

      const data = await res.json();
      if (res.ok) {
        toast.success("Job posted successfully!");
        navigate("/all-jobs");
      } else {
        toast.error(data.message || "Failed to post job.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-6 mb-10 py-10 bg-white shadow-xl rounded-3xl border">
      <Toaster />
      <h1 className="text-4xl font-bold text-gray-800 mb-10 flex items-center gap-4">
        <FaBriefcase className="text-green-600" /> Post a Job
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Job Title */}
        <div>
          <label className="text-lg font-semibold mb-2 block">Job Title</label>
          <input
            name="title"
            required
            placeholder="e.g. Frontend Developer"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 ring-green-500"
            value={jobData.title}
            onChange={handleChange}
          />
        </div>

        {/* Skills */}
        <div>
          <label className="text-lg font-semibold mb-2 block">Required Skill</label>
          <select
            name="skills"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 ring-green-500"
            value={jobData.skills}
            onChange={handleChange}
          >
            <option value="">Select</option>
               <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Development">Development</option>
                <option value="Content Writing">Content Writing</option>
                <option value="Influencer Marketing">Influencer Marketing</option>
          </select>
        </div>

        {/* Budget + Currency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-lg font-semibold mb-2 block">Currency</label>
            <select
              name="currency"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 ring-green-500"
              value={jobData.currency}
              onChange={handleChange}
            >
              <option value="INR">INR (₹)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>

          <div>
            <label className="text-lg font-semibold mb-2 block">Budget</label>
            <input
              type="number"
              name="budget"
              required
              placeholder="e.g. 5000"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 ring-green-500"
              value={jobData.budget}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Experience */}
        <div>
          <label className="text-lg font-semibold mb-2 block">Experience Required</label>
          <input
            type="number"
            name="experience"
            required
            placeholder="e.g. 2+ years"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 ring-green-500"
            value={jobData.experience}
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-lg font-semibold mb-2 block">
            Job Description <span className="text-sm text-gray-500">(Min 200 characters)</span>
          </label>
          <textarea
            name="description"
            rows={6}
            required
              minLength={200} // Optional visual validation
            placeholder="Describe the responsibilities, expectations, required skills, and scope of work in detail."
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 ring-green-500"
            value={jobData.description}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="w-full sm:w-1/2 bg-gray-700 cursor-pointer hover:bg-gray-800 text-white py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <FaEye /> Preview
          </button>
          <button
  type="submit"
  disabled={isLoading}
  className={`w-full sm:w-1/2 bg-green-600 cursor-pointer text-white py-3 rounded-xl flex items-center justify-center gap-2 transition ${
    isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
  }`}
>
  {isLoading ? "Posting..." : "Post Job"}
</button>
        </div>
      </form>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Job Preview</h2>
            <div className="text-gray-800 space-y-2">
              <p><strong>Title:</strong> {jobData.title}</p>
              <p><strong>Skills:</strong> {jobData.skills}</p>
              <p><strong>Experience:</strong> {jobData.experience}</p>
              <p><strong>{jobData.currency}:</strong>  {jobData.budget}</p>
              <p><strong>Description:</strong> {jobData.description}</p>
            </div>
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="w-full mt-6 bg-red-500 cursor-pointer hover:bg-red-600 text-white py-2 rounded-xl"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostJob;
