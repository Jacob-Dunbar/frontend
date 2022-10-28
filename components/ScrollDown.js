import { useState, useEffect } from "react";
import css from "../styles/scrollDown.module.scss";

function ScrollDown(props) {
  const [showScrollDown, setShowScrollDown] = useState(true);

  // listen for scroll and show button when scrolled more than 300px
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 300) {
        setShowScrollDown(true);
      } else {
        setShowScrollDown(false);
      }
    });
  }, []);

  return (
    <div>
      {showScrollDown && (
        <img
          src={
            props.darkMode ? "/icons/dark_top2.svg" : "/icons/light_top2.svg"
          }
          className={css.scrollDown}
          onClick={() => props.scrollToSection(props.portfolioSection)}
        />
      )}
    </div>
  );
}

export default ScrollDown;
