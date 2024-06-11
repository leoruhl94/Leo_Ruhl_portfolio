import React from "react";
import profile_img from "../../assets/images/leoruhl_profile_2.png";
import { HiChevronRight } from "react-icons/hi";
import {
  SiRedux,
  SiPostgresql,
  SiSequelize,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiGo,
} from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import { ExperienceItem } from "./ExperienceItem";
import { experienceData } from "../../data";

export const AboutSection = () => {
  return (
    <>
      <div className="portfolio_section" id="aboutPage_1">
        <div className="portfolio_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <Fade direction="left" triggerOnce>
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
                      ¡Hola! Soy Leo, un apasionado Full Stack Developer con
                      experiencia tanto en el desarrollo Frontend como en el
                      Backend. Me encanta crear soluciones innovadoras que
                      impacten positivamente en el mundo a través de la
                      programación. <br />
                      Mi experiencia incluye la implementación de interfaces de
                      usuario con React.js y TypeScript, el desarrollo de
                      backends con Golang, Node.js y Express, y la integración
                      de servicios de terceros, trabajando en entornos
                      colaborativos.
                      <br />
                      Actualmente, estoy enfocando mis esfuerzos en
                      especializarme en desarrollo Frontend, explorando nuevas
                      tecnologías y metodologías para mejorar mis habilidades y
                      ofrecer soluciones aún más creativas y efectivas.
                      <br />
                      Fuera del trabajo, soy un apasionado por el aprendizaje
                      autodidacta y siempre estoy buscando oportunidades para
                      crecer profesionalmente. Si estás buscando un
                      desarrollador comprometido y creativo, ¡me encantaría
                      conectarme contigo!
                    </p>
                  </div>
                </Fade>
                {/* End image */}
              </div>
              {/* End left */}
              <div className="right">
                <Fade direction="left" triggerOnce>
                  {/* __________________Experiencia________ */}
                  <h3 className="about_subtitle">Experiencia</h3>
                  {experienceData.map((data, i) => (
                    <ExperienceItem
                      key={i}
                      title={data.title}
                      extract={data.extract}
                      content={data.content}
                      link={data.link}
                      timePeriod={data.timePeriod}
                      employer={data.employer}
                    />
                  ))}
                  {/* _____________ */}
                </Fade>
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
                <Fade direction="left" triggerOnce>
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
                        <SiNextdotjs />
                        <span>Next js</span>
                      </li>
                      <li>
                        <SiTypescript />
                        <span>Typescript</span>
                      </li>
                      <li>
                        <SiPrisma />
                        <span>Prisma</span>
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
                        <SiGo />
                        <span>Golang</span>
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
                  {/* _____________ */}
                </Fade>
                {/* End image */}
              </div>
              {/* End left */}
              <div className="right">
                <Fade direction="left" triggerOnce>
                  {/* ___________________Formacion____________ */}
                  <h3 className="about_subtitle">Formacion</h3>

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
                </Fade>
              </div>
              {/* End right */}
            </div>
            <div className="portfolio_button portfolio_button_about">
              <a href="img/resume/CV_Leonardo_Ruhl_06-2024.pdf" download>
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
