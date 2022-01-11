import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header2";
import { ProjectsSection } from "../../components/portfolio/ProjectsSection";
import { ScrollToTop } from "../../components/ScrollToTop";

export const ProjectsPage = () => {
  return (
    <ScrollToTop>
      <Header />
      <ProjectsSection />
      <Footer />
    </ScrollToTop>
  );
};
