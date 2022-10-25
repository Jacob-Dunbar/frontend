import styles from "../styles/header.module.scss";
import Image from "next/image";
import myFace from "../public/myface.jpg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <Image src={myFace} />
      </div>{" "}
      <h1>Jacob Dunbar</h1>
      <h2>Web Developer</h2>
    </header>
  );
}

export default Header;
