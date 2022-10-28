import css from "../styles/navbar.module.scss";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? styles.navbar_dark : styles.navbar_light}>
      <h1>JacobDunbar_</h1>
      <ul>
        <li className={styles.darkmode_icon} onClick={props.toggleDarkMode}>
          <img
            src={props.darkMode ? "/icons/sun.svg" : "/icons/moon.svg"}
            alt="darkmode toggle"
            className={props.darkMode ? styles.sun : styles.moon}
          />
        </li>
        <li onClick={() => props.scrollToSection(props.portfolioSection)}>
          Portfolio &gt;
        </li>
        <li onClick={() => props.scrollToSection(props.contactSection)}>
          Contact &gt;
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
