import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <h1 className={styles.title}>
        Hi, I'm <span className={styles.name}>MUTHU KUMAR J</span>
      </h1>

      <p className={styles.subtitle}>
        A Creative Electronics Engineer & Graphic Designer
      </p>

      <div className={styles.btnGroup}>
        <a className={styles.primaryBtn} href="#projects">
          View Projects
        </a>
        <a className={styles.secondaryBtn} href="#contact">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
