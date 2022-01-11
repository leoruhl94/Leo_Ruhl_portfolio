import React from "react";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";
import profile_img from "../../assets/images/Profile_img_leo.jpg";
import { HiChevronRight } from "react-icons/hi";
import {
  SiRedux,
  SiPostgresql,
  SiSequelize,
  SiReact,
  SiNodedotjs,
  SiWebpack,
  SiExpress,
  SiGithub,
  SiJavascript,
} from "react-icons/si";

export const AboutSection = () => {
  return (
    <>
      <div className="portfolio_section" id="aboutPage_1">
        <div className="portfolio_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <Reveal effect="fadeInLeft">
                  {/* _____________ */}

                  <div className="about__profile">
                    <img
                      src={profile_img}
                      alt="profile_img"
                      className="about__profile_image"
                    />

                    <h2 className="about__profile_title">Leonardo Ruhl</h2>
                    <h3 className="about__profile_subtitle">
                      Full-Stack Web Developer
                    </h3>
                  </div>
                  <div className="text">
                    <p>
                      Me apasiona programar, enseñar y encarar nuevos desafíos
                      que continuamente me permitan aprender algo nuevo. Siempre
                      me gusto crear cosas, programando tengo la oportunidad de
                      crear soluciones que puedan ayudar a mejorar el mundo con
                      solo unas líneas de código. <br />
                      Actualmente estoy en búsqueda de nuevos desafíos donde
                      pueda aportar mi experiencia y conocimientos. Busco un
                      puesto que me permita seguir aprendiendo y desarrollandome
                      como profesional.
                    </p>
                  </div>
                </Reveal>
                {/* End image */}
              </div>
              {/* End left */}
              <div className="right">
                <Reveal effect="fadeInLeft">
                  {/* __________________Experiencia________ */}
                  <h3 className="about_subtitle">Experiencia</h3>

                  <div className="portfolio_about_experience">
                    <div className="experience_left">
                      <h6>2015-2021</h6>

                      <div className="separator">
                        <span></span>
                        <HiChevronRight />
                      </div>

                      <p>AUTONOMO</p>
                    </div>

                    <div className="experience_right">
                      <h4>Tecnico Instalador Electricista</h4>
                      <p>
                        Coordinacion y organizacion de equipos para cumplir con
                        los objetivos en los tiempos establecidos.
                      </p>
                    </div>
                  </div>

                  {/* _____________ */}

                  <div className="portfolio_about_experience">
                    <div className="experience_left">
                      <h6>2021</h6>

                      <div className="separator">
                        <span></span>
                        <HiChevronRight />
                      </div>

                      <p>SOY HENRY</p>
                    </div>

                    <div className="experience_right">
                      <h4>Full Stack Teaching Assistant</h4>
                      <p>
                        Ayudante de bootcamp (TA) para alumnos de Desarrollo
                        Full-Stack.
                      </p>
                      <p>
                        Coordinar a un grupo de estudiantes para lograr la
                        integración al grupo de estudio.
                      </p>
                      <p>
                        Orientar a los estudiantes en los primeros pasos de la
                        cursada
                      </p>
                      <p>
                        Asistir la resolución de ejercicios y promover la
                        colaboración grupal (Pair Programming)
                      </p>
                      <p>
                        Proponer ideas para la mejora de los procesos del
                        Bootcamp
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>

      <div className="portfolio_section" id="aboutPage_2">
        <div className="portfolio_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <Reveal effect="fadeInLeft">
                  <div className="about_languages">
                    <h3>Idiomas</h3>
                    <h5>
                      <HiChevronRight /> Español (Nativo)
                    </h5>
                    <h5>
                      <HiChevronRight /> Ingles A2
                    </h5>
                  </div>
                  <div className="about_tecnologies">
                    <h3>Tecnologias</h3>
                    <ul>
                      <li>
                        <SiJavascript />
                        <span>Javascript</span>
                      </li>
                      <li>
                        <SiReact />
                        <span>React</span>
                      </li>
                      <li>
                        <SiRedux />
                        <span>Redux</span>
                      </li>
                      <li>
                        <SiNodedotjs />
                        <span>Nodejs</span>
                      </li>
                      <li>
                        <SiExpress />
                        <span>Express</span>
                      </li>
                      <li>
                        <SiSequelize />
                        <span>Sequelize</span>
                      </li>
                      <li>
                        <SiWebpack />
                        <span>Webpack</span>
                      </li>
                      <li>
                        <SiPostgresql />
                        <span>PostgreSQL</span>
                      </li>
                      <li>
                        <SiGithub />
                        <span>Git</span>
                      </li>
                    </ul>
                  </div>

                  {/* __________________________________ */}

                  {/* _____________ */}
                </Reveal>
                {/* End image */}
              </div>
              {/* End left */}
              <div className="right">
                <Reveal effect="fadeInLeft">
                  {/* ___________________Formacion____________ */}
                  <h3 className="about_subtitle">Formacion</h3>

                  <div className="portfolio_about_experience">
                    <div className="experience_left">
                      <h6>2017-2019</h6>

                      <div className="separator">
                        <span></span>
                        <HiChevronRight />
                      </div>

                      <p>UTN - FRC</p>
                    </div>

                    <div className="experience_right">
                      <h4>Ingeniería Electrónica</h4>
                      <p>
                        Primeros dos años de la carrera Ingenieria Electronica
                      </p>
                    </div>
                  </div>

                  {/* _____________ */}

                  <div className="portfolio_about_experience">
                    <div className="experience_left">
                      <h6>2021</h6>

                      <div className="separator">
                        <span></span>
                        <HiChevronRight />
                      </div>

                      <p>soyhenry.com</p>
                    </div>

                    <div className="experience_right">
                      <h4>Full-Stack Web Developer</h4>
                      <p>
                        Bootcamp de programacion web con React, Node, Express y
                        PostgreSQL.
                      </p>
                    </div>
                  </div>

                  {/* _____________ */}
                </Reveal>
              </div>
              {/* End right */}
            </div>
            <div className="portfolio_button portfolio_button_about">
              <a href="img/resume/CV_Leonardo_Ruhl.png" download>
                Descargar CV
              </a>
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};
