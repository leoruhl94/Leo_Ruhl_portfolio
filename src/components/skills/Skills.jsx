import React from "react";
import { Fade } from "react-awesome-reveal";

const SkillsTwo = () => {
  return (
    <>
      <div className="portfolio_section">
        <div className="portfolio_skills">
          <div className="container">
            <div className="skills_inner">
              <Fade direction="left" triggerOnce>
                <div className="left">
                  <div className="portfolio_title">
                    <h3>Skills </h3>
                  </div>
                  <div className="text">
                    <p>no se que carajo escribir aca</p>
                  </div>
                </div>
                {/* End .left */}
              </Fade>
              <Fade direction="left" triggerOnce>
                <div className="right">
                  <div className="tokyo_progress">
                    <div className="progress_inner">
                      <span>
                        <span className="label">Frontend</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End .progress_inner */}

                    <div className="progress_inner">
                      <span>
                        <span className="label">Backend</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 80 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End .progress_inner */}

                    <div className="progress_inner">
                      <span>
                        <span className="label">Diseño</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* End .progress_inner */}
                  </div>
                </div>
                {/* End .right */}
              </Fade>
            </div>
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default SkillsTwo;
