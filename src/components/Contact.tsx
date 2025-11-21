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
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz7hhD_jQnt6wWuM3wl5cKSWfZiD3WRkAXnNnl3xlcgl1PFMEFplfBEdndlay7eUIY9/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      setStatus("Message Sent Successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>Get In Touch</h2>
      <div className={styles.line}></div>

      <div className={styles.wrapper}>
        {/* --- LEFT FORM --- */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
            required
          />

          <button type="submit" className={styles.sendBtn}>
            Send Message
          </button>

          <p className={styles.status}>{status}</p>
        </form>

        {/* --- RIGHT INFORMATION BOX --- */}
        <div className={styles.infoBox}>
          <h3>Contact Information</h3>

          <p>
            <FaEnvelope /> muthukumarj.ec24@bitsathy.ac.in ,
            muthukumarjeyaprakash42@gmail.com
          </p>
          <p>
            <FaPhone /> 7305514199
          </p>
          <p>
            <FaMapMarkerAlt /> Perumanallur, Tiruppur
          </p>

          <h3 className={styles.connectTitle}>Connect With Me</h3>

          <div className={styles.icons}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muthukumarj.ec24@bitsathy.ac.in">
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/muthu-kumar-j42/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Muthukumarj-42" target="_blank">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/muthu_code/">
              <FaCode />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
