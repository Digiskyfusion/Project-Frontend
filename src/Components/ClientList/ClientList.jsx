import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser ,FaUserFriends,FaTools} from "react-icons/fa";
import axios from "axios";
import defaultImage from "./../../assets/Images/userimage.png";
import { useNavigate } from "react-router-dom";

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
const navigate= useNavigate()
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get("http://localhost:5000/client/all");
                setClients(response.data.data.reverse());
            } catch (err) {
                setError("Failed to fetch clients");
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto py-10 px-6"
        >
            <h2 className="text-4xl font-bold text-[#004930] text-center mb-8 tracking-wide uppercase">
                All Clients
            </h2>
            
            {loading ? (
                <p className="text-center text-lg text-[#004930] font-semibold animate-pulse">
                    Loading clients...
                </p>
            ) : error ? (
                <p className="text-center text-red-500 text-lg">{error}</p>
            ) : clients.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No clients found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client._id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,255,159,0.4)" }}
                            className="relative bg-[#004930] shadow-lg rounded-xl overflow-hidden border border-gray-200 transition-all hover:scale-105 transform hover:border-[#00ff9f] group"
                        >
                           {/* Profile Image */}
                        <motion.div whileHover={{ scale: 1.1 }} className="flex justify-center pt-3">
                            <div className="w-28 h-28 rounded-full border-4 border-[#ffffff] overflow-hidden shadow-lg transition-all duration-300 group-hover:border-[#00ff9f]">
                                <img
                                    src={client.image || defaultImage}
                                    alt={client.name}
                                    className="w-full h-full object-cover object-center rounded-full"
                                />
                            </div>
                        </motion.div>

                            
                            {/* Client Details */}
                            <div className="p-5 text-center text-white">
                                <h3 className="text-xl font-bold flex items-center justify-center transition-all duration-300 group-hover:text-[#00ff9f]">
                                    <FaUser className="mr-2 text-[#00ff9f]" /> {client.name}
                                </h3>
                                <p className="flex items-center justify-center mt-2 text-sm transition-all duration-300 group-hover:text-[#00ff9f]">
                                    <FaEnvelope className="mr-2 text-[#00ff9f]" /> {client.email}
                                </p>
                                <p className="flex items-center justify-center mt-2 text-sm transition-all duration-300 group-hover:text-[#00ff9f]">
                                  <FaUserFriends className="mr-2 text-[#00ff9f]" /> {client.roleType}
                                </p>
                                <p className="text-sm mt-3 flex items-center justify-center transition-all duration-300 group-hover:text-[#00ff9f]">
                                                    <FaTools className="mr-2 text-[#00ff9f]" />
                                                    {client.skills?.length ? client.skills.join(", ") : "N/A"}
                                                  </p>
                                                  <button
                onClick={() => navigate(`/client/${client._id}`)}
                className="bg-white text-black px-4 py-2 rounded-lg mt-4 cursor-pointer"
                >
                See Details
                </button>
                            </div> 
                         
                            
                            {/* Green Bottom Line */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="h-1 bg-[#00ff9f] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            ></motion.div>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default ClientList;
