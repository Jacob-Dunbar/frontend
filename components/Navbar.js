import styles from "../styles/navbar.module.scss";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Jacob Dunbar</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faMoon} style={{ width: "15px" }} />
        </li>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
