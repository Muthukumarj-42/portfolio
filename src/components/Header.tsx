import styles from "./Header.module.css";
import resume from "../assets/certificates/MUTHU KUMAR J.pdf";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Portfolio</div>

      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>

        {/* DOWNLOAD CV BUTTON */}
        <a href={resume} download className={styles.downloadBtn}>
          Download CV
        </a>
      </nav>
    </header>
  );
}
