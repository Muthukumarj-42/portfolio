import { motion } from "framer-motion";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.text}
      >
        I'm an Electronics & Communication student and a Creative Graphic / UI
        Designer. I build beautiful interfaces, edit videos, and work on
        electronics projects like IoT systems, embedded applications and face
        recognition models.
        <br />
        <br />I love combining design + tech to create meaningful experiences.
      </motion.p>
    </section>
  );
}

export default About;
