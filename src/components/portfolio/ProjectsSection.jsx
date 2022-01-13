import React, { useState } from "react";
import Reveal from "react-reveal/Reveal";
import { MdWeb } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { projects } from "../../data";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const ProjectsSection = () => {

  return (
    <div className="projects__section" id="portfolio_section">
      <div className="container">
        <div className="projects__section_title">
          <h3>Galeria de Proyectos</h3>
        </div>
        <div className="projects__section_Projects">
          <ul>
            {projects?.map((item) => {
              return (
                <ProjectItem
                  key={item.title}
                  url_img={item.url_img}
                  title={item.title}
                  description={item.description}
                  github={item.github}
                  deploy={item.deploy}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({ url_img, title, description, github, deploy }) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <li className="projectItem">
      <Reveal effect="fadeIn">
        <div className="inner">
          <div className="projectItem_image" onClick={() => setIsOpen( true )}>
               <img
                 src={url_img}
                 alt="project image"
               />
         
          </div>
            {isOpen && <Lightbox mainSrc={url_img} onCloseRequest={() => setIsOpen(false )}/>}
          <div className="projectItem_description">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="projectItem_buttons">
              <a href={github}>
                <SiGithub />
                Github
              </a>
              <a href={deploy}>
                <MdWeb />
                Deploy
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </li>
  );
};
