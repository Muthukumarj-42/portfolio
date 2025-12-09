import { motion } from "framer-motion";
import styles from "./About.module.css";

// IMPORT EDUCATION LOGOS HERE
import bitLogo from "../assets/certificates/bit.png";
import schoolLogo from "../assets/certificates/hsc.png";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* About Me Title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        About Me
      </motion.h2>

      {/* About Me Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.text}
      >
        Dedicated{" "}
        <strong>Electronics and Communication Engineering student</strong> with
        a strong interest in{" "}
        <strong>
          embedded systems, IoT, microcontrollers, and real-time hardware
          development
        </strong>
        . I enjoy turning ideas into functional prototypes through hands-on
        engineering and system integration.
        <br />
        <br />
        Alongside engineering, I work as{" "}
        <strong>Frontend & UI/UX Designer</strong> skilled in designing modern
        interfaces and digital brand content. I combine{" "}
        <strong>technology + design</strong> to create intuitive, meaningful,
        and visually compelling user experiences.
        <br />
        <br />I bring leadership, adaptability, clear problem-solving, and a
        strong work ethic — approaching every project with professionalism,
        creativity, and a passion for continuous learning.
      </motion.p>

      {/* Download CV Button */}
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

      {/* EDUCATION SECTION */}
      <motion.h2
        className={styles.eduTitle}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className={styles.eduContainer}>
        {/* CARD 1 – COLLEGE */}
        <a
          href="https://bitsathy.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <motion.div
            className={styles.eduCard}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={bitLogo} alt="BIT Logo" className={styles.eduLogo} />

            <div className={styles.eduRight}>
              <h3 className={styles.eduDegree}>
                B.E Electronics and Communication Engineering
              </h3>
              <p className={styles.eduInst}>
                Bannari Amman Institute of Technology
              </p>

              <div className={styles.eduRow}>
                <span className={styles.eduYear}>2024 – 2028</span>
                <span className={styles.eduScore}>CGPA – 7.81</span>
              </div>
            </div>
          </motion.div>
        </a>

        {/* CARD 2 – SCHOOL */}
        <a
          href="https://vigneswaravidyalaya.in/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <motion.div
            className={styles.eduCard}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={schoolLogo}
              alt="School Logo"
              className={styles.eduLogo}
            />

            <div className={styles.eduRight}>
              <h3 className={styles.eduDegree}>Higher Secondary (HSC)</h3>
              <p className={styles.eduInst}>Shri Vigneshwara Vidhyalaya</p>

              <div className={styles.eduRow}>
                <span className={styles.eduYear}>2023 – 2024</span>
                <span className={styles.eduScore}>Scored – 77%</span>
              </div>
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
}

export default About;
