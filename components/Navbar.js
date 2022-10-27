import styles from "../styles/navbar.module.scss";

function Navbar(props) {
  const moon = "/icons/moon.svg";
  const sun = "/icons/sun.svg";

  return (
    <nav className={props.darkMode ? styles.navbar_dark : styles.navbar_light}>
      <h1>JacobDunbar_</h1>
      <ul>
        <li onClick={props.toggleDarkMode}>
          <img
            src={props.darkMode ? sun : moon}
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
