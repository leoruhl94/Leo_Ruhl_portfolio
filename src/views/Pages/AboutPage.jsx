import React from "react";
import { AboutSection } from "../../components/about/AboutSection";
import Contact from "../../components/Contact/Contact";
import { Contactlinks } from "../../components/Contact/ContactLinks";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header2";
import { ScrollToTop } from "../../components/ScrollToTop";

export const AboutPage = () => {
  return (
    <div>
      <ScrollToTop>
        <Header />
        <AboutSection />
        <div className="portfolio_section" id="aboutPage_3">
          <div
            className="portfolio_about image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "img/callto-action/white-light-abstract.png"
              })`,
            }}
          >
            <div className="portfolio_mobalbox_contact">
              <div className="box_inner">
                <div className="description_wrap scrollable">
                  {/* Start modal content */}
                  <div className="title">
                    <h3>Ponerse en contacto</h3>
                  </div>
                  {/* End title */}
                  <div className="wrapper">
                    <div className="left">
                      <div className="fields">
                        <Contact />
                      </div>
                    </div>
                    <div className="right">
                      <Contactlinks />
                    </div>
                  </div>
                  {/* End modal conetent */}
                </div>
              </div>
              {/* End box inner */}
            </div>
          </div>
        </div>
        <Footer />
      </ScrollToTop>
    </div>
  );
};
