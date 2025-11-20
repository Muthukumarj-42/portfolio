import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillList = [
  "UI/UX Design",
  "React",
  "Video Editing",
  "Thumbnails & Banners",
  "Electronics Projects",
  "Python",
  "Embedded Systems",
  "IoT Development",
];

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        Skills
      </motion.h2>

      <div className={styles.grid}>
        {skillList.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
