import React from "react";

const Footer = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_copyright">
          <div className="container">
            <div className="inner">
              <p>
                &copy; {new Date().getFullYear()} by{" "}
                <a
                  href="#about"
                  // target="_blank"
                  rel="noreferrer"
                >
                  Leonardo Ruhl
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
