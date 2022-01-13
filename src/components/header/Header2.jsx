import React, { useEffect, useState } from "react";

import Social from "../SocialTwo";
import { NavLink } from "react-router-dom";

const Header2 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className="portfolio_topbar">
        <div className={navbar ? "topbar_inner opened" : "topbar_inner"}>
          <div className="logo">
            <NavLink to="/">
              <img src="/img/logo/logo_leoruhl_1.png" alt="partners brand" />
            </NavLink>
          </div>
          {/* End logo */}
          <div className="menu">
           <ul >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Portfolio</NavLink>
              </li>
            </ul>
            {/* </div> */}
          </div>
          {/* End menu */}
        </div>
      </div>
      {/* End portfolio_topbar */}

      {/* Start mobile menu */}
      <div className="portfolio_mobile_menu">
        <div className="topbar_inner">
          <div className="container bigger">
            <div className="topbar_in">
              <div className="logo">
                <NavLink to="/">
                  <img src="/img/logo/logo_leoruhl_1.png" alt="partners brand" />
                </NavLink>
              </div>
              {/* End logo */}
              <div className="my_trigger" onClick={handleClick}>
                <div
                  className={
                    click
                      ? "hamburger hamburger--collapse-r is-active"
                      : "hamburger"
                  }
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
                {/* End hamburger menu */}
              </div>
            </div>
          </div>
        </div>
        <div className={click ? "dropdown active" : "dropdown"}>
          <div className="container">
            <span className="close_menu" onClick={handleClick}>
              close
            </span>
            <div className="dropdown_inner">
              <ul className="anchor_nav">
                <li className="current">
                  <NavLink to="/" onClick={handleClick}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={handleClick}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" onClick={handleClick}>
                    Portfolio
                  </NavLink>
                </li>
              </ul>
              <div className="social-menu">
                <Social />
              </div>
              {/* End social share */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* End shane mobile menu */}
    </>
  );
};

export default Header2;
