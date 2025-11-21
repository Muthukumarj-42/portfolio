import { useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "../data/projects";

export default function Projects() {
  const [category, setCategory] = useState<"electronics" | "design">(
    "electronics"
  );

  const [openProject, setOpenProject] = useState<any>(null);

  const filtered = projects.filter((p) => p.category === category);

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.line} />

      {/* CATEGORY TOGGLE */}
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
              category === "design" ? styles.active : ""
            }`}
            onClick={() => setCategory("design")}
          >
            Design
          </button>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className={styles.grid}>
        {filtered.map((p) => (
          <div
            key={p.id}
            className={styles.card}
            onClick={() => setOpenProject(p)}
          >
            {p.img && (
              <img src={p.img} alt={p.title} className={styles.cardImg} />
            )}
            <h3>{p.title}</h3>
            <p>{p.shortDesc}</p>

            <div className={styles.tags}>
              {p.tags.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {openProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setOpenProject(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setOpenProject(null)}
            >
              ✕
            </button>

            <h2 className={styles.modalTitle}>{openProject.title}</h2>

            {openProject.img && (
              <img src={openProject.img} className={styles.modalImg} />
            )}

            <div
              className={styles.modalContent}
              dangerouslySetInnerHTML={{ __html: openProject.details }}
            />

            {/* FIXED BUTTON → Opens GitHub & Drive Correctly */}
            {openProject.viewLink && (
              <a
                href={openProject.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewBtn}
              >
                View Project / Prototype / GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
