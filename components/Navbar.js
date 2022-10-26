import styles from "../styles/navbar.module.scss";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? styles.navbar_dark : styles.navbar_light}>
      <h1>JacobDunbar_</h1>
      <ul>
        <li onClick={props.toggleDarkMode}>
          <img
            src={props.darkMode ? "/sun.svg" : "/moon.svg"}
            alt="darkmode toggle"
            className={props.darkMode ? styles.sun : styles.moon}
          />
        </li>
        <li>Portfolio &gt;</li>
        <li>Contact &gt;</li>
      </ul>
    </nav>
  );
}

export default Navbar;
