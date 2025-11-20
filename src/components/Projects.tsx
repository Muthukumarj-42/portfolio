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

      {/* Toggle */}
      <div className={styles.toggle}>
        <button
          className={category === "electronics" ? styles.active : ""}
          onClick={() => setCategory("electronics")}
        >
          Electronics
        </button>
        <button
          className={category === "design" ? styles.active : ""}
          onClick={() => setCategory("design")}
        >
          Design
        </button>
      </div>

      {/* Project Grid */}
      <div className={styles.grid}>
        {filtered.map((project) => (
          <div
            key={project.id}
            className={styles.card}
            onClick={() =>
              project.type === "internal"
                ? setOpenProject(project)
                : window.open(project.externalLink, "_blank")
            }
          >
            <h3>{project.title}</h3>
            <p>{project.shortDesc}</p>
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
            <h2>{openProject.title}</h2>
            <p>{openProject.description}</p>

            <div className={styles.tags}>
              {openProject.tags.map((tag: string, i: number) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <button
              className={styles.close}
              onClick={() => setOpenProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
