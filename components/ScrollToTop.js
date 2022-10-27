import { useState, useEffect } from "react";
import css from "../styles/scrollToTop.module.scss";

function ScrollToTop(props) {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    });
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      {showScrollToTop && (
        <img
          src={
            props.darkMode ? "/icons/dark_top2.svg" : "/icons/light_top2.svg"
          }
          className={css.scrollTop}
          onClick={scrollToTop}
        />
      )}
    </div>
  );
}

export default ScrollToTop;
