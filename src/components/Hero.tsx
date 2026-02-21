import styles from "./Hero.module.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground}></div>

      <motion.div
        className={styles.contentWrapper}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className={styles.badge}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Welcome to my portfolio
        </motion.div>

        <h1 className={styles.title}>
          Hi, I'm <span className={styles.nameHighlight}>MUTHU KUMAR J</span>
        </h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A Creative Electronics Engineer & Graphic Designer bridging the gap between hardware and stunning visual experiences.
        </motion.p>

        <motion.div
          className={styles.btnGroup}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a className={styles.primaryBtn} href="#projects">
            Explore My Work
          </a>
          <a className={styles.secondaryBtn} href="#contact">
            Let's Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
