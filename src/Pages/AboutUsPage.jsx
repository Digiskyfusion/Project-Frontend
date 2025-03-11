import React from "react";
import Footer from "../Components/Footer/Footer";
import About from "../Components/AboutusPage/About";
import Calltoaction from "../Components/AboutusPage/Calltoaction";
import Feature from "../Components/AboutusPage/Feature";
import Fourthsectionfour from "../Components/AboutusPage/Fourthsectionfour";
import ImageCarousel from "../Components/AboutusPage/ImageCarousel";
import SecondReviews from "../Components/AboutusPage/SecondReviews";
import SquareCards from "../Components/AboutusPage/SquareCard";
import MeetFreelancer from "../Components/HomePage/MeetFreelancer";

function AboutUsPage() {
  return (
    <>
    <main className="">
      <About />
      <ImageCarousel />

      {/* How it Works Section */}
      <section className="my-8">
        <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-bold mb-5">
          How it Works
        </h1>
        <SquareCards />
      </section>

      <Fourthsectionfour />
      <div className="my-8">
        <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-bold mb-5">Features</h1>
        <Feature />
      </div>
      <MeetFreelancer />
      {/* <Fourthsectioneight /> */}
      <Calltoaction />
      <SecondReviews />
    </main>
    <Footer />
    </>
  );
}

export default AboutUsPage;
