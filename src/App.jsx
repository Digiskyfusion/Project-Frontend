import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import LiveChatPage from "./Pages/LiveChatPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPages from "./Pages/ContactUsPage";
import ScrollToTop from "./Components/ScrolltopTop/ScrollToTop";
import Services from "./Pages/Services";
import ChooseUSPage from "./Pages/ChooseUSPage";
import AllFreelancerPage from "./Pages/AllFreelancerPage";
import DashboardPage from "./Pages/DashboardPage";
import FreelancerProfilePage from "./Pages/FreelancerProfilePage";
import FreelancerDetails from "./Components/FreelancerDetailPage/FreelancerDetails";
import Profileverification from "./Pages/FreelancerProfileVerification";
import ClientFormPage from "./Pages/ClientFormPage";
import CardsProfile from "./Components/CardProfilePage/CardsProfile";
import Loginform from "./Components/LoginPage/LoginForm";
import Subcategory from "./Components/Client/subactegory";
import Clientformmpage from "./Pages/Clientformmpage";
import ClientProfile from "./Components/ClientProfile/Clientprofile";
import StarPlusPage from "./Pages/StarPlusPage";
import AdvertisingPage from "./Pages/AdvertisingPage";
import TvAdvertisingPage from "./Pages/TvAdvertisingPage";
import AjTakPage from "./Pages/AjTakPage";
import ColorPages from "./Pages/ColorPages";
import AsthaPage from "./Pages/AsthaPage";
import DetailPage from "./Components/SubCategoryPage/DetailPage";
import SolarSystemPage from "./Pages/SolarSystemPage";
import CartTvPage from "./Pages/CartTvPage";
import PostJobPage from "./Pages/PostJobPage";
import AllJobsPage from "./Pages/AllJobsPage";
import MembershipPlans from "./Components/HomePage/Card";
import TermAndConditionPage from "./Pages/TermAndConditionPage";
import PrivacyNdPolicyPage from "./Pages/PrivacyNdPolicyPage";
import CancellationRefundPage from "./Pages/CancellationRefundPage";
import Content from "./Components/RandomContent/Content";
import Signuppage from "./Components/SignupPage/Signuppage";
import FullJobCard from "./Components/ServicePage/FullJobCard";
import SquareCards from "./Components/AboutusPage/SquareCard";
import Work from "./Components/HomePage/Work";
import DiscoverHirePage from "./Pages/DiscoverHirePage";
import UserProfile from "./Components/Client/UsersProfiles";
import EditProfilePage from "./Pages/EditProfile";
import SkillsCardPage from "./Pages/SkillsCardPage";
import UserSkillPage from "./Pages/UserSkillPage";
import UserProfileDetals from "./Pages/UserProfileDetals";
import WriteReviewPage from "./Pages/WriteReviewPage";
import AllReviewPage from "./Pages/AllReviewPage";
import FreelancerSkillsPage from "./Pages/FreelancerSkillsPage";
import ClientListPage from "./Pages/ClientListPage";
import FreelancerListPage from "./Pages/FreelancerListPage";
import FreelancerDetailsPage from "./Pages/FreelancerDetailsPage";
import ClientDetailPage from "./Pages/ClientDetailPage";
import UserDetalPage from "./Pages/UserDetalPage";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";
import ReceiptPage from './Pages/ReceiptPage';
import PalnsPage from "./Pages/PalnsPage";
import LiveChatPage from "./Pages/LiveChatPage";
import InboxPage from "./Pages/InboxPage";
import { initializeSocket } from "./utils/socket";
// import toast, { Toaster } from "react-hot-toast";
import { requestFCMToken } from "./utils/firebaseUtils";

