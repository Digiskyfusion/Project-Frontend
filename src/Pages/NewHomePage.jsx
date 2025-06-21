import React, { useEffect, useState, Suspense, lazy } from 'react';
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header";
import NewHomeone from '../Components/NewHomePage/NewHomeone';
import Footer from '../Components/Footer/Footer';
import NewHomeFour from './../Components/NewHomePage/NewHomeFour';
// import NewHomeTwo from './../Components/NewHomePage/NewHomeTwo';
import NewHomeFive from '../Components/NewHomePage/NewHomeFive';
import NewHomeSix from '../Components/NewHomePage/NewHomeSix';
import UserCarousel from '../Components/NewHomePage/UserCarousel';
import NewHomeThree from '../Components/NewHomePage/NewHomeThree';
import Work from '../Components/HomePage/Work';
import HomeOneNew from '../Components/NewHomePage/homeOneNew';

// Lazy load NewHomeZero
// const NewHomeZero = lazy(() => import('../Components/NewHomePage/NewHomeZero'));

function NewHomePage() {
  const [roleType, setRoleType] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        if (parsedData && parsedData.roleType) {
          setRoleType(parsedData.roleType);
        }
      } catch (error) {
        console.error("Error parsing userInfo:", error);
      }
    }
  }, []);

  return (
    <>
      {roleType === "freelancer" ? (
        <Header1 />
      ) : roleType === "client" ? (
        <Header2 />
      ) : (
        <HeaderGlobal />
      )}

      {/* Suspense wrapper for lazy-loaded NewHomeZero */}
      <Suspense fallback={<div className="text-center min-h-screen flex items-center justify-center my-10 text-green-950 font-bold text-5xl">Loading...</div>}>
        {/* <NewHomeZero /> */}
     <HomeOneNew />

      <NewHomeone />
      <NewHomeFour />
      <Work />
      <NewHomeFive />
      {/* <NewHomeTwo /> */}
      <NewHomeThree />
      <NewHomeSix />
      <UserCarousel />
       </Suspense>
      <Footer />
    </>
  );
}

export default NewHomePage;
