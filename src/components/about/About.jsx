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
                    <img src="/img/about/workspace_1.jpg" alt="placeholder" />
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
                    <span>Sobre Mi</span>
                    <h3>Leonardo Ruhl, Desarrollador Web </h3>
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
                  <section className="portfolio_about_buttons">
                    <div className="portfolio_button">
                      <a
                        href="img/resume/CV_Leonardo_Ruhl_06-2024.pdf"
                        download
                      >
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
