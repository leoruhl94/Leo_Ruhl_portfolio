import React from "react";
import HomePage from "../views/HomePage/HomePage";
import NotFound from "../views/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsPage } from "../views/Pages/ProjectsPage";
import { AboutPage } from "../views/Pages/AboutPage";
import { ScrollToTop } from "../components/ScrollToTop";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectsPage />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
