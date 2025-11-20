import { useState } from "react";
import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCode,
} from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>Get In Touch</h2>
      <div className={styles.line} />

      <div className={styles.wrapper}>
        {/* LEFT FORM */}
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
          />

          <button className={styles.sendBtn}>Send Message</button>
        </form>

        {/* RIGHT INFO */}
        <div className={styles.infoBox}>
          <h3>Contact Information</h3>

          <p>
            <FaEnvelope /> muthukumarj.ec24@bitsathy.ac.in
          </p>
          <p>
            <FaPhone /> 7305514999
          </p>
          <p>
            <FaMapMarkerAlt /> Perumanallur, Tiruppur
          </p>

          <h3 className={styles.connectTitle}>Connect With Me</h3>

          <div className={styles.icons}>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Muthukumarj-42" target="_blank">
              <FaGithub />
            </a>
            <a href="#">
              <FaCode />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
