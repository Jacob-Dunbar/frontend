import css from "../css/navbar.module.scss";
import Link from "next/link";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? css.navbar_dark : css.navbar_light}>
      <h1>JacobDunbar_</h1>
      <ul>
        <li className={css.darkmode_icon} onClick={props.toggleDarkMode}>
          <img
            src={props.darkMode ? "/icons/sun.svg" : "/icons/moon.svg"}
            alt="darkmode toggle"
            className={props.darkMode ? css.sun : css.moon}
          />
        </li>
        <li onClick={() => props.scrollToSection(props.portfolioSection)}>
          Portfolio &gt;
        </li>
        <li onClick={() => props.scrollToSection(props.contactSection)}>
          Contact &gt;
        </li>
        <li>
          <Link href={"http://www.jacobdunbar-cv.com/"}> CV &gt; </Link>
        </li>
        <li className={props.darkMode ? css.cv_dark : css.cv_light}>
          <Link href={"./jacobDunbarCV.pdf"} download>
            CV &gt;
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
