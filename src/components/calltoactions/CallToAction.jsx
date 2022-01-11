import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../Contact/Contact";
import Reveal from "react-reveal/Reveal";
import { Contactlinks } from "../Contact/ContactLinks";

Modal.setAppElement("#root");

const CallToActionTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="portfolio_section" id="contact">
      <div
        className="portfolio_talk bg_image_props"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/callto-action/blue-1.png"
          })`,
        }}
      >
        <div className="shape">
          <img className="svg" src="/img/svg/paper.svg" alt="partners brand" />
        </div>
        {/* End shape */}

        <div className="background" id="talk">
          <a className="player"></a>
          <div className="overlay"></div>
        </div>
        {/* End background */}

        <div className="talk_inner">
          <Reveal effect="fadeInUp">
            <div className="text">
              <h3>Trabajemos Juntos!</h3>
            </div>
          </Reveal>
          <Reveal effect="fadeInUp">
            <div className="button">
              <button className="white-fill-bg" onClick={toggleModalOne}>
                Contactame!
              </button>
            </div>
          </Reveal>
        </div>
        {/* End talk_inner */}
      </div>
      {/* Start Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="portfolio_mobalbox_contact">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* Start modal content */}
              <div className="title">
                <h3>Get in touch</h3>
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
        {/* End modalbox news */}
      </Modal>
      {/* End modal */}
    </div>
  );
};

export default CallToActionTwo;
