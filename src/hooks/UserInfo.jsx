// src/hooks/useUserInfo.js
import { useState, useEffect } from "react";
import axios from "axios";

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in localStorage.");
        }

        const response = await axios.post(`${API_URL}/validate-token`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send token in the Authorization header
            },
          }
        );
     console.log("response");
     console.log(response);
        if (response.status === 200) {
          localStorage.setItem("user_auth", true);
          setUserInfo(response.data.user);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch user info.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  return { userInfo, loading, error };
};

export default useUserInfo;
