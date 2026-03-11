import { useEffect, useState } from "react";
import styles from "./Loader.module.css";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/certificates/ICON.png";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const [terminalText, setTerminalText] = useState("");
  const [phase, setPhase] = useState(0);

  const fullText = `> initializing system...
> loading modules...
> connecting hardware interface...
> build successful`;

  useEffect(() => {
    // Terminal typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTerminalText(fullText.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 15); // Fast typing

    // Phase management
    const p1 = setTimeout(() => setPhase(1), 1800); // Circuits + terminal done, show chip
    const p2 = setTimeout(() => setPhase(2), 2600); // Chip flips to Logo
    const p3 = setTimeout(() => onComplete(), 4500); // Wait for logo to pulse and then finish

    return () => {
      clearInterval(typingInterval);
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className={styles.loaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className={styles.gridBackground} />

      {/* SVG Circuits */}
      <div className={styles.circuitWrapper}>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className={styles.circuitSvg}>
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00eaff" stopOpacity="1" />
              <stop offset="100%" stopColor="#8a2be2" stopOpacity="0.5" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Lines coming from corners */}
          <path className={styles.trace} d="M0,0 L300,300 L400,300 L450,400" />
          <path className={styles.trace} d="M1000,0 L700,300 L600,300 L550,400" />
          <path className={styles.trace} d="M0,1000 L300,700 L400,700 L450,600" />
          <path className={styles.trace} d="M1000,1000 L700,700 L600,700 L550,600" />

          {/* Extra random traces */}
          <path className={styles.trace} style={{ animationDelay: '0.2s' }} d="M-100,500 L250,500 L350,350 L400,350" />
          <path className={styles.trace} style={{ animationDelay: '0.4s' }} d="M1100,500 L750,500 L650,650 L600,650" />

          {/* Nodes (will fade in as lines reach them) */}
          <circle className={styles.node} cx="250" cy="500" r="4" style={{ animationDelay: '0.6s' }}/>
          <circle className={styles.node} cx="750" cy="500" r="4" style={{ animationDelay: '0.8s' }}/>
          <circle className={styles.node} cx="400" cy="300" r="5" style={{ animationDelay: '1.0s' }}/>
          <circle className={styles.node} cx="600" cy="700" r="5" style={{ animationDelay: '1.2s' }}/>
        </svg>
      </div>

      <div className={styles.contentCenter}>
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div
              key="terminal"
              className={styles.terminal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
            >
              <pre>{terminalText}</pre>
              <div className={styles.progressBarWrapper}>
                <div className={styles.progressBar} />
              </div>
            </motion.div>
          )}

          {phase === 1 && (
            <motion.div
              key="chip"
              className={styles.processorChip}
              initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 1.2, rotateY: 90 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <div className={styles.chipCore}>
                <div className={styles.chipPins}></div>
                <div className={styles.chipPinsRight}></div>
              </div>
            </motion.div>
          )}

          {phase >= 2 && (
            <motion.div
              key="logo"
              className={styles.logoContainer}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <div className={styles.glowPulse} />
              <img src={logoImg} alt="Muthu Kumar J Logo" className={styles.logoImage} />
              <motion.div 
                className={styles.brandText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h1>MUTHU KUMAR J</h1>
                <p>Electronics | Software | Developer</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
