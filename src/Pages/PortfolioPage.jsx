import { useEffect, useState } from "react";
import axios from "axios";
import { getSubdomain } from "../utils/getSubdomain";
import { motion } from "framer-motion";
import "../index.css";
import Typewriter from "typewriter-effect";


function PortfolioPage() {
  const [user, setUser] = useState(null);
  const subdomain = getSubdomain();
  const API_URL = import.meta.env.VITE_API_URL;
  const [locked, setLocked] = useState(false);




  useEffect(() => {
    if (!subdomain) return;
    axios
      .get(`${API_URL}/user/portfolio/${subdomain}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("User not found", err));
  }, [subdomain]);


  useEffect(() => {
    console.log(user,'999');
  if (user && user.plan != 'premium') {
    const timer = setTimeout(() => setLocked(true), 10000); // 10 seconds
    return () => clearTimeout(timer);
  }
}, [user]);

  if (!user)
    return (
      <div className="h-screen flex items-center justify-center text-xl text-white bg-black">
        Invalid User
      </div>
    );

  const getFileType = (url) => {
    const ext = url.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
    if (["mp4", "webm"].includes(ext)) return "video";
    if (["pdf"].includes(ext)) return "pdf";
    return "other";
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen overflow-hidden  text-white">
      <div className="animated-bg"></div>

      <div className="relative z-10 max-w-7xl mx-auto p-2 sm:p-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1 }}
          className="bg-black/20 rounded-2xl p-3 sm:p-6 space-y-6 border border-white/20 shadow-xl"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-6"
          >
            <motion.img
              src={user.image || "/default-avatar.png"}
              alt={user.name}
              className="w-28 h-28 rounded-full border-4 border-cyan-500 object-cover shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-white text-center sm:text-start">
                {user.name}
              </h1>
             <div className="text-white text-center sm:text-start text-base sm:text-lg mt-2">
 <Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString(user.bio || "No bio added yet.")
      .start();
  }}
  options={{
    autoStart: true,
    loop: false,
    delay: 15, // ⬅️ Fast speed
    cursor: "|", // optional
  }}
/>

</div>

            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="grid sm:grid-cols-1 gap-4 text-sm "
          >
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Mobile:</strong> {user.mobileNumber}</p>
            <p><strong>Experience:</strong> {user.experience || "Not provided"}</p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            variants={sectionVariants}
          >
            <h2 className="text-xl font-semibold text-white mb-2">Skills</h2>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {user.skills?.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-cyan-800/20 border border-white  px-3 py-1 rounded-full text-sm"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Showcase Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
            variants={sectionVariants}
          >
            <h2 className="text-xl font-semibold text-white mb-2">Showcase Links</h2>
            <ul className="list-disc ml-5 text-white space-y-1">
              {user.showcaseLinks?.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + idx * 0.1 }}
                >
                  <a
                    href={`${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Past Experience */}
          {user.pastExperience && (
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.1 }}
              variants={sectionVariants}
            >
              <h2 className="text-xl font-semibold text-white mb-2">Past Experience</h2>
              <p className="text-gray-200">{user.pastExperience}</p>
            </motion.div>
          )}

          {/* Work Showcase */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-xl font-semibold text-white mb-2">Work Showcase</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {user.work?.map((fileUrl, idx) => {
                const fileType = getFileType(fileUrl);
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-2 border border-white/10"
                  >
                    {fileType === "image" && (
                      <img
                        src={fileUrl}
                        alt={`Work ${idx}`}
                        className="w-full h-64 object-cover rounded"
                      />
                    )}
                    {fileType === "video" && (
                      <video controls className="w-full h-64 rounded">
                        <source src={fileUrl} type="video/mp4" />
                      </video>
                    )}
                    {fileType === "pdf" && (
                      <div className="w-full h-64 rounded overflow-hidden">
                        <iframe
                          src={fileUrl}
                          title={`PDF ${idx}`}
                          className="w-full h-full"
                          frameBorder="0"
                        ></iframe>
                        <a
                          href={fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 block text-sm text-white text-center underline"
                        >
                          Open Fullscreen PDF
                        </a>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
      {locked && (
  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-white text-center px-4">
    <h2 className="text-3xl font-bold mb-4">🔒 Portfolio Locked</h2>
    <p className="mb-6 text-lg">Unlock your personal portfolio by upgrading to a premium plan.</p>
    <a
      href="https://digisky.ai/MembershipPlans"
      className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all"
    >
      🚀 Upgrade to Premium
    </a>
  </div>
)}

    </div>
    
  );
}

export default PortfolioPage;
