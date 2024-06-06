import React from "react";
import Fade from "react-awesome-reveal";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="portfolio_section" id="about">
        <div className="portfolio_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <Fade direction="left" triggerOnce fraction={1}>
                  <div className="image">
                    <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/about/workspace_1.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                </Fade>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <Fade
                  cascade
                  fraction={1}
                  damping={0.2}
                  direction="left"
                  triggerOnce
                >
                  <div className="portfolio_title">
                    <span>About Me</span>
                    <h3>Leonardo Ruhl, Desarrollador Web </h3>
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
                  <section className="portfolio_about_buttons">
                    <div className="portfolio_button">
                      <a href="img/resume/CV_Leonardo_Ruhl.png" download>
                        Descargar CV
                      </a>
                    </div>
                    <div className="portfolio_button">
                      <Link to="/about">Más Sobre Mi</Link>
                    </div>
                  </section>
                </Fade>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;
