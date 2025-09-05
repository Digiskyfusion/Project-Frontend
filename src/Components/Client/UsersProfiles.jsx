import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Client/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import FreelancerCard from "../../Components/Client/FreelancersCard.jsx";

const UserProfile = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { subCategoryId } = useParams();
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubcategoryData = async () => {
      try {
        const response = await axios.get(`${API_URL}/user/profile/subcategory/${subCategoryId}`);
        console.log("User Profile Response:", response.data);

        if (response.data.length > 0) {
          setSubCategoryData(response.data);
          setCategoryName(response.data[0]?.category?.name || "Unknown Category");
        }

        const subcategoryResponse = await axios.get(`${API_URL}/subcategory/subcategories/${subCategoryId}`);
        console.log("Subcategory Response:", subcategoryResponse.data);
        setSubCategoryName(subcategoryResponse.data?.name || "Unknown Subcategory");

        setLoading(false);
      } catch (err) {
        console.error("Error fetching subcategory data:", err);
        setError("No Data Found For This Subcategory");
        setLoading(false);
      }
    };

    if (subCategoryId) {
      fetchSubcategoryData();
    }
  }, [subCategoryId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 text-[25px] mt-[200px]">{error}</div>;
  }

  if (subCategoryData.length === 0) {
    return <div className="text-center">No data available</div>;
  }

  return (
    <div>
      <Header />
      <div className="w-[88%] mx-auto">
        <h1 className="text-left text-[20px] mt-8 mb-6 font-[poppins]">
          <span className="font-bold">{categoryName}</span> - {subCategoryName}
        </h1>
      </div>
      <div className="w-[88%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-6 mt-[20px]">
        {subCategoryData
          .filter(
            (freelancer) =>
              freelancer?.userId &&
              freelancer?.userId?.credits > 0 &&
              freelancer.bio &&
              freelancer.experience_level &&
              freelancer.user_image
          )
          .map((freelancer, index) => (
            <div key={index}>
              <FreelancerCard
                category={freelancer.category || "Unknown Category"}
                bio={freelancer.bio}
                experience_level={freelancer.experience_level.substring(0, 100) + "..."} // Limiting length
                userId={freelancer.userId}
                user_image={freelancer.user_image}
                navigate={navigate}
              />
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
