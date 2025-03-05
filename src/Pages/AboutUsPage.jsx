import React from "react";
import About from "../Components/About";
import ImageCarousel from "../Components/ImageCarousel";
import SquareCards from "../Components/SquareCard";
import Feature from "../Components/Feature";
import Fourthsectionfour from "../Components/Fourthsectionfour";
import MeetFreelancer from "../Components/MeetFreelancer";
import Fourthsectioneight from "../Components/Fourthsectioneight";
import Calltoaction from "../Components/Calltoaction";
import SecondReviews from "../Components/SecondReviews";
import Footer from "../Components/Footer";

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
