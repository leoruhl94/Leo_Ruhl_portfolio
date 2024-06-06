import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Fade direction="up" triggerOnce>
          <div onClick={scrollToTop} className="scroll_up">
            <img src="/img/arrow-up.svg" alt="scroll up" />
          </div>
        </Fade>
      )}
    </>
  );
}
