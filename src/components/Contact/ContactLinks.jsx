import React from "react";

export const Contactlinks = () => {
  return (
    <div className="short_info">
      <ul>
        <li>
          <div className="list_inner">
            <a href="https://wa.me/5493512041537">
              <img className="svg" src="img/svg/whatsapp1.svg" alt="whatsapp" />
              <p>+54 9 3512041537</p>
            </a>
          </div>
        </li>
        {/* End silgle address */}

        <li>
          <div className="list_inner">
            <img className="svg" src="img/svg/email1.svg" alt="Email" />
            <p>
              <a href="mailto:leoruhl94@gmail.com">leoruhl94@gmail.com</a>
            </p>
          </div>
        </li>
        {/* End silgle address */}

        <li>
          <div className="list_inner">
            <a href="https://linkedin.com/in/leonardo-ruhl">
              <img className="svg" src="img/svg/linkedin1.svg" alt="linkedin" />
              <p>Linkedin</p>
            </a>
          </div>
        </li>
        {/* End linkedin */}
        <li>
          <div className="list_inner">
            <a href="https://github.com/leoruhl94">
              <img className="svg" src="img/svg/github1.svg" alt="github" />
              <p>Github</p>
            </a>
          </div>
        </li>
        {/* End github */}
      </ul>
    </div>
  );
};
