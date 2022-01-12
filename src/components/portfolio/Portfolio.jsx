import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HiArrowNarrowRight } from "react-icons/hi";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";
import { projects } from "../../data";

const Portfolio = () => {
  return (
    <div className="portfolio_section" id="portfolio">
      {/* <SimpleReactLightbox> */}
      <div className="portfolio_portfolio">
        <div className="container">
          <div className="positon-relative">
            <div className="portfolio_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Ultimos Proyectos</h3>
                </div>
              </div>
            </div>
            {/* End portfolio_title */}
            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  <Tab>React</Tab>
                </TabList>
                {/* End tablist */}
                <div className="portfolio_list">
                  {/* <SRLWrapper> */}
                  <TabPanel>
                    <ul className="gallery_zoom">
                      {projects?.map((item) => {
                        return (
                          <PortfolioItem
                            key={item.title + item.url_img}
                            url_img={item.url_img}
                            title={item.title}
                          />
                        );
                      })}
                    </ul>
                    {/* End portfolio list */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}
                  {/* </SRLWrapper> */}
                  {/* End tabpanel */}
                </div>
                {/* End list wrapper */}
              </Tabs>
            </div>
          </div>
          <div className="portfolio_projects_button">
            <div className="portfolio_button">
              <Link to="/projects">Ver Todos</Link>
            </div>
          </div>
        </div>
      </div>
      {/* </SimpleReactLightbox> */}
    </div>
  );
};

export default Portfolio;

const PortfolioItem = ({ url_img, title }) => {
  return (
    <li>
      <Reveal effect="fadeIn">
        <div className="inner">
          <div className="entry portfolio_portfolio_animation_wrap">
            <a href="#">
              <img src={url_img} alt="project image" />
            </a>
          </div>
          <div className="mobile_title">
            <h3>{title}</h3>
            <Link to="/projects">
              Ver <HiArrowNarrowRight />
            </Link>
          </div>
        </div>
      </Reveal>
    </li>
  );
};
