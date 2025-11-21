import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

function Skills() {
  const [category, setCategory] = useState<
    "electronics" | "programming" | "design"
  >("electronics");

  // ==========================
  // SKILL GROUPS
  // ==========================

  const electronicsSkills = [
    "Arduino",
    "ESP32",
    "Raspberry Pi",
    "STM32 (Beginner)",
    "Xilinx Zynq-7000 ZedBoard (Beginner)",
    "Embedded Systems",
    "IoT Development",
    "FPGA Implementation",
    "Electronics Projects",
  ];

  const programmingSkills = [
    "C (Beginner)",
    "Python (Beginner)",
    "Verilog (Beginner)",
    "Vibe Coding",
    "React",
    "JavaScript (Beginner)",
    "Git & GitHub",
  ];

  const designSkills = [
    "UI/UX Design",
    "Figma",
    "Photoshop",
    "Illustrator",
    "CorelDRAW",
    "Color Theory",
    "Typography",
    "Thumbnails & Banners",
    "Video Editing",
    "CapCut",
  ];

  // SELECTED LIST
  const filteredSkills =
    category === "electronics"
      ? electronicsSkills
      : category === "programming"
      ? programmingSkills
      : designSkills;

  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        Skills
      </motion.h2>

      {/* TOGGLE BUTTONS */}
      <div className={styles.toggleWrap}>
        <div className={styles.toggle}>
          <button
            className={`${styles.toggleBtn} ${
              category === "electronics" ? styles.active : ""
            }`}
            onClick={() => setCategory("electronics")}
          >
            Electronics
          </button>

          <button
            className={`${styles.toggleBtn} ${
              category === "programming" ? styles.active : ""
            }`}
            onClick={() => setCategory("programming")}
          >
            Programming
          </button>

          <button
            className={`${styles.toggleBtn} ${
              category === "design" ? styles.active : ""
            }`}
            onClick={() => setCategory("design")}
          >
            Design
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${
              skill.length > 20 ? styles.longText : ""
            }`}
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
