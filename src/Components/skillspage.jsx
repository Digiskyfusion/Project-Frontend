import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SkillPage = () => {
  const { skillName } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
        try {
          const decodedSkill = decodeURIComponent(skillName); // Decode the skill name
          console.log("decodedSkill");
          console.log(decodedSkill);
          const response = await fetch(`${API_URL}/user/skills?skill=${encodeURIComponent(decodedSkill)}`);
          console.log("Response");
          console.log(Response);
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
      
          const data = await response.json();
          console.log("data");
          console.log(data);
          setUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          setLoading(false);
        }
      };
      

    fetchUsers();
  }, [skillName]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Users Skilled in {skillName}
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : users.length === 0 ? (
        <p className="text-center text-gray-500">No users found with this skill.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user._id} className="bg-white shadow-md rounded-lg p-5">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 mt-2">
                Skills: {user.skills?.length ? user.skills.join(", ") : "N/A"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillPage;
