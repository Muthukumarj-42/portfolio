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
        I am a{" "}
        <strong>B.E. Electronics and Communication Engineering student </strong>
        (2nd year) with strong interest in{" "}
        <strong>
          embedded systems, IoT, microcontrollers, and hardware programming
        </strong>
        . I enjoy working with real-time applications, sensor-based systems, and
        circuit design—turning ideas into practical engineering solutions.
        <br />
        <br />
        Alongside engineering, I am a{" "}
        <strong>Creative Graphic & UI/UX Designer</strong> with hands-on
        experience in designing banners, thumbnails, overlays, and modern user
        interfaces. I combine <strong>technology + design</strong> to create
        meaningful and aesthetically strong work.
        <br /> I bring strong leadership, a positive and adaptable mindset, and
        the ability to solve problems with clarity and creativity. I communicate
        ideas effectively, work well in teams, and consistently maintain
        professionalism, focus, and reliability in every task.
        <br />
        <br />I am passionate, motivated, and always eager to learn,
        collaborate, and contribute to innovative projects in both{" "}
        <strong>electronics</strong> and <strong>creative design</strong>.
      </motion.p>

      <motion.a
        href="/Muthu_Kumar_J_CV.pdf"
        download
        className={styles.cvBtn}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Download CV
      </motion.a>
    </section>
  );
}

export default About;
