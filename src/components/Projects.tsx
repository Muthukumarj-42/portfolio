import { useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [category, setCategory] = useState<"electronics" | "design">("electronics");
  const [openProject, setOpenProject] = useState<any>(null);

  const filtered = projects.filter((p) => p.category === category);

  return (
    <section id="projects" className={styles.section}>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Featured Projects</h2>
        <div className={styles.line} />
      </motion.div>

      {/* CATEGORY TOGGLE */}
      <motion.div
        className={styles.toggleWrap}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.toggle}>
          <button
            className={`${styles.toggleBtn} ${category === "electronics" ? styles.active : ""}`}
            onClick={() => setCategory("electronics")}
          >
            Electronics
          </button>
          <button
            className={`${styles.toggleBtn} ${category === "design" ? styles.active : ""}`}
            onClick={() => setCategory("design")}
          >
            Design
          </button>
        </div>
      </motion.div>

      <motion.div
        className={styles.grid}
        layout
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={p.id}
              className={styles.card}
              onClick={() => setOpenProject(p)}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className={styles.imgWrapper}>
                {p.img ? (
                  <img src={p.img} alt={p.title} className={styles.cardImg} />
                ) : (
                  <div className={styles.cardImgPlaceholder} />
                )}
              </div>
              <div className={styles.cardContent}>
                <h3>{p.title}</h3>
                <p>{p.shortDesc}</p>
                <div className={styles.tags}>
                  {p.tags.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {openProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenProject(null)}
          >
            <motion.div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setOpenProject(null)}
              >
                ✕
              </button>

              <h2 className={styles.modalTitle}>{openProject.title}</h2>

              {openProject.img && (
                <div className={styles.modalImgWrapper}>
                  <img src={openProject.img} className={styles.modalImg} alt="project preview" />
                </div>
              )}

              <div
                className={styles.modalContent}
                dangerouslySetInnerHTML={{ __html: openProject.details }}
              />

              {openProject.viewLink && (
                <a
                  href={openProject.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewBtn}
                >
                  View Live / Demo / GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