function App() {

  const[fcmToken, setFcmToken] = useState(null);


  if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((err) => {
      console.log('Service Worker registration failed:', err);
    });
}


  useEffect(()=>{
    const fetchFCMToken = async () => {
      try {
        const token = await requestFCMToken();
        setFcmToken(token);
        console.log(token)
      }
      catch (err) {
        console.log("Error getting FCM token, ",err);
      }
    }

    fetchFCMToken();
  })

  useEffect(() => {
    const removeToken = () => {
      localStorage.removeItem("token");
      console.log("Token removed after 2 hours");
    };

    const timeout = setTimeout(removeToken, 2 * 60 * 60 * 1000); // 2 hours

    return () => clearTimeout(timeout);
  }, []);


   useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const socket = initializeSocket(token);

      // 📥 Global receive message listener
      socket.on("receive_message", (message) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const currentPath = window.location.pathname;

        const isChatOpen = currentPath.includes(`/livechat/${message.senderId}`);

        if (!isChatOpen) {
          // toast.success(`📨 New message from ${message.senderName || 'someone'}`);
        }
      });

      // 🔁 Cleanup listener when App unmounts (not typical, but safe)
      return () => {
        socket.off("receive_message");
      };
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-right" /> {/* ✅ Needed to show toasts */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/ChooseUSPage" element={<ChooseUSPage />} />
        <Route path="/livechat/:id" element={<LiveChatPage />} />
        <Route path="/allfreelancer" element={<AllFreelancerPage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/FreelancerNoUpadte" element={<FreelancerProfilePage />} />
        <Route path="/Profileverification" element={<Profileverification />} />
        <Route path="/FreelancerUpadte" element={<FreelancerDetails />} />
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/registration" element={<Signuppage />} />
        <Route path="/ClientForm" element={<ClientFormPage />} />
        <Route path="/clientDetails/:id" element={<CardsProfile />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/forget" element={<ForgetPasswordPage />} />
        <Route path="/discover" element={<DiscoverHirePage />} />
        <Route path="/client" element={<Clientformmpage />} />
        <Route path="/ClientProfile" element={<ClientProfile />} />
        <Route path="/ADCDPAGE" element={<StarPlusPage />} />
        <Route path="/channel" element={<TvAdvertisingPage />} />
        <Route path="/starplus" element={<AdvertisingPage />} />
        <Route path="/ajtak" element={<AjTakPage />} />
        <Route path="/colors" element={<ColorPages />} />
        <Route path="/astha" element={<AsthaPage />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/solarsystem" element={<SolarSystemPage />} />
        <Route path="/card" element={<MembershipPlans />} />
        <Route path="/FullJobCard" element={<FullJobCard />} />
        <Route path="/SquareCards" element={<SquareCards />} />
        <Route path="/TermCondition" element={<TermAndConditionPage />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/PrivacyNdPolicy" element={<PrivacyNdPolicyPage />} />
        <Route path="/CancellationNdRefund" element={<CancellationRefundPage />} />
        <Route path="/cart" element={<CartTvPage />} />
        <Route path="/postjob" element={<PostJobPage />} />
        <Route path="/all-jobs" element={<AllJobsPage />} />
        {/* <Route path="/Freelancerprofile" element={<FreelancerProfileUpdate />} /> */}
        <Route path="/createreview" element={<WriteReviewPage />} />
        <Route path="/reviewslist" element={<AllReviewPage />} />
        <Route path="/EditProfile" element={<EditProfilePage />} />
        <Route path="/CategoryData/:categoryId" element={<Subcategory />} />
        <Route path="/userprofile/:subCategoryId" element={<UserProfile />} />
        <Route path="/skills/:skillName" element={<SkillsCardPage />} />
        <Route path="/UserSkills" element={<UserSkillPage />} />
        <Route path="/freelancerSkill" element={<FreelancerSkillsPage />} />
        <Route path="/profile/:id" element={<UserProfileDetals />} />
        <Route path="/clientlist" element={<ClientListPage />} />
        <Route path="/freelancerlist" element={<FreelancerListPage />} />
        <Route path="/freelancer/:id" element={<FreelancerDetailsPage />} />
        <Route path="/client/:id" element={<ClientDetailPage />} />
        <Route path="/user/:id" element={<UserDetalPage />} />
        <Route path="/MembershipPlans" element={<PalnsPage />} />
        <Route path="/reciept" element={<ReceiptPage />} />
        <Route path="/inbox" element={<InboxPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
