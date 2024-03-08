import React from "react";
import logo from "./logo.svg";
import NavbarComponent from "../components/NavbarComponent";
// import ImageSlider from "./MainPage/ImageSlider";
import FrontPageContent from "./MainPage/FrontPageContent";
import ImageCarousel from "./MainPage/ImageCarousel";
import Footer from "../components/Footer";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <>
      {/* <ImageSlider />; */}
      <NavbarComponent textColor={"white"} />
      <ImageCarousel />
      {/* <ImageSlider /> */}
      <div style={{ paddingTop: 48 }}>&nbsp;</div>
      <FrontPageContent />
      <div style={{ paddingTop: 248 }}>&nbsp;</div>
      <Footer />
    </>
  );
};

export default LandingPage;
