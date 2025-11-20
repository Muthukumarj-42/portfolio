import { motion } from "framer-motion";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.title}
      >
        Hi, I'm <span className={styles.highlight}>MUTHU KUMAR J</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.subtitle}
      >
        A Creative Electronics Engineer & Graphic Designer
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={styles.btnGroup}
      >
        <a className={styles.primaryBtn} href="#projects">
          View Projects
        </a>
        <a className={styles.secondaryBtn} href="#contact">
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
