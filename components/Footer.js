import React from "react";
import css from "../css/footer.module.scss";

function Footer(props) {
  const instaIcon = "/icons/insta.svg";
  const instaIcon_dark = "/icons/insta_dark.svg";
  const linkedinIcon = "/icons/linkedin.svg";
  const linkedinIcon_dark = "/icons/linkedin_dark.svg";
  const githubIcon = "/icons/github.svg";
  const githubIcon_dark = "/icons/github_dark.svg";

  return (
    <div className={css.footer}>
      <div className={css.icon_container}>
        <a href="https://github.com/Jacob-Dunbar">
          <img
            className={css.icon}
            src={props.darkMode ? githubIcon_dark : githubIcon}
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/jacobdunbar111/">
          <img
            className={css.icon}
            src={props.darkMode ? linkedinIcon_dark : linkedinIcon}
            alt="linkedin"
          />
        </a>
        <a href="https://www.instagram.com/jacob__dunbar/">
          <img
            className={css.icon}
            src={props.darkMode ? instaIcon_dark : instaIcon}
            alt="insta"
          />
        </a>
      </div>
      <p className={props.darkMode ? css.p_dark : css.p_light}>
        Designed and developed by Jacob Dunbar
      </p>
    </div>
  );
}

export default Footer;
