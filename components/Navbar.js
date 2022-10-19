import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Jacob Dunbar</h1>
      <ul>
        <li>Darkmode</li>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
