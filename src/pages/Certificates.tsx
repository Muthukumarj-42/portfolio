import { useState } from "react";
import styles from "./Certificates.module.css";

import uiuxCert from "../assets/certificates/UIUX.jpg";
import foodCert from "../assets/certificates/KPR.jpg";
import candenceCert from "../assets/certificates/Cadence.jpg";
import stmCert from "../assets/certificates/STM32.jpg";

const certificates = [
  {
    title: "Introduction to Graphic Design & UI/UX",
    org: "Simplilearn",
    date: "April 2025",
    img: uiuxCert,
  },
  {
    title: "CELESTIA’25",
    org: "IEEE KPRIET PELS SBC, KPR Institute of Engineering and Technology",
    date: "08 May 2025",
    img: foodCert,
  },
  {
    title: "Cadence EDA Training",
    org: "Entuple",
    date: "7-8 April 2025",
    img: candenceCert,
  },
  {
    title: "Mastering STM32 & RTOS",
    org: "Pantech",
    date: "August 2025",
    img: stmCert,
  },
];

export default function Certificates() {
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  return (
    <>
      {/* FULLSCREEN VIEWER */}
      {fullscreenImg && (
        <div className={styles.fullScreenWrapper}>
          <img src={fullscreenImg} className={styles.fullScreenImage} />
          <button
            className={styles.closeBtn}
            onClick={() => setFullscreenImg(null)}
          >
            ✕ Close
          </button>
        </div>
      )}

      {/* NORMAL PAGE */}
      {!fullscreenImg && (
        <section className={styles.certificatesSection}>
          <h2 className={styles.title}>My Certificates</h2>

          <div className={styles.grid}>
            {certificates.map((c, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => setFullscreenImg(c.img)}
              >
                <img src={c.img} alt={c.title} className={styles.image} />
                <h3 className={styles.certTitle}>{c.title}</h3>
                <p className={styles.certOrg}>{c.org}</p>
                <p className={styles.certDate}>{c.date}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
