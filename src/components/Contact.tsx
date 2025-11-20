import { useState } from "react";
import styles from "./Contact.module.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

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
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Get In Touch</h2>

      <div className={styles.container}>
        {/* Form Section */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className={styles.input}
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            className={styles.textarea}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit" className={styles.btn}>
            Send Message
          </button>

          <p className={styles.status}>{status}</p>
        </form>

        {/* Contact Information */}
        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>Contact Information</h3>

          <p className={styles.infoItem}>
            <FiMail /> muthukumarj.ec24@bitsathy.ac.in
          </p>

          <p className={styles.infoItem}>
            <FiPhone /> 7305514999
          </p>

          <p className={styles.infoItem}>
            <FiMapPin /> Perumanallur, Tiruppur
          </p>

          <h3 className={styles.infoTitle}>Connect With Me</h3>

          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/muthu-kumar-j42/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Muthukumarj-42" target="_blank">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/muthu_code/" target="_blank">
              <FaCode />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
