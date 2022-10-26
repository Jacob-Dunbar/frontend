import styles from "../styles/navbar.module.scss";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? styles.navbar_dark : styles.navbar_light}>
      <h1>Jacob Dunbar</h1>
      <ul>
        <li></li>
        <li>Work</li>

        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
