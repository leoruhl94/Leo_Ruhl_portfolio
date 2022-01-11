import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import CallToAction from "../../components/calltoactions/CallToAction";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  
  return (
    <div className="home-two">
      <Header />
      <Slider />
      <About />
      <Portfolio />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
