import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";

const PortfolioTwo = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span>Portfolio</span>
                    <h3>Ultimos Proyectos</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    <Tab>React</Tab>
                  </TabList>
                  {/* End tablist */}
                  <div className="portfolio_list">
                    <SRLWrapper>
                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <Reveal effect="fadeIn">
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="/img/portfolio/the-games-app.tk_.png">
                                    <img
                                      src="/img/portfolio/the-games-app.tk_.png"
                                      alt="Photography"
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>The Games App</h3>
                                  <span>React</span>
                                </div>
                              </div>
                            </Reveal>
                          </li>
                          {/* End single image block */}

                          <li>
                            <Reveal effect="fadeIn">
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="/img/portfolio/the-games-app.tk_.png">
                                    <img
                                      src="/img/portfolio/the-games-app.tk_.png"
                                      alt="Photography"
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>The Games App</h3>
                                  <span>React</span>
                                </div>
                              </div>
                            </Reveal>
                          </li>
                          {/* End single image block */}

                          <li>
                            <Reveal effect="fadeIn">
                              <div className="inner">
                                <div className="entry shane_tm_portfolio_animation_wrap">
                                  <a href="/img/portfolio/the-games-app.tk_.png">
                                    <img
                                      src="/img/portfolio/the-games-app.tk_.png"
                                      alt="Photography"
                                    />
                                  </a>
                                </div>
                                <div className="mobile_title">
                                  <h3>The Games App</h3>
                                  <span>React</span>
                                </div>
                              </div>
                            </Reveal>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>
                      {/* END ALL PORTFOLIO GALLERY */}
                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
            <div className="shane_tm_projects_button">
              <div className="shane_tm_button">
               <Link to="/projects">
                 Ver Todos
               </Link>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default PortfolioTwo;
