import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderTwo";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import CallToAction from "../../components/calltoactions/CallToAction";
import Footer from "../../components/footer/Footer";

const HomeTwo = () => {
  return (
    <div className="home-two">
      <Header />
      <Slider />
      <About />
      <Portfolio />
      {/* <Skills /> */}
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomeTwo;
