import { FaBriefcase, FaMoneyBillWave, FaClipboardList } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useNavigate   } from "react-router-dom";
const FullJobCard = () => {
  const navigate = useNavigate();
  const handleViewAllJobs = () => {
    const token = localStorage.getItem("token"); // Check authentication
    if (token) {
      navigate("/all-jobs"); // Redirect to all jobs if logged in
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  const handleViewAllJobsss = () => {
    const token = localStorage.getItem("token"); // Check authentication
    if (token) {
      navigate("/livechat"); // Redirect to all jobs if logged in
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };
const randomJobs= [
    {
      "title": "Frontend Developer",
      "company": "TechCorp",
      "skills": "Web Development",
      "location": "New York",
      "salary": "Not disclosed",
      "experience": "Not mentioned"
    },
    {
      "title": "Backend Engineer",
      "company": "CodeLabs",
      "skills": "Node.js, Express, MongoDB",
      "location": "San Francisco",
      "salary": "Not disclosed",
      "experience": "Not mentioned"
    },
    {
      "title": "UI/UX Designer",
      "company": "CreativeStudio",
      "skills": "Figma, Adobe XD",
      "location": "Remote",
      "salary": "Not disclosed",
      "experience": "Not mentioned"
    },
    {
      "title": "Full Stack Developer",
      "company": "InnovateTech",
      "skills": "MERN Stack",
      "location": "Bangalore",
      "salary": "Not disclosed",
      "experience": "Not mentioned"
    }
  ]
  

  return (
    <div className="mt-10 p-6 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
     <div className="flex justify-between mb-3">
     <h2 className="text-2xl font-extrabold text-center text-gray-800">🔥 Featured Jobs</h2>
     <button className="py-2 px-3 rounded-full bg-[#004930] text-white" onClick={handleViewAllJobs} ><Link to="/all-jobs">View All Jobs</Link> </button>
     </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {randomJobs.map((job, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-300 
                         hover:shadow-2xl transition-all hover:-translate-y-1 hover:border-[#004930]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <FaBriefcase className="text-[#004930]" /> {job.title} at {job.company}
                </h3>
                <span className="px-3 py-1 text-xs font-semibold text-white bg-[#004930] rounded-full">
                  {job.category}
                </span>
              </div>

              {/* Job Details */}
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

              {/* Apply Button */}
              <Link to="/livechat" className="cursor-pointer">
              <button className="mt-4 w-full py-2 rounded-lg bg-[#004930] text-white font-semibold hover:bg-green-700 transition">
                <Link onClick={handleViewAllJobsss} to="/livechat">Apply Now</Link>
               Apply Now
              </button>
              </Link>
            </div>
          ))}
        </div>
    </div>
  );
};

export default FullJobCard;