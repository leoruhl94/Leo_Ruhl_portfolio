import React from "react";

const SocialShare = [
  {
    iconName: "github",
    link: "https://github.com/leoruhl94",
  },
  { iconName: "linkedin", link: "https://www.linkedin.com/in/leonardo-ruhl/" },
  {
    iconName: "whatsapp",
    link: "https://wa.me/5493512041537",
  },
  { iconName: "email", link: "mailto:leoruhl94@gmail.com" },
  
];
const Social = () => {
  return (
    <>
      <ul className="social social-default position-relative">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END social */}
    </>
  );
};

export default Social;
